(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{505:function(t,e,a){"use strict";a.r(e);var n=a(26),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" New")]),t._v(" "),a("p",[t._v("这个问题如果你在掘金上搜，你可能会搜索到类似下面的回答：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("new操作符做了这些事：\n1.它创建了一个全新的对象。\n2.它会被执行[[Prototype]]（也就是_proto_）链接。\n3.它使this指向新创建的对象。\n4.通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。\n5.如果函数没有返回对象类型Object（包含Function，Array，Date,RegExg，Error）,那么new表达式中的函数调用将返回该对象引用\n")])])]),a("p",[t._v("说实话，看第一遍，我是不理解的，我需要去理一遍原型及原型链的知识才能理解。所以我觉得"),a("strong",[t._v("MDN")]),t._v("[47]对 new 的解释更容易理解：")]),t._v(" "),a("p",[a("code",[t._v("new")]),t._v(" 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。"),a("code",[t._v("new")]),t._v(" 关键字会进行如下的操作：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个空的简单 JavaScript 对象（即{}）；")]),t._v(" "),a("li",[t._v("链接该对象（即设置该对象的构造函数）到另一个对象 ；")]),t._v(" "),a("li",[t._v("将步骤 1 新创建的对象作为 this 的上下文 ；")]),t._v(" "),a("li",[t._v("如果该函数没有返回对象，则返回 this。")])]),t._v(" "),a("p",[t._v("接下来我们看实现：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Dog(name, color, age) {\n  this.name = name;\n  this.color = color;\n  this.age = age;\n}\n\nDog.prototype={\n  getName: function() {\n    return this.name\n  }\n}\n\nvar dog = new Dog('大黄', 'yellow', 3)\n")])])]),a("p",[t._v("上面的代码相信不用解释，大家都懂。我们来看最后一行带"),a("code",[t._v("new")]),t._v("关键字的代码，按照上述的 1,2,3,4 步来解析"),a("code",[t._v("new")]),t._v("背后的操作。")]),t._v(" "),a("p",[t._v("第一步：创建一个简单空对象")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var obj = {}\n")])])]),a("p",[t._v("第二步：链接该对象到另一个对象（原型链）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 设置原型链\nobj.__proto__ = Dog.prototype\n")])])]),a("p",[t._v("第三步：将步骤 1 新创建的对象作为 "),a("code",[t._v("this")]),t._v(" 的上下文")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// this指向obj对象\nDog.apply(obj, ['大黄', 'yellow', 3])\n")])])]),a("p",[t._v("第四步：如果该函数没有返回对象，则返回 this")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 因为 Dog() 没有返回值，所以返回obj\nvar dog = obj\ndog.getName() // '大黄'\n")])])]),a("p",[t._v("需要注意的是如果 Dog() 有 return 则返回 return 的值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var rtnObj = {}\nfunction Dog(name, color, age) {\n  // ...\n  //返回一个对象\n  return rtnObj\n}\n\nvar dog = new Dog('大黄', 'yellow', 3)\nconsole.log(dog === rtnObj) // true\n")])])]),a("p",[t._v("接下来我们将以上步骤封装成一个对象实例化方法，即模拟 new 的操作：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('function objectFactory(){\n    var obj = {};\n    //取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数\n    var Constructor = [].shift.apply(arguments);\n    //将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法\n    obj.__proto__ = Constructor.prototype;\n    //取得构造函数的返回值\n    var ret = Constructor.apply(obj, arguments);\n    //如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象\n    return typeof ret === "object" ? ret : obj;\n}\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);