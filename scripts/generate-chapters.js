/**
 * generate-chapters.js
 * 读取 raw-content/manifest.json + raw-content/*.md 真实内容，
 * 生成：
 *   1. docs/chapters/*.md（真实的文章内容，带 YAML 前置元数据）
 *   2. docs/.vuepress/sidebar.auto.json（VuePress sidebar 配置）
 *
 * 用法：node scripts/generate-chapters.js
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const RAW_CONTENT_DIR = path.join(rootDir, 'raw-content');
const CHAPTERS_DIR = path.join(rootDir, 'docs', 'chapters');
const SIDEBAR_OUTPUT = path.join(rootDir, 'docs', '.vuepress', 'sidebar.auto.json');
const MANIFEST_PATH = path.join(RAW_CONTENT_DIR, 'manifest.json');

// ---------- 辅助函数 ----------

/** 从标题如 "1.1 了解产品经理一百问" 中提取主章节号 */
function extractChapterNumber(title) {
  const match = title.trim().match(/^(\d+)\./);
  return match ? parseInt(match[1], 10) : null;
}

/** 从原始文件名中去掉 .md 后缀 */
function slugFromFile(fileName) {
  return fileName.replace(/\.md$/i, '');
}

/** 生成安全的侧边栏标题 */
function chapterGroupTitle(key) {
  if (typeof key !== 'number') return '其他';

  const chapterNames = {
    0: '课程导读',
    1: 'AI产品经理入门',
    2: '认识AI产品经理',
    3: 'AI技术基础',
    4: 'VibeCoding 实战',
    5: 'AI产品核心技能',
    6: 'AI产品实战',
    7: 'AI商业模式',
    8: 'AI行业观察',
    9: '产品思维培养',
  };
  const suffix = chapterNames[key] || '';
  return `第${toChineseNum(key)}章${suffix ? ' ' + suffix : ''}`;
}

function toChineseNum(n) {
  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三'];
  if (n < map.length) return map[n];
  return String(n);
}

// ---------- 主流程 ----------

async function main() {
  // 1. 确保目录存在
  await fs.ensureDir(CHAPTERS_DIR);
  await fs.emptyDir(CHAPTERS_DIR); // 清空旧章节文件

  // 2. 读取 manifest
  let manifest;
  try {
    manifest = await fs.readJson(MANIFEST_PATH);
  } catch {
    console.error(`[generate] 错误：找不到 ${MANIFEST_PATH}`);
    process.exit(1);
  }

  if (!Array.isArray(manifest) || manifest.length === 0) {
    console.error('[generate] 错误：manifest.json 为空或格式不正确');
    process.exit(1);
  }

  console.log(`[generate] 读取到 ${manifest.length} 篇文章`);

  // 3. 按主章节号分组
  const groups = new Map();

  for (const entry of manifest) {
    const num = extractChapterNumber(entry.title);
    const key = num !== null ? num : `_ungrouped_${Math.random()}`;

    if (!groups.has(key)) {
      groups.set(key, { entries: [] });
    }
    groups.get(key).entries.push(entry);
  }

  // 4. 生成章节文件 + 构建 sidebar
  const sidebarGroups = [];

  const sortedKeys = [...groups.keys()].sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') return a - b;
    if (typeof a === 'number') return -1;
    if (typeof b === 'number') return 1;
    return String(a).localeCompare(String(b));
  });

  for (const key of sortedKeys) {
    const group = groups.get(key);
    const entries = group.entries;
    const children = [];

    for (const entry of entries) {
      const slug = slugFromFile(entry.file);
      const rawFilePath = path.join(RAW_CONTENT_DIR, entry.file);
      const destPath = path.join(CHAPTERS_DIR, `${slug}.md`);
      const routePath = `/chapters/${slug}`;

      // 读取原始内容
      let rawContent;
      try {
        rawContent = await fs.readFile(rawFilePath, 'utf-8');
      } catch {
        console.warn(`  [警告] 找不到原始文件: ${rawFilePath}，使用占位内容`);
        rawContent = `---
title: ${entry.title}
source: ${entry.source}
---

# ${entry.title}

> 文章来源：${entry.source}

<!-- 内容待补充 -->
`;
      }

      // 写入章节文件（原始内容已有 YAML frontmatter，直接使用）
      await fs.writeFile(destPath, rawContent);
      console.log(`  [章节] ${slug}.md ← ${entry.title}`);

      children.push(routePath);
    }

    sidebarGroups.push({
      title: chapterGroupTitle(key),
      children,
    });
  }

  // 5. 写入 sidebar 配置
  await fs.writeJson(SIDEBAR_OUTPUT, sidebarGroups, { spaces: 2 });
  console.log(`\n[generate] 已生成 ${sidebarGroups.length} 个分组，${manifest.length} 篇文章`);
  console.log(`[generate] sidebar → docs/.vuepress/sidebar.auto.json`);
}

main().catch((err) => {
  console.error('[generate] 出错：', err);
  process.exit(1);
});
