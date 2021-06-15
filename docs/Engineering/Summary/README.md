---
sidebar: auto
---

# 工程化

工程化的最终目的是让业务开发可以 100% 聚焦在业务逻辑上。

[[TOC]]

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

使用构建工具自动化，对于需要反复重复的任务，自动化工具可以减轻你的劳动，简化你的工作。

### 概念

编译(Compile)是把一门编程语言转成另一门编程语言，一般是指高级语言到低级语言。

转译(Transpile)是一种特殊的编译，它是从高级语言到高级语言的编译。

> 高级语言是指用字符来描述的易于阅读和组织的语言，有条件、分支、循环、面向对象等特性，不关心执行的细节，只用于描述逻辑。

> 低级语言是指直接操作寄存器等具体硬件的语言，它关心执行细节，没有很多高级语言的特性，一般也不是字符来描述的，比如机器语言、汇编语言等。

### 为什么需要转译

前端领域主要是 html、css、javascript。

html、css 是从源码 parse 成 dom 和 cssom，然后生成 render tree 交给渲染引擎来渲染的，是从源码开始解释。

js 是一门脚本语言，也是在运行时把源码 parse 成 AST，然后转成字节码，解释执行的，也是从源码开始。

目标的产物就是源码，所以前端场景下就需要用到各种源码到源码的转译器。

转移是对源码做修改 然后生成源码。

1. es 版本更新快，新特性目标环境不支持，但是却想在开发环境时用，就需要转译器把这些特性转成目标环境支持的。
2. 需要在编译期间对代码进行压缩和各种代码优化（死代码删除等），然后转成目标代码，比如 terser。
3. 需要在编译期间检查出一些代码规范的错误，比如 eslint。

### 转译原理

编译流程都类似，都需要 parse、transform、generate 这三个阶段。

**为什么需要这三个阶段呢？**

转译器转换前后都是源码字符串，要做转换，就要先理解代码，计算机理解代码的方式就是通过一定的数据结构来组织源码中的信息，这种数据结构就是抽象语法树。

理解了代码（生成 AST）之后，就要进行各种转换了，基本上都是针对 AST 的分析和增删改，但不同的转译器会对 AST 做不同的处理。

转译器有个特点，就是都有 sourcemap。转译器都是源码转源码，自然都会有 sourcemap。

**转译器大多是对单个文件进程处理，打包工具用于整个项目的处理。**

转译器在项目中的 3 中使用方式：

1. ide 插件
2. git hooks
3. 打包工具来调用（loader）

## [CI/CD](https://www.redhat.com/zh/topics/devops/what-is-ci-cd)

[B 站了解学习地址](https://www.bilibili.com/video/BV1MU4y1L7QP)

- GitHub Actions:个人觉得，CI/CD 只需要这个就够了，上手也非常快，workflow、job、task、step，done！而且 actions 市场有各种大神们已经写好的 action 让你可以快速搭建一个严谨的工作流。比如：写入环境变量—使用 NodeJS 10/12/14，Windows/Linux/MacOS 最新版本，每个组合跑一遍构建流程，确保在每个组合都能构建成功—跑一遍 Lint+单元测试，上传测试覆盖率—跑一遍 ssh sync action，把构建产物上传到自己服务器。
- TravisCI
- CircleCI
- GitLabCI

[了解后可删](https://blog.csdn.net/soledadzz/article/details/102949772)

自动化部署 CI/CD 是一种通过在应用开发阶段引入自动化来频繁向客户交付应用的方法。CI/CD 的核心概念是持续集成、持续交付和持续部署。作为一个面向开发和运营团队的解决方案，CI/CD 主要针对在集成新代码时所引发的问题（集成地狱）。

> 集成地狱指的是由于代码没有及时合并在一起，集成问题堆积导致在后面合并时出现大量代码冲突或者系统不能正常工作的问题,持续集成 (CI)就是通过支持和鼓励团队成员频繁集成来完全避免这种情况。

具体而言，CI/CD 可让持续自动化和持续监控贯穿于应用的整个生命周期（从集成和测试阶段，到交付和部署）。这些关联的事务通常被统称为 CI/CD 管道，由开发和运维团队以敏捷方式协同支持。

**持续集成**（CI）指的是，它属于开发人员的自动化流程。成功的 CI 意味着应用代码的新更改会定期构建、测试并合并到共享存储库中。该解决方案可以解决在一次开发中有太多的应用分支，从而导致相互冲突的问题。

CD 指的是持续交付/持续部署，两者交叉使用，两者都事关管道后续阶段的自动化，但它们有时也会单独使用，用于说明自动化程度。

**持续交付**通常是指开发人员对应用的更改会自动进行错误测试并上传到存储库，然后由运维团队将其部署到实时生产环境中，解决开发和运维团队之间可见性及沟通较差的问题。因此，持续交付的目的就是确保尽可能减少部署新代码时所需的工作量。

**持续部署**指的是自动将开发人员的更改从存储库发布到生产环境，以供客户使用。他主要为了解决因手动流程降低应用的交付速度，从而使运维团队超负荷的问题。持续部署以持续交付的优势为根基，实现了管道后续阶段的自动化。

CI/CD 其实就是一个流程（通常形象的表述为管道），用于实现应用开发中的高度持续自动化和持续监控

CI 持续集成（Continuous Integration）

现代应用开发的目标是多人协同开发。但是，如果企业安排在一天内将所有分支源代码合并在一起（称为“合并日”），最终可能造成工作繁琐、耗时，而且需要手动完成。这是因为当一位独立工作的开发人员对应用进行更改时，有可能会与其他开发人员同时进行的更改发生冲突。如果每个开发人员都自定义自己的本地集成开发环境（IDE），而不是让团队就一个基于云的 IDE 达成一致，那么就会让问题更加雪上加霜。

持续集成（CI）可以帮助开发人员更加频繁地（有时甚至每天）将代码更改合并到共享分支或“主干”中。一旦开发人员对应用所做的更改被合并，系统就会通过自动构建应用并运行不同级别的自动化测试（通常是单元测试和集成测试）来验证这些更改，确保这些更改没有对应用造成破坏。这意味着测试内容涵盖了从类和函数到构成整个应用的不同模块。如果自动化测试发现新代码和现有代码之间存在冲突，CI 可以更加轻松地快速修复这些错误。

CD 持续交付（Continuous Delivery）

完成 CI 中构建及单元测试和集成测试的自动化流程后，持续交付可自动将已验证的代码发布到存储库。为了实现高效的持续交付流程，务必要确保 CI 已内置于开发管道。持续交付的目标是拥有一个可随时部署到生产环境的代码库。

在持续交付中，每个阶段（从代码更改的合并，到生产就绪型构建版本的交付）都涉及测试自动化和代码发布自动化。在流程结束时，运维团队可以快速、轻松地将应用部署到生产环境中。

CD 持续部署（Continuous Deployment）

对于一个成熟的 CI/CD 管道来说，最后的阶段是持续部署。作为持续交付——自动将生产就绪型构建版本发布到代码存储库——的延伸，持续部署可以自动将应用发布到生产环境。由于在生产之前的管道阶段没有手动门控，因此持续部署在很大程度上都得依赖精心设计的测试自动化。

实际上，持续部署意味着开发人员对应用的更改在编写后的几分钟内就能生效（假设它通过了自动化测试）。这更加便于持续接收和整合用户反馈。总而言之，所有这些 CI/CD 的关联步骤都有助于降低应用的部署风险，因此更便于以小件的方式（而非一次性）发布对应用的更改。不过，由于还需要编写自动化测试以适应 CI/CD 管道中的各种测试和发布阶段，因此前期投资还是会很大。

- Github Action
- Jekins

## 项目管理

Monorepo

- Lerna:我用这个作为工程项目的 Monorepo 管理。
- Yarn Workspace:Yarn Workspace，Yarn 提供的 Monorepo 工具，有看到实践是用 Lerna 来管理版本，Yarn Workspace 管理依赖。
- PNPM:实际上是包管理工具，但内置了 Monorepo 支持，我也在用这个（强烈安利）

## Source Map

sourcemap 是生成的代码和源码之间的映射关系,通过它就能映射到源码。

::: details sourcemap 的作用

1. 调试代码时定位到源码。
2. 线上报错定位到源码。一般都是单独上传 sourcemap 到错误收集平台。

eg:sentry 提供了一个 sentry webpack plugin 支持在打包完成后把 sourcemap 自动上传到 sentry 后台，然后把本地 sourcemap 删除，还提供了 sentry-cli 让用户可以手动上传。（类似的分析平台，字节跳动的 dynatrace 也同样支持）
:::

::: details sourcemap 的原理

具体生成的逻辑可以由 source-map 这个 mozila 提供的包来完成，我们只需要提供每一个 mapping，也就是源码中的行列号，目标代码中的行列号。

当源码 parse 成 AST 的时候，会在 AST 中保留它在源码中的位置（line,column），AST 进行转换并不会修改这个行列号，生成目标代码的时候，又会计算出一个新的位置（line,column），这样两个位置合并起来就是一个 mapping，所有 AST 节点的 mapping 就能生成完整的 sourcemap。

:::

## AST

AST（Abstract Syntax Tree）抽象语法树。

抽象是因为忽略了逗号，括号等分隔符。

树是因为代码一般都是嵌套的关系，需要用树的父子关系来表示源码的嵌套关系。所以抽象语法树是最适合计算机来理解代码的数据结构。

## 一体化框架

一体化框架指的是， 你的前后端项目放在同一个 repo 里（后端是 Node），同时前端直接调用在后端定义的方法，由框架在编译时去自动的把前端对后端的方法调用转换成 HTTP 请求。这是最近前端还挺火热的一个方向。

## 编辑器配置

解决团队内部编辑器协作问题，所以需要开发者的编辑器统一安装 EditorConfig 插件。

1. 在项目根目录下新建一个配置文件`.editorconfig`

```
root = true
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

2. 配置自动格式化与代码校验
   在 vscode 编辑器中，`crtl + ,`来快速打开配置项，切换到 workspace 模块，并点击 `open setting json` 按钮，配置如下信息。

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  },

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "typescript.tsdk": "node_modules/typescript/lib",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

这个时候我们的编辑器就具备保存并自动格式化的功能了。

## ESLint + Prettier

1. `.eslintignore`：配置 ESLint 忽略文件
2. `.eslintrc`：ESLint 编码规则配置
3. `.prettierignore`：配置 Prettier 忽略文件
4. `.prettierrc`：格式化自定义配置

```json
{
  "singleQuote": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "trailingComma": "none",
  "printWidth": 100,
  "semi": false,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "typescript" }
    }
  ]
}
```
