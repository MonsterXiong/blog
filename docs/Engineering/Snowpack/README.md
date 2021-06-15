# Snowpack

原 SkyPack,最早应用 ES Module 特性到开发服务器的打包工具。

## 快速体验

```sh
# 创建snowpack-demo目录并且进入目录
mkdir snowpack-demo && cd snowpack-demo && yarn init -y

# 安装依赖
yarn add -D snowpack

# 创建index.html文件

# 添加package.json脚本

# 运行服务
yarn start
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>hello snowpack~~~</h1>
  </body>
</html>
```

```json
  "scripts": {
    "start": "snowpack dev"
  }
```

### 使用浏览器原生的 JS 模块功能

```js
// init.js
export function init() {
  console.log("hello snowpack~~~~");
}
```

```js
// index.js
import { init } from "./init.js";

init();
```

```html
<!-- 引入JS文件 -->
<script type="module" src="./index.js"></script>
```

修改文件会自动化刷新，还可以使用 npm 模块。

```sh
npm install --save canvas-confetti
```

在 index.js 添加下面代码

```js
import confetti from "canvas-confetti";
confetti.create(document.getElementById("canvas"), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
```

snowpack 的一大特点是快 —— 全量构建快，增量构建也快。

因为不需要打包，所以它不需要像 webpack 那样构筑一个巨大的依赖图谱，并根据依赖关系进行各种合并、拆分计算。snowpack 的增量构建基本就是改动一个文件就处理这个文件即可，模块之间算是“松散”的耦合。

官方文档：https://www.snowpack.dev/tutorials/getting-started

典型的 Web 开发人员安装和管理他们的依赖关系是使用包管理器像 npm，yarn。这些 npm 软件包不能直接在浏览器中运行，因此在实际使用它们之前，需要额外的做处理，进行 webpack 打包构建。

snowpack 完全跳过“ npm install”步骤，而是通过 ES Module 导入，按需获取相关的预构建的软件包代码。

```js
// 之前是这样
import * as React from "react";

// 之后是这样
import * as React from "https://cdn.skypack.dev/react@17.0.1";
```
