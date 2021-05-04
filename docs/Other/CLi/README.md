# 脚手架

**为什么要弄个脚手架**

对于我个人，经常写些 demo，或者写一个新项目的时候，要么就是把以前的项目模板复制一份，要么就是重新搭建一份，显得比较麻烦，浪费时间，所以就有了搭建一个能满足自己需要的脚手架。

**脚手架的效果**

这是一个基本的脚手架，init 一个项目，输入项目名称，版本号等信息，然后从 git 仓库拷贝一份自己需要的项目模板。类似 vue 的 vue-cli 或者 react 的 create-react-app，只是这个比较简单.

基本思路参考下图

这部分参考了掘金@张国钰大佬的思路.

**项目结构**

主要 3 个，一个 bin 文件夹，放执行命令的入口文件

lib 文件夹，放项目的主要文件，package.json 不多说

这项目主要用到的几个包

- commander: 命令行工具
- download-git-repo: 用来下载远程模板
- ora: 显示 loading 动画
- chalk: 修改控制台输出内容样式
- log-symbols: 显示出 √ 或 × 等的图标
- inquirer.js:命令交互
- metalsmith：处理项目模板
- handlebars：模板引擎

```js
#! /usr/bin/env node

const program = require("commander");
const download = require("download-git-repo");
const ora = require("ora");
//version 版本号
//name 新项目名称
program
  .version("1.0.0", "-v, --version")
  .command("init <templateName> <projectName>")
  .action((templateName, projectName) => {
    const spinner = ora(`正在下载项目模板，源地址：`);
    spinner.start();
    if (templateName === "vue") {
      console.log("clone template ...");
      download("github:MonsterXiong/blog", projectName, function(err) {
        console.log(err ? "Error" : "Success");
        if (!err) {
          spinner.succeed();
        } else {
          spinner.fail();
        }
      });
    } else if (templateName === "react") {
      console.log("clone template ...");
      download("github:zxfjd3g/atguigu-utils.git", projectName, function(err) {
        console.log(err ? "Error" : "Success");
      });
    } else {
      console.error("A template name that does not exist");
    }
  });
program.parse(process.argv);
```
