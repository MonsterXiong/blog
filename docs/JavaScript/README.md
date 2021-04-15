# JavaScript



## 语法和数据类型

借鉴了java的大部分语法，JavaScript是区分大小写的，并使用Unicode字符集。



### 注释

分为单行注释和多行注释，但是不能嵌套注释，在代码执行过程中，注释将被自动跳过（不执行）。



### 声明

JavaScript有三种声明方式。

var

​	声明一个变量，可选初始化一个值

let

​	声明一个块作用域的局部变量，可选初始化一个值

const

​	声明一个块作用域的只读常量。



### 变量

在应用程序中，使用变量作为值得符号名。变量的名字又叫做标识符，遵守一定的规则。

一个JavaScript标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。因为JavaScript语言是区分大小写的，所以字母可以是从A到Z的大写字母和从a到z的小写字母。



### 声明变量



### 变量求值

用var或let语句声明的变量，如果没有赋初始值，则其值为undefined。

如果访问一个未声明的变量会导致抛出一个引用错误（ReferenceError）异常。

你可以使用undefined来判断一个变量是否已赋值。

数值类型环境中undefined值会被转换为NaN。

当对一个null变量求值时，空值null在数值环境中会被当作0来对待，而在布尔类型环境中会被当作false。



### 变量的作用域

在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。

ECMAScript6之前JavaScript没有语句块作用域，相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。



### 变量提升

JavaScript变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；JavaScript变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回undefined值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回undefined值。

由于存在变量提升，一个函数中所有的var语句应尽可能地放在接近函数顶部的地方，这个习惯将大大提升代码的清晰度。

在ECMAScript6中，let（const）同样会被提升到代码块的顶部但是不会被赋予初始值。在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。



### 函数提升

对于函数来说，只有函数声明会被提升到顶部，而函数表示不会被提升。



### 全局变量

全局变量是全局对象的属性，在网页中，全局对象是window，所以你可以用形如window.variable的语法来设置和访问全局变量。



### 常量（Constants）

你可以用关键字const创建一个只读的常量，命名规则和变量相同。

常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值。

常量的作用域规则与let块级作用域变量相同。若省略const关键字，则该标识符将被视为变量。

在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。

对象属性被赋值为常量是不受保护的，同样数组的被定义为常绿也是不受保护的。



### 字面量（Literals）

字面量是由语法表达式定义的常量，或通过由一定字词组成的语词表达式定义的常量，字面量是常量，其值是固定的，而且在程序脚本运行中不可更改。

- [数组字面量(Array literals)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#数组字面量(array_literals))
- [布尔字面量(Boolean literals)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#布尔字面量(boolean_literals))
- [浮点数字面量(Floating-point literals)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#浮点数字面量(floating-point_literals))
- [整数(Integers)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#整数(integers))
- [对象字面量(Object literals)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#对象字面量(object_literals))
- [RegExp literals](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [字符串字面量(String literals)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#字符串字面量(string_literals))



### 转义字符

通过在引用号前加反斜线“\”,可以在字符串中插入引号，这就是引号转义。



### 数据类型

```javascript
最新的ECMAScript标准定义了8种数据类型。
有七种基本数据类型，分别为：
Boolean,null,undefined,Number,String,Symbol,BigInt
和一种复杂数据类型
Object
```

### 判断数据类型

```
typeof，instanceof，Object.prototype.toString.call()
typeof：基本数据类型和function，object和null
instanceof：用来判断对象是不是某个构造函数的实例，会沿着原型链找
Object.prototype.toString.call()：无敌
```

### 数据类型转换

​		JavaScript是一种动态类型语言(dynamically typed language)。这意味着你在声明变量时可以不必指定数据类型，而数据类型会在代码执行时会根据需要自动转换。

字符串转数字

parseInt()和parseFloat(),一元加法运算符。



## 流程控制与错误处理



### 语句块

最基本的语句是用于组合语句的语句块。该块由一对大括号界定。

语句块通常用于流程控制，如if，for，while等等。



### 条件判断语句

条件判断语句指的是根据指定的条件所返回的结果（真或假或其它预定义的），来执行特定的语句。JavaScript支持两种条件判断语句：if...else和switch。



### 异常处理语句

你可以用throw语句抛出一个异常并且用try...catch语句捕获处理它。

- throw语句
- try...catch语句



### [异常类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#异常类型)

JavaScript 可以抛出任意对象。然而，不是所有对象能产生相同的结果。尽管抛出数值或者字母串作为错误信息十分常见，但是通常用下列其中一种异常类型来创建目标更为高效：

- [ECMAScript exceptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)
- [`DOMException`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMException) and [`DOMError`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMError)



## 循环与迭代

循环提供了一种快速和简单的方式去做一些重复的事。

循环有很多种类，但本质上它们都做得同一件事：他们把一个动作重复了很多次（实际上重复得次数有可能为0）。各种循环机制提供了不同的方法去确定循环得开始和结束。不同情况下，某一种类型循环会比其它得循环用起来更简单。

JavaScript中提供了这些循环语句：

- [for 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for_语句)
- [do...while 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_语句)
- [while 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#while_语句)
- [labeled 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#labeled_语句)
- [break 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#break_语句)
- [continue 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#continue_语句)
- [for...in 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_语句)
- [for...of 语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_语句)



## 函数

函数是JavaScript中的基本组件之一。一个函数是JavaScript过程—一组执行任务或计算值的语句。要使用一个函数，你必须将其定义在你希望调用它的作用域内。

一个JavaScript函数用function关键字定义，后面跟着函数名和圆括号。



## 定义函数



### 函数声明

一个函数定义（也称为函数声明，或函数语句）有一些列的function关键字组成，依次为：

- 函数的名称
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的JavaScript语句，用大括号{}括起来。



### 函数表达式

虽然函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是匿名的；它不必有一个名称，然而，函数表达式也可以提供函数名，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪识别该函数。



### 调用函数

定义一个函数并不会自动地执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。调用函数才会以给定的参数真正执行这些动作。

函数一定要处于调用它们的域中，但是函数的声明可以被提升（出现在调用语句之后）。

函数域是指函数声明时的所在的地方，或者函数在顶层被声明时，指整个程序。

函数可以被递归，就是说函数可以调用其本身。

还有其他的方式来调用函数。常见的一些清醒是某些地方需要动态调用函数，或者函数的实参数量是变化的，或者调用函数的上下文需要指定为在运行时确定的特定对象。显然，函数本身就是对象，因为这些对象也有方法。apply（）



### 函数作用域

在函数内定义的变量不能再函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。



## 作用域和函数堆栈



### 递归

一个函数可以指向并调用自身，有三种方法可以达到这个目的：

1. 函数名
2. arguments.callee
3. 作用域下的一个指向该函数的变量名



调用自身的函数我们称之为递归函数。在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环或者无限递归）。



### 嵌套函数和闭包



你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以“继承”容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

- 内部函数只可以在外部函数中访问
- 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

由于内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数



### 保存变量

一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的inside没有再被引用时，内存才会被释放。



### 多层嵌套函数

函数可以被多层嵌套。例如，函数A可以包含函数B，函数B可以再包含函数C。B和C都形成了闭包，所以B可以访问A，C可以访问B和A。因此，闭包可以包含多个作用域；他们递归式的包含了所有包含它的函数作用域。这个称之为作用域链。



### 命名冲突

当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。



## 闭包

闭包是JavaScript中最强大的特性之一。JavaScript允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。

但是外部函数却不能狗访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。



### 使用arguments对象

函数的实际参数会被保存在一个类似数组的arguments对象中。在函数内，你可以按如下方式找出传入的参数：

```
arguments[i]
```

其中i是参数的序数编号（数组索引），以0开始。所以第一个传来的参数会是arguments[0]。参数的数量是由arguments.length表示。

使用arguments对象，你可以处理比声明的更多的参数来调用函数。这在你事先不知道会需要将多少个参数递给函数时十分有用。你可以用arguments.length来获得实际传递给函数的参数的数量，然后用arguments对象来取得每个参数。

```
arguments变量只是“类数组对象”，并不是一个数组。称其为类数组对象是说它有一个索引编号和length属性。尽管如此，它并不拥有全部的Array对象的操作方法。
```



## 函数参数

从ECMAScript6开始，有两个新的类型的参数：默认参数，剩余参数。



### 默认参数

在JavaScript中，函数参数的默认值是undefined。然而，在某些情况下设置不同的默认值是有用的。这时默认参数可以提供帮助。



在过去，用于设定默认参数的一般策略是在函数的主体中测试参数值是否为undefined

[web](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)





- 数组 API
- 字符串 API
- 类型转换机制
- ==与===
- 深/浅拷贝
- 闭包
- 原型、原型链、特点
- 继承
- this
- 执行上下文和执行栈
- 事件模型
- 事件冒泡、事件捕获
- typeof 与 instanceof
- 时间代理
- new
- ajax 原理，实现
- bind、call、apply 区别
- 事件循环
- 正则表达式
- DOM
- BOM
- 尾递归
- 内存泄漏
- 本地存储
- 函数式编程，优缺点
- 函数缓存
- 精度丢失
- 节流、防抖
- 一个元素是否在可视区域
- 上拉加载、下拉刷新
- 断点续传
- 单点登录
- web 攻击
- 类名查找
- 声明式与命令式
- 函数式编程中纯函数
- 函数式编程中柯里化
- 函数式编程中代码组合
- 前端性能监控数据
- H5 与客户端交互的方式
- 前端缓存
- 模块化
- 攻击手段，防范
