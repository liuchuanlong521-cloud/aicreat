---
title: 组件演示
---

# 组件演示

本文档演示三个自定义 Vue 组件在 VuePress Markdown 中的使用效果。

---

## PopQuiz 随堂测验

<PopQuiz
  question="JavaScript 中 `typeof null` 的返回值是什么？"
  :options="['null', 'undefined', 'object', 'boolean']"
  :answerIndex="2"
  explanation="这是 JavaScript 的一个历史遗留 bug。`typeof null` 返回 `'object'`，但实际上 null 并不是对象，它是一个表示"空值"的基本类型。记住这个特性，面试常考哦！"
/>

<PopQuiz
  question="CSS 中 `position: sticky` 的定位基准是什么？"
  :options="['视口（viewport）', '最近的定位祖先元素', '最近的滚动容器', '父元素']"
  :answerIndex="2"
  explanation="`sticky` 元素以**最近的滚动容器**为基准，在容器内滚动到阈值时"粘"住。它既不是相对于视口（fixed），也不是相对于父元素。"
/>

---

## MemorizeCard 记忆翻转卡

<MemorizeCard
  title="Closure"
  translation="闭包：一个函数"记住"了它创建时的作用域中的变量，即使那个作用域已经执行完毕。简单说就是"函数 + 它出生的环境"，就像孩子记得父母家的钥匙放在哪。"
/>

<MemorizeCard
  title="Event Loop"
  translation="事件循环：JavaScript 是单线程的，但通过一个"排队叫号"机制处理异步任务。主线程执行完当前任务后，不断去检查队列里有没有新的任务要处理。微任务（Promise）优先于宏任务（setTimeout）。"
/>

---

## HiddenAnswer 隐藏答案卡

<HiddenAnswer
  question="Vue 2 中 `v-if` 和 `v-show` 的区别是什么？"
  answer="`v-if` 是真正的条件渲染（销毁/重建 DOM），适合运行时切换少的场景；`v-show` 只是切换 `display` 属性，元素始终保留在 DOM 中，适合频繁切换的场景。"
/>

<HiddenAnswer
  question="什么是 RESTful API 中的幂等性？"
  answer="幂等性指同一个请求执行多次和执行一次的效果相同。GET、PUT、DELETE 是幂等的（多次调用不会改变资源状态），POST 不是幂等的（每次调用会创建新资源）。"
/>

---

## 批量组合演示

### 一题多练

<PopQuiz
  question="Vue 2 中关于 `data` 选项的描述，哪个是正确的？"
  :options="[
    'data 可以是一个对象或函数',
    'data 必须是函数，且返回一个对象',
    'data 必须是对象',
    'data 在组件和根实例中规则相同'
  ]"
  :answerIndex="1"
  explanation="在 Vue 2 中，**组件**的 data **必须**是一个返回对象的函数，这样每个组件实例都有独立的数据副本。但根实例（`new Vue()`）的 data 可以是对象。"
/>

<MemorizeCard
  title="Virtual DOM"
  translation="虚拟 DOM：用 JavaScript 对象"模拟"真实 DOM 树。数据变化时先对比新旧两棵虚拟树（diff），找出最小差异再批量更新真实 DOM。就像写购物清单时先列好清单再去超市拿货，而不是每想起一个东西就跑一趟超市。"
/>

<HiddenAnswer
  question="回流（Reflow）和重绘（Repaint）有什么区别？"
  answer="回流（Reflow）指 DOM 结构变化导致几何属性改变，浏览器需要重新计算元素位置和大小，开销最大。重绘（Repaint）只改变外观（颜色、背景等），不影响布局。回流一定会触发重绘，但重绘不一定触发回流。"
/>
