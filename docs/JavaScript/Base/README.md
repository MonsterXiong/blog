---
sidebarDepth: 0
---

# 概要

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

## 回调函数

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

## IIFE

```js
// 理解全程：immediately-Invoked Fucntion Expression
// 作用

(function() {
  //匿名函数自调用
  console.log("111");
})();
```

## 箭头函数

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

## 哪些操作会造成内存泄漏？

- 1.意外的全局变量
- 2.被遗忘的计时器或回调函数
- 3.脱离 DOM 的引用
- 4.闭包

- 第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
- 第二种情况是我们设置了`setInterval`定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- 第三种情况是我们获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。
- 第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。
