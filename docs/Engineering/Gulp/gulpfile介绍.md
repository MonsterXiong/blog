# gulpfile 介绍

- gulpfile 是 gulp 进行打包的依据
- 必须在项目根目录创建，每一个项目都需要一个 gulpfile，在文件中进行本项目的打包配置
- gulp 运行的时候，会自动读取 gulpfile 文件里的配置
- gulpfile 按照 node 的模块化语法书写（CJS）

## gulp 详解

gulpfile 是项目目录下名为 gulpfile.js(或者首字母大写 Gulpfile.js)的文件，在运行 gulp 命令时会被自动加载，除了 gulp API 外，纯 JS 代码和 Node 模块也会被使用。任何导出（export）的函数都将注册到 gulp 的任务（task）系统中。

## gulp 转译

你可以使用需要转译的编程语言来书写 gulpfile 文件，例如 TS 或 Babel，通过修改 gulpfile.js 文件的扩展名来表明所用的编程语言并安装对应的转译模块。

- 对于 TS，重命名为 gulpfile.ts 并安装 ts-node 模块
- 对于 Babel，重命名为 gulpfile.babel.js,并安装@babel/register 模块。
  ::: tip
  针对此功能的高级知识和已支持的扩展名的完整列表，请参考[gulpfile 转译](https://www.gulpjs.com.cn/docs/documentation-missing)文档
  :::

## gulp 分割

如果文件太大，可以将此文件重构为数个独立的文件。
每个任务（task）可以被分割为独立的文件，然后导入（import）到 gulp 文件中并组合。还可以对每个任务进行单独测试，或者根据条件改变组合。
Node 的模块解析功能允许你将 gulppfile.js 文件替换为同样命名为 gulpfile.js 的目录，该目录中包含了一个名为 index.js 的文件，该文件被当作 gulpfile.js 使用，该目录还可以包含各个独立的任务（task）模块。
