/**
 * course-crawler — 课程内容爬取脚本
 *
 * 用法：
 *   1. 修改下方 CONFIG 区域的配置（入口 URL、章节链接列表、正文 CSS 选择器等）
 *   2. npm run crawl
 *
 * 注意：请先手动检查目标网站的 robots.txt 和各页面的 DOM 结构，
 *       再修改 contentSelector 和 removeSelectors 后运行。
 */

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs-extra';
import pLimit from 'p-limit';
import TurndownService from 'turndown';
import path from 'path';
import { fileURLToPath } from 'url';

// ─────────────────────────── 配置区域 ───────────────────────────
// ★ 运行前请根据目标网站的实际 DOM 结构修改以下配置

const CONFIG = {
  /** 课程入口地址（用于提取域名+检查 robots.txt） */
  entryUrl: 'https://example.com/course/',

  /** 需要抓取的章节页面链接列表 */
  urls: [
    // 'https://example.com/course/chapter-1',
    // 'https://example.com/course/chapter-2',
    // 请替换为实际链接
  ],

  /** 正文区域 CSS 选择器（目标网站正文包裹元素） */
  contentSelector: '.content',

  /** 需要从正文中剔除的元素选择器（广告／导航／页脚等） */
  removeSelectors: [
    'nav', '.nav', '.navbar', '#nav', '#navbar',
    'footer', '.footer', '#footer',
    '.ad', '.ads', '.advertisement', '.banner-ad',
    '.sidebar', '#sidebar', '.side',
    '.recommend', '.related', '.similar',
    '.share', '.social-share',
    '.copyright', '.copyright-info',
    'script', 'style', 'iframe', 'noscript',
    '.comment', '#comment', '.comments',
    '.breadcrumb', '.breadcrumbs',
  ],

  /** 输出目录 */
  outputDir: 'raw-content',

  /** 并发请求数（推荐 1，即串行 + 随机延时） */
  concurrency: 1,

  /** 请求间随机延时范围（毫秒） */
  delayMin: 1000,
  delayMax: 2000,

  /** 单个请求超时时间（毫秒） */
  requestTimeout: 30000,

  /** 最大重试次数（首次请求失败后的重试次数） */
  maxRetries: 2,

  /** UA 标识 */
  userAgent: 'CourseCrawler/1.0 (educational; content structure reference)',
};

// ─────────────────────────── 工具函数 ───────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

/** 在 [min, max] 间随机整数 */
const randomDelay = () =>
  Math.floor(Math.random() * (CONFIG.delayMax - CONFIG.delayMin + 1)) + CONFIG.delayMin;

/** 延时函数 */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 从 URL 路径中提取 slug（最后一段无扩展名的路径） */
const urlToSlug = (urlStr) => {
  const url = new URL(urlStr);
  let slug = url.pathname.replace(/\/$/, '').split('/').pop();
  // 去掉 .html / .htm / .php 等扩展名
  slug = slug.replace(/\.(html?|php|asp|jsp)$/, '');
  return slug || 'index';
};

/** 安全地取字符串前 N 个字符作为标题预览 */
const truncate = (str, n = 60) =>
  str.length > n ? str.slice(0, n) + '…' : str;

// ─────────────────────────── robots.txt 解析 ───────────────────────────

class RobotsParser {
  constructor() {
    this.disallows = [];
    this.allows = [];
    this.fetched = false;
    this.fetchError = null;
  }

  /** 获取并解析目标域名的 robots.txt */
  async fetchAndParse(domain, userAgent) {
    const robotsUrl = `https://${domain}/robots.txt`;
    try {
      const resp = await axios.get(robotsUrl, {
        timeout: 10000,
        headers: { 'User-Agent': userAgent },
      });
      this._parse(resp.data);
      this.fetched = true;
      return true;
    } catch (err) {
      // 404 / 网络错误等 — 默认允许抓取
      this.fetchError = err.message;
      this.fetched = true;
      return false;
    }
  }

  _parse(body) {
    let currentAgent = null;

    for (const line of body.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      const colonIdx = trimmed.indexOf(':');
      if (colonIdx === -1) continue;

      const key = trimmed.slice(0, colonIdx).trim().toLowerCase();
      const value = trimmed.slice(colonIdx + 1).trim();

      if (key === 'user-agent') {
        currentAgent = value.toLowerCase();
      } else if (key === 'disallow' && currentAgent === '*') {
        if (value === '') {
          // Disallow: (空) 表示没有限制 — 我们用空字符串跳过
          continue;
        }
        this.disallows.push(value);
      } else if (key === 'allow' && currentAgent === '*') {
        this.allows.push(value);
      }
    }

    // 去重
    this.disallows = [...new Set(this.disallows)];
    this.allows = [...new Set(this.allows)];
  }

  /** 判断指定路径是否允许抓取 */
  isAllowed(urlStr) {
    if (!this.fetched) return true; // 未抓取/出错时默认允许

    const url = new URL(urlStr);
    const path = url.pathname + url.search;

    // 优先检查 Allow（更具体的路径覆盖 Disallow）
    for (const allowPath of this.allows) {
      if (allowPath && path.startsWith(allowPath)) {
        return true;
      }
    }

    // 检查 Disallow
    for (const disallowPath of this.disallows) {
      if (disallowPath && path.startsWith(disallowPath)) {
        return false;
      }
    }

    return true;
  }

  getSummary() {
    if (!this.fetched) return '未检查 robots.txt';
    return `允许规则: ${this.allows.length} 条, 禁止规则: ${this.disallows.length} 条`;
  }
}

// ─────────────────────────── 页面抓取与解析 ───────────────────────────

const turndownService = new TurndownService({
  headingStyle: 'atx',        // 使用 # 标记标题
  codeBlockStyle: 'fenced',   // 代码块使用 ``` 包裹
  emDelimiter: '*',           // 斜体用 *
  bulletListMarker: '-',      // 无序列表用 -
});

/** 抓取并解析单个页面 */
async function crawlPage(urlStr, robotsParser) {
  // 1. robots.txt 检查
  if (!robotsParser.isAllowed(urlStr)) {
    console.warn(`  ⛔ 已跳过 (robots.txt Disallow): ${urlStr}`);
    return { status: 'skipped', url: urlStr };
  }

  let lastError;

  // 2. 带重试的请求
  for (let attempt = 0; attempt <= CONFIG.maxRetries; attempt++) {
    try {
      const resp = await axios.get(urlStr, {
        timeout: CONFIG.requestTimeout,
        headers: {
          'User-Agent': CONFIG.userAgent,
          Accept: 'text/html,application/xhtml+xml',
        },
        responseType: 'text',
      });

      // 3. 解析 HTML
      const $ = cheerio.load(resp.data);

      // 提取标题
      const title =
        $('h1').first().text().trim() ||
        $('title').text().trim() ||
        urlToSlug(urlStr);

      // 4. 定位正文区
      const $content = $(CONFIG.contentSelector);
      if (!$content.length) {
        console.warn(`  ⚠ 未找到选择器 "${CONFIG.contentSelector}"，回退到 <body> 内容`);
        // 用 body 作为回退
      }

      const $extract = $content.length ? $content : $('body');

      // 5. 剔除噪声元素
      CONFIG.removeSelectors.forEach((sel) => {
        $extract.find(sel).remove();
      });

      // 6. 获取清洗后的 HTML
      const cleanHtml = $extract.html();
      if (!cleanHtml || !cleanHtml.trim()) {
        throw new Error('清洗后正文为空');
      }

      // 7. 转 Markdown
      const markdown = turndownService.turndown(cleanHtml);

      return {
        status: 'success',
        url: urlStr,
        title,
        markdown,
        slug: urlToSlug(urlStr),
      };
    } catch (err) {
      lastError = err;
      if (attempt < CONFIG.maxRetries) {
        const wait = randomDelay();
        console.warn(`  ⚡ 第 ${attempt + 1} 次失败 (${err.message}), ${wait}ms 后重试…`);
        await sleep(wait);
      }
    }
  }

  // 全部重试耗尽
  return {
    status: 'failed',
    url: urlStr,
    error: lastError.message || String(lastError),
    slug: urlToSlug(urlStr),
  };
}

// ─────────────────────────── 主流程 ───────────────────────────

async function main() {
  console.log('═'.repeat(56));
  console.log('  Course Crawler — 课程内容爬取工具');
  console.log('═'.repeat(56));
  console.log();

  // 0. 参数校验
  if (!CONFIG.urls.length) {
    console.error('✖ 请在 CONFIG.urls 中添加待抓取的章节链接后重试。');
    process.exit(1);
  }
  console.log(`  入口地址: ${CONFIG.entryUrl}`);
  console.log(`  待抓取数: ${CONFIG.urls.length}`);
  console.log(`  正文选择器: "${CONFIG.contentSelector}"`);
  console.log();

  // 1. 准备输出目录
  const outputDir = path.resolve(PROJECT_ROOT, CONFIG.outputDir);
  await fs.ensureDir(outputDir);

  // 2. 初始化 robots.txt 解析器
  const domain = new URL(CONFIG.entryUrl).hostname;
  const robotsParser = new RobotsParser();
  const robotsOk = await robotsParser.fetchAndParse(domain, CONFIG.userAgent);
  if (robotsOk) {
    console.log(`  ✓ robots.txt 已获取 (${robotsParser.getSummary()})`);
  } else {
    console.warn(`  ⚠ robots.txt 获取失败 (${robotsParser.fetchError || '未知'})，默认允许所有路径`);
  }
  console.log();

  // 3. 并发控制
  const limit = pLimit(CONFIG.concurrency);
  const manifest = [];

  const tasks = CONFIG.urls.map((url, idx) =>
    limit(async () => {
      const seq = idx + 1;
      const prefix = `[${seq}/${CONFIG.urls.length}]`;

      // 随机延时（限流器保证只有 1 个在执行，延时在下一次任务开始前）
      const delay = randomDelay();
      await sleep(delay);

      process.stdout.write(`  ${prefix} ${url}\n`);
      const result = await crawlPage(url, robotsParser);

      switch (result.status) {
        case 'success': {
          const filePath = path.resolve(outputDir, `${result.slug}.md`);
          const relativePath = `${CONFIG.outputDir}/${result.slug}.md`;

          // 写入 MD 文件
          const frontmatter = `---\ntitle: "${result.title.replace(/"/g, '\\"')}"\nsource: ${result.url}\ncrawledAt: ${new Date().toISOString()}\n---\n\n`;
          await fs.writeFile(filePath, frontmatter + result.markdown, 'utf-8');

          // 记录 manifest
          manifest.push({
            title: result.title,
            url: result.url,
            filePath: relativePath,
            slug: result.slug,
            crawledAt: new Date().toISOString(),
          });

          stats.success++;
          console.log(`    ✓ 完成 → ${relativePath}`);
          break;
        }
        case 'skipped': {
          stats.skipped++;
          break;
        }
        case 'failed': {
          stats.failed++;
          const errorLine = `[${new Date().toISOString()}] FAILED | ${url} | ${result.error}\n`;
          await fs.appendFile(
            path.resolve(outputDir, 'errors.log'),
            errorLine,
            'utf-8',
          );
          console.error(`    ✖ 失败: ${result.error}`);
          break;
        }
      }
    }),
  );

  const stats = { success: 0, skipped: 0, failed: 0 };

  await Promise.all(tasks);

  // 4. 写入 manifest.json
  manifest.sort((a, b) => CONFIG.urls.indexOf(a.url) - CONFIG.urls.indexOf(b.url));
  await fs.writeJson(path.resolve(outputDir, 'manifest.json'), manifest, { spaces: 2 });
  console.log();
  console.log('  ──────────────────────────────────────');
  console.log(`  全部完成!`);
  console.log(`  ✓ 成功: ${stats.success}`);
  console.log(`  ⛔ 跳过: ${stats.skipped}`);
  console.log(`  ✖ 失败: ${stats.failed}`);
  console.log(`  📄 清单: ${CONFIG.outputDir}/manifest.json`);
  if (stats.failed > 0) {
    console.log(`  ⚠ 错误: ${CONFIG.outputDir}/errors.log`);
  }
  console.log('═'.repeat(56));
}

main().catch((err) => {
  console.error('脚本异常退出:', err);
  process.exit(1);
});
