---
sidebar: auto
---

# VSCode

## 认识 Vscode(TODO)

## 快捷键

```sh
# 打开用户设置
CTRL + ,

# 显示快捷方式
CTRL + K & CTRL + S

# 切换工作区
CTRL + R

# 转到文件
CTRL + P

# 转到行
CTRL + G

# 转到下一个错误或者警告
F8

# 切换tabs
CTRL + TAB

# 在所选的每一行的末尾插入光标
SHIFT + ALT + I

# 选中当前行
CTRL + L

# 选中所有找到的匹配项
CTRL + SHIFT + L

# 选中所有匹配项
CTRL + F2

# 查看参数定义
CTRL + SHIFT + SPACE

# 格式化代码
Shift + Alt + F

# 格式化选择部分
CTRL + K & CTRL +F

# 转到定义
F12

# 查看定义
ALT + F12

# 重命名
F2

# 裁剪尾随空格
CTRL + K & CTRL + X

# 在资源管理器中显示活动文件
CTRL + K & R

# 替换文件
CTRL + SHIFT + H

# 打开Markdown侧边预览
CTRL + K & V

# 打开禅模式
CRTL + K & Z

# 代码折叠
Ctrl + Shift + [

# 代码展开
Ctrl + Shift + ]

# 向上/向下 复制行
Shift + Alt + Up/Down

# 单词选中
Ctrl + d

# 打开关闭侧边栏
Ctrl + b

# 文件中符号的跳转,也可以通过冒号来进行分组：@:
Ctrl + Shift + o

# 工作区符号的跳转
Ctrl + t

# 删除上一个词
Ctrl + backspace

# 选中词
Ctrl + Shift + 右箭头/左箭头

# 删除行
Ctrl + X 或 Ctrl + Shift + k

# 添加多个光标
Ctrl + Alt + Up/Down

# 块选择,按住快捷键,然后拖动鼠标,选择一个文本块,光标会被添加到选中的每一行.
Shift + Alt
```

## 插件开发(TODO)

## 插件

```
javascript console utils ctrl+shift+L或D
vscode-pigments 颜色预览
guides	显示代码对齐辅助线
prettier 格式化代码
VueHelper  　　snippet代码片段
```

### 常用插件

```sh
# 自动重命名成对的 HTML 标记，修改开始标签，结束标签会同步修改
Auto Rename Tag

# HTML 代码片段，该插件可为你提供 html 标签的代码提示，不用键入尖括号了
HTML Snippets

# 该插件可以为你把成对的括号做颜色区分，并且提供一根连接线。方便我们审阅代码结构。通过修改配置文件，可使得结构线高亮。
Bracket Pair Colorizer

# 用四种不同颜色交替着色文本前面的缩进
Indent-Rainbow

# 为圆括号，方括号和大括号提供彩虹色。
Rainbow Brackets

# css 样式查看器，可快速查看我们的 css 样式
CSS Peek

# 可自动完成导入语句中的 npm 模块
Npm Intellisense

# 快速打开 html 文件到浏览器预览
Open in browser

# 自动闭合 HTML/XML 标签
Auto Close Tag

# 自动提示文件路径，支持各种快速引入文件
Path Intellisense

# 在 html 标签上写 class 智能提示 css 样式
HTML CSS Support

# 鼠标悬浮在链接上可及时预览图片
Image preview

# 在代码文件右键鼠标一键格式化 html,js,css
Beautify

# ES6 语法只能提示，以及快速输入
JavaScript(ES6) code snippets

# Vue 插件，Vue 开发者必备。内含语法高亮，智能提示，emmet，错误提示，格式化，自动补全，debugger 等等
Vetur
```

### 代码风格规范类

```sh
# 规范 js 代码书写规则，如果觉得太过严谨，可自定义规则。
ESlint

# ts 的书写规范，这个插件是一个系列，同时还提供了 TSlint(deprecated)，TSlint Vue，TSLint Vue-TSX
TSlint

# html 代码检测，支持 html5
HTMLHint

# 拼写检查程序，检查不常见的单词，如果单词拼写错误，会给出警告提示。
Code Spell Checker

# 在 vscode 中用于生成文件头部注释和函数注释的插件，经过多版本迭代后，插件支持所有主流语言，功能强大，灵活方便，文档齐全。
koroFileHeader

# 代码书写的整洁，选中代码配合组合键【Ctrl+Shift+P】，输入 Align 即可。
Better Align

# 通常我们对一个变量的命名可能是驼峰，可能是全大写，又或是下划线，可以通过这个插件解决变量命名规范的问题。选中变量配合组合键【Ctrl+Shift+P】,输入对应格式即可。
change-case

# 该插件可以丰富注释颜色，让注释也具有生命力，如需自定义样式，需要写入配置代码
Better Comments

```

### 其他插件

```sh
# 可以帮助你更好地理解代码。快速查看更改行或者块地对象，功能强大，功能丰富且高度可定制。
GitLens

# 可查看和搜素 git 日志以及图形和详细信息，同时还支持分支比较，分支管理等
GitHistory

# 使用 TODO 来标记我们的代码，提高可读性，提供了可视化窗口来查看和管理我们的 TODO Tree
TODO Tree

# 使用TODO标记
TODO Highlight

# 文件比较
Partial Diff

# 在 vscode 里面快乐的书写 Markdown，功能强大。提供了丰富的快捷键，可边写边看，轻松转化为 html 或 pdf 文件。
Markdown All in one

# 在 vscode 里面画流程图。新建.drawio 后缀文件并拖入 vscode 中即可
vscode-drawio

# 可以将我们的代码转化为一张图片，在写文章或者代码分享的时候可以用到
Polacode-2020

# 在 vscode 里面进行接口调试，提供丰富的 api 配置方式。
# 新建一个.http 文件，写下基本的测试代码，点击 Send Request 即可在右边窗口查看接口返回结果。
REST Client

# 在 vscode 里面打开浏览器，一边编码一边查看。
Browser Preview

# 在代码书写不规范或者有待调整的地方，在光标聚焦后，会有一个小灯泡来提示对应的不合理原因和改进方法。
#极大地提高了我们的代码优雅度。一个非常棒的重构工具，将变量声明和变量初始化合并=>ctrl+.
JavaScript Booster

# 浏览器热更新
Live Server

# 监听并实时编译 SCSS 文件输出 css 文件。
Live Sass Compiler

# 能够与他人实时进行协作式编辑和调试。
Live Share

# 它可以帮助您轻松访问项目
Project Manager

# 设置 vscode 背景图片
Background

# 显示引入的包的大小
Import Cost

# 在状态栏中显示当前文件大小，点击后还可以看到详细创建、修改时间
filesize

# 计算 TypeScript / JavaScript 文件的复杂性
CodeMetrics

```

#### [Random Everything](https://marketplace.visualstudio.com/items?itemName=helixquar.randomeverything)

这个插件可以根据数据类型自动生成随机数据，特别适合生成测试数据。

#### [htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap)

可以在选中 HTML 标签中外面套一层标签。

#### Turbo Console Log

快捷添加 console.log，一键 注释 / 启用 / 删除 所有 console.log。

```
简单说下这个插件要用到的快捷键:
ctrl + alt + l 选中变量之后，使用这个快捷键生成 console.log
alt + shift + c 注释所有 console.log
alt + shift + u 启用所有 console.log
alt + shift + d 删除所有 console.log
```

### 文件主题集合

VS code 颜色主题集合 ctrl+K=>ctrl+T

```sh

# 提供了非常漂亮的目录树图标主题
Vscode-icons

# 一个非常适合夜猫子的 VS Code 主题
Night Owl

# 一个基于 Atom 的黑暗主题
Atom One Dark Theme

# 官方吸血鬼主题
Dracula Official

# Atom 标志性的 One Dark 主题
One Dark Pro

# 简约而现代的神奇海洋主题
Bimbo

# Material Icon Theme
```
