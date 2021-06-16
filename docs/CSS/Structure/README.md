---
sidebar: auto
---

# CSS 架构

CSS 设计模式，解决难复用，难扩展
企业级 CSS 架构，解决代码混乱问题
CSS 奇淫巧计

## Vue3 项目创建

- Vue-CLI
- Vue3 全家桶
- 本地 MockJS

## [MockJS](http://mockjs.com/)

- 模拟后台接口数据，提高前端开发效率
- 线上平台：RAPP2、Easy-Mock
- 本地 MockJS

## CSS 设计模式

### OOCSS

OO:面向对象

- 原则一：容器与内容分离
- 原则二：结构（基础对象）与皮肤分离
- 原则三：面向设计开发（我加的）

Vue 中组件 = OOCSS

OOCSS 应用：Grid 栅格系统、布局组件等

### [BEM](https://en.bem.info/)

- 块（Block）、元素（Elmenet\_\_）、修饰符（Modifier--）
- 作用：命名规范，让页面结构清晰
- 进阶版的 OOCSS=》带来了命名规范

### [SMACSS](https://github.com/jeffwcx/translate-smacss-zh)

- 分类：Base、Layout、Modules、State、Theme
  - Base：对浏览器的默认样式进行重置 normaliza.css,特殊样式的定制化
  - Layout：对页面布局的一些功能
  - Modules：公共的复用的小模块，像 bootstrap 下面的组件
  - State：状态效果
  - Theme：皮肤
- 好处：易维护、易复用、易扩展
- 命名规范：.l-header、is-hidden、theme-nav

### [ITCSS](https://github.com/ahmadajmi/awesome-itcss)

- 分层：七层
  - Settings：维护变量
  - Tools：维护样式的工具库，清除浮动，省略号等，mixin，function
  - Generic：normalize.css
  - Base：元素定制化样式设置 a,form
  - Objects：OOCSS
  - Components：与 Object 一起可以理解为一个 Vue 组件
  - Trumps：权重变高!important
- 与 SMACSS 区别：层次分得更细

### SUITCSS

SUIT CSS 是一种专注于为基于组件的开发改善 CSS 创作体验的方法
基于组件的系统允许将松散耦合的独立单元实现和组合为定义明确的复合对象。组件已封装，但能够通过接口/事件进行互操作

### ACSS

- 一个样式属性一个类
- 好处：极强的复用性，维护成本低
- 坏处：破坏了 CSS 命名的语义化

经典框架 tailwindcss

## 项目中 CSS 架构方案的选择

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

var.scss 文件

```scss
$color-primary: #ff5777;
$color-white: #ffffff;
$color-black: #000000;
```

配置 [vue](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)，导成全局公共的样式。

> 配置 Vue，相当于在每一个页面组件以及 scss 文件中引入了该文件

### Tools 层代码实现

维护公共的 mixin 和 function，供全局使用。

- 引入 [SassMagic](https://github.com/W3cplus/SassMagic) 工具库,[文档](http://w3cplus.github.io/SassMagic/)
- 配置 [vue](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)，变成全局公共的样式配置。

对 SassMagic 瘦身，定制化需要的功能。

### Base 层代码实现

- Generic 层：引入[normalize.css](https://github.com/necolas/normalize.css)，重置浏览器默认样式，可以让各个浏览器的风格相同。
- Base 层：对各类元素基础样式进行补充。

#### Generic 层

```sh
npm i --save normalize.css
```

```js
// 在main.js中引入
import "normalize.css/normalize.css";
```

#### Base 层

例如可以创建以下文件：

- article.scss
- form.scss
- images.scss
- link.scss
- page.scss

主要是分析设计稿，根据经验来补充。

可以在 index.scss 导入需要引入的层，然后 main 引入，纯样式，直接在公共入口导入。

### Components 层代码实现

- OOCSS => BEM（进阶版的 OOCSS）
- 经典组件：栅格、布局组件
- 自定义组件

保持结构固定不变

#### 栅格组件

只引入 [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN/) 的栅格组件

```js
// index.js
import Col from "vant/lib/col";
import "vant/lib/col/index.css";
import Row from "vant/lib/row";
import "vant/lib/row/index.css";

const components = {
  CRow: Row,
  CCol: Col,
};

const install = (app) => {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
  });
};

const Mui = {
  install,
};

export default Mui;
```

在 main.js 里面导入然后使用 use 插件

#### 布局组件

- layout
  - Header
  - Footer
  - Main
  - Aside

布局组件要做成全局组件

```js
import Layout from "./layout.vue";
import Header from "./header.vue";
import Aside from "./aside.vue";
import Main from "./main.vue";
import Footer from "./footer.vue";

export { Layout, Header, Aside, Main, Footer };
```

```js
import { Layout, Header, Aside, Main, Footer } from "./layout";

const install = (app) => {
  Object.keys(components).forEach((key) => {
    //   第三方走if,不是第三方走else
    if (key === "CRow" || key === "CCol") {
      app.component(key, components[key]);
    } else {
      app.component(components[key]["name"], components[key]);
    }
  });
};
```

### Acss 层代码实现

- 让样式极限复用
- 解决 Acss 无语义化缺点：属性选择器
- Settings 与 Acss 层的关系

```css
[fl] {
  float: left;
}

[fz12] {
  font-size: 12px;
}
```

### Theme 层代码实现

- 只要在全局加上一个属性选择器就搞定了

```html
<!-- cool warm  -->
<div data-theme="default"></div>
```

```css
[data-theme="default"] .t-about-box {
}
[data-theme="default"] .t-home-item3 {
}
```

用 js 给 html 标签注入属性,在 app.vue

```js
onMounted(){
window.document.documentElement.setAttribute("data-theme","cool")
}
```

SCSS 版本
