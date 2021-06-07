### Docker虚拟机

为什么要安装docker虚拟机，在其空间内安装环境和部署项目,非常麻烦

原因：

- 解决隔离性问题，有些程序会占用大量内存占用缓存

- 使用虚拟机部署程序非常方便，需要使用开启，不需要使用删除



> 问题：为什么不在Linux内安装Vmware，Vmware是重量级虚拟机，Docker是轻量级虚拟机



#### Docker虚拟机架构

![image-20210526025416318](http://img.monsterbear.top/img/Docker%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%9E%B6%E6%9E%84.png)



#### 云计算中的Docker虚拟机

![image-20210526025717059](http://img.monsterbear.top/img/%E4%BA%91%E8%AE%A1%E7%AE%97%E4%B8%AD%E7%9A%84Docker%E8%99%9A%E6%8B%9F%E6%9C%BA.png)



#### Docker镜像与容器

- 容器是从镜像中创建出来的虚拟实例

容器用来运行程序，是读写层

镜像用来安装程序，是只读层



#### 安装Docker虚拟机

- 先更新yum软件管理器，然后再安装Docker

```sh
yum -y update
yum install -y docker(-y代表选择程序安装中的yes选项)
```



#### 管理Docker虚拟机

- 启动、关闭、开启

```sh
service docker start
service docker stop
service docker restart
```



#### Docker虚拟机管理命令

![image-20210526030710420](http://img.monsterbear.top/img/Docker%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%AE%A1%E7%90%86%E5%91%BD%E4%BB%A4.png)





#### 在线安装镜像

- 在线安装java镜像

```sh
docker search java
docker pull java
# 国外镜像仓库下载速度较慢，建议使用国内镜像仓库，如DaoCloud
# 去Daoloud官网
# 去掉结尾的逗号
vi /etc/docker/daemon.json

# 然后再docker search java

# 再pull

# 显示docker里面安装的镜像
docker images

# 导出镜像
docker save java > /home/java.tar.gz
# 导入镜像
docker load < /home/java.tar.gz
docker image
# 删除镜像
docker rmi java

```



#### 启动容器

- 启动镜像会创建出一个运行状态的容器

```sh
# 创建并启动一个容器，-it开启交互界面，--name容器名字，镜像名字，启动这个容器启动的是bash命令行
docker run -it --name myjava java bash
# -p 表示映射端口，9000代表宿主机端口，容器端口代表8000端口，把8000映射倒真实的9000端口， -p代表另外外一组端口
docker run -it --name myjava -p 9000:8000 -p9001:8085 java bash
# 数据库存储的数据一定是保存到宿主机上的，备份恢复方便，把宿主机的文件和目录映射到容器里面，-v把前半部分宿主机的目录映射到容器的soft里面的，读写权限--privileged这个使用用最高权限的
docker run -it --name myjava -v /home/project/soft --privileged java bash
# 退出容器,不仅是退出交互界面，也相当于stop了
exit
```



#### 暂停和停止容器

- 暂停和停止容器的命令

```sh
docker pause myjava
docker unpause myjava
docker stop myjava
docker start -i myjava
# 删除容器，先停止容器，在删除容器
docker rm myjava
# docker里面就没有myjava了
docker ps -a
```



