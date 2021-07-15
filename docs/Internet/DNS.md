# 域名系统 DNS

域名 DNS 系统（Domain Name System）是因特网使用的命名系统，用来把人们使用的机器名字转换为 IP 地址。

用户与因特网上某个主机通信时，必须要知道对方的 IP 地址。然而用户很难记住长达 32 位二进制主机地址（即使是点分十进制的 IP 地址也不太容易记忆）。所以应用层为了便于用户记忆各种网络应用，更多的使用的是主机名字，hosts 的文件中列出了所有主机名字和相应的 IP 地址。只要用户输入一个主机名字，计算机就可以很快地把这个主机名字转换成机器能够识别的二进制 IP 地址。

为什么机器在处理 IP 地址数据报时要使用 IP 地址而不使用域名呢？

这是因为 IP 地址的长度是固定的 32 位（如果是 IPV6 地址，那就是 128 位也是定长的），而域名的长度并不是固定的，机器处理起来比较困难。

因特网的域名系统 DNS 被设计成为一个联机分布式数据库系统，并采用客户-服务器方式。DNS 使大多数名字都在本地进行解析（resolve：在 TCP/IP 的文档中，这种地址转换常称为地址解析。解析就是转换的意思，地址解析可能会包含多次的查询请求和回答过程。），仅少量解析需要在因特网上通信，因此 DNS 系统的效率较高。由于 DNS 是分布式系统，即使单个计算机出了故障，也不会妨碍整个 DNS 系统的正常运行。

##　 DNS 缓存
为了提高 DNS 的查询效率，并减轻根域名服务器的负荷和减少因特网上的 DNS 查询报文数量，在域名服务器中广发地使用了高速缓存（也称高速缓存域名服务器），用来存放最近查询过地域名以及从何处获得域名映射信息的记录。

不但在本地域名服务器中需要高速缓存，在主机中也很需要。许多主机在启动时从本地域名服务器下载名字和地址的全部数据库，维护存放自己最近使用的域名的告诉缓存，并且只在从缓存中找不到名字时才使用域名服务器。维护本地域名服务器数据库的主机，应该定期地检查域名服务器以获取新地映射信息，而且主机必须从缓存中删掉无效的项。由于域名改动并不频繁，大多数网点不需花太多精力就能维护数据库地一致性 。

### windows 查看系统 DNS 缓存

`WIN+R`输入 cmd（命令提示符窗口），然后

- ipconfig/displaydns 查看系统内的 DNS 缓存
- ipconfig/flushdns 清空 DNS 缓存

### 浏览器查看 DNS 缓存

在 Chrome 浏览器中输入：`chrome://net-internals/#dns`

Clear host cache 清空缓存