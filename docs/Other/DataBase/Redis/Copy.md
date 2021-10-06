# Redis 主从复制的实现原理

## 主从复制的应用场景

比如说在某一台主机上安装 Redis，当这台主机发生宕机或者磁盘损坏时，就会导致服务不可用或者数据丢失，所以一般情况下我们会为一个 Redis 服务器设置多个从服务器以达到防止数据丢失问题，这种模式也可以实现读写分离，然后提升整个 Redis 对外的吞吐量，最后可以联合哨兵模式来提升系统的可用性以及扩展性，那么一旦牵涉到主从这种框架就会涉及到复制的问题，Redis 当中支持两种复制模式。

## 全量复制

是指主从服务器之间建立连接，从服务器发送 sync 命令向主服务器请求数据，主服务器通过 bgsave 生成 RDB 文件，并且将 RDB 文件传给从服务器，这个阶段又称为同步阶段，在这个阶段，主服务器可能会接收其他的写命令，这时候需要将缓存中的写命令也给到从服务器去执行，这个阶段也称为命令传播阶段，在 Redis2.8 版本之前复制的方式只支持全量同步，但全量同步 sync 命令效率较低并且比较耗资源，所以必须考虑另外一种复制方式，在 2.8 版本之后新增了一个增量复制，

## 增量复制

首先考虑一个问题：主从服务器之间什么时候需要进行数据复制？

1. 从服务器断线重连，断线期间有可能数据是不一样的
2. 新增节点，必须进行全量复制

是否进行增量复制，我们需要考虑从服务器复制了多少，首先可以按照主服务器的 ID 去判断，如果主服务器的 ID 变了，那么就需要进行全量复制，其次也需要偏移量来记录，主服务器和从服务器之间差距有多少，并且主服务器中维护了一个积压命令的缓冲区，如果偏移量在缓冲区范围内就进行增量复制。