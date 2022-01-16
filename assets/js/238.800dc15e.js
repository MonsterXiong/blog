(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{619:function(s,a,t){"use strict";t.r(a);var n=t(26),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"清除历史记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除历史记录"}},[s._v("#")]),s._v(" 清除历史记录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("last命令，对应的日志文件/var/log/wtmp； 成功登录用户\nlastb命令，对应的日志文件/var/log/btmp； 尝试登录信息\nlastlog命令，对应的日志文件/var/log/lastlog； 显示最近登录信息\n")])])]),t("h2",{attrs:{id:"清楚登陆系统成功的记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清楚登陆系统成功的记录"}},[s._v("#")]),s._v(" 清楚登陆系统成功的记录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此文件默认打开时乱码，可查到ip等信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/wtmp\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时即查不到用户登录信息")]),s._v("\nlast\n")])])]),t("h2",{attrs:{id:"清除登陆系统失败的记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除登陆系统失败的记录"}},[s._v("#")]),s._v(" 清除登陆系统失败的记录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此文件默认打开时乱码，可查到登陆失败信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/glo / btmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查不到登陆失败信息")]),s._v("\nlastb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"bash-历史相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-历史相关"}},[s._v("#")]),s._v(" Bash 历史相关")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在执行命令时，指定Bash不保存执行历史")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("空格"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("command\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除当前登录session的历史")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -r\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除所有历史")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -cw\n")])])]),t("h2",{attrs:{id:"清除历史执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除历史执行命令"}},[s._v("#")]),s._v(" 清除历史执行命令")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# //清空历史执行命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -c\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或清空用户目录下的这个文件即可")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./.bash_history\n")])])]),t("h2",{attrs:{id:"导入空历史记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入空历史记录"}},[s._v("#")]),s._v(" 导入空历史记录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建记录文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /root/history\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -c\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -r /root/history.txt\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询导入结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("\n")])])]),t("h2",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /root/history\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -c\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -r /root/history.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/wtmp\nlast\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/btmp\nlastb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -c\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./.bash_history\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("\n")])])]),t("h2",{attrs:{id:"clear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[s._v("#")]),s._v(" clear")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/wtmp\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/btmp\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/lastlog\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -c\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./.bash_history\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);