# Linux

## Linux 系统构成和基本操作

windows

- 有时候安装软件需要重启
- 硬件
- 蓝屏

Linux 系统的优势

- 跨平台的硬件支持
- 可靠的安全性
- 丰富的软件支持
- 良好的稳定性
- 多用户多任务
- 完善的网络功能

#### Linux 目录结构

![image-20210526022433366](http://img.monsterbear.top/img/Linux%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84.png)

#### 基本命令

```sh
# 列出目录内容
ls
# 创建新目录
mkdir myproject
# 创建文件
touch hello.txt
# 写入内容
echo Thanks > hello.txt
# 查看文件内容
cat hello.txt
# 编辑文件
vi hello.txt
# 复制文件或目录
cp hello.txt new.txt（文件夹-r递归复制目录的内容）
# 删除文件或目录
rm (文件夹-r递归删除目录的内容,-f强制删除不需要确认)
# 移动目录或文件
mv -f newproject /home(-f强制覆盖已存在的目录或文件)
```

Linux 文件属性

```sh
ls -l
# 修改权限指令
chmod 700 hello.txt
# 创建用户
adduser monster
# 修改用户密码
passwd monster

```

![image-20210526023726671](http://img.monsterbear.top/img/Linux%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7.png)

#### 防火墙管理

- centos 默认安装了 firewall 防火墙

- 利用防火墙，我们可以允许或是限制传输的数据通过

- 程序=》防火墙=》互联网

##### 查看、启动、关闭、重启防火墙

```sh
firewall-cmd --state
service firewall start
service firewall stop
service firewall restart
```

##### 管理防火墙

**端口管理**

```sh
firewall-cmd --permanent --add-port=8080-8085/tcp
firewall-cmd --reload
firewall-cmd --permanent --remove-port=8080-8085/tcp
```

**查看开启的端口和服务**

```sh
firewall-cmd --permanent --list-ports
# 哪些程序正在使用互联网
firewall-cmd --permanent --list-services

```
