# 搭建 MySQL 集群

## 单节点数据库的弊病

- 大型互联网程序用户群体庞大，所以架构必须要特殊设计
- 单节点的数据库无法满足性能上的要求
- 单节点的数据库没有冗余设计，无法满足高可用

如：高校教务系统查询考试成绩，很多人同时查询数据库

## 单节点 MySQL 的性能瓶颈

- 2016 年春节微信红包巨大业务量，数据库承受巨大负载
- 共 142 亿个红包，2900 万红包照片，业务增加 75%，76 万红包/秒，5.16 亿人，支付峰值 20.8 万/秒

## MySQL 集群方案介绍

Replication

- 速度快 日志
- 弱一致性 新闻
- 低价值 帖子

PXC

- 速度慢 订单
- 强一致性 账户
- 高价值 财务

PXC 原理
Percona XtraDB Cluster（下文简称 PXC 集群）提供了 MySQL 高可用的一种实现方法。PXC 集群以节点组成（推荐至少 3 节点，便于故障恢复，后面会讨论两节点的情况），每个节点都是基于常规的 MySQL/Percona Server，意味着你可以从集群中分离出某节点单独使用。集群中每个节点都包含完整的数据。

- PXC（PerCona XtraDB Cluster）基于 PXC mysql(Galera) 每一个 percona 都是可读写的
- 建议 PXC 使用 PerconaServer(MySQL 改进版，性能提升很大)

PXC 方案与 Replication 方案的对比

- 数据同步是双向的，任何一个 MySQL 节点上都是可以同时读写数据的
- Replication 是单向的，负责写入的节点叫 Master，Slave 是读，不是每一个节点都是可以同步写入的

PXC 的数据强一致性

- 同步复制，事务在所有集群节点要么同时提交，要么不提交
- Replication 采用异步复制，无法保证数据的一致性

异步复制无法保证数据一致性的坏处：如在淘宝下单且支付完成，但是却找不到订单

## 创建 MySQL 集群

踩坑总结：

- 拉镜像不要拉最新的，不然可能会出现容器闪退之类的问题，建议 5.7.20

- 从节点启动之后闪退

> 情况一
>
> 一种情况是由于主节点还没有启动，就启动了从节点，那这个时候从节点肯定是闪退的。所以需要先启动主节点，再启动从节点。
>
> 情况二
>
> 第二种情况，是由于 PXC 在退出的时候会给集群中最后退出的那台打上标记，当集群重新启动的时候需要先启动最后关闭的那台节点机器。但是 docker 中容器启动是没有办法更改指令的，所以需要修改数据卷中 grastate.data 文件，把 safe_to_bootstrap 参数改为 0。PXC 中就是讲最后关闭的节点的 safe_to_bootstrap 标记为 1，需要按照主节点启动。由于 PXC 的公司在制作 Linux 的镜像的时候，默认是不会给子节点退出的 safe_to_bootstrap 配置打上 1 的，所以真正要修改的是主节点的 safe_to_bootstrap，主节点修改为 1，才可以真正的启动，启动之后再去启动从节点。所以建议直接最后关闭主节点

- 主节点启动之后闪退

> 情况一
>
> 当主节点突然宕机，从节点都正常运行，这时候主节点不能按照主节点启动。这时候需要删除主节点的容器，检查数据卷上的 safe_to_bootstrap 是否为 0，如果不是则改为 0。然后以从节点的方式创建容器，加入集群。可以使用任何 PXC 节点，然后从节点加入 PXC 集群。
>
> 情况二
>
> 需要修改主节点的 safe_to_bootstrap 为 1

### PXC 集群安装介绍

- 可以在 linux 上直接安装
- 也可以在 Docker 上安装

- Docker 的镜像仓库包含了 PXC 数据库的镜像，下载即可
- https://hub.docker.com/r/percona/percona-xtradb-cluster/

### 安装 PXC 镜像

```sh
docker pull percona/percona-xtradb-cluster:5.7.20
# 本地安装
docker load < /home/soft/pxc.tar.gz
```

### 修改镜像名字

docker tag percona-xtradb-cluster pxc
docker images
docker rmi percona-xtradb-cluster

### 创建内部网路

- 出于安全考虑，需要给 PXC 集群实例创建 Docker 内部网络

```sh
#创建网段,假设创建网段172.18.0.0（默认：172.17.0.0），子网掩码是24位
$ docker network create --subnet=172.18.0.0/24 net1
#查看网段
$ docker network inspect net1
# 删除网段，这里不需要删除
$ docker network inspect net1
```

docker network create net1 创建网段 172.18.0.xx

- docker network create --subnet=172.18.0.0/24 net1
  docker network inspect net1 查看网段信息
  docker network rm net1 删除网段

### 创建 Docker 卷

Docker 卷是容器中的 PXC 节点映射数据目录的解決办法

- 一旦创建出 docker 容器，尽量不要把业务数据存在容器内，因为出问题的话数据可能就找不到了。
- 可以把业务数据保存在宿主机内，通过映射技术将宿主机上的目录映射到容器内。在运行容器的时候，把业务数据保存在映射目录里，也就是存储到宿主机上面。如果容器出什么问题，可以在创建一个容器，再将目录映射给该容器，则业务数据就导入了。

* docker volume create --name v1 创建
  docker volume create v1

* docker inspect v1 查看
* docker volume rm v1 删除

### 创建 PXC

- 只需要向 PXC 镜像传入运行参数就能创建出 PXC 容器

```sh
docker run -d -p 3306:3306
# 数据目录
-v v1:/var/lib/mysql
# 创建出来的数据库实例密码，用名指定的就是root
-e MYSQL_ROOT_PASSWPRD=abc123456
# 创建出来的集群的名字
-e CLUSTER_NAME=PXC
# 数据库节点之间同步用到的密码
-e XTRABACKUP_PASSWORD=abc123456
# 最高权--privileged，创建出来的容器名字，使用的内部网段net，内部网段ip址是172.18.0.2
--privileged --name=node1 --net=net1 --ip 172.18.0.2
# 镜像的名字
pxc
```

```sh
docker volume create --name v1
docker volume create --name v2
docker volume create --name v3
docker volume create --name v4
docker volume create --name v5

docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -v v1:/var/lib/mysql --privileged --name=node1 --net=net1 --ip 172.18.0.2 pxc

docker exec -it node1 /bin/sh

GRANT ALL ON *.* TO 'root'@'%';
flush privileges;

# cluster_join 加入集群和第一个容器的节点进行同步，所以为node1
docker run -d -p 3307:3306 -v v2:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=123456 -e CLUSTER_JOIN=node1 --privileged --name=node2 --net=net1 --ip 172.18.0.3 pxc

docker run -d -p 3308:3306 -v v3:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=123456 -e CLUSTER_JOIN=node1 --privileged --name=node3 --net=net1 --ip 172.18.0.4 pxc

docker run -d -p 3309:3306 -v v4:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=123456 -e CLUSTER_JOIN=node1 --privileged --name=node4 --net=net1 --ip 172.18.0.5 pxc

docker run -d -p 3310:3306 -v v5:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=123456 -e CLUSTER_JOIN=node1 --privileged --name=node5 --net=net1 --ip 172.18.0.6 pxc

```

注意
创建第一个容器的 mysql 成功才去创建第二个，耐心等待第一个容器的 mysql 的初始化

## 数据库负载均衡

### 数据库负载均衡的必要性

- 虽然搭建了集群，但是不使用数据库负载均衡，单节点处理所有请求，负载高，性能差。

使用 Haproxy 做负载均衡，请求被均匀分发给每个节点，单节点负载低，性能好。

负载均衡中间件对比

- Haproxy
- Nginx
- Apache
- LVS

### 安装 haproxy 镜像

```sh
docker pull haproxy
```

### 创建 Haproxy 配置文件

```sh
# 参考 https://zhangge.net/5125.html
touch /home/soft/haproxy.cfg
```

### 创建 Haproxy 容器

```sh
docker run -it -d -p 4001:8888 -p 4002:3306 -v /home/soft/haproxy:/usr/local/etc/haproxy --name haproxy --privileged --net=net1 haproxy
# haproxy -f /usr/local/etc/haproxy/haproxy.cfg
```

## 负载均衡的高可用方案

## 热备份数据
