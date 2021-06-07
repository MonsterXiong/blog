---
sidebar: auto
---

# Webpack

- webpack 是什么？grunt、gulp 区别
- Loader
- plugin
- 构建流程与原理
- 性能优化
- 热更新
- 开发配置
- 生成配置
- 代码分割
- dll

## 简介

webpack 是一个前端资源构建工具，也是一个静态模块打包器。

## 五大核心概念

entry:指示 webpack 那个作为入口的起始文件，构建依赖关系树

output:指示将打包后的资源输出到哪里去

loader:翻译官

plugins:增强功能

mode:项目使用模式为开发环境还是生成环境

## 版本依赖

```json
  "devDependencies": {
    "css-loader": "^5.2.4",
    "file-loader": "^6.2.0",
    "html-loader": "^1.3.2",
    "html-webpack-plugin": "^4.5.2",
    "mini-css-extract-plugin": "^1.6.0",
    "node-sass": "^4.14.1",
    "sass-loader": "^8.0.2",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^4.41.6",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.2"
  }
```

## 配置文件

### loader

loader 用于对模块的源代码进行转换。loader 可以使你在`import`或“加载”模块时预处理文件。因此，loader 类似于其他构建工具中“任务（task）”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript,或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中`import` CSS 文件！

#### 示例

例如，你可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader：

```javascript
npm install --save-dev css-loader
npm install --save-dev ts-loader
```

然后指示 webpack 对每个 `.css` 使用 [`css-loader`](https://www.webpackjs.com/loaders/css-loader)，以及对所有 `.ts` 文件使用 [`ts-loader`](https://github.com/TypeStrong/ts-loader)：

```javascript
//webpack.config.js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
};
```

```js
// 1.先下包，
// 2.在使用
module: {
  rules: [
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: "url-loader",
      options: {
        // 将8KB以下的图片进行base64转换
        limit: 8 * 1024,
        // 关闭es6模块化
        esModule: false,
        name: "[name][hash:8].[ext]",
        // 输出目录
        outputPath: "imgs",
      },
    },
  ];
}
```

### plugins

```js
// 1. 下包
// 2. 引用
// 3.使用

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
```

### devServer

```js
// 开发服务器，自动化（自动编译，自动打开浏览器，自动刷新浏览器），在内存中运行，不会输出文件，

devServer: {
    contentBase: "./build",
    port: 8080,
    compress: true,
    open: true,
  },
```

## Loader

```
style-loader:：添加style标签，将jS字符串输入进去。

css-loader:将css转为jS字符串。

sass-loader：将scss文件转为css文件。

html-loader：将html中的图片引入

url-loader：将文件进行处理，依赖file-loader

file-loader：原封不动转出，处理其他资源时使用
```

## Plugins

```
html-webpack-plugin：自动生成html文件，并将打包后的所有资源自动引入

mini-css-extract-plugin：抽取单独的css文件
```
