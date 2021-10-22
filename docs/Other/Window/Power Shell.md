# 美化 PowerShell

1.下载[windows terminal](https://github.com/microsoft/terminal)

2.下载[powershell 7](https://github.com/PowerShell/PowerShell)

3.配置默认启动 powershell7

4.安装[oh-my-posh](https://ohmyposh.dev/docs)

```shell
# 安装oh-myposh
Install-Module oh-my-posh -Scope CurrentUser -SkipPublisherCheck
# 安装posh-git
Install-Module posh-git -Scope CurrentUser
# 安装PSReadLine
Install-Module -Name PSReadLine -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck
# 设置profile
notepad.exe $PROFILE
# 安装文件图标库
Install-Module -Name Terminal-Icons -Repository PSGallery
```

5.PROFILE 文件内容

```shell
# 导入posh-git
Import-Module posh-git
# 导入on-my-posh
Import-Module oh-my-posh
# 使用文件图标库
Import-Module -Name Terminal-Icons
# 设置主题
Set-PoshPrompt -Theme iterm2
# 命令行自动补全和提示
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
```

6. 乱码解决

```shell
# 选择主题时，出现乱码，需要安装字体
# 到oh-my-posh下载字体Caskaydia Cove Nerd Font
# 解压，双击安装字体，到设置中找到powershell7=>外观，选择相应的Nerd font字体
```

## 集成 Gitbash

```shell
# 设置中添加新的配置文件，新建空配置文件
# 名称
Git Bash
# 命令行
E:\software\Git\bin\bash.exe --login -i
# 启动目录
%USERPROFILE%
# 图标
E:\software\Git\mingw64\share\git\git-for-windows.ico
# 选项卡标题，需要在高级中禁用更改标题
Git Bash
```

## VSCode

```shell
# 解决vscode终端乱码问题
# 在vscode中setting=>输入terminal font=>CaskaydiaCove Nerd Font
```

## 其他

```shell
# 在配置文件命令行中添加，可以不显示提示信息
--nolog

# 显示时间
Get-Date
```
