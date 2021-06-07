# 开放防火墙以及端口

```sh
# 下载防火墙
yum install firewalld

# 开启防火墙
systemctl start firewalld.service

# 关闭防火墙
systemctl stop firewalld.service

# 开启端口
firewall-cmd --zone=public --add-port=80/tcp --permanent

# 关闭端口
firewall-cmd --remove-port=80/tcp --permanent

# 重启防火墙
firewall-cmd --reload

# 查看开放端口
firewall-cmd --list-port

# 查询端口号80 是否开启
firewall-cmd --query-port=80/tcp

# 查看防火墙状态
firewall-cmd --state
```
