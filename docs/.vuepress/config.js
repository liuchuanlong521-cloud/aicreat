/**
 * VuePress 1.x 配置文件
 *
 * - sidebar 聚合自 sidebar.auto.json（由 generate-chapters.js 生成）
 * - 如需手动覆盖 sidebar，请编辑 override.sidebar.js（可选）
 */

const path = require('path');
const fs = require('fs');

// 读取自动生成的 sidebar 配置
const sidebarAutoPath = path.resolve(__dirname, 'sidebar.auto.json');
let sidebar = [];
try {
  sidebar = JSON.parse(fs.readFileSync(sidebarAutoPath, 'utf-8'));
  console.log(`[config] 已加载自动 sidebar：${sidebar.length} 个分组`);
} catch (e) {
  console.warn('[config] 警告：sidebar.auto.json 不存在，sidebar 将为空');
}

// 可选：读取手动覆盖配置（如存在则合并）
const overridePath = path.resolve(__dirname, 'override.sidebar.js');
let overrideSidebar = [];
try {
  overrideSidebar = require(overridePath);
  if (Array.isArray(overrideSidebar) && overrideSidebar.length > 0) {
    sidebar = overrideSidebar;
    console.log(`[config] 已加载覆盖 sidebar：${sidebar.length} 个分组`);
  }
} catch (e) {
  // 无覆盖文件，使用自动生成的 sidebar
}

module.exports = {
  title: 'AI产品经理名师课堂',
  description: '让技术不再高深，让产品更有深度 —— AI产品经理知识体系',

  dest: 'dist',           // 构建输出目录
  base: '/',              // 如部署到子路径请修改

  // ---------- 主题配置 ----------
  themeConfig: {
    // 导航栏
    nav: [
      { text: '课程大纲', link: '/' },
      { text: '错题本', link: '/mistakes/' },
      { text: '关于', link: '/about' },
    ],
    // 侧边栏
    sidebar,
    // 侧边栏深度
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: '最后更新',
    // Git 仓库（可选）
    // repo: 'your/repo',
    // 编辑链接
    // editLinks: true,
    // editLinkText: '帮助改进此页面',
  },

  // ---------- 插件 ----------
  plugins: [
    // 平滑滚动
    'vuepress-plugin-smooth-scroll',
  ],

  // ---------- Markdown 配置 ----------
  markdown: {
    lineNumbers: true,
  },

  // ---------- 自定义容器配置 ----------
  // VuePress 1.x 内置支持 ::: tip / ::: warning / ::: danger / ::: details
  // 我们在章节目录中使用 ::: tip 核心考点 和 ::: warning 名师旁白
  // 样式在 styles/index.styl 中增强

};
