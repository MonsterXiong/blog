# 安装 Node

## 下载

1. 从官网下下载最新的[nodejs](https://nodejs.org/en/download/)
2. wget 下载(推荐)

```sh
wget https://nodejs.org/dist/latest/node-v16.9.1-linux-x64.tar.xz
```

> **历史版本可从https://nodejs.org/dist/下载**

```sh
# 1. 通过ftp工具上传到linux服务，解压安装包
tar -xvf node-v12.16.1-linux-x64.tar.xz

# 2. 移动并改名文件夹（不改名也行）
cd /usr/local/
mv node-v10.16.0.0-linux-64/ nodejs

# 3. 让npm和node命令全局生效

# 软链接方式（推荐）
ln -s /usr/local/nodejs/bin/npm /usr/local/bin/
ln -s /usr/local/nodejs/bin/node /usr/local/bin/
ln -s /usr/local/nodejs/bin/npx /usr/local/bin/

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
