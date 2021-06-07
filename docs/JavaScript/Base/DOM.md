# 什么是 DOM？

文档对象模型（document object model）是 HTML 和 XML 文档的编程接口。他提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将 web 页面和脚本或程序语言连接起来。

一个 web 页面是一个文档。这个文档可以在浏览器窗口或作为 HTML 源码显示出来。但上诉两个情况中都是同一份文档。文档对象模型（DOM）提供了对同一份文档的另一种表现，存储和操作的方式。DOM 是 web 页面的完全的面向对象表述，它能够使用如 JavaScript 等脚本语言进行修改。

[W3C DOM](https://dom.spec.whatwg.org/)和[WHATWG DOM](https://dom.spec.whatwg.org/)标准在绝大多数现代浏览器中都有对 DOM 的基本实现。许多浏览器提供了对 W3C 标准的扩展，所以在使用时必须注意，文档可能会在多种浏览器上使用不同的 DOM 来访问。

所有操作和创建 web 页面的属性，方法和事件都会被组织成对象的形式（例如，`document`对象表示文档本身，table 对象实现了特定的`HTMLTableElement` DOM 接口来访问 HTML 表格等）。本文会介绍基于 Gecko 浏览器的 DOM 面向对象引用。

# DOM 和 JavaScript

DOM 并不是一个编程语言，但如果没有 DOM，JavaScript 语言也不会有任何网页，XML 页面以及涉及到的元素的概念或模型。在文档中的每个元素——包括整个文档，文档头部，文档中的表格，表头，表格中的文本——都是文档属于的文档对象模型（DOM）的一部分，因此它们可以使用 DOM 和一个脚本语言如 JavaScript,来访问和处理。

开始的时候，JavaScript 和 DOM 是交织在一起的，但是它们最终演变成了两个独立的实体。JavaScript 可以访问和操作存储在 DOM 中的内容，因此我们可以写成这个近似的等式：

```
API（web或XML页面）=DOM + JS（脚本语言）
```

DOM 被设计成与特定编程语言相独立，使文档的结构化表述可以通过单一，一致的 API 获得。尽管我们在本参考文档中会专注于使用 JavaScript，但 DOM 也可以使用其他的语言来实现。

# 如何访问 DOM？

在使用 DOM 时，您不需要做任何特殊的操作。不同的浏览器都对 DOM 不同的实现，这些实现对当前的 DOM 标准而言，都会呈现出不同程度的一致性，每个 web 浏览器都会使用一些文档对象模型，从而使页面可以被脚本语言访问。

当您在创建一个脚本时-无论是使用内嵌`<script>`元素或者使用在 web 页面脚本加载的方法——您都可以使用`document`或`window`元素的 API 来操作文档本身或获取文档的子类（web 页面中的各种元素）

您的 DOM 编程代码可能会像下面的例子一样非常简单，如使用`window`对象的`alert()`函数显示一个警告信息，或者使用比较复杂的方法来创建一个新的内容

```html
<body onload="window.alert('welcome to my home page!');"></body>
```

除了定义 JavaScript 的`<script>`元素外，当文档被装载（以及当整个 DOM 可以被有效使用时），JavaScript 可以设定一个函数来运行。下面的函数会创建一个新的 H1 元素，为元素田家庵文本，并将 H1 添加在文档树中。

```html
<html>
  <head>
    <script>
      // run this function when the document is loaded
      window.onload = function() {
        // create a couple of elements
        // in an otherwise empty HTML page
        heading = document.createElement("h1");
        heading_text = document.createTextNode("Big Head!");
        heading.appendChild(heading_text);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

# 重要的数据模型

本参考文档会试图以尽可能简单的方式去描述各种对象和类型。但在 API 中传入的不同的数据类型需要我们去注意。为简单起见，在 API 参考文档中的语法实例通常会使用`element(s)`指代节点，使用`nodeList(s)`或`element(s)`来指代节点数组，使用`attribute(s)`来指代属性节点。

| `document`     | 当一个成员返回`document`对象（例如，元素的`ownerDocument`属性返回它所属于的`document`），这个对象就是 root `document`对象本身。[DOM document Reference](https://developer.mozilla.org/en-US/docs/Web/API/document)一章对`document`对象进行了描述                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `element`      | `element`是指由 DOM API 中的成员返回的类型为`element`的一个元素或节点。例如，[document.createElement()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)方法会返回一个`node`的对象引用，也就是说这个方法返回了 DOM 中创建的`element`。element 对象实现了 DOM `Element`接口以及更基本的`Node`接口，参考文档将两者包含在内。 |
| `nodeList`     | nodeList 是一个元素的数组，如从 document.getElementsByTagName()方法返回的就是这种类型。nodeList 中的条目又通过下标有两种方式进行访问： 1.list.item(1) 2. list[1] 两种方式是等价的，第一种方式中 item()是 nodeList 对象中的单独方法。后面的方式则使用了经典的数组语法来获取列表中的第二个条目。                                                     |
| `attribute`    | 当 attribute 通过成员函数（例如，通过 createAttribute()方法）返回时，它是一个为属性暴露出专门接口的对象引用。DOM 中的属性也是节点，就像元素一样，只不过您可能会很少使用它                                                                                                                                                                          |
| `namedNodeMap` | namedNodeMap 和数组类似，但是条目是由 name 或 index 访问的，虽然后一种方式仅仅是为了枚举方便，因为在 list 中本来就没有特定的顺序。出于这个目的，namedNodeMap 有一个 item()方法，你也可以从 namedNodeMap 添加或移除条目。                                                                                                                           |

# DOM 接口

本指南对你可以用来操作 DOM 层级的对象以及事务进行了介绍。例如 HTML form 元素从 HTMLFormElement 中获取它的 name 属性，从 HTMLElement 接口中获取 className 属性，在上面情况中，您要获取的属性都只在 form 对象中。

但是由 DOM 实现的对象和接口间的关系是容易被混淆的，因此本节会尝试取对 DOM 标准中的一些常用的接口进行说明，以及它们是怎样生效的。

# 接口以及对象

许多对象都是实现了多个接口。例如，table 对象实现了 HTML Table Element Interface,其中包括 createCaption 和 insertRow 方法。但由于 table 对象也是一个 HTML 元素，table 也实现了 Element 接口（在 DOM element Reference 一章有对应描述）。最后，由于 HTML 元素对 DOM 来说也是组成 web 页面或 XML 页面节点树中的一个节点，table 元素也实现更基本的 Node 接口，element 对象也继承这个接口。

正如下面的例子，当你得到一个 table 对象的引用时，你经常会轮流使用对象实现的三个不同接口的方法，但并不知其所以然。

```javascript
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/Element interface
for (var i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if (tableAttrs[i].nodeName.toLowerCase() == "border") table.border = "1";
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

# DOM 中核心接口

本节列出了在 DOM 中最常用的一些接口。此外并不会描述这些 API 在做什么，但是会让你了解当你使用 DOM 时常用的各种方法和属性。这些常用的 API 在本文档最后的 DOM Examples 章节中（包含更长的实例）中有使用。

您在 DOM 编程时，通常使用的最多的就是 Document 和 window 对象。简单的说，window 对象表示浏览器中的内容，而 document 对象是文档本身的根节点。Element 继承了通用的 Node 接口，将这两个接口结合后就提供了许多方法和属性可以供单个元素使用。在处理这些元素所对应的不同类型的数据时，这些元素可能会有专用的接口，如上节中的 table 对象的例子。

下面是在 web 和 XML 页面脚本中使用 DOM 时，一些常用的 API 简要列表。

- document.getElementById(id)
- document.getElementsByTagName(name)
- document.createElement(name)
- parentNode.appendChild(node)
- element.innerHTML
- element.style.left
- element.setAttribute()
- element.getAttribute()
- element.addEventListener()
- window.content
- window.onload
- window.dump()
- window.scrollTo()

# 测试 DOM API

本文档提供了每一个接口的样本示例，您可以在自身进行 web 开发时使用。在有些情况下，样例是一个完整的 HTML 页面，通过使用`<script>`元素标签进行 DOM 访问；包含必须的接口（如 buttons）来触发表单中的脚本，以及 DOM 所操作的 HTML 元素。此时，您可以将实例进行剪切和复制到一个新的 HTML 文档中，保存完成后，在浏览器中运行该实例。

然而在一些情况下，例子会更简洁。想要运行那些仅仅用来展示接口之间基本关系的示例，你可能会想创建一个测试页面，在里面你可以通过脚本使用这些接口。下面这个非常简单的网页在 header 中提供了一个`<script>`元素，这里面你可以使用测试接口的函数，一些你可以获取、设置或者操纵的 HTML 元素及其元素，以及必须的 web user 接口来从浏览器调用这些接口。

你可以使用这个测试页面代码，也可以自己创建一个类似的页面来测试感兴趣的 DOM 接口，观察他们是如何在浏览器平台上面工作的。你可以根据需要更新 test()函数里的内容，创建更多的 button 或者任何其他元素。

```html
<html>
  <head>
    <title>DOM Tests</title>
    <script type="application/javascript">
      function setBodyAttr(attr, value) {
        if (document.body) eval("document.body." + attr + '="' + value + '"');
        else notSupported();
      }
    </script>
  </head>
  <body>
    <div style="margin: .5in; height: 400;">
      <p>
        <b><tt>text</tt>color</b>
      </p>
      <form>
        <select
          onChange="setBodyAttr('text',
        this.options[this.selectedIndex].value);"
        >
          <option value="black">black </option
          ><option value="darkblue">darkblue </option></select
        >

        <p>
          <b><tt>bgColor</tt></b>
        </p>
        <select
          onChange="setBodyAttr('bgColor',
        this.options[this.selectedIndex].value);"
        >
          <option value="white">white </option
          ><option value="lightgrey">gray </option></select
        >

        <p>
          <b><tt>link</tt></b>
        </p>
        <select
          onChange="setBodyAttr('link',
        this.options[this.selectedIndex].value);"
        >
          <option value="blue">blue </option
          ><option value="green">green </option></select
        >

        <small>
          <a href="http://www.brownhen.com/dom_api_top.html" id="sample">
            (sample link)</a
          ></small
        ><br />
      </form>
      <form>
        <input type="button" value="version" onclick="ver()" />
      </form>
    </div>
  </body>
</html>
```

为了在单个页面内测试大量接口，比如会影响网页颜色的一系列属性，你可以创建一个类似的测试页面，里面有一个全面的控制台，包含了 button、textfield 和其他 HTML 元素。下面的截图可以给你一些启发如何来组合使用这些接口。

![Image:DOM_Ref_Introduction_to_the_DOM.gif](http://img.liuxiongcheng.top//qiniu_picGo/DOM1.gif)

在这个例子中，下拉菜单可以动态更新 DOM 可以改变的网页部件，比如背景颜色（bgColor),链接的颜色（aLink),文字的颜色(text)。当然，设计你的测试页面，测试这些你看到的接口，对你学习使用 DOM 更有重要意义。

## 其它

（1）创建新节点

```
  createDocumentFragment()    //创建一个DOM片段
  createElement()   //创建一个具体的元素
  createTextNode()   //创建一个文本节点
```

（2）添加、移除、替换、插入

```
appendChild(node)
removeChild(node)
replaceChild(new,old)
insertBefore(new,old)
```

（3）查找

```
getElementById();
getElementsByName();
getElementsByTagName();
getElementsByClassName();
querySelector();
querySelectorAll();
```

（4）属性操作

```
getAttribute(key);
setAttribute(key, value);
hasAttribute(key);
removeAttribute(key);
```

相关资料：

**《DOM 概述》**[18]

**《原生 JavaScript 的 DOM 操作汇总》**[19]

**《原生 JS 中 DOM 节点相关 API 合集》**[20]
