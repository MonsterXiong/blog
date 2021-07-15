---
sidebar: auto
---

# TCP

## TCP 的三次握手相关问题

### 三次握手

三次握手（Three-way Handshake）其实就是指建立一个 TCP 连接时，需要客户端和服务器总共发送 3 个包。进行三次握手的主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传输做准备。实质上其实就是连接服务器指定端口，建立 TCP 连接，并同步连接双方的序列号和确认号，交换 TCP 窗口大小信息。

刚开始客户端处于 Closed 的状态，服务端处于 Listen 状态。进行三次握手：

- 第一次握手：客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号 ISN（c）。此时客户端处于 SYN_SEND 状态

首部的同步位 SYN=1，初始序号 seq=x，SYN=1 的报文段不能携带数据，但是消耗掉一个序号。

- 第二次握手：服务器收到客户端的 SYN 报文之后，会以自己的 SYN 报文作为应答，并且也是指定了自己的初始化序列号（s）。同时会把客户端的 ISN+1 作为 ACK 的值，表示自己已经收到了客户端的 SYN，此时服务器处于 SYN_RCVD 的状态。

在确认报文段中 SYN=1，ACK=1，确认号 ack=x+1，初始序号 seq=y。

- 第三次握手：客户端收到 SYN 报文之后，会发送一个 ACK 报文，当然，也是一样把服务器的 ISN+1 作为 ACK 的值，表示已经收到了服务端的 SYN 报文，此时客户端处于 ESTABLISHED 状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED 状态，此时，双方已建立起了连接。

确认报文段 ACK=1，确认号 ack=y+1，序号 seq=x+1（初始化 seq=x，第二个报文段所以要+1），ACK 报文段可以携带数据，不携带数据则不消耗序号。

发送第一个 SYN 的一端将执行主动打开（active open），接受这个 SYN 并发回下一个 SYN 的另一端执行被动打开（passive open）。

在 socket 编程中，客户端执行 connect()时，将触发三次握手。

### 为什么需要三次握手，两次不行吗？

三次握手的目的是什么，能不能两次握手来达到同样的目的

第一次握手：客户端发送网络包，服务端收到了。这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。

第二次握手：服务端发包，客户端收到了。这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。不过此时服务端并不能确认客户端的接收能力是否正常

第三次握手：客户端发包，服务端收到了。这样服务端就能得出结论：客户端的接收、发送能力正常，服务端自己的接收、发送能力也正常。

因此需要三次握手才能确认双方的接收与发送能力是否正常。

两次握手可能出现以下情况

如客户端发出连接请求，但因为连接请求报文丢失而未收到确认，于是客户端再重传一次连接请求。后来收到了确认，建立了连接。数据传输完毕后，就释放了连接，客户端共发出了两个连接请求报文段，其中第一个丢失，第二个到达了服务端，但是第一个丢失的报文段只是在某些网络节点长时间滞留了，延误到连接释放以后的某个时间才到达服务端，此时服务端误认为客户端又发出一次新的连接请求，于是就向客户端发出确认报文，同意建立连接，不采用三次握手，只要服务端发出确认，就建立新的连接了，此时客户端忽略了服务端发来的确认，也不发送数据，则服务端一直等待客户端发送数据，浪费资源。

### 什么是半连接队列

服务器第一次收到客户端的 SYN 之后，就会处于 SYN_RCVD 状态，此时双方还没有完全建立其连接，服务器会把此种状态下的请求连接放在一个队列里，我们把这种队列称之为半连接队列。

当然还有一个全连接队列，就是已经完成了三次握手，建立起连接的就会放在全连接队列中，如果队列满了就有可能会出现丢包现象

关于 SYN-ACK 重传次数的问题

服务器发送完 SYN-ACK 包，如果未收到客户端确认包，服务器进行首次重传，等待一段时间仍未收到客户端确认包，进行第二次重传，如果重传次数超过系统规定的最大重传次数，系统将该连接信息从半连接队列中删除，注意，每次重传等待的时间不一定相同，一般会是指数增长，例如间隔时间 1s,2s,4s,8s......