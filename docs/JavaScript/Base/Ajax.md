# Ajax

## Ajax 简介

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

## Step：怎样发送 http 请求

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
