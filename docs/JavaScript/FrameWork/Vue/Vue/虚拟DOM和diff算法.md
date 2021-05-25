# 虚拟 DOM 与 diff 算法

## 了解

```
先简单的介绍虚拟DOM和diff算法

房子三室一厅一厨一卫一个花园一个阳台

改变，起居室多了一个小沙发，床本来从东边摆的，现在靠西边挪了挪，电视没了，阳台的墙向南边移了移，

怎么完成这次装修



最笨的方法：全拆，重建，效率太低，代价昂贵。

但不是最小量的更新，所以我们需要diff，different

精细化比对最小量更新，计算机领域叫最小量更新，代价小也不昂贵，性能优化，效率提升
```

## 虚拟 DOM

**虚拟 DOM：用 JavaScript 对象描述 DOM 的层次结构。DOM 中的一切属性都在虚拟 DOM 中有对应的属性。**

## diff 算法

**diff 算法可以进行精细化比对，实现最小量更新。**

diff 算法是实现最小量更新的，不会跨层对比

**diff 是发生在虚拟 DOM 上的**

**新虚拟 DOM 和老虚拟 DOM 进行 diff（精细化比较），算出应该如何最小量更新，最后反映到真正的 DOM 上**

**（新的虚拟 DOM 和老的虚拟 DOM 进行对比）**

真实 DOM 结构处理比较复杂，把 DOM 编程一个 JS 对象，sel，data，children

```
// 视频目录
snabbdom简介（虚拟DOM鼻祖）

snabbdom的h函数如何工作

diff算法原理

手写diff算法



介绍宏观背景、历史沿革

先学会怎么用

在研究底层原理

最后手写它，彻底掌握它
```

## snabbdom 简介和测试搭建

snabbdom 是瑞典语单词，单词原意“速度”

snabbdom 是著名的虚拟 DOM 库，是 diff 算法的鼻祖，Vue 源码借鉴了 snabbdom.

核心代码 200 行

使用 js 版的 snabbdom 库，从 npm 下载，npm i -D snabbdom

snabbdom 库是 DOM 库，所以不能再 nodejs 环境运行，所以我们需要搭建 webpack 和 webpak-dev-server 开发环境，不需要安装任何 loader

必须安装最新的 webpack@5,这是因为 webpack4 不能读取 package.json 中 exports 的能力。

```js
npm i -D webpack@5 webpack-cli@3 webpack-dev-server@3
```

webpack.config.js 文件

跑通 snabbdom 官方 DEMO

1.虚拟 DOM 如何被渲染函数（h 函数）产生？

手写 h 函数

2.diff 算法原理

手写 diff 算法

3.虚拟 DOM 如何通过 diff 变成真正的 DOM 的

事实上，虚拟 DOM 变回真正的 DOM，是涵盖在 diff 算法里面的

## h 函数

h 函数用来产生虚拟节点

- h 函数用来产生虚拟节点（vnode）

  h 有三个参数，第一个标签名字，第二个是对象

- h 函数嵌套使用，从而得到虚拟 DOM 树

- 子元素只有一个可以省略数组

- h 函数用法很活

虚拟节点有哪些属性

children：子元素，undefined，没有子元素

data：属性，样式

elm：对应的真正 DOM 节点，undefined 代表还没有上树

key：节点唯一标识，服务于更新

sel：选择器

text

### 手写 h 函数

定义 vnode

写 h 函数，函数的重载

## diff 算法

### 感受 diff 算法

- **最小量更新可以使用丑八怪实验法，真的是最小量更新**，当然 key 很重要，key 是这个节点的唯一标识，告诉 diff 算法，在更改前后它们是同一个 DOM 节点。

- **只有是同一个虚拟节点，才进行精细化比较**，否则就是暴力删除旧的、插入新的；

> 问题：如何定义是同一个虚拟节点
>
> 答：选择器相同且 key 相同。
>
> (父节点不能变)

- **只进行同层比较，不会进行跨层比较**。即使是同一个虚拟节点，但是跨层了，对不起，精细化比较不 diff 你，而是暴力删除旧的、然后插入新的。

### diff 处理新旧节点不是同一个节点时

1. oldVnode 是虚拟节点吗？不是的话需要变为虚拟节点

- DOM 节点：需要变为虚拟节点

2. 判断 oldVnode 和 newVnode 是不是同一个虚拟节点，不是的话，删除旧的，插入新的（创建节点时，所有子节点是需要递归出来的，需要递归）

   > 如何定义是一个节点

### diff 处理新旧节点是同一个节点时

进行精细化比较

### 第一次上树

### 手写递归创建子节点

## Patch

创建 patch 函数 patch（el 元素，虚拟节点），让虚拟节点上树，

## 疑问

DOM 如何变为虚拟 DOM（属于模板编译原理范畴）=》不涉及
