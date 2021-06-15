# Chalk

修改 node 终端样式,添加文字背景和改变字体颜色等。

```sh
# 创建新目录以及包管理器初始化
mkdir chalk-demo && cd chalk-demo && yarn init -y
# 安装依赖
yarn add chalk
```

```js
const chalk = require("chalk");

const message = "Hello Chalk ~~~";

// 设置字体颜色
console.log(chalk.red(message));

// 多种颜色混合使用
console.log(chalk.red(message) + chalk.green("Monster"));

// rgb方法定义字体颜色
console.log(chalk.rgb(0, 88, 88)(message));

// 设置背景颜色
console.log(chalk.bold(message));

// 字体颜色和背景颜色一起设置
console.log(chalk.yellow.bgRed.bold(message));

// bgRgb 方法定义背景颜色
console.log(chalk.bgRgb(0, 88, 88)("Hello!"));
```
