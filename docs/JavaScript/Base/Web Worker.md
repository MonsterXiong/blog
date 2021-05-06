## 概述

JavaScript 语言采用的是单线程模型，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU 的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力。

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给 Worker 线程运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处就是，一些计算高密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很顺畅，不会被阻塞或拖慢。

Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

Web Worker 有以下几个使用注意点。

- 同源限制

分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

- DOM 限制

Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用 document、window、parent 这些对象。但是，Worker 线程可以使用 navigator 对象和 location 对象。

- 通信联系

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

- 脚本限制

Worker 线程不能执行 alert()方法和 confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

- 文件限制

Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

## 前言

众所周知，Javascript 是运行在单线程环境中，也就是说无法同时运行多个脚本。假设用户点击一个按钮，触发了一段用于计算的 Javascript 代码，那么在这段代码执行完毕之前，页面是无法响应用户操作的。但是，如果将这段代码交给 Web Worker 去运行的话，那么情况就不一样了：浏览器会在后台启动一个独立的 worker 线程来专门负责这段代码的运行，因此，页面在这段 Javascript 代码运行期间依然可以响应用户的其他操作。

### Web Worker 简介

Web Worker 是 HTML5 标准的一部分，这一规范定义了一套 API，它允许一段 JavaScript 程序运行在主线程之外的另外一个线程中。
值得注意的是， Web Worker 规范中定义了两类工作线程，分别是专用线程 Dedicated Worker 和共享线程 Shared Worker，其中，Dedicated Worker 只能为一个页面所使用，而 Shared Worker 则可以被多个页面所共享。

## 快速上手

### 创建 worker

只需调用 Worker() 构造函数并传入一个要在 worker 线程内运行的脚本的 URI，即可创建一个新的 worker。

```JS
var myWorker = new Worker("my_task.js");

// my_task.js中的代码
var i = 0;
function timedCount(){
    i = i+1;
    postMessage(i);
    setTimeout(timedCount, 1000);
}
timedCount();
```

另外，通过 URL.createObjectURL()创建 URL 对象，可以实现创建内嵌的 worker。

```JS
var myTask = `
    var i = 0;
    function timedCount(){
        i = i+1;
        postMessage(i);
        setTimeout(timedCount, 1000);
    }
    timedCount();
`;

var blob = new Blob([myTask]);
var myWorker = new Worker(window.URL.createObjectURL(blob));

```

这样，就可以结合 NEJ、Webpack 进行模块化管理、打包了。

> 注意：传入 Worker 构造函数的参数 URI 必须遵循同源策略。Worker 线程的创建的是异步的，主线程代码不会阻塞在这里等待 worker 线程去加载、执行指定的脚本文件，而是会立即向下继续执行后面代码。
>
> 提示：本文所有的示例代码均可直接拷贝到 chrome 控制台中运行。

### Worker 线程数据通讯方式

Worker 与其主页面之间的通信是通过 onmessage 事件和 postMessage()方法实现的。

在主页面与 Worker 之间传递的数据是通过拷贝，而不是共享来完成的。传递给 Worker 的对象需要经过序列化，接下来在另一端还需要反序列化。页面与 Worker 不会共享同一个实例，最终的结果就是在每次通信结束时生成了数据的一个副本。

也就是说，Worker 与其主页面之间只能是单纯的传递数据，不能传递复杂的引用类型：如通过构造函数创建的对象等。并且，在传递的数据也是经过拷贝生成的一个副本，在一端对数据进行修改不会影响另一端。

### 通过可转让对象来传递数据

前面介绍了简单数据的传递，其实还有一种性能更高的方法来传递数据，就是通过可转让对象将数据在主页面和 Worker 之间进行来回穿梭。可转让对象从一个上下文转移到另一个上下文而不会经过任何拷贝操作。这意味着当传递大数据时会获得极大的性能提升。和按照引用传递不同，一旦对象转让，那么它在原来上下文的那个版本将不复存在。该对象的所有权被转让到新的上下文内。例如，当你将一个 ArrayBuffer 对象从主应用转让到 Worker 中，原始的 AaaryBuffer 被清除并且无法使用。它所包含的内容会（完整无差的）传递给 Worker 上下文。

```JS
var uInt8Array = new Uint8Array(1024*1024*32); // 32MB
for (var i = 0; i < uInt8Array .length; ++i) {
  uInt8Array[i] = i;
}

console.log(uInt8Array.length); // 传递前长度:33554432

var myTask = `
    onmessage = function (e) {
        var data = e.data;
        console.log('worker:', data);
    };
`;

var blob = new Blob([myTask]);
var myWorker = new Worker(window.URL.createObjectURL(blob));
myWorker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);

console.log(uInt8Array.length); // 传递后长度:0

```

### importScripts()

Worker 线程能够访问一个全局函数 importScripts()来引入脚本，该函数接受 0 个或者多个 URI 作为参数。

浏览器加载并运行每一个列出的脚本，每个脚本中的全局对象都能够被 worker 使用。如果脚本无法加载，将抛出 NETWORK_ERROR 异常，接下来的代码也无法执行。而之前执行的代码（保活使用 window.setTimeout()异步执行的代码）依然能够运行。importScripts()之后的函数声明依然会被保留，因为它们始终会在其他代码之前运行。

> 注意：脚本的下载顺序不固定，但执行时会按照传入 importScripts()中的文件名顺序进行。这个过程是同步完成的；直到所有脚本都下载并运行完毕，importScripts()才会返回。

### Worker 上下文

Worker 执行的上下文，与主页面执行时的上下文并不相同，最顶层的对象并不是 window，而是一个叫做 WorkerGlobalScope，所以无法访问 window，以及 window 相关的 DOM API，但是可以在 setTimeout、setInterval 等协作。

WorkerGlobalScope 作用域下的常用属性、方法如下：

1. self

我们可以使用 WorkerGlobalScope 的 self 属性来进行这个对象本身的引用。

2. location

location 属性返回当线程被创建出来的时候与之关联的 WorkerLocation 对象，它表示用于初始化这个工作线程的脚步资源的绝对 URL，即使页面被多次重定向后，这个 URL 资源为止也不会改变。

3. close

关闭当前线程

4. importScripts

我们可以通过 importScripts()方法通过 url 在 worker 中加载库函数

5. XMLHttpRequest

有了它，才能发出 Ajax 请求

6. setTimeout/setInterval 以及 addEventListener/postMessage

### 终止 terminate()

Worker 完成任务以后，主线程就可以把它关掉。

在主页面上调用 teminate()方法，可以立即杀死 worker 线程，不会留下任何机会让它完成自己的操作或清理工作。另外，worker 也可以调用自己的 close()方法来关闭自己

```js
//	在主页面调用
worker.terminate()；

// worker线程调用
self.close();
```

### 处理错误

当 worker 出现运行时错误时，它的 onerror 事件处理函数会被调用。它会收到一个实现了 ErrorEvent 接口名为 error 的事件。该事件不会冒泡，并且可以被取消；为了防止触发默认动作，worker 可以调用错误事件的 preventDefault()方法。

错误事件有三个使用的属性：

filename-发生错误的脚本文件名；

lineno-出现错误的行号；

message-可读性良好的错误消息。

```js
var myTask = `
    onmessage = function (e) {
        var data = e.data;
        console.log('worker:', data);
    };

    // 使用未声明的变量
    arr.push('error');
`;

var blob = new Blob([myTask]);
var myWorker = new Worker(window.URL.createObjectURL(blob));
myWorker.onerror = function onError(e) {
  // ERROR: Line 8 in blob:http://www.cnblogs.com/490a7c32-7386-4d6e-a82b-1ca0b1bf2469: Uncaught ReferenceError: arr is not defined
  console.log(
    ["ERROR: Line ", e.lineno, " in ", e.filename, ": ", e.message].join("")
  );
};
```

## 总结

### 强大的计算能力

可以加载一个 JS 进行大量的复杂计算而不挂起主进程，并通过 postMessage,onmessage 进行通信，解决了大量计算对 UI 渲染的阻塞问题。

### 典型应用场景

1. 数字运算

Web Worker 最简单的应用就是用来做后台计算，对 CPU 密集型的场景再适合不过了。

2. 图像处理

通过使用从`<canvas>`中获取的数据，可以把图像分割成几个不同的区域并且把它们推送给并行的不同 Workers 来做计算，对图像进行像素级的处理，再把处理完成的图像数据返回给主页面。

3. 大数据的处理

目前 mvvm 框架越来越普及，基于数据驱动的开发模式也越来越流行，未来大数据的处理也可能转向到前台，这时，将大数据的处理交给再 Web Worker 也是上上之策了吧
