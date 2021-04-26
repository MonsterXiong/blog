# 实践

1. 删除掉本地不存在的远程分支
   多人合作开发时，如果远程的分支被其他开发删除掉，在本地执行 git branch --all 依然会显示该远程分支，可使用下列的命令进行删除：

```ruby

# 使用 pull 命令，添加 -p 参数
$ git pull -p

# 等同于下面的命令
$ git fetch -p
$ git fetch --prune origin

```
