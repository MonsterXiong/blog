# 脚手架

**为什么要弄个脚手架**

对于我个人，经常写些 demo，或者写一个新项目的时候，要么就是把以前的项目模板复制一份，要么就是重新搭建一份，显得比较麻烦，浪费时间，所以就有了搭建一个能满足自己需要的脚手架。

**脚手架的效果**

这是一个基本的脚手架，init 一个项目，输入项目名称，版本号等信息，然后从 git 仓库拷贝一份自己需要的项目模板。

这项目主要用到的几个包

- [commander](./Commander.md): 命令行工具
- [download-git-repo](./DownloadGitRepo.md): 用来下载远程模板
- [ora](./Ora.md): 显示 loading 动画
- [chalk](./Chalk.md): 修改控制台输出内容样式
- [log-symbols](./LogSymbols.md): 显示出 √ 或 × 等的图标
- [inquirer](./Inquirer.md):命令交互
- metalsmith：处理项目模板
- handlebars：模板引擎

```json
// package.json
"bin":{
  "Monster-cli":"./index.js"
}
```

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
      download("github:MonsterXiong/blog", projectName, function(err) {
        console.log(err ? "Error" : "Success");
      });
    } else {
      console.error("A template name that does not exist");
    }
  });
program.parse(process.argv);
```
