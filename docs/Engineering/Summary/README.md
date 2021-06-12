---
sidebar: auto
---

# 工程化

工程化的最终目的是让业务开发可以 100% 聚焦在业务逻辑上。

## 规范

- Git-版本控制管理
- husky-Git hook 钩子
- commit-Git Commit 规范-angular
- ESLint-airbnb 代码规范
- prettieer-美化
- editorconfig-编辑器统一

### 为什么要规范

方便团队统一风格,审查代码

## 编译构建

- Babel
- Vite
- Webpack
- Rollup
- Gulp
- Grunt
- Snowpack
- Parcel
- [esbuild](https://esbuild.github.io/)

### 为何要使用构建工具

自动化，对于需要反复重复的任务，自动化工具可以减轻你的劳动，简化你的工作。

## CI/CD

- Github Action
- Jekins

## 项目管理

- Lerna
- 包管理器

## 编译

**编译**

是把一门编程语言转成另一门编程语言，一般是指高级语言到低级语言。

**高级语言**

高级语言是指用字符来描述的易于阅读和组织的语言，有条件、分支、循环、面向对象等特性，不关心执行的细节，只用于描述逻辑。

**低级语言**

低级语言是指直接操作寄存器等具体硬件的语言，它关心执行细节，没有很多高级语言的特性，一般也不是字符来描述的，比如机器语言、汇编语言等。

**转译**

转译是一种特殊的编译，它是从高级语言到高级语言的编译。

**转译原理**

编译流程都类似，都需要 parse、transform、generate 这三个阶段。

**为什么需要这三个阶段呢？**

转译器转换前后都是源码字符串，要做转换，就要先理解代码，计算机理解代码的方式就是通过一定的数据结构来组织源码中的信息，这种数据结构就是抽象语法树。

理解了代码（生成 AST）之后，就要进行各种转换了，基本上都是针对 AST 的分析和增删改，但不同的转译器会对 AST 做不同的处理。

**sourcemap**

转译器有个特点，就是都有 sourcemap.sourcemap 是生成的代码和源码之间的映射关系。通过它就能映射到源码。转译器都是源码转源码，自然都会有 sourcemap。

**sourcemap 的作用**

1. 调试代码时定位到源码。
2. 线上报错定位到源码。一般都是单独上传 sourcemap 到错误收集平台。

eg:sentry 提供了一个 sentry webpack plugin 支持在打包完成后把 sourcemap 自动上传到 sentry 后台，然后把本地 sourcemap 删除，还提供了 sentry-cli 让用户可以手动上传。（类似的分析平台，字节跳动的 dynatrace 也同样支持）

**转译器大多是对单个文件进程处理，打包工具用于整个项目的处理。**

**sourcemap 的原理**

具体生成的逻辑可以由 source-map 这个 mozila 提供的包来完成，我们只需要提供每一个 mapping，也就是源码中的行列号，目标代码中的行列号。

当源码 parse 成 AST 的时候，会在 AST 中保留它在源码中的位置（line,column），AST 进行转换并不会修改这个行列号，生成目标代码的时候，又会计算出一个新的位置（line,column），这样两个位置合并起来就是一个 mapping，所有 AST 节点的 mapping 就能生成完整的 sourcemap。

## Source Map

## AST
