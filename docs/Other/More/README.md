# 未来计划

源码的深入，一些库的使用与了解

## 通信

- ajax
- jsonp
- fetch
- axios

## 团队协作以及提效

- 规范
  - 代码规范 airbnb
  - 版本控制以及 commit 规范以及 husky
- 构建化工具
  - 打包构建，提效
  - 自动化部署 github action
- 前后端分离
  - mockjs
- 监控，日志系统
- 脚手架

## Promise

::: details Promise

1. 函数对象：将函数作为对象使用时，简称为函数对象。
2. 实例对象：通过 new 函数产生的对象，简称对象。

两种类型的回调函数

1. 同步回调

   理解：立即执行，完全执行完了才结束，不会放入回调队列中。

   eg：数组遍历相关的回调函数/Promise 的 excutor 函数。

2. 异步回调

   理解：不会立即执行，会放入回调队列中将来执行。

   eg：定时器回调/ajax 回调/Promise 的成功或失败的回调。

   > 注：可通过 console.log()来验证同步异步

常见的内置错误

1. 错误类型
   - Error：所有错误的父类型
   - ReferanceError：引用的变量不存在
   - TypeError：数据类型不正确的错误
   - RangeError：数据值不在其所允许的范围内
   - SyntaxError：语法错误
2. 错误处理
   - 捕获错误：try...catch
   - 抛出错误 throw error
3. 错误对象
   - message 属性：错误相关信息
   - stack 属性：函数调用栈记录信息

### Promise 的理解

Promise 的状态改变

- pending 变为 resolved
- pending 变为 rejected
- 一个 Promise 对象只能改变一次状态

Promise 的基本运行流程

Promise 的基本使用及 API

excutor、then、catch、finally、Promise.resolve、Promise.reject、Promise.all、Promise.race

为什么要用 Promise？

- 指定回调函数的方式更加灵活
- 支持链式调用，可以解决回调地狱问题

### 关键问题

1. 如何改变 promise 的状态？

   - resolve(value)，如果当前是 pending 就变为 resolved
   - reject(reason)，如果当前是 pending 就变为 rejected

2. 一个 promise 指定多个成功或失败的回调函数，都会调用吗？

   - 当 promise 改变为对应状态时都会调用

3. 改变 promise 状态和指定回调函数谁先谁后？

   - 都有可能，正常情况下是先指定回调再改变状态，但也可以先改变状态再指定回调。
   - 如何先改状态再指定回调
     1. 在执行器中直接调用 resolve()/reject()
     2. 延迟更长时间才调用 then()
   - 什么时候才能得到数据
     1. 如果先指定的回调，那当状态发生改变时，回调函数就会调用，得到数据
     2. 如果先改变的状态，那当指定回调时，回调函数就会调用，得到数据

4. promise.then()返回的新的 peomise 的结果状态由什么决定？

   - 简单表达：由 then()指定的回调函数执行的结果决定
   - 详细表达
     1. 如果抛出异常，新的 promise 变为 rejected，reason 为抛出的异常。
     2. 如果返回的是非 promise 的任意值，新的 promise 变为 resolved，value 为返回的值
     3. 如果返回的是另一个新的 promise，此 promise 的结果就会成为新 promise 的结果

5. promise 如何串联多个操作任务？

   - promise 的 then()返回一个新的 promise，可以形成 then()的链式调用
   - 通过 then()的链式调用串联多个同步/异步任务

6. promise 异常传透？

   - 当使用 promise 的 then 链式调用时，可以在最后指定失败的回调
   - 前面任何操作出了异常，都会传到最后失败的回调函数中处理

7. 中断 promise 链？
   - 当使用 promise 的 then 链式调用时，在中间中断，不再调用后面的回调函数
   - 办法：在回调函数中返回一个 pending 状态的 promise 对象

### 自定义 Promise

```jsx
/**
 * 自定义Promise
 */

(function(window) {
  const PENDING = "pending";
  const FULFILLIED = "fulfilled";
  const REJECTED = "rejected";

  /**
   * Promise构造函数
   * excutor：内部同步执行的函数（resolve，reject)
   */
  function Promise(excutor) {
    const self = this;
    this.status = PENDING;
    this.data = undefined;
    this.callbacks = [];

    function resolve(value) {
      if (self.status !== PENDING) {
        return;
      }
      //将状态改为fulfilled
      self.status = FULFILLIED;
      //保存value数据
      self.data = value;
      // 如果有待执行的callback函数，立即异步执行回调函数onFulfilled()
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksobj) => {
            //放入队列中执行所有的成功回调
            callbacksobj.onFulfilled(self.data);
          });
        });
      }
    }

    function reject(reason) {
      if (self.status !== PENDING) {
        return;
      }
      //  将状态改为rejected
      self.status = REJECTED;
      //  保存reason数据
      self.data = reason;
      //  如果有待执行的callback函数，立即异步执行回调函数onRejected()
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksobj) => {
            callbacksobj.onRejected(reason);
          });
        });
      }
    }

    // 立即同步执行excutor
    try {
      excutor(resolve, reject);
    } catch (error) {
      //  如果执行器抛出异常，promise对象变为rejected状态
      reject(error);
    }
  }

  /**
   *
   *  异步执行
   * then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。
   *
   */
  Promise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;

    //  指定回调函数的默认值（必须是函数）
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    //  返回一个新的promise对象
    return new Promise((resolve, reject) => {
      /**
       *
       * 执行指定的回调函数
       * 根据执行的结果改变return的promise的状态/数据
       */
      function handle(callback) {
        /**
         * 返回的Promise的结果由onFulfilled/onRejected执行结果决定
         * 1.如果抛出异常，return的promise就会失败，reason就是error
         * 2.如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
         * 3.如果回调函数返回的是promise，返回的promose的结果就是这个promise的结果
         */
        try {
          const result = callback(self.data);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (self.status === FULFILLIED) {
        //fulfilled状态
        //  立即异步执行失败的回调函数
        setTimeout(() => {
          handle(onFulfilled);
        });
      } else if (self.status === REJECTED) {
        //rejected状态
        //  立即异步执行成功的回调函数
        setTimeout(() => {
          handle(onRejected);
        });
      } else {
        //pending状态，将回调函数保存起来
        //  将成功和失败的回调函数保存callbacks容器中缓存起来
        self.callbacks.push({
          onFulfilled() {
            handle(onFulfilled);
          },
          onRejected() {
            handle(onRejected);
          },
        });
      }
    });
  };
  /**
   * .then()语法糖，返回promise失败的回调函数
   */
  Promise.prototype.catch = function(reason) {
    this.then(undefined, reason);
  };

  Promise.prototype.finally = function(onFinally) {
    this.then(
      (value) => {
        return Promise.resolve(onFinally()).then(() => value);
      },
      (reason) => {
        return Promise.resolve(onFinally()).then(() => {
          throw reason;
        });
      }
    );
  };

  /**
   * 返回一个指定结果的成功的promise
   */
  Promise.resolve = function(value) {
    return new Promise((resolve, reject) => {
      //  value是promise
      if (value instanceof Promise) {
        //  使用value的结果作为promise的结果
        value.then(resolve, reject);
      } else {
        //  value不是promise=》promise变为成功，数据是value
        resolve(value);
      }
    });
  };

  /**
   * 返回一个指定reason的失败的promise
   */
  Promise.reject = function(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  };

  /**
   * 返回一个promise，只有当所有promise都成功时才成功，否则只要有一个失败的就是失败
   */
  Promise.all = function(promises) {
    //  用来保存所有成功的数组
    const values = new Array(promises.length);
    //  用来保存成功promise的数量
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {
      //  遍历promises获取每个promise的结果
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            resolvedCount++; // 成功的数量
            values[index] = value; //  按索引保存成功的value
            //  如果全部成功了，将return的promise改变成功
            if (resolvedCount === promises.length) {
              resolve(values);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  };
  /**
   * 返回一个promise，最新执行完的promise的结果为返回的promise的结果
   */
  Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p) => {
        Promise.resolve(p).then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  };
  /**
   * 在指定之间内，返回一个指定结果的成功的promise
   */
  Promise.resolveDelay = function(value, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value instanceof Promise) {
          value.then(resolve, reject);
        } else {
          resolve(value);
        }
      }, time);
    });
  };
  /**
   * 在指定时间内，返回一个指定reason失败的promise
   */
  Promise.rejectDelay = function(reason, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(reason);
      }, time);
    });
  };

  window.Promise = Promise;
})(window);
```

:::

## Ajax

::: details Ajax

### Ajax 简介

首先：传统的网页（不使用 AJAX）如果需要更新内容，必须重载整个网页

AJAX 全称为 Asynchronous JavaScript And XML,即异步的 JS 和 XML。

通过 AJAX 可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面

最大的优势：无刷新获取数据。

AJAX 最主要的两个特性做下列事情：

- 在不重载页面的情况下发送请求给服务器
- 接受并使用从服务器发来的数据

AJAX 不是一种新技术，不是新的编程语言，而是一种将现有的（技术）标准组合在一起使用的新方式（方法）

AJAX 的优点

- 可以无痛刷新页面与服务器进行通信
- 根据用户事件允许更新部分页面内容

AJAX 的缺点

- 没有浏览历史，不能回退
- 存在跨域问题（同源）
- SEO 不友好

### Step：怎样发送 http 请求

XHR（XMLHttpRequest）是 AJAX 的基础,它用于与服务器进行通信

所有的现代浏览器均支持 XHR 对象（IE5 和 IE6 使用 ActiveXObject）

1. 创建 XHR 对象

为了应对所有现代浏览器，需先检查浏览器是否支持 XHR 对象

```jsx
//创建XHR对象
var xmlhttp;
if (window.XMLHttpRequest) {
  xmlhttp = new XMLHttpRequest();
} else {
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```

2.  XHR 对象向服务器发送请求

```jsx
//XHR对象向服务器发送请求

open(method, url, async);
/*
 *规定请求的类型，URL以及是否异步处理请求
 *1.method:请求的类型：GET或POST
 *2.url:文件在服务器上的位置
 *3.async：true(异步)或false(同步)
 */

send(string);
/*
 *将请求发送到服务器
 *string:仅用于POST请求
 */

/*
 *一、与POST相比，GET更简单也更快，在以下情况使用POST请求：
 *1.更新服务器上的文件或数据库（无法使用缓存文件）。
 *2.向服务器发送大量数据（POST没有数据量限制）。
 *3.发送包含未知字符的用户输入时，POST更稳定可靠。
 *4.如果希望像HTML表单那样POST数据，使用setRequestHeader()来添加HTTP头，然后在send（）方法中规定您希望发送的数据。
 */
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

setRequestHeader(header, value);
/*
 *向请求添加HTTP头
 *1.header:规定头的名称
 *2.value：规定头的值
 */

/*
 *三、异步-True或False？
 *对于web开发人员来说，发送异步请求是一个巨大的进步，很多在服务器执行的任务相当费时，AJAX出现之前，这可能会引起应用程挂起或停止
 *通过AJAX，JS无需等待服务器的响应，而是：
 *1.在等待服务器响应时执行其他脚本
 *2.当响应就绪后对响应进行处理
 */

// 当使用async=true时，请规定在响应处于onreadystatechange事件中的就绪状态时执行的函数
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
  }
};
xmlhttp.open("GET", "test1.txt", true);
xmlhttp.send();

//不推荐使用async=false，但对于一些小型的请求也是可以的
//JS会等到服务器响应就绪才继续执行，如果服务器繁忙或缓慢，应用程序会挂起或停止
//注释：当您使用async=false时，请不要编写onreadystatechange函数-把代码放到send()语句后面即可
xmlhttp.open("GET", "test1.txt", false);
xmlhttp.send();
document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
```

3.  服务器响应

```jsx
// 如需获得来自服务器的响应，请使用XMLHttpRequest对象的responseText或responseXML属性
// responseText=>获得字符串形式的响应数据
// responseXML=>获得XML形式的响应数据
// 如果来自服务器的响应并非XML，使用responseText属性
// 如果来自服务器的响应是XML，而且需要作为XML对象进行解析，使用responseXML属性
```

4.  onreadystatechange 事件

```jsx
// 当请求被发送到服务器时，我们需要执行一些基于响应的任务
// 每当readyState改变时，就会触发onreadystatechange事件
// readyState属性存有XMLHttpRequest的状态信息，下面时XHR的三个重要的属性
// oreadystatechange=>存储函数(或函数名)，每当readyState属性改变时，就会调用该函数
// readyState=>存有XHR的状态，从0到4发生变化。
/*
 *0：请求未初始化
 *1：服务器连接已建立
 *2：请求已接收
 *3：请求处理中
 *4：请求已完成，且响应已就绪
 */
// status=>200:"OK",404:未找到页面

// 在onreaystatechange事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务
// 当readyState等于4且状态为200时，表示响应已就绪
// onreadystatechange事件被触发5次(0-4)，对应着readyState的每个变化

//callback函数=>是一种以参数形式传递给另一个函数的函数
```

:::

## 闭包

::: details 闭包

- 闭包

  1.如何产生闭包?

  当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包

  2.闭包到底是什么？

  - 使用 chrome 调试查看
  - 理解一：闭包是嵌套的内部函数（绝大部分人）
  - 理解二：包含被引用变量（函数）的对象（极少数人）
  - 注意：闭包存在嵌套的内部函数中

    3.产生闭包的条件？

  - 函数嵌套
  - 内部函数引用了外部函数的数据（变量/函数）

- 理解闭包

  作用域：全局作用域和函数作用域

  闭包就是 fn2，既能够读取其他函数内部变量的函数，定义在一个函数内部的函数

  闭包最大的特点：就是他可以记住诞生的环境，比如 fn2 记住了它诞生的环境是 fn1，所以在 fn2 中可以得到 fn1 中的内部变量

  本质上：闭包就是函数内部和函数外部链接的一座桥梁

1. 闭包的用途

一：计数器

作用：读取函数内部的变量，这些变量始终在内存中，使用闭包小心内存泄漏

二：闭包能够封装对象的私有属性和方法

3. 闭包的注意点

一：使用闭包使得函数中的变量始终在内存中，内存消耗很大，所以不能滥用闭包，否则会造成页面性能问题，在 IE 中可能导致内存泄漏 delete null

每个父函数调用完成，都会形成新的闭包，父函数中的变量始终会在内存中，相当于缓存，小心内存的消耗问题

总结：闭包需要三个条件

1. 函数嵌套
2. 访问所在的作用域
3. 在所在作用域外调用

:::

## 待续-笔记整理

::: details Vue 以及周边

:::

::: details Webpack

:::

::: details Gulp

:::

::: details Jest

:::

::: details 模块化

:::

::: details 深入牙羽 JS

:::

::: details Vuepress

:::

::: details Koa

:::

::: details CLi

:::

::: details 自定义工具函数

:::

::: details 权限设计

:::

::: details 术语

:::
