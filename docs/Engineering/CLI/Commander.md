# Commander

命令行工具。提供了用户命令输入和参数解析的功能

```sh
# 初始化
mkdir commander-demo && cd commander-demo && yarn init -y

# 安装依赖
yarn add commander
```

## 声明 program 变量

为了简化使用,Commander 提供了一个全局对象。

```js
const { program } = require("commander");

program.version("1.0.0");
```

如果程序比较复杂，需要以多种形式来使用 Commander，则创建本地 Command 对象时一种更好的方式；

```js
const { Command } = require("commander");
const program = new Command();
program.version("1.0.0");
```

## 选项

Commander 使用`.options()`方法来定义选项，同时可以附加选项的简介，每个选项可以定义一个短选项名称（-后面接单个字符）和一个长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔。

选项可以通过在 Command 对象上调用.opts()方法来获取。对于多个单词的长选项，使用驼峰法来获取，例如--template-engine 选项通过 program.opts().templateEngine 获取。

多个短选项可以合并简写，其中最后一个选项可以附加参数。例如，-a -b -p 80 也可以写为-ad -p80,甚至可以-abp80。

--可以标记选项的结束，后续的参数均不会被命令解释，可以正常使用。

默认情况下，选项在命令行中的顺序不固定，一个选项可以在其它参数之前或之后指定。

常用选项类型，boolean 型选项和带参数选项。

有两种最常用的选项，一类是 boolean 型选项，选项无需配置参数，另一类选项则可以设置参数（使用尖括号声明在该选项后，如`--expect <value>`）。如果在命令行中不指定具体的选项及参数，则会被定义为 undefined.

```js
const program = require("commander");

program
  .version("1.0.0", "-v, --version")
  .option("-w,--watch", "watch file change")
  .option("-t, --template <template>", "choose a template");

program.parse(process.argv);

const options = program.opts();
if (options.watch) console.log(options.watch);
if (options.template) console.log(options.template);
```

```sh
# 测试
$ m-cli -w
true
$ m-cli -t vue
vue
```

通过 program.parse(arguments) 方法处理参数，没有被使用的选项会存放在 program.args 数组中。该方法的参数是可选的，默认值为 process.argv

**选项可以设置一个默认值**
