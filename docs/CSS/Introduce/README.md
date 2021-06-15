---
sidebar: auto
---

# CSS 介绍

## 5 种实现 CSS 底部固定的方法

1. 全局增加一个负值下边距等于底部高度

> 有一个全局的元素包含除了底部之外的所有内容。它有一个负值下边距等于底部的高度。

2. 底部元素增加负值上边距
3. 使用 calc()计算内容的高度
4. 使用 flexbox
5. 使用 grid 布局

## CSS 架构

CSS 设计模式，解决难复用，难扩展
企业级 CSS 架构，解决代码混乱问题
CSS 奇淫巧计

### Vue3 项目创建

- Vue-CLI
- Vue3 全家桶
- 本地 MockJS

### [MockJS](http://mockjs.com/)

- 模拟后台接口数据，提高前端开发效率
- 线上平台：RAPP2、Easy-Mock
- 本地 MockJS

### CSS 设计模式

#### OOCSS

OO:面向对象

- 原则一：容器与内容分离
- 原则二：结构（基础对象）与皮肤分离
- 原则三：面向设计开发（我加的）

Vue 中组件 = OOCSS

OOCSS 应用：Grid 栅格系统、布局组件等

#### [BEM](https://en.bem.info/)

- 块（Block）、元素（Elmenet\_\_）、修饰符（Modifier--）
- 作用：命名规范，让页面结构清晰
- 进阶版的 OOCSS=》带来了命名规范

#### [SMACSS](https://github.com/jeffwcx/translate-smacss-zh)

- 分类：Base、Layout、Modules、State、Theme
  - Base：对浏览器的默认样式进行重置 normaliza.css,特殊样式的定制化
  - Layout：对页面布局的一些功能
  - Modules：公共的复用的小模块，像 bootstrap 下面的组件
  - State：状态效果
  - Theme：皮肤
- 好处：易维护、易复用、易扩展
- 命名规范：.l-header、is-hidden、theme-nav

#### [ITCSS](https://github.com/ahmadajmi/awesome-itcss)

- 分层：七层
  - Settings：维护变量
  - Tools：维护样式的工具库，清除浮动，省略号等，mixin
  - Generic：normalize.css
  - Base：元素定制化样式设置 a,form
  - Objects：OOCSS
  - Components：与 Object 一起可以理解为一个 Vue 组件
  - Trumps：权重变高!important
- 与 SMACSS 区别：层次分得更细

#### SUITCSS

SUIT CSS 是一种专注于为基于组件的开发改善 CSS 创作体验的方法
基于组件的系统允许将松散耦合的独立单元实现和组合为定义明确的复合对象。组件已封装，但能够通过接口/事件进行互操作

#### ACSS

- 一个样式属性一个类
- 好处：极强的复用性，维护成本低
- 坏处：破坏了 CSS 命名的语义化

经典框架 tailwindcss

### 项目中 CSS 架构方案的选择

- ITCSS、BEM、ACSS 去打造一套 CSS 架构方案

settings、tools、base、generic、components、acss、theme

### Settings 层代码实现

- SASS 的介绍
  - 变量
  - 嵌套
  - mixin+include
  - function
- 定义一些公共变量
- 公共变量：颜色、边框、字体大小、阴影、层级...

```scss
$color-primary: #ff5777;
$color-white: #ffffff;
$color-black: #000000;
```

### Tools 层代码实现

### Base 层代码实现

### Components 层代码实现

### Acss 层代码实现

### Theme 层代码实现
