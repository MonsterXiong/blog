# 清除历史记录

```sh
last命令，对应的日志文件/var/log/wtmp； 成功登录用户
lastb命令，对应的日志文件/var/log/btmp； 尝试登录信息
lastlog命令，对应的日志文件/var/log/lastlog； 显示最近登录信息
```

## 清楚登陆系统成功的记录

```sh
# 此文件默认打开时乱码，可查到ip等信息
echo > /var/log/wtmp

# 此时即查不到用户登录信息
last
```

## 清除登陆系统失败的记录

```sh
# 此文件默认打开时乱码，可查到登陆失败信息
echo > /var/glo / btmp;

# 查不到登陆失败信息
lastb;
```

## Bash 历史相关

```sh
# 在执行命令时，指定Bash不保存执行历史
<空格>command

# 清除当前登录session的历史
history -r

# 清除所有历史
history -cw
```

## 清除历史执行命令

```sh
# //清空历史执行命令
history -c

# 或清空用户目录下的这个文件即可
 echo > ./.bash_history
```

## 导入空历史记录

```sh
# 新建记录文件
vi /root/history

# 清除记录
history -c

# 导入记录
history -r /root/history.txt

# 查询导入结果
history
```

## 实例

```sh
vi /root/history
history -c
history -r /root/history.txt
history
echo > /var/log/wtmp
last
echo > /var/log/btmp
lastb
history -c
echo > ./.bash_history
history
```

## clear

```sh
echo > /var/log/wtmp
echo > /var/log/btmp
echo > /var/log/lastlog
history -c
echo > ./.bash_history
```
