# 通过 ssh 操作服务器

## 连接服务器

```sh
# 连接服务器
ssh -p 22 username@servername
```

## scp 通过 ssh 传输文件

上传本地文件到服务器

```sh
scp /path/filename username@servername:/path/
```

从服务器上下载文件

```sh
scp username@servername:/path/filename local_dir（本地目录）
```

从服务器下载整个目录

```sh
scp -r username@servername:/var/www/remote_dir/（远程目录） local_dir（本地目录）
```

上传目录到服务器

```sh
scp -r local_dir username@servername:remote_dir
```
