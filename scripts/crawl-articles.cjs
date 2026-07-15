/**
 * 批量爬取 ai.fullcoding.cn 的所有文章
 * 从 manifest.json 读取源 URL，提取文章内容，保存为 Markdown
 */
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

// ---------- 配置 ----------
const MANIFEST_PATH = path.resolve(__dirname, '..', 'raw-content', 'manifest.json');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'raw-content');
const BASE_URL = 'https://ai.fullcoding.cn';
const CONCURRENCY = 5; // 并行数
const DELAY_MS = 300;  // 每次请求后延迟 ms

// ---------- Turndown 配置 ----------
const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
  bulletListMarker: '-',
});

// 移除 header-anchor 链接
turndown.addRule('headerAnchor', {
  filter: (node) => {
    return node.tagName === 'A' && node.classList && node.classList.contains('header-anchor');
  },
  replacement: () => '',
});

// 自定义 block（note / tip / warning / danger）
turndown.addRule('customBlock', {
  filter: (node) => {
    return node.tagName === 'DIV' && node.classList && node.classList.contains('custom-block');
  },
  replacement: (content, node) => {
    const titleEl = node.querySelector('.custom-block-title');
    const typeMap = { note: 'note', tip: 'tip', warning: 'warning', danger: 'danger' };
    let type = 'note';
    for (const [cls, alias] of Object.entries(typeMap)) {
      if (node.classList.contains(cls)) { type = alias; break; }
    }
    const title = titleEl ? ` ${titleEl.textContent.trim()}` : '';
    // 清理多余空行
    const inner = content.trim();
    return `\n::: ${type}${title}\n${inner}\n:::\n`;
  },
});

// 表格保留
turndown.keep(['table', 'thead', 'tbody', 'tr', 'th', 'td']);

// 去掉 <!----> 占位注释
turndown.addRule('vueComment', {
  filter: (node) => node.nodeType === 8, // comment nodes
  replacement: () => '',
});

// ---------- 工具函数 ----------
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 从 HTML 提取文章 Markdown 内容
 */
function htmlToMarkdown(html, sourceUrl) {
  const $ = cheerio.load(html);

  // 尝试多种选择器（VuePress 主题差异）
  let $content = $('.theme-vdoing-content.content__default').first();
  if ($content.length === 0) {
    $content = $('.content__default').first();
  }
  if ($content.length === 0) {
    $content = $('.theme-vdoing-content').first();
  }

  if ($content.length === 0) {
    console.error(`  ❌ 未找到内容区域: ${sourceUrl}`);
    return null;
  }

  // 移除广告、无关元素
  $content.find('.wwads-cn, .wwads-horizontal, .page-wwads').remove();
  $content.find('script, style').remove();

  // 提取标题（从页面 title 标签）
  const pageTitle = $('title').text().replace(/ \| Ai产品经理自学指南$/, '').trim();

  // 获取内容 HTML
  let contentHtml = $content.html() || '';

  // 修复相对路径
  contentHtml = contentHtml.replace(/ src="\//g, ` src="${BASE_URL}/`);
  contentHtml = contentHtml.replace(/ href="\//g, ` href="${BASE_URL}/`);

  // 转换
  let markdown = turndown.turndown(contentHtml);

  // 清理多余空行
  markdown = markdown.replace(/\n{4,}/g, '\n\n\n');

  return { title: pageTitle, markdown };
}

/**
 * 爬取单篇文章
 */
async function crawlArticle(item) {
  const url = item.source;
  const filename = item.file; // 如 "a0bfe1.md"

  // 检查是否已存在
  const outPath = path.join(OUTPUT_DIR, filename);

  console.log(`  📥 ${item.title} -> ${filename}`);

  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; KnowledgeCrawler/1.0)',
      },
      signal: AbortSignal.timeout(20000),
    });

    if (!resp.ok) {
      console.error(`  ❌ HTTP ${resp.status}: ${url}`);
      return null;
    }

    const html = await resp.text();
    const result = htmlToMarkdown(html, url);

    if (!result) return null;

    // 写入文件
    const frontmatter = `---
title: ${result.title}
source: ${url}
---

`;
    fs.writeFileSync(outPath, frontmatter + result.markdown, 'utf-8');
    console.log(`  ✅ 已保存: ${filename}`);
    return filename;

  } catch (err) {
    console.error(`  ❌ 抓取失败: ${url} - ${err.message}`);
    return null;
  }
}

/**
 * 批量爬取（带并发控制）
 */
async function crawlAll() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  console.log(`\n📋 共 ${manifest.length} 篇文章待爬取\n`);

  const results = [];
  const queue = [...manifest];

  // 并发处理
  const workers = Array.from({ length: CONCURRENCY }, async (_, workerId) => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) break;
      await sleep(DELAY_MS); // 限速
      const result = await crawlArticle(item);
      if (result) results.push(result);
    }
  });

  await Promise.all(workers);

  console.log(`\n🎉 爬取完成: ${results.length}/${manifest.length} 篇`);
}

crawlAll().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
