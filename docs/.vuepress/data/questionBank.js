/**
 * 本地静态题库
 *
 * 与 docs/demo.md 中的 <PopQuiz> 一一对应。
 * question_id 格式为 "{slug}-{序号}"，slug 取自页面路径最后一段，
 * 序号从 1 开始，按页面内 PopQuiz 出现顺序递增。
 *
 * 新增 PopQuiz 后请同步在本文件中添加对应条目，
 * 否则错题本无法展示题目内容。
 */
const questionBank = {
  'demo-1': {
    question: 'JavaScript 中 `typeof null` 的返回值是什么？',
    options: ['null', 'undefined', 'object', 'boolean'],
    answer_index: 2,
    page_path: '/demo.html',
    explanation:
      '这是 JavaScript 的一个历史遗留 bug。`typeof null` 返回 `\'object\'`，但实际上 null 并不是对象，它是一个表示"空值"的基本类型。记住这个特性，面试常考哦！',
  },
  'demo-2': {
    question: 'CSS 中 `position: sticky` 的定位基准是什么？',
    options: ['视口（viewport）', '最近的定位祖先元素', '最近的滚动容器', '父元素'],
    answer_index: 2,
    page_path: '/demo.html',
    explanation:
      '`sticky` 元素以**最近的滚动容器**为基准，在容器内滚动到阈值时"粘"住。它既不是相对于视口（fixed），也不是相对于父元素。',
  },
  'demo-3': {
    question: 'Vue 2 中关于 `data` 选项的描述，哪个是正确的？',
    options: [
      'data 可以是一个对象或函数',
      'data 必须是函数，且返回一个对象',
      'data 必须是对象',
      'data 在组件和根实例中规则相同',
    ],
    answer_index: 1,
    page_path: '/demo.html',
    explanation:
      '在 Vue 2 中，**组件**的 data **必须**是一个返回对象的函数，这样每个组件实例都有独立的数据副本。但根实例（`new Vue()`）的 data 可以是对象。',
  },
}

export default questionBank
