(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{403:function(s,t,a){"use strict";a.r(t);var r=a(26),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("Sass以简为美，简约至上")]),s._v(" "),a("h2",{attrs:{id:"语法格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法格式"}},[s._v("#")]),s._v(" 语法格式")]),s._v(" "),a("h3",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[s._v("#")]),s._v(" 字符串")]),s._v(" "),a("p",[s._v("字符串在CSS和SCSS中都占有重要地位。大多数的CSS值不是长度就是标识符，所以遵循固定的编码规范处理Sass中的字符串是非常重要的一项工作。")]),s._v(" "),a("h3",{attrs:{id:"编码-charset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码-charset"}},[s._v("#")]),s._v(" 编码@charset")]),s._v(" "),a("p",[s._v("为了避免潜在的字符编码问题，强烈建议在入门文件中通过@charset指令使用UTF-8编码格式。确保该指令是文件的第一条语句，并排除其他字符编码声明。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[s._v("@charset "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[s._v("#")]),s._v(" 引用")]),s._v(" "),a("p",[s._v("在Sass中字符串应该始终被单引号（‘）所包裹")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'center'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h4",{attrs:{id:"包含引号的字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含引号的字符串"}},[s._v("#")]),s._v(" 包含引号的字符串")]),s._v(" "),a("p",[s._v("如果字符串内包含了一个或多个单引号，一种解决方案就是使用双引号包裹整个字符串，从而避免使用转义字符。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@warn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'You can\\'t do that.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@warn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You can\'t do that."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#urls"}},[s._v("#")]),s._v(" URLS")]),s._v(" "),a("p",[s._v("URL 最好也用引号包裹起来;")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/logo.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量$")]),s._v(" "),a("p",[s._v("变量让值得以重用，避免了一遍遍地复制副本。最重要的是，使用变量让更新一个值变得很方便。不用查找、替换，更不用手动检索")]),s._v(" "),a("ul",[a("li",[s._v("该值至少重复出现了两次；")]),s._v(" "),a("li",[s._v("该值至少可能会被更新一次；")]),s._v(" "),a("li",[s._v("该值所有的表现都与变量有关（非巧合）。")])]),s._v(" "),a("p",[s._v("基本上，没有理由声明一个永远不需要更新或者只在单一地方使用变量。")]),s._v(" "),a("h3",{attrs:{id:"变量声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[s._v("#")]),s._v(" 变量声明")]),s._v(" "),a("p",[s._v("Sass使用$符号来标识变量。变量名可以用中划线或者下划线分隔")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\t$变量名：值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$primary-color")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #f90\n")])])]),a("h3",{attrs:{id:"引用变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用变量"}},[s._v("#")]),s._v(" 引用变量")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$primary-color")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套"}},[s._v("#")]),s._v(" 嵌套")]),s._v(" "),a("p",[s._v("父选择器的标识符&")]),s._v(" "),a("p",[s._v("子选择器器>，同层相邻组合选择器+，同层全体组合选择器~")]),s._v(" "),a("p",[s._v("嵌套属性")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// border-style border-width border-color =>border-*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border:")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("#eee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// border:1px solid #eee; border-left:0px; border-right:0px;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border:1px solid #eee ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("0px\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"导入-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入-import"}},[s._v("#")]),s._v(" 导入@import")]),s._v(" "),a("p",[a("code",[s._v("css")]),s._v("有一个特别不常用的特性，即"),a("code",[s._v("@import")]),s._v("规则，它允许在一个"),a("code",[s._v("css")]),s._v("文件中导入其他"),a("code",[s._v("css")]),s._v("文件。然而，后果是只有执行到"),a("code",[s._v("@import")]),s._v("时，浏览器才会去下载其他"),a("code",[s._v("css")]),s._v("文件，这导致页面加载起来特别慢。")]),s._v(" "),a("p",[a("code",[s._v("sass")]),s._v("也有一个"),a("code",[s._v("@import")]),s._v("规则，但不同的是，"),a("code",[s._v("sass")]),s._v("的"),a("code",[s._v("@import")]),s._v("规则在生成"),a("code",[s._v("css")]),s._v("文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个"),a("code",[s._v("css")]),s._v("文件中，而无需发起额外的下载请求。另外，所有在被导入文件中定义的变量和混合器（参见2.5节）均可在导入文件中使用。")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("sass")]),s._v("的"),a("code",[s._v("@import")]),s._v("规则并不需要指明被导入文件的全名。你可以省略"),a("code",[s._v(".sass")]),s._v("或"),a("code",[s._v(".scss")]),s._v("文件后缀")]),s._v(" "),a("h3",{attrs:{id:"使用sass部分文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用sass部分文件"}},[s._v("#")]),s._v(" 使用SASS部分文件")]),s._v(" "),a("p",[a("code",[s._v("sass")]),s._v("局部文件的文件名以下划线开头。这样，"),a("code",[s._v("sass")]),s._v("就不会在编译时单独编译这个文件输出"),a("code",[s._v("css")]),s._v("，而只把这个文件用作导入。当你"),a("code",[s._v("@import")]),s._v("一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入"),a("code",[s._v("themes/_night-sky.scss")]),s._v("这个局部文件里的变量，你只需在样式表中写"),a("code",[s._v("@import")]),s._v(" "),a("code",[s._v('"themes/night-sky";')]),s._v("。")]),s._v(" "),a("p",[s._v("局部文件可以被多个不同的文件引用。当一些样式需要在多个页面甚至多个项目中使用时，这非常有用。在这种情况下，有时需要在你的样式表中对导入的样式稍作修改，"),a("code",[s._v("sass")]),s._v("有一个功能刚好可以解决这个问题，即默认变量值。")]),s._v(" "),a("h2",{attrs:{id:"默认变量值-default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认变量值-default"}},[s._v("#")]),s._v(" 默认变量值!default")]),s._v(" "),a("h2",{attrs:{id:"嵌套导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套导入"}},[s._v("#")]),s._v(" 嵌套导入")]),s._v(" "),a("h2",{attrs:{id:"原生的css导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生的css导入"}},[s._v("#")]),s._v(" 原生的CSS导入")]),s._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),a("h3",{attrs:{id:"静默注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静默注释"}},[s._v("#")]),s._v(" 静默注释")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这种注释内容不会出现在生成的css文件中")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这种注释内容会出现在生成的css文件中 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"css标准注释格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css标准注释格式"}},[s._v("#")]),s._v(" css标准注释格式")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  color "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这块注释内容不会出现在生成的css中 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 这块注释内容也不会出现在生成的css中 */")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"混合器-mixin-》可深入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合器-mixin-》可深入"}},[s._v("#")]),s._v(" 混合器@mixin=》可深入")]),s._v(" "),a("p",[s._v("混合器用@mixin标识符定义，你可以通过"),a("code",[s._v("sass")]),s._v("的混合器实现大段样式的重用。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("rounded-corners ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-moz-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("引用混合器@include")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("notice ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px solid #00aa00"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@include")]),s._v(" rounded-corners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("混合器传参以及默认参数值")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link-colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v(":hover ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v(":visited ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认参数值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@mixin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link-colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hover")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$visited")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$normal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v(":hover ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v(":visited ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$visited")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"选择器继承-》可深入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器继承-》可深入"}},[s._v("#")]),s._v(" 选择器继承=》可深入")]),s._v(" "),a("p",[s._v("选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式(包括组合)。这个通过"),a("code",[s._v("@extend")]),s._v("语法实现。")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过选择器继承继承样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".error ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #fdd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".seriousError ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@extend")]),s._v(" .error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),a("h2",{attrs:{id:"sassscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sassscript"}},[s._v("#")]),s._v(" SassScript")]),s._v(" "),a("h3",{attrs:{id:"插值语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插值语句"}},[s._v("#")]),s._v(" 插值语句"),a("code",[s._v("${}")])]),s._v(" "),a("h2",{attrs:{id:"at-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#at-root"}},[s._v("#")]),s._v(" @at-root")]),s._v(" "),a("h2",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[s._v("#")]),s._v(" @content")]),s._v(" "),a("h2",{attrs:{id:"if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[s._v("#")]),s._v(" @if")]),s._v(" "),a("h2",{attrs:{id:"each"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#each"}},[s._v("#")]),s._v(" @each")])])}),[],!1,null,null,null);t.default=n.exports}}]);