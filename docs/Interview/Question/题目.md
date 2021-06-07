# 题目

## 常规知识点

### js 基础知识

### 从输入 url 到获得页面经历的所有事情(越细越好)

### DOM 事件和事件流

### 盒子模型

### BFC

### Flex

### 前端性能优化

### 常见算法(排序洗牌等)

### 跨域形成原因以及解决方案

### 最近在看什么新技术

## 低频但是需要注意的面试题

### CSRF & XSS

### chrome 设置小于 12px 字体

### node 和浏览器事件循环有何不同

### webpack tree shaking

### map & set

### 前端有哪些技术(腾讯面试题,面试官会顺着你说的技术一个一个展开问)

### get 和 post 的区别

### BFC

### yield

### requestAnimation

### 让你重新做你做过的项目有什么可以改进的地方

### 让一个元素消失的几种做法，有何不同，对子元素的影响

### 如何遍历对象(接下来会问有何不同)

### 搜索框输入需要注意的点(其实还是在问防抖)

### 原生实现 inserAfter

### 事件委托应用场景，e.target 和 e.currentTarget 区别

###

## 面试遇到的算法题

### 排序算法(冒泡,快排)

### 洗牌算法

### v1.2.3 v0.3.0 这样的版本号比大小(找简单方法,不要随便写一个循环的版本)

### 广度优先遍历

### 用 O(n)的复杂度合并两个有序数组

### 数组生成树形结构

## 二、JS 问题

### 1.typeof 和 instance of 检测数据类型有什么区别？

> 相同点： 都常用来判断一个变量是否为空，或者是什么类型的。
>
> 不同点： typeof 返回值是一个字符串，用来说明变量的数据类型 instanceof 用于判断一个变量是否属于某个对象的实例.

### 2.谈一谈深克隆和浅克隆？

> 浅克隆: 只是拷贝了基本类型的数据，而引用类型数据，复制后也是会发生引用，我们把这种拷贝叫做“（浅复制）浅拷贝”，换句话说，浅复制仅仅是指向被复制的内存地址，如果原地址中对象被改变了，那么浅复制出来的对象也会相应改变。
>
> 深克隆： 创建一个新对象，属性中引用的其他对象也会被克隆，不再指向原有对象地址。 JSON.parse、JSON.stringify()

### 3.es6 的新特性都有哪些？

> let 定义块级作用域变量 没有变量的提升，必须先声明后使用 let 声明的变量，不能与前面的 let，var，conset 声明的变量重名
>
> const 定义只读变量 const 声明变量的同时必须赋值，const 声明的变量必须初始化，一旦初始化完毕就不允许修改 const 声明变量也是一个块级作用域变量 const 声明的变量没有“变量的提升”，必须先声明后使用 const 声明的变量不能与前面的 let， var ， const 声明的变量重 const 定义的对象\数组中的属性值可以修改,基础数据类型不可以
>
> ES6 可以给形参函数设置默认值
>
> 在数组之前加上三个点（...）展开运算符
>
> 数组的解构赋值、对象的解构赋值
>
> 箭头函数的特点 箭头函数相当于匿名函数，是不能作为构造函数的，不能被 new 箭头函数没有 arguments 实参集合,取而代之用...剩余运算符解决 箭头函数没有自己的 this。他的 this 是继承当前上下文中的 this 箭头函数没有函数原型 箭头函数不能当做 Generator 函数，不能使用 yield 关键字 不能使用 call、apply、bind 改变箭头函数中 this 指向 Set 数据结构，数组去重

### 4.==和===区别是什么？

=赋值

> ==返回一个布尔值；相等返回 true，不相等返回 false； 允许不同数据类型之间的比较； 如果是不同类型的数据进行，会默认进行数据类型之间的转换； 如果是对象数据类型的比较，比较的是空间地址
>
> === 只要数据类型不一样，就返回 false；

### 5.常见的设计模式有哪些？

```text
1、js工厂模式
2、js构造函数模式
3、js原型模式
4、构造函数+原型的js混合模式
5、构造函数+原型的动态原型模式
6、观察者模式
7、发布订阅模式
```

### 6.call bind apply 的区别？

> call() 和 apply()的第一个参数相同，就是指定的对象。这个对象就是该函数的执行上下文。
>
> call()和 apply()的区别就在于，两者之间的参数。
>
> call()在第一个参数之后的 后续所有参数就是传入该函数的值。
>
> apply() 只有两个参数，第一个是对象，第二个是数组，这个数组就是该函数的参数。 bind() 方法和前两者不同在于： bind() 方法会返回执行上下文被改变的函数而不会立即执行，而前两者是 直接执行该函数。他的参数和 call()相同。

### 8.你怎样看待闭包？

> 个人感觉，简单来说闭包就是在函数里面声明函数，本质上说就是在函数内部和函数外部搭建起一座桥梁，使得子函数可以访问父函数中所有的局部变量，但是反之不可以，这只是闭包的作用之一，另一个作用，则是保护变量不受外界污染，使其一直存在内存中，在工作中我们还是少使用闭包的好，因为闭包太消耗内存，不到万不得已的时候尽量不使用。

### 9.你是如何理解原型和原型链的？

> 把所有的对象共用的属性全部放在堆内存的一个对象（共用属性组成的对象），然后让每一个对象的 **proto**存储这个「共用属性组成的对象」的地址。而这个共用属性就是原型，原型出现的目的就是为了减少不必要的内存消耗。而原型链就是对象通过**proto**向当前实例所属类的原型上查找属性或方法的机制，如果找到 Object 的原型上还是没有找到想要的属性或者是方法则查找结束，最终会返回 undefined

### 10.浏览器渲染的主要流程是什么?

> 将 html 代码按照深度优先遍历来生成 DOM 树。 css 文件下载完后也会进行渲染，生成相应的 CSSOM。 当所有的 css 文件下载完且所有的 CSSOM 构建结束后，就会和 DOM 一起生成 Render Tree。 接下来，浏览器就会进入 Layout 环节，将所有的节点位置计算出来。 最后，通过 Painting 环节将所有的节点内容呈现到屏幕上。

### 11.从输入 url 地址到页面相应都发生了什么？

```text
1、浏览器的地址栏输入URL并按下回车。
2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。3、DNS解析URL对应的IP。
4、根据IP建立TCP连接（三次握手）。
5、HTTP发起请求。
6、服务器处理请求，浏览器接收HTTP响应。
7、渲染页面，构建DOM树。
8、关闭TCP连接（四次挥手）
```

### 12.session、cookie、localStorage 的区别

**相同点 都是保存在浏览器端，且同源的。**

**不同点**

> cookie 数据始终在同源的 http 请求中携带，即 cookie 在浏览器和服务器间来回传递。
> 而 sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。
> cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下。 存储大小限制也不同，cookie 数据不能超过 4k，同时因为每次 http 请求都会携带 cookie，所以 cookie 只适合保存很小的数据。
> sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
> localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
> cookie 只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。 作用域不同，sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面；
> localStorage 在所有同源窗口中都是共享的；cookie 也是在所有同源窗口中都是共享的。

### 13.js 中跨域方法

> 同源策略（协议+端口号+域名要相同）
>
> 1、jsonp 跨域(只能解决 get） 原理：动态创建一个 script 标签。利用 script 标签的 src 属性不受同源策略限制，因为所有的 src 属性和 href 属性都不受同源策略的限制，可以请求第三方服务器资源内容
> 步骤： 1).去创建一个 script 标签 2).script 的 src 属性设置接口地址 3).接口参数，必须要带一个自定义函数名，要不然后台无法返回数据 4).通过定义函数名去接受返回的数据
>
> 2、document.domain 基础域名相同 子域名不同
>
> 3、window.name 利用在一个浏览器窗口内，载入所有的域名都是共享一个 window.name
>
> 4、服务器设置对 CORS 的支持 原理：服务器设置 Access-Control-Allow-Origin HTTP 响应头之后，浏览器将会允许跨域请求
>
> 5、利用 h5 新特性 window.postMessage()

### 14.前端有哪些页面优化方法?

> 减少 HTTP 请求数
> 从设计实现层面简化页面
> 合理设置 HTTP 缓存
> 资源合并与压缩
> 合并 CSS 图片，减少请求数的又一个好办法。
> 将外部脚本置底（将脚本内容在页面信息内容加载后再加载）
> 多图片网页使用图片懒加载。
> 在 js 中尽量减少闭包的使用
> 尽量合并 css 和 js 文件
> 尽量使用字体图标或者 SVG 图标，来代替传统的 PNG 等格式的图片
> 减少对 DOM 的操作
> 在 JS 中避免“嵌套循环”和 “死循环”
> 尽可能使用事件委托（事件代理）来处理事件绑定的操作

### 15.Ajax 的四个步骤

> 1.创建 ajax 实例
>
> 2.执行 open 确定要访问的链接 以及同步异步
>
> 3.监听请求状态
>
> 4.发送请求

### 16.数组去重的方法

ES6 的 set 对象 先将原数组排序，在与相邻的进行比较，如果不同则存入新数组

```text
function unique(arr){
    var arr2 = arr.sort();
    var res = [arr2[0]];
    for(var i=1;i<arr2.length;i++){
        if(arr2[i] !== res[res.length-1]){
        res.push(arr2[i]);
    }
}
return res;
}
利用下标查询
 function unique(arr){
    var newArr = [arr[0]];
    for(var i=1;i<arr.length;i++){
        if(newArr.indexOf(arr[i]) == -1){
        newArr.push(arr[i]);
    }
}
return newArr;
}
```

### 17.ajax 中 get 和 post 请求的区别

> get 一般用于获取数据
> get 请求如果需要传递参数，那么会默认将参数拼接到 url 的后面；然后发送给服务器；
> get 请求传递参数大小是有限制的；是浏览器的地址栏有大小限制；
> get 安全性较低
> get 一般会走缓存，为了防止走缓存，给 url 后面每次拼的参数不同；放在?后面，一般用个时间戳
> post 一般用于发送数据
> post 传递参数，需要把参数放进请求体中，发送给服务器；
> post 请求参数放进了请求体中，对大小没有要求；
> post 安全性比较高；
> post 请求不会走缓存；

### 18.ajax 的状态码

> 2 开头
>
> 200 : 代表请求成功；
> 3 开头
>
> 301 : 永久重定向；
> 302: 临时转移
> 304 : 读取缓存 [表示浏览器端有缓存，并且服务端未更新，不再向服务端请求资源]
> 307:临时重定向
> 以 4 开头的都是客户端的问题；
>
> 400 :数据/格式错误
> 401: 权限不够；（身份不合格，访问网站的时候，登录和不登录是不一样的）
> 404 : 路径错误，找不到文件
> 以 5 开头都是服务端的问题
>
> 500 : 服务器的问题
> 503: 超负荷；

### 19.移动端的兼容问题

> 给移动端添加点击事件会有 300S 的延迟 如果用点击事件，需要引一个 fastclick.js 文件，解决 300s 的延迟 一般在移动端用 ontouchstart、ontouchmove、ontouchend
> 移动端点透问题,touchstart 早于 touchend 早于 click,click 的触发是有延迟的，这个时间大概在 300ms 左右，也就是说我们 tap 触发之后蒙层隐藏， 此时 click 还没有触发，300ms 之后由于蒙层隐藏，我们的 click 触发到了下面的 a 链接上 尽量都使用 touch 事件来替换 click 事件。例如用 touchend 事件(推荐)。 用 fastclick，[github.com/ftlabs/fast…](https://link.zhihu.com/?target=https%3A//github.com/ftlabs/fastclick) 用 preventDefault 阻止 a 标签的 click 消除 IE10 里面的那个叉号 input:-ms-clear{display:none;}
> 设置缓存 手机页面通常在第一次加载后会进行缓存，然后每次刷新会使用缓存而不是去重新向服务器发送请求。如果不希望使用缓存可以设置 no-cache。
>
> 圆角 BUG 某些 Android 手机圆角失效 background-clip: padding-box; 防止手机中网页放大和缩小 这点是最基本的，做为手机网站开发者来说应该都知道的，就是设置 meta 中的 viewport
>
> 设置用户截止缩放，一般写视口的时候就已经写好了。

### 20.JS 中同步和异步,以及 js 的事件流

> 同步：在同一时间内做一件事情
>
> 异步：在同一时间内做多个事情 JS 是单线程的，每次只能做一件事情，JS 运行在浏览器中，浏览器是多线程的，可以在同一时间执行多个任务。
>
> 21.JS 中常见的异步任务
> 定时器、ajax、事件绑定、回调函数、async await、promise
>
> 22.TCP 的三次握手和四次挥手
> 三次握手
>
> 第一次握手：客户端发送一个 SYN 码给服务器，要求建立数据连接；
> 第二次握手： 服务器 SYN 和自己处理一个 SYN（标志）；叫 SYN+ACK（确认包）；发送给客户端，可以建立连接
> 第三次握手： 客户端再次发送 ACK 向服务器，服务器验证 ACK 没有问题，则建立起连接；
> 四次挥手
>
> 第一次挥手： 客户端发送 FIN(结束)报文，通知服务器数据已经传输完毕；
> 第二次挥手: 服务器接收到之后，通知客户端我收到了 SYN,发送 ACK(确认)给客户端，数据还没有传输完成
> 第三次挥手： 服务器已经传输完毕，再次发送 FIN 通知客户端，数据已经传输完毕
> 第四次挥手： 客户端再次发送 ACK,进入 TIME_WAIT 状态；服务器和客户端关闭连接； 23.为什么建立连接是三次握手，而断开连接是四次挥手呢?
> 建立连接的时候， 服务器在 LISTEN 状态下，收到建立连接请求的 SYN 报文后，把 ACK 和 SYN 放在一个报文里发送给客户端。 而关闭连接时，服务器收到对方的 FIN 报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送 FIN 报文给对方来表示同意现在关闭连接，因此，己方 ACK 和 FIN 一般都会分开发送，从而导致多了一次。

### 24.DOM diff 原理

> 如果元素类型发生变化，直接替换
> 如果是文本，则比较文本里面的内容，是否有差异，如果是元素就需要比较当前元素的属性是否相等,会先比较 key， 在比较类型 为什么 react 中循环 建议不要使用索引 ,如果纯为了展示 那可以使用索引

### 25.作用域

**全局作用域**

> 浏览器打开一个页面时，浏览器会给 JS 代码提供一个全局的运行环境，那么这个环境就是全局作用域 一个页面只有一个全局作用域，全局作用域下有一个 window 对象 window 是全局作用域下的最大的一个内置对象（全局作用域下定义的变量和函数都会存储在 window 下） 如果是全局变量，都会给 window 新增一个键值对；属性名就是变量名，属性值就是变量所存储的值 如果变量只被 var 过，那么存储值是 undefined 在私有作用域中是可以获取到全局变量的，但是在全局作用域中不能获取私有变量

**私有作用域**

> 函数执行会形成一个新的私有的作用域（执行多次，形成多个私有作用域） 私有作用域在全局作用域中形成，具有包含的关系； 在一个全局作用域中，可以有很多个私有作用域 在私有作用域下定义的变量都是私有变量 形参也是私有变量 函数体中通过 function 定义的函数也是私有的，在全局作用域不能使用；

**块级作用域**

> es6 中新引入的一种作用域 在 js 中常见到的 if{}、for{}、while{}、try{}、catch{}、switch case{}都是块级作用域 var obj = {} //对象的大括号不是块级作用域 块级作用域中的同一变量不能被重复声明（块级下 var 和 function 不能重名，否则会报错） 作用域链

**上级作用域**

> 函数在哪里定义，他的上一级作用域就是哪，和函数在哪个作用域下执行没有关系 作用域链：当获取变量所对应的值时，首先看变量是否是私有变量，如果不是私有变量，要继续向上一级作用域中查找，如果上一级也没有，那么会继续向上一级查找，直到找到全局作用域为止；如果全局作用域也没有，则会报错；这样一级一级向上查找，就会形成作用域链 当前作用域没有的，则会继续向上一级作用域查找 当前函数的上一级作用域跟函数在哪个作用域下执行没有关系，只跟函数在哪定义有关（重点）

### 26.Promise 处理异步

> 他是 ES6 中新增加的一个类（new Promise）,目的是为了管理 JS 中的异步编程的，所以把他称为“Promise 设计模式” new Promise 经历三个状态：padding(准备状态：初始化成功、开始执行异步的任务)、fullfilled(成功状态)、rejected(失败状态)== Promise 本身是同步编程的，他可以管理异步操作的（重点），new Promise 的时候，会把传递的函数立即执行 Promise 函数天生有两个参数，resolve(当异步操作执行成功，执行 resolve 方法),rejected(当异步操作失败，执行 reject 方法) then()方法中有两个函数，第一个传递的函数是 resolve,第二个传递的函数是 reject ajax 中 false 代表同步，true 代表异步，如果使用异步，不等 ajax 彻底完成

### 27.map 和 forEach 的区别

**相同点**

> 都是循环遍历数组中的每一项 forEach 和 map 方法里每次执行匿名函数都支持 3 个参数，参数分别是 item（当前每一项）、index（索引值）、arr（原数组），需要用哪个的时候就写哪个 匿名函数中的 this 都是指向 window 只能遍历数组

**不同点**

> map 方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。(原数组进行处理之后对应的一个新的数组。) map()方法不会改变原始数组 map()方法不会对空数组进行检测 forEach()方法用于调用数组的每个元素，将元素传给回调函数.(没有 return，返回值是 undefined）
> **注意**：forEach 对于空数组是不会调用回调函数的。

### 28.async await 函数

> async/await 函数是异步代码的新方式
>
> async/await 是基于 promise 实现的
>
> async/await 使异步代码更像同步代码
>
> await 只能在 async 函数中使用，不能再普通函数中使用，要成对出现
>
> 默认返回一个 promise 实例，不能被改变
>
> await 下面的代码是异步，后面的代码是同步的

### 29.this 指向

> 全局作用域下的 this 指向 window
> 如果给元素的事件行为绑定函数，那么函数中的 this 指向当前被绑定的那个元素
> 函数中的 this，要看函数执行前有没有 . , 有 . 的话，点前面是谁，this 就指向谁，如果没有点，指向 window
> 自执行函数中的 this 永远指向 window
> 定时器中函数的 this 指向 window
> 构造函数中的 this 指向当前的实例
> call、apply、bind 可以改变函数的 this 指向
> 箭头函数中没有 this，如果输出 this，就会输出箭头函数定义时所在的作用域中的 this

### 30.原型

> 所有的函数数据类型都天生自带一个 prototype 属性，该属性的属性值是一个对象 prototype 的属性值中天生自带一个 constructor 属性，其 constructor 属性值指向当前原型所属的类 所有的对象数据类型，都天生自带一个*proto*属性，该属性的属性值指向当前实例所属类的原型

### 31.异步回调（如何解决回调地狱）

```text
promise、generator、async/await

promise： 1.是一个对象，用来传递异步操作的信息。代表着某个未来才会知道结果的时间，并未这个事件提供统一的api，供进异步处理
	  2.有了这个对象，就可以让异步操作以同步的操作的流程来表达出来，避免层层嵌套的回调地狱
	  3.promise代表一个异步状态，有三个状态pending（进行中），Resolve(以完成），Reject（失败）
	  4.一旦状态改变，就不会在变。任何时候都可以得到结果。从进行中变为以完成或者失败
		promise.all() 里面状态都改变，那就会输出，得到一个数组
		promise.race() 里面只有一个状态变为rejected或者fulfilled即输出
		promis.finally()不管指定不管Promise对象最后状态如何，都会执行的操作（本质上还是then方法的特例）
```

### 32.前端事件流

```text
事件流描述的是从页面中接受事件的顺序，事件 捕获阶段 处于目标阶段 事件冒泡阶段 addeventListener 最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。
  1、事件捕获阶段：实际目标div在捕获阶段不会接受事件，也就是在捕获阶段，事件从document到<html>再到<body>就停止了。
      2、处于目标阶段：事件在div发生并处理，但是事件处理会被看成是冒泡阶段的一部分。
      3、冒泡阶段：事件又传播回文档
   阻止冒泡事件event.stopPropagation()
	  function stopBubble(e) {
    		if (e && e.stopPropagation) { // 如果提供了事件对象event 这说明不是IE浏览器
      		e.stopPropagation()
    		} else {
      		window.event.cancelBubble = true //IE方式阻止冒泡
    	      }
  		   }
   阻止默认行为event.preventDefault()
 function stopDefault(e) {
    if (e && e.preventDefault) {
      e.preventDefault()
    } else {
      // IE浏览器阻止函数器默认动作的行为
      window.event.returnValue = false
    }
  }
```

### 33.事件如何先捕获后冒泡？

> 在 DOM 标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果， 对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获事件。
>
> 哪些事件不支持冒泡事件：鼠标事件：mouserleave mouseenter 焦点事件：blur focus UI 事件：scroll resize

### 34. 如何判断一个变量是对象还是数组（prototype.toString.call()）。

```text
千万不要使用typeof来判断对象和数组，因为这种类型都会返回object。
```

> typeOf()是判断基本类型的 Boolean,Number，symbol, undefined, String。 对于引用类型：除 function，都返回 object null 返回 object。
>
> installOf() 用来判断 A 是否是 B 的实例，installof 检查的是原型。
>
> toString() 是 Object 的原型方法，对于 Object 对象，直接调用 toString() 就能返回 [Object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
>
> hasOwnProperty()方法返回一个布尔值，指示对象自身属性中是否具有指定的属性，该方法会忽略掉那些从原型链上继承到的属性。
>
> isProperty()方法测试一个对象是否存在另一个对象的原型链上。

### 35.setTimeout 和 setInterval 的机制

```text
因为js是单线程的。浏览器遇到etTimeout 和 setInterval会先执行完当前的代码块，在此之前会把定时器推入浏览器的
待执行时间队列里面，等到浏览器执行完当前代码之后会看下事件队列里有没有任务，有的话才执行定时器里的代码
```

### 36.splice 和 slice、map 和 forEach、 filter()、reduce()的区别

```text
 1.slice(start,end):方法可以从已有数组中返回选定的元素，返回一个新数组，
 包含从start到end（不包含该元素）的数组方法
	注意：该方法不会更新原数组，而是返回一个子数组
 2.splice():该方法想或者从数组中添加或删除项目，返回被删除的项目。（该方法会改变原数组）
	splice(index, howmany,item1,...itemx)
		·index参数：必须，整数规定添加或删除的位置，使用负数，从数组尾部规定位置
		·howmany参数：必须，要删除的数量，
		·item1..itemx:可选，向数组添加新项目
3.map()：会返回一个全新的数组。使用于改变数据值的时候。会分配内存存储空间数组并返回，forEach（）不会返回数据
4.forEach(): 不会返回任何有价值的东西，并且不打算改变数据，单纯的只是想用数据做一些事情，他允许callback更改原始数组的元素
5.reduce(): 方法接收一个函数作为累加器，数组中的每一个值（从左到右）开始缩减，最终计算一个值，不会改变原数组的值
6.filter(): 方法创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。它里面通过fun
```

## 性能优化

**一、webpack 打包文件体积过大？（最终打包为一个 js 文件）**

```text
1.异步加载模块2.提取第三库3.代码压缩4.去除不必要的插件
```

**二、如何优化 webpack 构建的性能**

```text
一、减少代码体积 1.使用CommonsChunksPlugin 提取多个chunk之间的通用模块，减少总体代码体积		 2.把部分依赖转移到CDN上，避免每次编译过程都由Webpack处理		 3.对一些组件库采用按需加载，避免无用的代码二、减少目录检索范围		 ·在使用loader的时候，通过制定exclude和include选项，减少loader遍历的目录范围，从而加快webpack编译速度	三、减少检索路经：resolve.alias可以配置webpack模块解析的别名，对于比较深的解析路经，可以对其配置alias
```

**三、移动端的性能优化**

```text
  1、首屏加载和按需加载，懒加载  2、资源预加载  3、图片压缩处理，使用base64内嵌图片  4、合理缓存dom对象  5、使用touchstart代替click（click 300毫秒的延迟）  6、利用transform:translateZ(0)，开启硬件GUP加速  7、不滥用web字体，不滥用float（布局计算消耗性能），减少font-size声明  8、使用viewport固定屏幕渲染，加速页面渲染内容  9、尽量使用事件代理，避免直接事件绑定
```

**四、Vue 的 SPA 如何优化加载速度**

```text
1.减少入口文件体积2.静态资源本地缓存3.开启Gzip压缩4.使用SSR,nuxt.js
```

**五、移动端 300ms 延迟**

```text
由来：300毫米延迟解决的是双击缩放。双击缩放，手指在屏幕快速点击两次。safari浏览器就会将网页缩放值原始比例。由于用户可以双击缩放或者是滚动的操作，当用户点击屏幕一次之后，浏览器并不会判断用户确实要打开至这个链接，还是想要进行双击操作因此，safair浏览器就会等待300ms，用来判断用户是否在次点击了屏幕       解决方案：1.禁用缩放，设置meta标签 user-scalable=no	  2.fastclick.js		原理：FastClick的实现原理是在检查到touchend事件的时候，会通过dom自定义事件立即		      发出click事件，并把浏览器在300ms之后真正的click事件阻止掉fastclick.js还可以解决穿透问题
```

### 六、页面的重构；

> 在不改变外部行为的前提下，简化结构、添加可读性

## 服务器端

### 一、状态码：

```text
  2XX（成功处理了请求状态）      200 服务器已经成功处理请求，并提供了请求的网页      201 用户新建或修改数据成功      202 一个请求已经进入后台      204 用户删除成功  3XX（每次请求使用的重定向不要超过5次）      304 网页上次请求没有更新，节省带宽和开销  4XX（表示请求可能出错，妨碍了服务器的处理）      400 服务器不理解请求的语法      401 用户没有权限（用户名，密码输入错误）      403 用户得到授权（401相反），但是访问被禁止      404 服务器找不到请求的网页，  5XX（表示服务器在处理请求的时候发生内部错误）      500 服务器遇到错误，无法完成请求      503 服务器目前无法使用（超载或停机维护）
```

### 二、304 的缓存原理（添加 Etag 标签.last-modified） 304 网页上次请求没有更新，节省带宽和开销

```text
1.服务器首先产生Etag,服务器可在稍后使用它来判断页面是否被修改。本质上，客户端通过该记号传回服务器要求服务器验证（客户端）缓存）2.304是	HTTP的状态码，服务器用来标识这个文件没有被修改，不返回内容，浏览器接受到这个状态码会去去找浏览器缓存的文件3.流程：客户端请求一个页面A。服务器返回页面A，并在A上加一个Tage客服端渲染该页面，并把Tage也存储在缓存中。客户端再次请求页面A	并将上次请求的资源和ETage一起传递给服务器。服务器检查Tage.并且判断出该页面自上次客户端请求之后未被修改。直接返回304last-modified: 客服端请求资源，同时有一个last-modified的属性标记此文件在服务器最后修改的时间		客服端第二次请求此url时，根据http协议。浏览器会向服务器发送一个If-Modified-Since报头，		询问该事件之后文件是否被修改，没修改返回304 有了Last-Modified，为什么还要用ETag？  1、因为如果在一秒钟之内对一个文件进行两次更改，Last-Modified就会不正确（Last—Modified不能识别秒单位的修改）  2、某些服务器不能精确的得到文件的最后修改时间  3、一些文件也行会周期新的更改，但是他的内容并不改变（仅仅改变修改的事件），这个时候我们并不希望客户端认为文件被修改，而重新GetETag，为什么还要用Last-Modified？  1、两者互补，ETag的判断的缺陷，比如一些图片等静态文件的修改  2、如果每次扫描内容都生成ETag比较，显然要比直接比较修改时间慢的多。ETag是被请求变量的实体值（文件的索引节，大小和最后修改的时间的Hash值）  1、ETag的值服务器端对文件的索引节，大小和最后的修改的事件进行Hash后得到的。
```

### 三、get/post 的区别

```text
1.get数据是存放在url之后，以？分割url和传输数据，参数之间以&相连； post方法是把提交的数据放在http包的Body中2.get提交的数据大小有限制，（因为浏览器对url的长度有限制），post的方法提交的数据没有限制3.get需要request.queryString来获取变量的值，而post方式通过request.from来获取变量的值4.get的方法提交数据，会带来安全问题，比如登录一个页面，通过get的方式提交数据，用户名和密码就会出现在url上
```

### 四、http 协议的理解

```text
1.超文本的传输协议，是用于从万维网服务器超文本传输到本地资源的传输协议2.基于TCP/IP通信协议来传递数据（HTML，图片资源）3.基于运用层的面向对象的协议，由于其简洁、快速的方法、适用于分布式超媒体信息系统4.http请求信息request：	请求行（request line）、请求头部（header）,空行和请求数据四部分构成	请求行，用来说明请求类型,要访问的资源以及所使用的HTTP版本.	请求头部，用来说明服务器要使用的附加信息	空行，请求头部后面的空行是必须的	请求数据也叫主体，可以添加任意的其他数据。5.http相应信息Response	状态行、消息报头、空行和响应正文	状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成	消息报头，用来说明客户端要使用的一些附加信息	空行，消息报头后面的空行是必须的	响应正文，服务器返回给客户端的文本信息。
```

### 五、http 和 https

```text
https：是以安全为目标的HTTP通道，简单讲是HTTP的安全版本，通过SSL加密http：超文本传输协议。是一个客服端和服务器端请求和应答的标准（tcp）,使浏览器更加高效，使网络传输减少
```

### 六、http1.0 1.1 2.0 的区别

```text
长连接：HTTP1.0需要使用keep-alive参数来告知服务器建立一个长连接，而HTP1.1默认支持长连接节约宽带：HTTP1.1支持只发送一个header信息（不带任何body信息）host域（设置虚拟站点，也就是说，web server上的多个虚拟站点可以共享同一个ip端口）：HTTP1.0没有host域1.http2采用的二进制文本传输数据，而非http1文本格式，二进制在协议的解析和扩展更好2.数据压缩：对信息头采用了HPACK进行压缩传输，节省了信息头带来的网络流量3.多路复用：一个连接可以并发处理多个请求4.服务器推送：我们对支持HTTP2.0的web server请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取。这种方式非常合适加载静态资源
```

### 七、web 缓存

```text
1.web缓存就是存在于客户端与服务器之间的一个副本、当你第一个发出请求后，缓存根据请求保存输出内容的副本2.缓存的好处        （1）减少不必要的请求    （2）降低服务器的压力，减少服务器的消耗    （3）降低网络延迟，加快页面打开速度（直接读取浏览器的数据）
```

### 八、常见的 web 安全及防护原理

```text
1.sql注入原理：是将sql代码伪装到输入参数中，传递到服务器解析并执行的一种攻击手法。也就是说，            在一些对server端发起的请求参数中植入一些sql代码，server端在执行sql操作时，会拼接对应参数，            同时也将一些sql注入攻击的“sql”拼接起来，导致会执行一些预期之外的操作。		防范：1.对用户输入进行校验		       2.不适用动态拼接sql2.XSS（跨站脚本攻击）：往web页面插入恶意的html标签或者js代码。		        举例子：在论坛放置一个看是安全的链接，窃取cookie中的用户信息			防范：1.尽量采用post而不使用get提交表单			      2.避免cookie中泄漏用户的隐式3.CSRF(跨站请求伪装）：通过伪装来自受信任用户的请求			举例子：黄轶老师的webapp音乐请求数据就是利用CSRF跨站请求伪装来获取QQ音乐的数据			防范：在客服端页面增加伪随机数，通过验证码XSS和CSRF的区别：   1.XSS是获取信息，不需要提前知道其他用户页面的代码和数据包   2.CSRF代替用户完成指定的动作，需要知道其他页面的代码和数据包
```

### 九、CDN(内容分发网络)

1. 尽可能地避开互联网有可能影响数据传输速度和稳定性的瓶颈。使内容传输的更快更稳定。
2. 关键技术：内容存储和分发技术
3. 基本原理：广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对的地区或者网络中，当用户访问网络时利用全局负载技术将用户的访问指向距离最近的缓存服务器，由缓存服务器直接响应用户的请求（全局负载技术）

### 十一、从输入 url 到获取页面的完整过程

1. 查询 DNS（域名解析），获取域名对应的 IP 地址，查询浏览器缓存
2. 浏览器与服务器建立 TCP 链接（三次握手）
3. 浏览器向服务器发送 http 请求（请求和传输数据）
4. 服务器接收到这个请求后，根据路径参数，经过后端的一些处理生成 html 代码返回给浏览器
5. 浏览器拿到完成的 html 页面代码开始解析和渲染，如果遇到外部的 css 或 js，图片一样的的步骤
6. 浏览器根据拿到的资源对页面进行渲染，把一个我弄成的页面呈现出来

### 十二、浏览器渲染原理及流程 DOM->CSSOM->render->layout->print

流程：解析 html 以及构建 dom 树->构建 render 树->布局 render 树->绘制 render 树

概念：

1. 构建 DOM 树：渲染引擎解析 HTML 文档，首先将标签转换成 DOM 树中的 DOM node(包括 js 生成的标签)生成内容树
2. 构建渲染树：解析对应的 css 样式文件信息（包括 js 生成的样式和外部的 css）
3. 布局渲染树：从根节点递归调用，计算每一个元素的大小，位置等。给出每个节点所在的屏幕的精准位置
4. 绘制渲染树：遍历渲染树，使用 UI 后端层来绘制每一个节点

重绘：当盒子的位置、大小以及其它属性，例如颜色、字体大小等确定下来之后，浏览器变把这些颜色都按照各自的特性绘制一遍，将内容呈现在页面上。

触发重绘的条件：改变元素的外观属性。如：color，background-color 等

重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新特性重新绘制，是元素呈现新的外观

注意：table 及其内部元素需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花时间，要尽量避免使用 table 布局

重排（重构/回流/reflow）：当渲染树中的一部分（或全部）因为元素的规模尺寸，布局，隐藏等改变而需要重新构建，这就是回流。

每个页面都需要一次回流，就是页面第一次渲染的时候。

重排一定会影响重绘，但是重绘不一定不影响重排。

### 十三、为什么 css 放在顶部而 js 写在后面

1. 浏览器预先加载 css 后，可以不必等待 HTML 加载完毕就可以渲染页面了
2. 其实 HTML 渲染并不会等到完全加载完再渲染页面，而是一边解析 DOM 一边渲染
3. js 写在尾部，主要是因为 js 主要扮演事件处理的功能，一方面很多操作是在页面渲染后才执行的。另一方面可以节省加载时间，是页面能够更快的加载，提高用户的良好体验

但是随着 JS 技术的发展，JS 也就开始承担页面渲染的工作。比如我们的 UI 其实可以分别对待，把渲染页面的 js 放在前面，事件处理的 js 放在后面。

### 十四、存储方法与传输方式

1. indexDB:是后的本低存储库，把一些数据存储到浏览器中，没网络，浏览器可以从这里读取数据，离线运用。5M
2. Cookie：通过浏览器记录信息确认用户省份，最大 4KB，这也就限制了传输的数据，请求的性能会受到影响
3. Session：服务器使用的一种记录客户状态的机制（session_id 在 set_cookie 发送到客户端，保存为 cookie）
4. localStroge:h5 的本地存储，数据永久保存在客户端

**cookie，sessionStorage,localStorage**

1. cookie,sessionStorage,localStorage 是存放在客户端，session 对象数据是存放在服务器上，实际上浏览器和服务器之间仅需传递 session 即可，服务器根据 seesion_id 找到对应的用户 session 对象，session 存储数据更安全一些，一般存放用户信息，浏览器只适合存储一般的数据
2. cookie 数据始终在同源的 http 请求中携带，在浏览器和服务器来回传递，里面存放着 session_id sessionStorage,localStorage 仅在本地保存
3. 大小限制区别，cookie 数据不超过 4kb，localStorage 在谷歌浏览中 2.6MB
4. 数据有效期不同，cookie 在设置的（服务器设置）有效期内有效，不管窗口和浏览器关闭，sessionStorage 仅在当前浏览器窗口关闭之前有效，关闭即销毁（临时存储），localStorage 始终有效

**SessionStorageg 和 localStorage 区别：**

1. sessionStorage 用于本地存储一个会话（session）中的数据，这些数据只有在用一个会话的页面才能被访问（也就是说在第一次通信过程中）并且在会话结束后数据也随之销毁，不是一个持久的本低存储，会话级别的存储
2. localStorage 用于持久化的本地存储，除非主动删除数据，否则不会过期

**token、cookie、session 三者的理解？？？**

1. token 就是令牌，比如你授权（登录）一个程序时，他就是个依据，判断你是否已经授权该软件（最好的身份认证，安全性好，切实唯一的）用户身份的验证方式
2. cookie 是写在客户端一个 txt 文件，里面包括登录信息值类的，这样你下次在登陆某个网站，就会自动调用 cookie 自动登录用户名，服务器生成，发送到浏览器，浏览器保存，下次请求再次发送给服务器（存放着登录信息）
3. session 是一类用来客户端和服务器之间保持状态的解决方案，会话完成被销毁（代表的就是服务器和客户端的一次会话过程）cookie 中存放着 sessionID，请求会发送这个 id，session 因为 request 对象而产生。

**基于 Token 的身份验证：（最简单的 token: uid 用户唯一的身份识别 + time 当前事件戳 + sign 签名）**

1. 用户通过用户名和密码发送请求
2. 服务器端验证
3. 服务器端返回一个带签名的 token，给客户端
4. 客户端储存 token，并且每次用于发送请求
5. 服务器验证 token 并且返回数据

每一次请求都需要 token

**cookie 与 session 区别**

1. cookie 数据存放在客户的浏览器上，session 数据放在服务器上。
2. cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗考虑到安全应当使用 session。
3. session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用 COOKIE。
4. 单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存 20 个 cookie。

**session 与 token 区别**

1. session 认证只是把简单的 User 的信息存储 Session 里面，sessionID 不可预测，一种认证手段。只存在服务端，不能共享到其他的网站和第三方 App
2. token 是 oAuth Token，提供的是认证和授权，认证针对用户，授权是针对 App，目的就是让某 APP 有权访问某用户的的信息。Token 是唯一的， token 不能转移到其他的 App，也不能转到其他用户上。（适用于 App）
3. session 的状态是存在服务器端的，客户端只存在 session id， Token 状态是存储在客户端的 。

**Cookie 的弊端有哪些？？？（优势：保存客户端数据，分担了服务器存储的负担）**

1. 数量和长度的限制。每个特定的域名下最多生成 20 个 cookie（chorme 和 safari 没有限制）
2. 安全性问题

## 手写代码

1. 动手实现一个 bind（原理通过 apply，call）

2. AJAX

```text
 ajax的原理：相当于在用户和服务器之间加一个中间层（ajax引擎),使用户操作与服务器响应异步化。  优点：在不刷新整个页面的前提下与服务器通信维护数据。不会导致页面的重载        可以把前端服务器的任务转嫁到客服端来处理，减轻服务器负担，节省宽带  劣势：不支持back。对搜索引擎的支持比较弱；不容易调试	  怎么解决呢？通过location.hash值来解决Ajax过程中导致的浏览器前进后退按键失效，  解决以前被人常遇到的重复加载的问题。主要比较前后的hash值，看其是否相等，在判断是否触发ajax
```

3. 函数节流（throttle）

   ```
    function throttle (func, wait) {        var timeout;        var previous = 0;        return function () {            context = this;            args = arguments;            if (!timeout) {                timeout = setTimeout(() => {                    timeout = null;                    func.apply(context,args)                }, wait);            }        }    }     }
   ```

4. 函数防抖（debounce）

```
function debounce (func, wait) {         var timeout;         return function() {             var context = this;             var args = arguments;             clearTimeout(timeout);             timeout = setTimeout(() => {                 func.apply(context,args)             }, wait);         }     }
```

5. 实现一个函数 clone，可以对 JavaScript 中的 5 种主要的数据类型（包括 Number、String、Object、Array、Boolean）进行值复制
6. [实现一个简单的 Promise](https://juejin.im/post/6844903625769091079)
7. 发布订阅者模式（观察者模式）
8. 手动写一个 node 服务器

```
const http = require('http');const fs = require('fs');const server = http.createServer((req,res) => {	if (reu.url == '/') {	const indexFile = fs.createReadStream('./index.html')	req.writeHead(200,{'context-Type':'text/html;charset = utf8})	indexFile.pipe(res)}server.listen(8080)
```

## Vue 的相关问题

### VUE 和 REACT 有什么区别？

react 整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在 react 中，是单向数据流；

vue 的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立 Watcher 来监听，当属性变化的时候，响应式的更新对应的虚拟 dom。

### 谈谈对 vue 的理解

> vue 是一个渐进式的 JS 框架。他易用，灵活，高效； 可以把一个页面分隔成多个组件；当其他页面有类似功能时，直接让封装的组件进行复用； 他是构建用户界面的声明式框架，只关心图层；不关心具体是如何实现的

### vue 响应式原理

### vue 虚拟 dom & diff 算法

### vue3 解决什么问题

### Vue 为什么不能检测数组和对象的变化,怎么处理(为什么通过索引操作数组不能触发响应式)

### vue router 原理

### v-model 实现原理

> Vue 的双向数据绑定是由数据劫持结合发布者订阅者实现的。 数据劫持是通过 Object.defineProperty()来劫持对象数据的 setter 和 getter 操作。 在数据变动时作你想做的事
>
> 原理 通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化->视图更新 在初始化 vue 实例时，遍历 data 这个对象，给每一个键值对利用 Object.definedProperty 对 data 的键值对新增 get 和 set 方法，利用了事件监听 DOM 的机制，让视图去改变数据。

### vue.nexttick

### 谈谈对生命周期的理解

> beforeCreate 阶段：vue 实例的挂载元素 el 和数据对象 data 都是 undefined，还没有初始化。
> created 阶段：vue 实例的数据对象 data 有了，可以访问里面的数据和方法，未挂载到 DOM，el 还没有
> beforeMount 阶段：vue 实例的 el 和 data 都初始化了，但是挂载之前为虚拟的 dom 节点
> mounted 阶段：vue 实例挂载到真实 DOM 上，就可以通过 DOM 获取 DOM 节点
> beforeUpdate 阶段：响应式数据更新时调用，发生在虚拟 DOM 打补丁之前，适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器
> updated 阶段：虚拟 DOM 重新渲染和打补丁之后调用，组成新的 DOM 已经更新，避免在这个钩子函数中操作数据，防止死循环
> beforeDestroy 阶段：实例销毁前调用，实例还可以用，this 能获取到实例，常用于销毁定时器，解绑事件
> destroyed 阶段：实例销毁后调用，调用后所有事件监听器会被移除，所有的子实例都会被销毁

### vue 路由的两种模式

hash ——即地址栏 URL 中的#符号（此 hsah 不是密码学里的散列运算） hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
history ——利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法
这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改是，虽然改变了当前的 URL，但你浏览器不会立即向后端发送请求。

### vuex 的流程

页面通过 mapAction 异步提交事件到 action。action 通过 commit 把对应参数同步提交到 mutation。
mutation 会修改 state 中对于的值。 最后通过 getter 把对应值跑出去，在页面的计算属性中
通过 mapGetter 来动态获取 state 中的值

### vuex 有哪几种状态和属性

state 中保存着共有数据，数据是响应式的
getter 可以对 state 进行计算操作，主要用来过滤一些数据，可以在多组件之间复用
mutations 定义的方法动态修改 state 中的数据，通过 commit 提交方法，方法必须是同步的
actions 将 mutations 里面处理数据的方法变成异步的，就是异步操作数据，通 store.dispatch 来分发 actions，把异步的方法写在 actions 中，通过 commit 提交 mutations，进行修改数据。
modules：模块化 vuex

### vue 中 key 值的作用

当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。 如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

key 的作用主要是为了高效的更新虚拟 DOM。

### `$route`和`$router`的区别

> $route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
> $router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。

### vue-router 守卫

> 导航守卫 router.beforeEach 全局前置守卫
> to: Route: 即将要进入的目标（路由对象）
> from: Route: 当前导航正要离开的路由
> next: Function: 一定要调用该方法来 resolve 这个钩子。（一定要用这个函数才能去到下一个路由，如果不用就拦截） 执行效果依赖 next 方法的调用参数。
> next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
> next(false): 取消进入路由，url 地址重置为 from 路由地址(也就是将要离开的路由地址)。

> 路由独享的守卫 你可以在路由配置上直接定义 beforeEnter 守卫
>
> 组件内的守卫 你可以在路由组件内直接定义以下路由导航守卫

### vue 修饰符

> stop：阻止事件的冒泡
> prevent：阻止事件的默认行为
> once：只触发一次
> self：只触发自己的事件行为时，才会执行

### vue 项目中的性能优化

> 1.不要在模板里面写过多表达式
>
> 2.循环调用子组件时添加 key
>
> 3.频繁切换的使用 v-show，不频繁切换的使用 v-if
>
> 4.尽量少用 float，可以用 flex
>
> 5.按需加载，可以用 require 或者 import()按需加载需要的组件
>
> 6.路由懒加载

### .vue.extend 和 vue.component

> extend 是构造一个组件的语法器。 然后这个组件你可以作用到 Vue.component 这个全局注册方法里 还可以在任意 vue 模板里使用组件。 也可以作用到 vue 实例或者某个组件中的 components 属性中并在内部使用 apple 组件。
> Vue.component 你可以创建 ，也可以取组件。
>
> 常见的兼容问题
> png24 位的图片在 iE6 浏览器上出现背景 解决方案是做成 PNG8.也可以引用一段脚本处理.
>
> 浏览器默认的 margin 和 padding 不同。 解决方案是加一个全局的\*{margin:0;padding:0;}来统一。
>
> IE6 双边距 bug:块属性标签 float 后，又有横行的 margin 情况下，在 ie6 显示 margin 比设置的大。
>
> 浮动 ie 产生的双倍距离（IE6 双边距问题：在 IE6 下，如果对元素设置了浮动，同时又设置了 margin-left 或 margin-right，margin 值会加倍。） #box{ float:left; width:10px; margin:0 0 0 100px;}

## 其它

::: details 题目

### JS 的数据类型以及是如何存储的

JavaScript 一共有 8 种数据类型，其中有 7 种基本数据类型：Undefined、Null、Boolean、Number、String、Symbol（es6 新增，表示独一无二的值）和 BigInt（es10 新增）；

1 种引用数据类型——Object（Object 本质上是由一组无序的名值对组成的）。里面包含 function、Array、Date 等。JavaScript 不支持任何创建自定义类型的机制，而所有值最终都将是上述 8 种数据类型之一。

原始数据类型：直接存储在**栈**（stack）中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

引用数据类型：同时存储在**栈**（stack）和**堆**（heap）中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### &&、||、！！运算符

- `&&` 叫逻辑与，在其操作数中找到第一个虚值表达式并返回它，如果没有找到任何虚值表达式，则返回最后一个真值表达式。它采用短路来防止不必要的工作。
- `||` 叫逻辑或，在其操作数中找到第一个真值表达式并返回它。这也使用了短路来防止不必要的工作。在支持 ES6 默认函数参数之前，它用于初始化函数中的默认参数值。
- `!!` 运算符可以将右侧的值强制转换为布尔值，这也是将值转换为布尔值的一种简单方法。

### JS 数据类型判断

**（1）typeof**

typeof 对于原始类型来说，除了 null 都可以显示正确的类型

```
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object
```

typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型,所以想判断一个对象的正确类型，这时候可以考虑使用 instanceof

**（2）instanceof**

instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。

```
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false
console.log('str' instanceof String);                // false
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);
```

可以看出直接的字面量值判断数据类型，instanceof 可以精准判断引用数据类型（Array，Function，Object），而基本数据类型不能被 instanceof 精准判断。

因为数组属于 object 中的一种，所以数组 instanceof object,也是 true.

我们来看一下 instanceof 在 MDN 中的解释：instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。其意思就是判断对象是否是某一数据类型（如 Array）的实例，请重点关注一下是判断一个对象是否是数据类型的实例。在这里字面量值，2， true ，'str'不是实例，所以判断值为 false。

**（3）constructor**

除了 undefined 和 null，其他类型的变量均能使用 constructor 判断出类型.

缺点：这个方法容易被改写

```
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了
function Fn(){};

Fn.prototype=new Array();

var f=new Fn();

console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true
```

**（4）Object.prototype.toString.call()**使用 Object 对象的原型方法 toString ，使用 call 进行狸猫换太子，借用 Object 的 toString 方法

```
var a = Object.prototype.toString;

console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

### JS 数据类型转换

在 JS 中类型转换只有三种情况，分别是：

- 转换为布尔值（调用 Boolean()方法）
- 转换为数字（调用 Number()、parseInt()和 parseFloat()方法）
- 转换为字符串（调用.toString()或者 String()方法）

```
null和underfined没有.toString方法
```

### JS 的内置对象

### undefined 与 undeclared 的区别

### undefined 与 null 的区别

### valueOf 和 toString

{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""

**数据的转换**

所有对象继承了两个转换方法：

**第一个是 toString(),它的作用是返回一个反映这个对象的字符串**

**第二个是 valueOf(),它的作用是返回它相应的原始值**

- JS 的作用域和作用域链
- this,call,apply 和 bind
- JS 原型，原型链
- JS 获取原型的方法
- 箭头函数和普通函数有什么区别
- 闭包
- DOM 和 BOM
- 三种事件模型
- 事件委托
- 事件传播
- 事件捕获
- 事件冒泡
- 事件循环
- DOM 操作
- Object.defineProperties
- JS 数组和对象的原生方法
- 正则表达式
- AJAX
- JS 延迟加载
- 模块化开发的理解
- 模块规范
- AMD 和 CMD 规范的区别
- ES6 模块与 CommonJS 模块、AMD、CMD 的差异
- require JS 的核心原理
- JS 的运行机制
- arguments

arguments 对象是函数中传递的参数值的集合。它是一个类似数组的对象，因为它有一个 length 属性，我们可以使用数组索引表示法 arguments[1]来访问单个值，但它没有数组中的内置方法，如：forEach、reduce、filter 和 map。

我们可以使用 Array.prototype.slice 将 arguments 对象转换成一个数组。

- V8 引擎的垃圾回收机制
- 内存泄漏
- ECMAScript

ECMAScript 是编写脚本语言的标准，这意味着 JavaScript 遵循 ECMAScript 标准中的规范变化，因为它是 JavaScript 的蓝图。

### ES6 新特性

- 块作用域
- 类
- 箭头函数
- 模板字符串
- 加强的对象字面
- 对象解构
- Promise
- 模块
- Symbol
- 代理（proxy）Set
- 函数默认参数
- rest 和展开

### var,let 和 const 的区别

var 声明的变量会挂载在 window 上，而 let 和 const 声明的变量不会；var 声明的变量会挂载在 window 上，而 let 和 const 声明的变量不会；let 和 const 声明形成块作用域；同一作用域下 let 和 const 不能声明同名变量，而 var 可以

### 箭头函数

箭头函数表达式得语法比函数表达式更简洁，并且没有自己的 this，arguments,super 或 new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

### 类

类是在 JS 中编写构造函数得新方法。它是使用构造函数的语法糖，在底层中使用仍然是原型和基于原型得继承

### 模板字符串

模板字符串是在 JS 中创建字符串的一种新闻坊，我们可以通过使用反引号使模板字符串化，可以使用\${expr}添加表达式或值，不需要转义字符，比 ES5 版本更简洁

### 对象解构

对象解构是从对象或者数组中获取或提取值得一种新的更简洁得方法

- Set
- Proxy
- 函数式编程
- 高阶函数
- 为什么函数被称为一等公民
- 回调函数
- Promise
- Iterator
- Generator 函数
- async/await
- 节流与防抖
- 设计模式

### node

- egg 了解吗
- 洋葱模型
- node 的 eventLoop 和浏览器的区别
- 如何保证 node 的高可用，容灾等措施
- node 如何发布

### 浏览器相关问题

- eventLoop
- 关键渲染路径
- 加载原理
- DOM 树和渲染树区别
- 回流和重绘

:::
