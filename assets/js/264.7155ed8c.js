(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{645:function(t,s,e){"use strict";e.r(s);var a=e(26),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"美化-powershell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#美化-powershell"}},[t._v("#")]),t._v(" 美化 PowerShell")]),t._v(" "),e("p",[t._v("1.下载"),e("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[t._v("windows terminal"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("2.下载"),e("a",{attrs:{href:"https://github.com/PowerShell/PowerShell",target:"_blank",rel:"noopener noreferrer"}},[t._v("powershell 7"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("3.配置默认启动 powershell7")]),t._v(" "),e("p",[t._v("4.安装"),e("a",{attrs:{href:"https://ohmyposh.dev/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("oh-my-posh"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装oh-myposh")]),t._v("\nInstall-Module oh-my-posh -Scope CurrentUser -SkipPublisherCheck\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装posh-git")]),t._v("\nInstall-Module posh-git -Scope CurrentUser\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装PSReadLine")]),t._v("\nInstall-Module -Name PSReadLine -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置profile")]),t._v("\nnotepad.exe "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROFILE")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装文件图标库")]),t._v("\nInstall-Module -Name Terminal-Icons -Repository PSGallery\n")])])]),e("p",[t._v("5.PROFILE 文件内容")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入posh-git")]),t._v("\nImport-Module posh-git\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入on-my-posh")]),t._v("\nImport-Module oh-my-posh\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用文件图标库")]),t._v("\nImport-Module -Name Terminal-Icons\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置主题")]),t._v("\nSet-PoshPrompt -Theme iterm2\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令行自动补全和提示")]),t._v("\nSet-PSReadlineKeyHandler -Key Tab -Function MenuComplete\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("乱码解决")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择主题时，出现乱码，需要安装字体")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 到oh-my-posh下载字体Caskaydia Cove Nerd Font")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压，双击安装字体，到设置中找到powershell7=>外观，选择相应的Nerd font字体")]),t._v("\n")])])]),e("h2",{attrs:{id:"集成-gitbash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成-gitbash"}},[t._v("#")]),t._v(" 集成 Gitbash")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置中添加新的配置文件，新建空配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 名称")]),t._v("\nGit Bash\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令行")]),t._v("\nE:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Git"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bash.exe --login -i\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动目录")]),t._v("\n%USERPROFILE%\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图标")]),t._v("\nE:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Git"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("mingw64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("share"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("git"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("git-for-windows.ico\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选项卡标题，需要在高级中禁用更改标题")]),t._v("\nGit Bash\n")])])]),e("h2",{attrs:{id:"vscode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[t._v("#")]),t._v(" VSCode")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决vscode终端乱码问题")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在vscode中setting=>输入terminal font=>CaskaydiaCove Nerd Font")]),t._v("\n")])])]),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在配置文件命令行中添加，可以不显示提示信息")]),t._v("\n--nolog\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示时间")]),t._v("\nGet-Date\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);