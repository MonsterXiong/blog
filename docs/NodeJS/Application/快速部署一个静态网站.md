# 快速部署一个静态网站

## 目录结构

```tree
│  package-lock.json
│  package.json
└─src
    │  app.js
    └─dist
```

> app.js 为启动服务文件，dist 为放置打包后的静态文件的目录

## 实践

```sh
# 1. 创建文件夹并npm初始化
mkdir demo && cd demo && npm init -y

# 2. 安装依赖
npm i koa koa-compress koa-static
nppm i nodemon cross-env -D

# 3. 书写app.js

# 4. 在package.json添加启动脚本

# 5. 最后将网页放到 dist 目录下即可

```

## app.js 文件

```js
const koa = require("koa");
const compress = require("koa-compress");

const app = new koa();

const options = {
  threshold: 2048,
};
app.use(compress(options));

app.use(require("koa-static")(__dirname + "/dist"));

app.listen(8080);
```

## scripts 脚本

线上用 pm2 守护进程。

```json
  "scripts": {
    "dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon src/app.js",
    "prd": "cross-env NODE_ENV=production pm2 start src/app.js --watch --name frond"
  },
```

##
