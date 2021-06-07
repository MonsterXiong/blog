# 安装 Mysql

## 下载

```sh
# 1.下载 mysql 源安装包
wget https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm

# 2.安装 MySQL 源
yum localinstall mysql80-community-release-el7-1.noarch.rpm

# 3.检查是否安装成功
yum repolist enabled | grep "mysql.*-community.*"

# 4.安装 mysql
yum install mysql-community-server

# 5.启动
systemctl start mysqld
# 或者
service mysqld start

# 6.查看启动状态
systemctl status mysqld
# 或者
service mysqld status

# 7.设置开启启动
systemctl enable mysqld
systemctl daemon-reload
```

## 配置及部分命令

```sh
# 1.修改登录密码

# mysql 安装完成之后，在/var/log/mysqld.log 文件中给 root 生成了一个默认密码。通过下面的方式找到 root 默认密码，然后登录 mysql 进行修改：
grep 'temporary password' /var/log/mysqld.log

# 本地 MySQL 客户端登录
mysql -uroot -p

# 修改密码
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
# 或
set password for 'root'@'localhost'=password('123456');

# 退出mysql，重新启动 mysql 服务使配置生效
quit
systemctl restart mysqld

# 2.添加远程登陆用户

# 默认只允许 root 帐户在本地登录，如果要在其它机器上连接 mysql，必须修改 root 允许远程连接，或者添加一个允许远程连接的帐户。

# 修改 root 用户远程访问权限：

# 先登录mysql,然后选择 mysql 数据库：
use mysql;

# 在 mysql 数据库的 user 表中查看当前 root 用户的相关信息：
select host, user from user;

# 查看表格中 root 用户的 host，默认应该显示的 localhost，只支持本地访问，不允许远程访问。

# 授权 root 用户的所有权限并设置远程访问
GRANT ALL ON *.* TO 'root'@'%';

# 如果报错：ERROR 1410 (42000): You are not allowed to create a user with GRANT，则使用
update user set host='%' where user ='root';

# 刷新命令
flush privileges;
```

## 彻底卸载 mysql

```sh
# 1.卸载软件
yum remove mysql-community-server

# 2.完成后使用命令查看
rpm -qa|grep mysql

# 3.如果有查询结果，则使用命令清理掉
yum remove 名称

# 4.再使用命令查看
rpm -qa | grep -i mysql

# 5.如果有结果，则使用命令清理掉
rpm -e 名称

# 6.删除文件
rm -rf /var/lib/mysql
rm /etc/my.cnf
rm -rf /usr/share/mysql-8.0
```

## 本地上传安装

https://blog.csdn.net/qq_41510551/article/details/110731610
