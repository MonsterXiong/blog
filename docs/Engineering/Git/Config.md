# 配置信息-Config

配置 Git 的相关参数。

Git 一共有 3 个配置文件：

1. 仓库级别的配置文件：在仓库的.git/.gitconfig，该配置文件只对所在的仓库有效。
2. 全局配置文件：Windows 系统在`C:\Users\<用户名>\.gitconfig`。
3. 系统级的配置文件：在 Git 的安装目录下的 etc 文件夹中的 gitconfig

```ruby

# --local:仓库级，--global：全局级，--system：系统级
$ git config <--local | --global | --system > -l

# 查看当前生效的配置信息
$ git config -l

# 编辑配置文件
$ git config <--local | --global | --system > -e

# 添加配置项
$ git config <--local | --global | --system > --add <name> <value>

# 获取配置项
$ git config <--local | --global | --system > --get <name>

# 删除配置项
$ git config <--local | --global | --system >  --unset <name>

# 配置提交配置中的用户信息
$ git config --global user.name <用户名>
$ git config --global user.email <邮箱地址>

# 更改Git缓存区的大小
# 如果提交的内容较大，默认缓存较小，提交会失败
# 缓存单位B，例如524288000(500MB)
$ git config --global http.postBuffer <缓存大小>

# 调用git status、git diff命令时以高亮或彩色方式显示改动状态
$ git config --global color.ui true

# 配置可以缓存密码,默认缓存时间15分钟
$ git config --global credential.helper cache

# 配置密码的缓存时间,单位:秒
git config --global credential.helper 'cache --timeout=<缓存时间>'

# 配置长期存储密码
git config --global credential.helper store

```
