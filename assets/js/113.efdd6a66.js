(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{497:function(v,_,t){"use strict";t.r(_);var n=t(26),l=Object(n.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"闭包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[v._v("#")]),v._v(" 闭包")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("闭包")]),v._v(" "),t("p",[v._v("1.如何产生闭包?")]),v._v(" "),t("p",[v._v("当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包")]),v._v(" "),t("p",[v._v("2.闭包到底是什么？")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("使用 chrome 调试查看")])]),v._v(" "),t("li",[t("p",[v._v("理解一：闭包是嵌套的内部函数（绝大部分人）")])]),v._v(" "),t("li",[t("p",[v._v("理解二：包含被引用变量（函数）的对象（极少数人）")])]),v._v(" "),t("li",[t("p",[v._v("注意：闭包存在嵌套的内部函数中")]),v._v(" "),t("p",[v._v("3.产生闭包的条件？")])]),v._v(" "),t("li",[t("p",[v._v("函数嵌套")])]),v._v(" "),t("li",[t("p",[v._v("内部函数引用了外部函数的数据（变量/函数）")])])])]),v._v(" "),t("li",[t("p",[v._v("理解闭包")]),v._v(" "),t("p",[v._v("作用域：全局作用域和函数作用域")]),v._v(" "),t("p",[v._v("闭包就是 fn2，既能够读取其他函数内部变量的函数，定义在一个函数内部的函数")]),v._v(" "),t("p",[v._v("闭包最大的特点：就是他可以记住诞生的环境，比如 fn2 记住了它诞生的环境是 fn1，所以在 fn2 中可以得到 fn1 中的内部变量")]),v._v(" "),t("p",[v._v("本质上：闭包就是函数内部和函数外部链接的一座桥梁")])])]),v._v(" "),t("ol",[t("li",[v._v("闭包的用途")])]),v._v(" "),t("p",[v._v("一：计数器")]),v._v(" "),t("p",[v._v("作用：读取函数内部的变量，这些变量始终在内存中，使用闭包小心内存泄漏")]),v._v(" "),t("p",[v._v("二：闭包能够封装对象的私有属性和方法")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("闭包的注意点")])]),v._v(" "),t("p",[v._v("一：使用闭包使得函数中的变量始终在内存中，内存消耗很大，所以不能滥用闭包，否则会造成页面性能问题，在 IE 中可能导致内存泄漏 delete null")]),v._v(" "),t("p",[v._v("每个父函数调用完成，都会形成新的闭包，父函数中的变量始终会在内存中，相当于缓存，小心内存的消耗问题")]),v._v(" "),t("p",[v._v("总结：闭包需要三个条件")]),v._v(" "),t("ol",[t("li",[v._v("函数嵌套")]),v._v(" "),t("li",[v._v("访问所在的作用域")]),v._v(" "),t("li",[v._v("在所在作用域外调用")])]),v._v(" "),t("h2",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[v._v("#")]),v._v(" 其它")]),v._v(" "),t("p",[t("strong",[v._v("闭包是指有权访问另一个函数作用域内变量的函数")]),v._v("，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以 访问到当前函数的局部变量。")]),v._v(" "),t("p",[v._v("闭包有两个常用的用途。")]),v._v(" "),t("ul",[t("li",[v._v("闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。")]),v._v(" "),t("li",[v._v("函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("function a(){\n    var n = 0;\n    function add(){\n       n++;\n       console.log(n);\n    }\n    return add;\n}\nvar a1 = a(); //注意，函数名只是一个标识（指向函数的指针），而（）才是执行函数；\na1();    //1\na1();    //2  第二次调用n变量还在内存中\n")])])]),t("p",[v._v("其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。")])])}),[],!1,null,null,null);_.default=l.exports}}]);