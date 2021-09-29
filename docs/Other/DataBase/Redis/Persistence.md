# 持久化

- 默认情况下 Redis 是将数据保存在内存中的，保存在内存中的数据有一个特点，那就是机器重启之后数据就会丢失。
- 所以为了避免服务器重启死机等问题发生的时候，Redis 中保存的数据丢失 ，Redis 提供了数据持久化功能

什么是数据持久化？

- 数据持久化就是将内存中的数据写入磁盘中
- Redis 和大部分主流数据库(MySQL/MongoDB/...)一样，支持 RDB 和 AOF 持久化

## RDB

Redis DataBase：持久化内存数据到磁盘

Redis 服务端 fork 一个子进程，定时并且达到触发修改次数的时候写磁盘，写到 RDB 文件。

### 如何生成 RDB 文件

触发生成 RDB 三种机制

- 手动执行 save 命令
  - 同步执行
  - 如果已经存在旧的 RDB 文件，会利用新的覆盖旧的
  - 多次执行会先在临时文件保存然后再进行覆盖
- 手动执行 bgsave 命令
  - 异步执行
  - 如果已经存在就的 RDB 文件，会利用新的覆盖旧的
- 通过配置文件自动生成
  - 通过配置文件指定自动生成条件，一旦满足条件就会自动执行 bgsave 生成 RDB 文件

```sh
dir ./ #RDB文件保存的路径
dbfilename dump.rdb #RDB文件的名称
# save 900 1 #自动生成条件
# save 300 10
# save 60 10000
stop-writes-on-bgsave-error yes #bgsave发生错误是否停止写入
rdbcompression yes #是否采用压缩模式写入
rdbchecksum yes #是否对生成的RDB文件进行校验

# 自动生成弊端
# 无法控制生成的频率，如果频率过高会导致性能消耗较大
```

### RDB 推荐配置

```sh
dir /rdbdiskpath                #由于备份是比较占用磁盘空的, 所以推荐使用一个比较大的磁盘路径
dbfilename dump-${prot}.rdb     #由于一台服务器上可能部署多个Redis, 所以可以给RDB文件添加端口号作为区分
stop-writes-on-bgsave-error yes #bgsave发生错误是否停止写入
rdbcompression yes              #是否采用压缩模式写入
rdbchecksum yes                 #是否对生成的RDB文件进行校验
```

### RDB 存在的问题

- 不可控、数据丢失
  - 服务器当即之前的数据，如果未写入 RDB 文件就会丢失

```sh
set name monster
save  or basave  or 自动保存
set name zs
# 宕机
```

- 耗时、耗性能
  - RDB 是一次性把内存中所有的内容写入磁盘中，是一个 比较重的操作，如果需要写入的数据比较多，那么就比较耗时
  - RDB 每次都是把内存中的 所有内容 全部写入到磁盘中，哪怕内存中的数据已经写入过了也会再次完整写入，重复写入相同的 数据，也比较浪费 I/O 资源
  - 如果通过 save 命令写入，会阻塞后续命令执行。如果通过 bgsave 写入，不会阻塞后续命令执行 ，会开启子进程去专门负责写入，但是开启子进程会消耗内存空间

## AOF

Append Only File：持久化修改数据的命令

由客户端发起修改命令到 Redis 服务端，每秒/每个命令/不同步的方式到 AOF 文件。

### 如何生成 AOF

- always
  - 每条命令都写入一条命令到文件中
  - 优点：不会 丢失数据
  - 缺点：磁盘 I/O 消耗较大
- everysec
  - 每隔一秒写入一次，也就是先收集 1 秒钟的命令，然后再一次性写入到文件中
  - 优点：磁盘 I/O 消耗相对较小
  - 缺点：可能丢失 1 秒数据
- no
  - 让操作系统决定什么时候写入，操作系统想什么时候写入就什么什么 时候写入
  - 不可控，可能丢失大量数据

```sh
# 配置文件中
appendfsync everysec
```

### AOF 重写

- 随着时间的推移 AOF 文件会越来越大，会带来以下问题
  - 磁盘消耗越来越大
  - 写入速度会越来越慢
  - 恢复的时间越来越慢
- 所以 AOF 提供了重写的机制，我们可以对 AOF 文件中保存的内容进行优化
  - 从而降低文件的体积
  - 从而提升文件的恢复速度
- 在 AOF 的重写机制中
  - 可以将自动去除冗余命令
  - 可以自动删除没有用的命令

```diff
+ 优化前：set name monster; set name zs;set name ls;
+ 优化后：set name ls;
+ 优化前：incr conunt;incr count;
+ 优化后：set count 2;
+ 优化前：expire name 3
+ 优化后：3秒后由于数据已经被删除，所以这条命令不用保存

```

### 触发 AOF 重写两种机制

- bgrewriteaof 命令
  - 开启一个新的子进程，根据内容中的数据生成命令写入到 AOF 文件中
- 配置文件设置

```sh
auto-aof-rewrite-min-size 200mb #AOF文件体积达到多大时进行重写
auto-aof-rewrite-percentage 100 #对比上一次重写否，增长了百分之多少再次进行重写
								#例如上一次重写大小后是100MB，如果设置50，那么下一次就是增长0.5倍（150）再重写
								#例如上一次重写大小是100MB，如果设置100，那么下一次就是增长两倍（200）再重写
```

### AOF 推荐配置

```sh
appendonly yes                           #是否使用AOF
appendfilename "appendonly-${prot}.aof"  #AOF文件名称
appendfsync everysec                     #写入命令的同步机制
dir /rdbdiskpath                         #保存AOF文件路径
auto-aof-rewrite-min-size 64mb           #AOF文件重写体积
auto-aof-rewrite-percentage 100          #AOF文件增长率
no-appendfsync-on-rewrite yes            #AOF重写时是否正常写入当前操作的命令(追求性能yes，追求数据安全性no)
```

## RDB vs AOF

|                | RDB            | AOF            |
| -------------- | -------------- | -------------- |
| 保存内容       | 二进制数据文件 | Redis 命令     |
| 数据恢复速度   | 快照恢复速度快 | 命令过多速度慢 |
| 数据恢复完整性 | 可能丢数据     | 比 RDB 高      |

- AOF 优先级高于 RDB
  - 如果 Redis 服务器同时开启了 RDB 和 AOF, 那么宕机重启之后会优先从 AOF 中恢复数据
- RDB 体积小于 AOF
  - 由于 RDB 在备份的时候会对数据进行压缩, 而 AOF 是逐条保存命令, 所以 RDB 体积比 AOF 小
- RDB 恢复速度比 AOF 恢复速度快
  - 由于 AOF 是通过逐条执行命令的方式恢复数据, 而 RDB 是通过加载预先保存的数据恢复数据
    所以 RDB 的恢复速度比 AOF 快
- AOF 数据安全性高于 RDB
  - 由于 AOF 可以逐条写入命令, 而 RDB 只能定期备份数据, 所以 AOF 数据安全性高于 RDB
- 所以综上所述, 两者各有所长, 两者不是替代关系而是互补关系

## 如何能够最大化保证恢复数据的速度及数据的完整性呢？

Redis4.0 以后推出混合持久化的方式，以 RDB 的方式全量持久化内存数据，保证数据恢复的速度并以增量的方式持久化修改命令，保证数据的完整性。最终以 RDB 和 AOF 共存的方式写入 AOF 文件。
