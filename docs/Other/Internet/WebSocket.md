# WebSocket

## 什么是 WebSocket

## 定义

*WebSocket*是一个持久化的网络通信协议，可以在单个 TCP 连接上进行全双工通讯，没有了 Request 和 Response 的概念，两者地位完全平等，连接一旦建立，客户端和服务端之间实时可以进行双向数据传输。

## 关联和区别

### HTTP

1. HTTP 是非持久的协议，客户端想知道服务端的处理进度只能通过不停地使用 Ajax 进行轮询或者采用 long poll 的方式来，但是前者对服务器压力大，后者则会因为一直等待 Response 造成堵塞
2. 虽然 http1.1 默认开启了 keep-alive 长连接保持了这个 TCP 通道使得在一个 HTTP 中，可以发送多个 Request，接收多个 Response，但是一个 request 只能有一个 response，而且这个 response 也是被动的，不能主动发起
3. websocket 虽然是独立于 HTTP 的一种协议，但是 websocket 必须依赖 HTTP 协议进行一次握手，握手成功后，数据就直接从 TCP 通道传输，与 HTTP 无关了。

### socket

1. socket 也被称为套接字，与 HTTP 和 WebSocket 不一样，socket 不是协议，它是在程序层面上对传输层协议（TCP/IP）的接口封装。可以理解为一个能够提供端对端的通信的调用接口（API）
2. 对于程序员而言，其需要在 A 端创建一个 socket 实例，并为这个实例提供所要连接的 B 端的 IP 地址和端口号，而在 B 端创建另一个 socket 实例，并且绑定本地端口号来进行监听。当 A 和 B 建立连接后，双方就建立了一个端对端的 TCP 连接，从而可以进行双向通信。WebSocket 借鉴了 socket 的思想，为 client 和 server 之间提供了类似的双向通信机制。

### 应用场景

WebSocket 可以做弹幕，消息订阅，多玩家游戏，协同编辑，股票基金实时报价、视频会议、在线教育、聊天室等应用实时监听服务端变化。

```
npm install express ws
```

```js
//server.js
//引入express 和 ws
const express = require("express");
const SocketServer = require("ws").Server;

//指定开启的端口号
const PORT = 3000;

// 创建express，绑定监听3000端口，且设定开启后在consol中提示
const server = express().listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);

// 将express交给SocketServer开启WebSocket的服务
const wss = new SocketServer({ server });

//当 WebSocket 从外部连接时执行
wss.on("connection", (ws) => {
  //连接时执行此 console 提示
  console.log("Client connected");

  //固定发送最新消息给客户端
  //   const sendNowTime = setInterval(() => {
  //     ws.send(String(new Date()));
  //   }, 1000);

  //对message设置监听，接收从客户端发送的消息
  ws.on("message", (data) => {
    //取得所有连接中的 客户端
    let clients = wss.clients;
    //循环，发送消息至每个客户端
    clients.forEach((client) => {
      client.send(data);
    });
  });

  // 当WebSocket的连接关闭时执行
  ws.on("close", () => {
    console.log("Close connected");
  });
});
```

```html
<html>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

```js
// index.js
// 使用WebSocket的地址向服务端开启连接
let ws = new WebSocket("ws://localhost:3000");

// 开启后的动作，指定在连接后执行的事件
ws.onopen = () => {
  console.log("open connection");
};

// 接收服务端发送的消息
ws.onmessage = (event) => {
  console.log(event);
};

// 指定在关闭后执行的事件
ws.onclose = () => {
  console.log("close connection");
};
```
