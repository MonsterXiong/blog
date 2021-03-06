---
sidebar: auto
---

# Docker

![image-20210526030710420](http://img.monsterbear.top/img/Docker%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4.png)

## 简介

1. 了解 Docker 的前生 LXC

LXC 为 Linux Container 的简写。可以提供轻量级的虚拟化，以便隔离进程和资源，而且不需要提供指令解释机制以及全虚拟化的其他复杂性。相当于 C++中的 NameSpace。容器有效地将由单个操作系统管理的资源划分到孤立的组中，以更好地在孤立的组之间平衡有冲突的资源使用需求。

与传统虚拟化技术相比，它的优势在于：

- 与宿主机使用同一个内核，性能消耗小；
- 不需要指令级模拟；
- 不需要即时（just-i-time）编译；
- 容器可以在 CPU 核心的本地运行指令，不需要任何专门的解释机制；
- 避免了准虚拟化和系统调用替换中的 复杂性；
- 轻量级隔离，在隔离的同时还提供共享机制，以实现容器与宿主机的资源共享。

总结：Linux Container 是一种轻量级的虚拟化的是手段。

Liunx Container 提供了在单一可控主机节点上支持多个相互隔离的 server container 同时执行的机制。Linux Container 有点像 chroot，提供了一个拥有自己进程和网络空间的虚拟环境，但又有别于虚拟机，因为 lxc 是一种操作系统层次上的资源的虚拟化。

2. Lxc 与 docker 什么关系？

docker 并不是 LXC 替代品，docker 底层使用了 LXC 来实现，LXC 将 linux 进程沙盒化，使得进程之间互相隔离，并且能够控制各进程的资源分配。

在 LXC 的基础之上，docker 提供了一系列更强大的功能。

3. 什么是 docker

docker 是一个开源的应用容器引擎，基于 go 语言开发并遵循了 apache2.0 协议开源。

docker 可以让开发者打爆他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 linux 服务器，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类 iphone 的 app），并且容器开销极其低。

4. docker 官方文档

https://docs.docker.com

5. 为什么 docker 越来越受欢迎

官方话语：容器化越来越受欢迎，因为容器是：

- 灵活：即使是最复杂的应用也可以集装箱化。
- 轻量级：容器利用并共享主机内核。
- 可互换：您可以即时部署更新和升级。
- 便携式：您可以在本地构建，部署到云，并在任何地方运行。
- 可扩展：您可以增加并自动分发容器副本。
- 可堆叠：您可以垂直和即时堆叠服务。

**镜像和容器（containers）**

通过镜像启动一个容器，一个镜像是一个可执行的包，其中包括运行应用程序所需要的所有内容包含代码、运行时间、库、环境变量和配置文件。容器是镜像的运行实例，当被运行时有镜像状态和用户进程，可以使用 docker ps 查看。

**容器和虚拟机**

容器是在 linux 上本机运行，并在其他容器共享主机的内核，它运行的一个独立的进程，不占用其他任何可执行文件的内存，非常轻量。

虚拟机运行的是一个完成的操作系统，通过虚拟机管理程序对主机资源进行虚拟访问，相比之下需要的资源更多。

## other

为什么要安装 docker 虚拟机，在其空间内安装环境和部署项目,非常麻烦

原因：

- 解决隔离性问题，有些程序会占用大量内存占用缓存

- 使用虚拟机部署程序非常方便，需要使用开启，不需要使用删除

> 问题：为什么不在 Linux 内安装 Vmware，Vmware 是重量级虚拟机，Docker 是轻量级虚拟机

#### Docker 虚拟机架构

![image-20210526025416318](http://img.monsterbear.top/img/Docker%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%9E%B6%E6%9E%84.png)

#### 云计算中的 Docker 虚拟机

![image-20210526025717059](http://img.monsterbear.top/img/%E4%BA%91%E8%AE%A1%E7%AE%97%E4%B8%AD%E7%9A%84Docker%E8%99%9A%E6%8B%9F%E6%9C%BA.png)

#### Docker 镜像与容器

- 容器是从镜像中创建出来的虚拟实例

容器用来运行程序，是读写层

镜像用来安装程序，是只读层

#### 安装 Docker 虚拟机

- 先更新 yum 软件管理器，然后再安装 Docker

```sh
yum -y update
yum install -y docker(-y代表选择程序安装中的yes选项)
```
