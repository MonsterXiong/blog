# 概要

## shim 和 polyfill

一个 shim 是一个库,它将一个新的 API 引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现

一个 polyfill 就是一个用在浏览器 API 上的 shim.我们通常的做法是先检查当前浏览器是否支持某个 API, 如果不支持的话就加载对应的 polyfill.然后新旧浏览器就都可以使用这个 API 了.

例如：有些旧浏览器不支持 Number.isNaN 方法,那咱们就给它添加上去，所谓 Polyfill 就是这样解决 API 的兼容问题的。

```js
if (!Number.isNaN) {
  Number.isNaN = function(num) {
    return num !== num;
  };
}
```

## 函数

```js
// 1.什么是函数？
//  实现特定功能的n条语句的封装体，只有函数是可以执行的，其它类型的数据不能执行
// 2.为什么要用函数？
//  提高代码复用，便于阅读交流
// 3.如何定义函数？
// 函数声明
// function fn1 (){
//     console.log("fn()");
// }
// 表达式
// var fn2 = function (){
//     console.log('fn2()')
// }
// 区别：变量提升
// 4.如何调用（执行）函数？
// 直接调用
// test()
// obj.test()通过对象调用
// new test()new调用
// test.call/apply(obj)相当于obj.test()，临时让test成为obj的方法进行调用，可以让一个函数成为任意对象的方法调用

/**
 * 编写程序实现下列功能需求
 * 1.根据年龄输出对应的信息
 * 2.如果小于18，输出：未成年，再等等
 * 3.如果大于60，输出：算了吧！
 * 4.其它，输出：刚好
 **/
function showInfo(age) {
  if (age < 18) {
    console.log("未成年，再等等");
  } else if (age > 60) {
    console.log("算了吧");
  } else {
    console.log("刚好");
  }
}

showInfo(12);
showInfo(65);
showInfo(25);

const obj = {};
function test() {
  this.name = "Monster";
}
test.call(obj);
console.log(obj.name);
```

### 回调函数

```js
//  什么函数才是回调函数？
// 1.你定义的
// 2.你没有调用
// 3.但最终它执行了

//  常见的回调函数？
// dom事件回调函数
// 定时器回调函数
// ajax请求回调函数（待补充）
// 生命周期回调函数（待补充）

document.getElementById("btn").onclick = function() {
  dom事件回调函数;
  alert(this.innerHTML);
};

// 定时器
// 超时定时器
setTimeout(function() {
  定时器回调函数;
  console.log("到点了");
}, 2000);
// 循环定时器
```

### IIFE

```js
// 理解全程：immediately-Invoked Fucntion Expression
// 作用

(function() {
  //匿名函数自调用
  console.log("111");
})();
```

### 箭头函数

```js
let elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

let result1 = elements.map(function(element) {
  return element.length;
}); // 返回数组：[8, 6, 7, 9]
console.log("result1: ", result1);
// 上面的普通函数可以改写成如下的箭头函数
let result2 = elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]
console.log("result2: ", result2);
// 当箭头函数只有一个参数时，可以省略参数的圆括号
let result3 = elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]
console.log("result3: ", result3);
// 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
let result4 = elements.map((element) => element.length); // [8, 6, 7, 9]
console.log("result4: ", result4);

// 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
// 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
// 可以替换成任意合法的变量名
let result5 = elements.map(({ length: lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]
console.log("result5: ", result5);

let result6 = elements.map(({ length }) => length);
console.log("result6: ", result6);

var func = (x, y) => x + y;
var yyy = func(1, 2);
console.log("yyy: ", yyy);

function foo(params) {
  // let x = arguments
  console.log(arguments);
}

foo([1, 2, 3, 4], 5, 6);

var fact = (x) => (x == 0 ? 1 : x * fact(x - 1));
var res = fact(5); // 120
console.log("res: ", res);
```

## 扩展运算符 spread(...)

作用：用于取出对象或者数组中的所有可遍历属性，然后拷贝到当前对象或数组中。

常见场景：

- 复制，合并，自定义
- 字符串变数组

注意：如果对象自定义属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉

数组

1. 复制数组(浅拷贝)
2. 合并数组
3. 与解构赋值结合
4. 将字符串转为真正的数组
5. 实现了 Iterator 接口的对象：任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组，对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组
6. Map 和 Set 结构，Generator 函数：扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要有 Iterator 接口的对象，都可以使用扩展运算符，Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。

> 解构的作用是可以快速取得数组或对象当中的元素或属性，而无需使用 arr[x]或者 obj[key]等传统方式进行赋值

```js
//  扩展运算符是三个点(...)。

// 对象扩展运算符用于取出参数对象的所有可遍历属性，然后拷贝到当前对象之中
const a = {
  x: 3,
  y: 4,
};

b = { ...a };

//  合并两个对象=>自定义属性
//如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。

//  数组扩展运算符
//  数组是复合的数据类型，如果直接复制，只是复制了底层数据解耦股的指针，而不是克隆一个全新的数组。
//  复制数组，合并数组，字符串变数组
let arr1 = [1, 2];
let arr2 = [3, 4];
arr3 = [..."hello"];
console.log("arr3: ", arr3);

//  解构的作用是可以快速取得数组或对象当中的元素或属性，而无需使用arr[x]或者obj[key]等传统方式进行赋值

let map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
console.log(map.keys(), map.values());
let arr = [...map.keys(), ...map.values()];
console.log("arr: ", arr);

function* generator() {
  yield 1;
  console.log("1");
  yield 2;
  console.log("2");
  yield 3;
  console.log("3");
}
// const arr5 = [...go()]
// console.log(arr5)
let iterator = generator();
iterator.next();
iterator.next();
iterator.next();
```

## 判断数据类型

### typeof

typeof 是一个运算符，后接操作数，返回一个字符串，表示未经计算的操作数的类型，有两种使用方式：

- typeof(operand)
- typeof operand

它可以用来判断`Number`,`String`,`Boolean`,`Undefined`,`Symbol`,`BigInt`,`Function`，`Object`，除了 null 以外的种中基本数据类型以及 function 和 object。

| 类型      | 结果        |
| --------- | ----------- |
| Number    | 'number'    |
| String    | 'string'    |
| Boolean   | 'boolean'   |
| Undefined | 'undefined' |
| Object    | 'object'    |
| Function  | 'function'  |
| Symbol    | 'symbol'    |
| BigInt    | 'bigint'    |

#### 原理

因为 js 在底层存储变量的时候，会在变量的机器码的低位 1-3 位存储类型信息：

1. 000：对象
2. 010：浮点数
3. 100：字符串
4. 110：布尔值
5. 1 整数
6. 特例
   - null 所有机器码均为 0
   - undefined:用-2^30 整数来表示

typeof 是通过机器码判断类型，由于 null 的机器码均为 0，该机器码和对象一样，因此被当作对象来看待，所以通过 typeof 是不能够区分对象还有 null 的。

#### 总结

引用类型：除了 function 返回 function 类型外，其他都返回 object。

基本数据类型：除了 null 以外，都可进行判断

### instanceof

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上，返回值为布尔值，用于指示一个变量是否属于某个对象的实例；

```js
// 语法
object instanceof constructor;
```

#### 原理

instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 protype，如果查找失败，则会返回 false。

1. 获取右边变量的显示原型，right.prototype
2. 获取左边变量的隐式原型，left.\_\_proto\_\_或者 Object.getPrototypeOf(left)
3. 进行判断，left.\_\_proto**.\_\_proto**....===right.prototype,相等则返回 true，否则 false

#### 缺点

**[]的原型指向 Array.prototype，间接指向 Object.prototype, 因此 [] instanceof Array 返回 true， [] instanceof Object 也返回 true。**

#### 总结

**instanceof 检测的是原型，只能用来检测两个对象是否在一条原型链上，并不能检测出对象的具体类型。**

### constructor

constructor 是原型 prototype 的一个属性，当属性被定义时，js 引擎会为函数添加原型 prototype,并且这个 prototype 中 constructor 属性指向函数引用，因此重写 prototype 会丢失原来的 constructor。

#### 原理

当一个函数 F 被创建时，JS 引擎会为其添加 prototype 原型，然后在原型上添加一个 constructor 属性，并让其指向 F 的引用。也就是说 F.prototype.constructor === F // ---> true
当执行 var f = new F() 这时候 F 被当做构造函数使用，这时候 F 原型上的 constructor 就会被转移到了实例对象 f 上，f.constructor === F // --> true

#### 总结

- null 和 undefined 无 constructor，这种方法判断不了
- 如果时自定义对象，重写 prototype 之后，原有的 constructor 会丢失，为了规范开发，在重写对象原型时一般都需要重新给 constructor 赋值，以保证对象实例的类型不被篡改。

### Object.prototype.toString.call()

toString 方法默认返回其调用者的具体类型，更严格的讲是 toString 运行时，this 指向的对象类型。
但是需要注意的是，必须要通过 Object.prototype.toString 这种方法来查找，不能直接使用 toString，从原型链的角度讲，所有对象的原型链最终都指向了 Object，按照 JS 变量查找规则，其他对象也是可以直接访问到 Object 的 toString 方法的，但是事实上，大部分对象都已经实现了自身的 toString 方法，这样就可能导致 Object 的 toString 被终止查找，所以我们使用 call 方法来强制执行 Object 的 toString 方法

toString()是 Object 的原型方法，调用该方法，默认返回当前对象的[[Class]]，这是一个内部属性，其格式为[object Xxx]，其中 Xxx 就是对象的类型。

对于 Object 对象，直接调用 toString()就能返回[object Object]，而对于其他对象，则需要通过 call/apply 来调用才能返回正确的类型信息。

## 判断数组的方法

- instanceof
- \_\_proto\_\_
- constructor
- Object.prototype.toString.call()
- Array.isArray

## 类数组转数组

> 一个拥有 length 属性和若干索引属性的对象就可以成为类数组对象，常见的类数组对象有 arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有 length 属性值，代表可接收的参数个数。

- 通过 call 调用数组的 slice 方法来实现转换

```js
Array.prototype.slice.call(arrayLike);
```

- 通过 call 调用数组的 splice 方法来实现转换

```js
Array.prototype.splice.call(arrayLike, 0);
```

- 通过 apply 调用数组的 concat 方法来实现转换

```js
Array.prototype.concat.apply([], arrayLike);
```

- 通过 Array.from 方法来实现转换

```js
Array.from(arrayLike);
```

## 变量声明的方式

- var
- let
- const
- function
- class
- import

### var

1. 没有块的概念，可以跨块访问，不能跨函数访问；
2. 污染全局变量
3. 存在变量提升

> 变量提升：先使用变量稍后再声明变量而不会引发异常，JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 undefined 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。

### let

> 在 ES6 提出了块的概念，新增了块级作用域

1. let 声明的变量只在它所在的代码块有效；
2. 不存在变量提升。需要先声明后使用，否则会报错；
3. 存在暂时性死区。在代码块内，使用 let 命令声明变量之前，该变量都是不可用的；
4. 不允许重复声明

### const

> let 的特点，const 都有，不同的是 const 声明就必须初始化，一旦声明就不能改变（指的是内存地址不能改变）

const 实际上保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于简单类型的数据而言，值就保存在变量指向的内存地址中，因此等同于常量。对于引用类型的数据而言，变量指向的内存地址保存的只是一个指针，const 只能保证这个指针是固定的，指向的数据结构不受控制，如果想保证引用类型的值，可以使用 Object.freeze()方法，该方法使对象的原始属性不可变，但仍然可以更改嵌套对象。为了使对象完全不可能，通过将嵌套对象上的所有属性冻结可以达到效果。

### function

> function 命令用于定义一个函数

1. 函数声明后不会立即执行，需要调用才可执行
2. 对支持 ES5 和 ES6 浏览器环境在块作用域内有一定的区别，避免在块级作用域内声明后函数。

### class

> ES6 语法引入了 class 关键字，用来定义类，该写法相比于对象原型的方式有以下特点

1. 写法更清晰
2. 更像面向对象编程

### import

> ES6 在语言标准的层面上实现了模块功能，其中 import 命令就是用于加载模块，然后输出变量

1. import 命令接收一对大括号，里面的变量名必须与被导入的模块对外接口的名称相同；
2. 用 as 关键字命令输入可将输入的变量名重命名。
3. import 命令输入的变量都只是只读的；
4. import 命令具有提升效果，会提升到整个模块的头部，首先执行（因为 import 命令是在编译阶段执行的）。
5. import 是静态执行，不能使用表达式和变量。
6. import 会执行所加载的模块。

## 基本数据类型和引用数据类型

### 基本类型

1. 基本类型的访问是按值访问的；
2. 不能添加属性和方法；
3. 基本类型的变量存放在栈区，包括变量标识符和变量的值。（栈区不会设置太大，主要用来存基本类型）
4. 基本类型的复制就是在栈内存中开辟一个新的存储区域来存储新的变量
5. 基本类型的比较是值比较

### 引用类型

> 引用类型包含 3 类：
>
> 1. 基本引用类型：Object、Array、RegExp、Date、Function
> 2. 基本包装类型：String、Number、Boolean
> 3. 单体内置对象：Global、Math

1. 引用类型的值是按引用访问的；
2. 引用蕾西可以拥有属性和方法，且可动态改变；
3. 存储需要内存的栈区和堆区，其中栈区保存标量标识符和指向内存中该对象的指针
4. 引用类型的比较是引用的比较；
5. 引用类型的复制将复制引用地址

### 为什么需要栈堆两个存储空间

因为 JS 引擎需要用栈来维护程序执行期间上下文的状态（调用栈），如果栈空间太大的话（即所有数据都存储在栈空间中），会影响上下文的切换效率，进而影响整个程序的执行效率，所以通常情况下栈空间不会设置太大，用于存储基本类型这样的小数据，而引用类型将存储到堆中。

### 包装对象

> JS 的数值，布尔，字符串类型的变量，在一定条件下，也可以自动变成对象，这就是原始类型的包装对象，包装对象是一种特殊的引用类型，它与引用类型的主要区别在于生命周期

1. 一般的引用类型在使用 new 创建实例时，在执行流离开当前作用域之前一直都保存在内存中；
2. 包装类型的对象只存在该行代码的执行瞬间，然后会被立即销毁（也意味着在运行时不能为基本类型添加属性和方法）

#### 包装对象后台执行流程

> 基本类型中的 String、Number、Boolean 在调用属性和方法的时候，整个过程可以简化为三步：

1. 创建一个对象类型的实例
2. 调用该实例对象上的特定方法
3. 销毁该实例

```js
const str = "abc";
const strNew = str.substring(0, 2);

// 在运行str.substring(0,2)的时候其实偷偷执行了以下三步
let strObj = new String(str);
const strNew = strObj.substring(0, 2);
strObj = null;
```

#### 扩展

1. 包装对象和同样的原始类型的值相等吗？

> 不相等。因为包装对象是引用类型，原始类型是基本类型；包装对象最大的目的，首先是使得 JavaScript 的对象涵盖所有的值，其次使得原始类型的值可以方便地调用某些方法

2. 如何给基本类型添加属性和方法？

> 在基本包装对象的原型下面添加，每个对象都有原型

3. 同一个字符串调用两次相同的方法其包装对象相等吗？

> 不相等。调用结束后，包装对象实例会自动销毁，这意味着，下一次调用字符串的属性时，实际是调用一个新生成的对象，而不是上一次调用时生成的那个对象，这也说明了为什么不能直接给字符串、数字、布尔值添加属性和方法

## JS 代码执行过程

V8 引擎执行 JS 代码的过程：

1. 词法分析，该步骤是将一行行的源码拆解成一个个 token（token 指的是语法上不可能再分的、最小的单个字符或字符串）；
2. 语法分析，作用是将生成的 token 数据根据语法规则转换为 AST；
3. 有了 AST 之后，V8 就会生成这段代码的执行上下文
4. 解释器根据 AST 生成字节码（字节码是介于 AST 和机器码之间的一种代码）
5. 生成字节码之后进行执行阶段，解释器会解释执行。在执行字节码的过程中，如果发现热点代码（例如一段代码被重复执行多次），后台的编译器就会通过 TurboFan 把这段热点的字节码编译为高效的机器码，然后在执行这段优化的代码时，只需执行编译后的机器码即可，提高代码的执行效率。

## 函数的执行过程

1. 确定执行环境，当 JS 执行全局代码的时候，回创建全局执行上下文（整个页面的生命周期内，全局执行上下文只有一份）；在调用一个函数的时候会创建该函数的执行上下文（执行环境）。将多个执行上下文管理起来的就是调用栈（调用栈就是用来管理函数调用关系的一种数据结构）
2. 创建阶段，函数执行前会完成一些初始化操作，就是创建阶段，该阶段主要进行生成变量对象、建立作用域链、确定 this 指向，为后续执行阶段做准备。
3. 执行阶段，一切准备工作做好之后就进行代码执行阶段，该阶段将完成变量赋值、函数引用及执行其它代码。
4. 垃圾回收，当函数执行完毕之后，会从调用栈中弹出、销毁、等待浏览器的垃圾回收。

## 执行上下文

> JS 标准把一段代码（包括函数）执行所需的所有信息定义为“执行上下文”（可理解为当前代码的执行环境，同一个函数在不同的环境中执行，会因访问的数据不同产生不一样的结果），执行上下文包含有：类型、包含内容、生命周期、执行过程、结论

### 类型

执行上下文主要分为：全局执行上下文、函数执行上下文、eval 函数执行上下文。

1. 全局执行上下文

> 当 JS 执行全局代码的时候，会编译全局代码并创建全局执行上下文，而且在整个页面的生命周期内，全局执行上下文只有一份

2. 函数执行上下文

> 当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，函数执行结束之后，创建的函数执行上下文会被销毁

3. eval 执行上下文

> 当使用 eval 函数的时候，eval 代码也会被编译，并创建执行上下文

### 包含内容

> 执行上下文在不同的版本中定义不同，《重学前端》中对此进行了总结，目前主要有三个版本：

1. 执行上下文在 ES3 中，包含三个部分。

- scope：作用域，也常被叫做作用域链。
- variable object：变量对象，用于存储变量的对象。
- this value：this 值。

2. 在 ES5 中，改进了命名方式，把执行上下文最初的三个部分改为以下

- lexical environment：词法环境，当获取变量时使用。（通过 let、const、with()、try-catch 创建的变量存在词法环境中）
- variable environment：变量环境，当声明变量时使用。（通过 var 声明或 function()、{}声明的变量存在变量环境中）
- this value：this 值。

3. 在 ES2018 中，this 值被归入 lexical environment，但是增加了不少内容。

- lexical environment：词法环境，当获取变量或者 this 值时使用
- variable environment：变量环境，当声明变量时使用
- code evaluation state：用于恢复代码执行位置
- Function：执行的任务是函数时使用，表示正在被执行的函数
- ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码
- Realm：使用的基础库和内置对象实例
- Generator：仅生成器上下文有这个属性，表示当前生成器。

### 执行上下文生命周期

按 ES3 阶段的内容来说明，分为创建阶段和执行阶段两部分：

1. 创建阶段：主要负责生成变量对象、建立作用域链确定 this 指向。
2. 代码执行阶段：创建完成之后，就会开始执行代码，这个时候，会玩成功变量赋值，函数引用以及执行其他代码

### 代码执行过程

1. 创建全局上下文（Global EC）。将其压入栈底。
2. 全局执行上下文（caller）逐行自上而下执行。遇到函数时，函数执行上下文（callee）被 push 到执行栈顶层；
3. 函数执行上下文被激活，成为 active EC,开始执行函数中的代码，caller 被挂起
4. 函数执行完后，callee 被 pop 移出执行栈，控制权交还给全局上下文（caller），继续执行；

```js
var a = 1;
function f1() {}

function f2() {
  f1();
}

f2();
```

1. 首先创建全局执行上下文，并将全局执行上下文压入栈底；其中变量 a、函数 f1 和 f2 都将被保存在全局执行上下文的变量环境中；
2. 全局执行上下文开始执行，变量 a 被赋值为 1，当调用函数 f2 时，会创建对应的函数执行上下文并压入调用栈，在函数 f2 的执行上下文被创建好后，将进入代码执行阶段；
3. 函数 f2 执行过程中会调用函数 f1，创建对应的函数执行上下文并压入调用栈；f1 进行执行阶段；
4. f1 函数返回时，该函数对应的函数执行上下文从栈顶弹出；
5. 紧接着 f2 函数返回，f2 函数对应的函数执行上下文也从栈顶弹出；
6. 至此代码执行关闭，当关闭页面的时候，全局执行上下文销毁。

### 结论

1. 在调用战中只有栈顶的上下文处于执行中，其他上下文需要等待；
2. 全局上下文只有唯一的一个，因为它在浏览器关闭时出栈；
3. 函数的执行上下文的个数没有限制；
4. 每次某个函数被调用，就会有个新的执行上下文为其创建，并把该执行上下文压入调用栈，然后 JS 引擎开始执行函数代码，即使是调用的自身函数，也是如此
5. 当前函数执行完毕后，JS 引擎会将该函数的执行上下文弹出栈；
6. 当分配的调用栈空间被占满时，会引发“堆栈溢出”
