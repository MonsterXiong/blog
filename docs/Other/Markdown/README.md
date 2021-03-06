---
sidebar: auto
---

# markdown

```
[TOC]=>侧边栏
```

## 基础语法

### 标题

- 支持两种标记：底线（-/=）和#。

  1.  **使用底线的语法**

  ```
  标题内容
  =========
  ```

  或

  ```
  标题内容
  --------
  ```

  语法说明：

  - 底线是=表示一级标题。

  - 底线是-表示二级标题。

  - 底线符号的数量至少 2 个。

  - 这种语法只支持这两级标题。

2. **使用#的语法**

   ```
   # + 空格 + 标题内容
   ```

语法说明:

- 在行首插入#可标记出标题。

- \#的个数表示了标题的等级。

  - 建议再#后加一个空格。

  - **Markdown**中最多支持前六级标题。


    3.   **使用规范**

         - 建议使用#标记标题，而不是===或-，因为后者会难以维护和阅读。


       - 要保持间距，建议标题的前后都要空一行（除非标题在文档开头）；#与标题文本之间也要有1个空格，否则会导致阅读困难。

​

       - 不要有多余的空格。建议标题要写在一行的开头，结尾也不要有空格。

​

       - 建议标题的结尾不要有标题符号，如句号、逗号、冒号、分号等。

​

       - 建议标题要尽量简短，这样方便引用，特别是当生成目录时。如果原拟的标题是一个长句，可以从长句中提取标题，而将长句作为标题下的内容。

### 粗体和斜体

- 粗体由两个\*或者两个\_包裹，斜体由 1 个\*或 1 个\_包裹。

  ```
  **加粗内容**或__加粗内容__
  ```

  ```
  *斜体内容*或_斜体内容_
  ```

​ **使用规范**

​ 建议粗体使用 2 个\*包裹，斜体使用 1 个\*包裹，因为\*比较常见，而且比\_可读性更强。

​ 在粗体和斜体语法标记的内部，建议不要有空格。

### 段落与换行

- 如果想在段内换行，则需要在上一行的结尾插入两个以上的空格然后按回车键。

### 列表

​ 在**Markdown**中支持使用有序列表和无序列表，有序列表用数字序号+英文句号+空格+列表内容来标记，无序列表由\*/+/-+空格+列表内容在标记。

1. 有序列表语法

```
数字序号 + 英文句号 + 空格 + 列表内容
```

2. 无序列表语法

```
*/+/- + 空格 + 列表内容（*，-，+效果相同）
```

3. 嵌套列表的语法

```
+ 第一层列表TAB + 第二层列表TAB + TAB + 第三层列表
```

语法说明：

- 列表中可以嵌套列表
- 有序列表和无序列表也可以互相嵌套

**使用规范**

- 建议使用-来标记无序列表，因为\*容易跟粗体和斜体混淆，而+不流行。
- 如果列表项有换行，则建议给无序列表使用三个空格，给有序列表使用 2 个空格。
- 如果一个列表中的每个列表项都只有一行，建议列表项之间不要有空行。
- 建议列表前/后都空 1 行。
- 如果列表项中有空行，建议在列表项之间空一行，这样会比较容易区分多行列表项的开始和结束。
- 数字、字符、符号列表使用英文半角句号，句号后加空格。

### 分割线

- 在**Markdown**中，分隔线由 3 个以上的\*/-/\_来标记。

语法说明：

- 分隔线须使用至少 3 个以上的\*/-/\_来标记。
- 行内不能有其他的字符。
- 可以在标记符中间加上空格。

### 图片

- 插入图片的语法

```
![图片替代文字](图片地址)
```

语法说明：

- 图片替代文字在图片无法正常显示时会比较有用，正常情况下可以为空。
- 图片地址可以是本地图片的路径也可以是网络图片的地址。
- 本地图片支持相对路径和绝对路径两种方式。

### 链接

1. 文字链接

文字链接就是把链接地址直接写在文本中。语法是用方括号包裹链接文字，后面紧跟着括号包裹的链接地址。

文字链接语法：

```
[链接文字](链接地址)
```

2. 引用链接

把链接地址在某个地方统一定义好，然后在正文中通过“变量”来引用，可读性一下子就变强了，这种方法叫作引用链接。

引用链接语法：

```
在正文中引用链接标记，可以理解为引用定义好的变量：[链接文字][链接标记]在底部定义链接标记，可以理解为定义一个地址变量：[链接标记]: 链接地址
```

语法说明：

- 链接标记可以有字母、数字、空格和标点符号。
- 链接标记不区分大小写。
- 定义的链接内容可以放在当前文件的任意位置，建议放在页尾。
- 当链接地址为网络地址时要以 http/https 开头，否则会被识别为本地地址。

### 网址链接

在 Markdown 中，将网络地址或邮箱地址使用<>包裹起来会被自动转换为超链接。

网址链接语法：

```
<URL 或邮箱地址>
```

使用规范：

- 在 Markdown 中，链接标题的信息应该更丰富，从标题中应该可以知道链接的内容，要使用有意义的链接标题。
- 建议使用<>包裹自动链接，这种方式更通用。
- 自动链接要以 http/https 开头。

### 行内代码与代码块

1. 行内代码

在 Markdown 中，行内代码引用使用`包裹。

语法：

```
`代码`
```

2. 代码块

在 Markdown 中，代码块以 Tab 键或 4 个空格开头。

小提示：因为代码块使用 Tab 键或 4 个空格开头的效果不够直观，很多扩展语法（如 GFM）提供了围栏代码块，并且支持语法高亮。

使用规范：

- 除行内代码可以使用`包裹以外，如果我们想转义或强调某些字符，也可以使用`包裹。
- 如果代码超过 1 行，请使用围栏代码块（扩展语法），并显式地声明语言，这样做便于阅读，并且可以显示语法高亮。
- 但如果我们编写的是简单的代码片段，使用 4 个空格缩进的代码块也许更清晰。
- 很多 Shell 命令都要粘贴到终端中去执行，因此最好避免在 Shell 命令中使用任何换行操作；可以在行尾使用一个\，这样既能避免命令换行，又能提高源码的可读性。
- 建议不要在没有输出内容的 Shell 命令前加$。在命令没有输出内容的情况下，$是没有必要的，因为内容全是命令，我们不会把命令和输出的内容混淆。
- 建议在有输出内容的 Shell 命令前加上\$，这样会比较容易区分命令和输出的内容。

### 引用

- 在 Markdown 中，引用由>+引用内容来标记。

```
> 引用内容
```

语法说明：

- 多行引用也可以在每一行的开头都插入>。
- 在引用中可以嵌套引用。
- 在引用中可以使用其他的 Markdown 语法。
- 段落与换行的格式在引用中也是适用的。

使用规范：

- 建议在引用的标记符号＞之后添加一个空格。
- 建议每一行引用都使用符号＞。
- 不要在引用中添加空行。

### 转义

当我们想在 Markdown 文件中插入一些标记符号，但又不想让这些符号被渲染时，可以使用\进行转义。

语法：

```
\特殊符号
```

## 扩展语法 GFM

在众多**Markdown**扩展语法中，GitHub Flavored Markdown（简称 GFM）无疑是目前最流行的，它提供了包括表格、任务列表、删除线、围栏代码、Emoji 等在内的标记语法，本书介绍的工具基本上都支持 GFM。

### 删除线

```
~~被删除的文字~~
```

### 表情符号

使用：包裹表情代码即可。（[更多的表情符号](http://www.webpagefx.com/tools/emoji-cheat-sheet/)）

```
:表情代码:
```

### 自动链接

在标准语法中，由<>包裹的 URL 地址被自动识别并解析为超链接，使用 GFM 扩展语法则可以不使用<>包裹。

注意：自动链接只识别以 www 或http://开头的URL地址。

如果不想使用自动链接，也可以使用`包裹 URL 地址。

### 表格

语法：

```
|表头1 | 表头2 | 表头3||---- | ---- | ---- ||内容1 | 内容2 | 内容3||内容1 | 内容2 | 内容3|
```

语法说明：

- 单元格使用|来分隔，为了阅读更清晰，建议最前和最后都使用|。
- 单元格和|之间的空格会被移除。
- 表头与其他行使用-来分隔。
- 表格对齐格式
  - 左对齐（默认）：:
  - 右对齐：-:
  - 居中对齐：:-:
- 块级元素（代码区块、引用区块）不能插入表格中。

使用规范：

- 在表格的前、后各空 1 行。
- 在每一行最前和最后都使用|，每一行中的|要尽量都对齐。
- 不要使用庞大复杂的表格，那样会难以维护和阅读。

### 任务列表

```
- [ ] 未勾选- [x] 已勾选
```

语法说明：

- 任务列表以-+空格开头，由 [+空格/x+] 组成。
- x 可以小写，也可以大写，有些编辑器可能不支持大写，所以为避免解析错误，推荐使用小写的 x。
- 当方括号中的字符为空格时，复选框是未选中状态，为 x 时是选中状态。
- 注意：typora 中-和[]之间的空格最后写。

### 围栏代码块

在基础语法中，代码块使用 Tab 键或 4 个空格开头；在扩展语法中，围栏代码块使用连续 3 个`或 3 个~包裹，还支持语法高亮，可读性和可维护性更强一些。

````
​```代码片段​```或​~~~代码片段​~~~语法高亮​```javascript代码片段​```
````

语法说明：

- 围栏代码块使用连续 3 个`或 3 个~包裹，支持语法高亮并可以加上编程语言的名字。
- 建议围栏代码块被空行包裹。

### 锚点

锚点，也称为书签，用来标记文档的特定位置，使用锚点可以跳转到当前文档或其他文档中指定的标记位置。
Markdown 会被渲染成 HTML 页面，在 HTML 页面中可以通过锚点实现跳转；GitHub、GitBook 项目文档中的目录也是通过锚点实现跳转的。

```
[描点描述](#锚点名)
```

语法说明：

- 锚点名建议使用字母和数字，当然中文也是被支持的，但不排除有些网站支持得不够好。
- 锚点名是区分英文大小写的。
- 在锚点名中不能含有空格，也不能含有特殊字符。

## 排版技巧

### 关于空格

- 建议中文和英文之间加空格，中文/英文和数字之间也要加空格，不过有些编辑器和输入法（如百度输入法）会自动添加空隙，我们就没必要手动添加了，大家在使用时请多注意。

  1. 一些需要加空格的情况·

  - 英文标点符号（如，.；：？）与后面的字符之间需要加空格，与前面的字符之间不需要加空格。
  - 当在中文、英文中使用＞（半角）标识路径时，两边都需要加空格。

  2. 不加空格的情况

  - 中文标点符号和数字、中文、英文之间不需要添加空格。
  - 数字和百分号之间不需要添加空格。
  - 数字和单位符号之间不需要添加空格。
  - 英文和数字组合成的名字之间不需要添加空格。
  - 当/（半角）表示“或”、“路径”时，与前后的字符之间均不加空格。
  - 负号后不加空格。

### 全角和半角

对于很多人来说，全角符号和半角符号可能是最熟悉的陌生人，虽然它们随处可见，但大部分人都没用对。

- 全角：中文标点符号是全角，占两个字节。
- 半角：英文标点符号和数字是半角，占 1 个字节。
- 在中文排版中，要使用全角标点符号。
- 在英文排版中，要使用半角标点符号。

### 正确的英文大小写

很多人在文章、邮件甚至简历中，会把专有名词写错，虽然这并不会影响人们对内容的理解，但有时的确会让人觉得你不太“专业”。

- 专有名词要使用正确的大小写，请参考它们的官方文档。
