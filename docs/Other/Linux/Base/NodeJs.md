# 安装 Node

## 下载

从官网下下载最新的[nodejs](https://nodejs.org/en/download/)

> **历史版本可从https://nodejs.org/dist/下载**

```sh
# 1. 通过ftp工具上传到linux服务，解压安装包
tar -xvf node-v12.16.1-linux-x64.tar.xz

# 2. 移动并改名文件夹（不改名也行）
cd /usr/local/
mv /usr/local/node-v10.16.0-linux-64 . //后面的.表示移动到当前目录
mv node-v10.16.0.0-linux-64/ nodejs

# 3. 让npm和node命令全局生效

# 方式一：环境变量方式（这种方式似乎只对登录用户有效？）

# 1)、加入环境变量，在 /etc/profile 文件末尾增加配置
vi /ect/profile
export PATH=$PATH:/usr/local/nodejs/bin
# 2)、执行命令使配置文件生效
source /etc/profile


# 方式二：软链接方式（推荐）
ln -s /usr/local/nodejs/bin/npm /usr/local/bin/
ln -s /usr/local/nodejs/bin/node /usr/local/bin/

# 4. 查看nodejs是否安装成功
node -v
npm -v
```

## 安装 pm2

```sh
# 全局安装
npm install -g pm2

# 将pm2设置为全局命令
ln -s /usr/local/nodejs/bin/pm2 /usr/local/bin/pm2
```
