(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{493:function(a,e,n){"use strict";n.r(e);var t=n(26),v=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[a._v("#")]),a._v(" 作用域")]),a._v(" "),n("p",[a._v("作用域是指程序源代码中定义变量的区域。")]),a._v(" "),n("p",[a._v("作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。")]),a._v(" "),n("p",[a._v("JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。")]),a._v(" "),n("h2",{attrs:{id:"静态作用域与动态作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态作用域与动态作用域"}},[a._v("#")]),a._v(" 静态作用域与动态作用域")]),a._v(" "),n("p",[a._v("因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。")]),a._v(" "),n("p",[a._v("而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。")]),a._v(" "),n("p",[a._v("让我们认真看个例子就能明白之间的区别：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var value = 1;\n\nfunction foo() {\n    console.log(value);\n}\n\nfunction bar() {\n    var value = 2;\n    foo();\n}\n\nbar();\n\n// 结果是 ???\n")])])]),n("p",[a._v("假设JavaScript采用静态作用域，让我们分析下执行过程：")]),a._v(" "),n("p",[a._v("执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。")]),a._v(" "),n("p",[a._v("假设JavaScript采用动态作用域，让我们分析下执行过程：")]),a._v(" "),n("p",[a._v("执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。")]),a._v(" "),n("p",[a._v("前面我们已经说了，JavaScript采用的是静态作用域，所以这个例子的结果是 1。")]),a._v(" "),n("h2",{attrs:{id:"动态作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态作用域"}},[a._v("#")]),a._v(" 动态作用域")]),a._v(" "),n("p",[a._v("也许你会好奇什么语言是动态作用域？")]),a._v(" "),n("p",[a._v("bash 就是动态作用域，不信的话，把下面的脚本存成例如 scope.bash，然后进入相应的目录，用命令行执行 "),n("code",[a._v("bash ./scope.bash")]),a._v("，看看打印的值是多少。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("value=1\nfunction foo () {\n    echo $value;\n}\nfunction bar () {\n    local value=2;\n    foo;\n}\nbar\n")])])]),n("p",[a._v("这个文件也可以在 "),n("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/blob/master/demos/scope/scope.bash",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github 博客仓库"),n("OutboundLink")],1),a._v("中找到。")]),a._v(" "),n("h2",{attrs:{id:"思考题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[a._v("#")]),a._v(" 思考题")]),a._v(" "),n("p",[a._v("最后，让我们看一个《JavaScript权威指南》中的例子：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('var scope = "global scope";\nfunction checkscope(){\n    var scope = "local scope";\n    function f(){\n        return scope;\n    }\n    return f();\n}\ncheckscope();\nvar scope = "global scope";\nfunction checkscope(){\n    var scope = "local scope";\n    function f(){\n        return scope;\n    }\n    return f;\n}\ncheckscope()();\n')])])]),n("p",[a._v("猜猜两段代码各自的执行结果是多少？")]),a._v(" "),n("p",[a._v("这里直接告诉大家结果，两段代码都会打印："),n("code",[a._v("local scope")]),a._v("。")]),a._v(" "),n("p",[a._v("原因也很简单，因为JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置。")]),a._v(" "),n("p",[a._v("而引用《JavaScript权威指南》的回答就是：")]),a._v(" "),n("p",[a._v("JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。")]),a._v(" "),n("p",[a._v("但是在这里真正想让大家思考的是：")]),a._v(" "),n("p",[a._v("虽然两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？")])])}),[],!1,null,null,null);e.default=v.exports}}]);