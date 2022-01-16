(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{460:function(a,s,n){"use strict";n.r(s);var t=n(26),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"包管理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包管理器"}},[a._v("#")]),a._v(" 包管理器")]),a._v(" "),n("h2",{attrs:{id:"npm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[a._v("#")]),a._v(" npm")]),a._v(" "),n("p",[n("strong",[a._v("node package management")]),a._v(" 是 nodejs 内置的软件包管理器")]),a._v(" "),n("p",[a._v("npm 由三大独立部分组成：")]),a._v(" "),n("ul",[n("li",[a._v("网站：开发者查找包、设置参数以及管理 npm 使用的主要途径，网址为："),n("a",{attrs:{href:"%5Bhttps://www.npmjs.com/%5D(https://links.jianshu.com/go?to=https%3A%2F%2Fwww.npmjs.com%2F)"}},[a._v("点击")])]),a._v(" "),n("li",[a._v("注册表：是一个巨大的数据库，保存了每个包的基本信息。")]),a._v(" "),n("li",[a._v("命令行工具：开发者与 npm 包打交道的工具。")])]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装nrm")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i nrm -g --registry"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://registry.npm.taobao.org\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更改源地址")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry https://registry.npm.taobao.org/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看源地址")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除源地址")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" config "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" registry\n")])])]),n("h3",{attrs:{id:"npx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[a._v("#")]),a._v(" npx")]),a._v(" "),n("p",[a._v("npm 从 5.2 版本开始增加了 npx 命令。")]),a._v(" "),n("p",[a._v("Node 自带 npm 模块，所以可以直接使用 npx 命令，万一不能用，就手动安装一下。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g npx\n")])])]),n("h4",{attrs:{id:"调用项目安装的模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调用项目安装的模块"}},[a._v("#")]),a._v(" 调用项目安装的模块")]),a._v(" "),n("p",[a._v("npx 想要解决的主要问题就是调用项目内部安装的模块。比如项目内部安装了测试工具 Mocha。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -D mocha\n")])])]),n("p",[a._v("一般来说，调用 Mocha，只能在项目脚本和 package.json 的 scripts 字段里面，如果想在命令行下调用，必须像下面这样。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在项目根目录下执行")]),a._v("\nnode_modules/.bin/mocha --version\n")])])]),n("p",[a._v("npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行可。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx mocha --version\n")])])]),n("p",[a._v("npx 的原理很简单，就是运行的时候，会到 node_modules/.bin 路径和环境变量"),n("code",[a._v("$PATH")]),a._v("里面，检查命令是否存在。")]),a._v(" "),n("p",[a._v("由于 npx 会检查环境变量"),n("code",[a._v("$PATH")]),a._v(",所以系统命令可以调用。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),n("p",[a._v("主要以，Bash 内置的命令不在"),n("code",[a._v("$PATH")]),a._v("里面，所以不能用。比如，cd 是 Bash 命令，因此不能用"),n("code",[a._v("npx cd")]),a._v("。")]),a._v(" "),n("h4",{attrs:{id:"避免全局安装模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免全局安装模块"}},[a._v("#")]),a._v(" 避免全局安装模块")]),a._v(" "),n("p",[a._v("create-react-app 这个模块是全局安装，npx 可以运行它，而且不进行全局安装。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx create-react-app my-react-app\n")])])]),n("p",[a._v("上面代码运行时，npx 将"),n("code",[a._v("create-react-app")]),a._v("下载到一个临时目录，使用后再删除。所以，以后再执行上面的命令，会重新下载"),n("code",[a._v("create-react-app")]),a._v("。")]),a._v(" "),n("p",[a._v("下载全局模块时，npx 允许指定版本")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("$ npx uglify-js@3.1.0 main.js -o ./dist/main.js\n")])])]),n("p",[a._v("只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装"),n("code",[a._v("http-server")]),a._v("模块，下面的命令就会自动下载该模块，在当前目录启动一个 Web 服务。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx http-server\n")])])]),n("h4",{attrs:{id:"参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),n("p",[n("strong",[a._v("--no-install 参数")])]),a._v(" "),n("p",[a._v("如果想让 npx 强制使用本地模块，不下载远程模块，可以使用"),n("code",[a._v("--no-install")]),a._v("参数，如果本地不存在该模块就会报错。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx --no-install http-server\n")])])]),n("p",[n("strong",[a._v("--ignore-existing 参数")])]),a._v(" "),n("p",[a._v("如果忽略本地的同名模块，强制安装使用远程模块，可以使用"),n("code",[a._v("--ignore-existing")]),a._v("参数。比如，本地已经全局安装了 create-react-app，但还是想使用远程模块,就用这个参数。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx --ignore-existing create-react-app my-react-app\n")])])]),n("p",[n("strong",[a._v("-p 参数")]),a._v("\n-p 参数用以指定 npx 所要安装的模块，所以可以这样")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx -p node@14.16.0 node-v\n")])])]),n("p",[a._v("先指定安装"),n("code",[a._v("node@14.16.0")]),a._v("，然后再执行"),n("code",[a._v("node -v")]),a._v("命令")]),a._v(" "),n("p",[n("strong",[a._v("-c 参数")])]),a._v(" "),n("p",[a._v("如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 会报错")]),a._v("\nnpx -p lolcatjs -p cowsay "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cowsay hello | lolcatjs'")]),a._v("\n\n")])])]),n("p",[a._v("上面代码中，"),n("code",[a._v("cowsay hello | lolcatjs")]),a._v("执行时会报错，原因是第一项"),n("code",[a._v("cowsay")]),a._v("由 npx 解释，而第二项命令"),n("code",[a._v("localcatjs")]),a._v("由 Shell 解释，但是"),n("code",[a._v("lolcatjs")]),a._v("并没有全局安装，所以报错。")]),a._v(" "),n("p",[a._v("-c 参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx -p lolcatjs -p cowsay -c "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cowsay hello | lolcatjs'")]),a._v("\n")])])]),n("p",[n("code",[a._v("-c")]),a._v("参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" npm_\n")])])]),n("p",[n("code",[a._v("-c")]),a._v("参数可以把这些 npm 的环境变量带入 npx 命令。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx -c "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'echo \"$npm_package_name\"'")]),a._v("\n")])])]),n("p",[a._v("上面代码会输出当前项目的项目名。")]),a._v(" "),n("h4",{attrs:{id:"使用不同版本的-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用不同版本的-node"}},[a._v("#")]),a._v(" 使用不同版本的 Node")]),a._v(" "),n("p",[a._v("利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("npx node@14.16.0 -v\n")])])]),n("p",[a._v("上面命令会使用 14.16.0 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。")]),a._v(" "),n("p",[a._v("某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。")]),a._v(" "),n("h4",{attrs:{id:"执行-github-源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行-github-源码"}},[a._v("#")]),a._v(" 执行 GitHub 源码")]),a._v(" "),n("p",[a._v("npx 还可以执行 GitHub 上面的模块源码。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行 Gist 代码")]),a._v("\nnpx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行仓库代码")]),a._v("\nnpx github:piuccio/cowsay hello\n")])])]),n("p",[a._v("注意，远程代码必须是一个模块，即必须包含 package.json 和入口脚本。")]),a._v(" "),n("h3",{attrs:{id:"npm-link"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-link"}},[a._v("#")]),a._v(" npm link")]),a._v(" "),n("p",[a._v("npm link 用来在本地项目和本地 npm 模块之间建立连接，可以在本地进行模块测试")]),a._v(" "),n("p",[a._v("具体用法：")]),a._v(" "),n("ol",[n("li",[a._v("项目和模块在同一个目录下，可以使用相对路径")])]),a._v(" "),n("p",[a._v("npm link ../module")]),a._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[a._v("项目和模块不在同一个目录下")])]),a._v(" "),n("p",[a._v("cd 到模块目录，npm link，进行全局 link")]),a._v(" "),n("p",[a._v("cd 到项目目录，npm link 模块名(package.json 中的 name)")]),a._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[a._v("解除 link")])]),a._v(" "),n("p",[a._v("解除项目和模块 link，项目目录下，npm unlink 模块名")]),a._v(" "),n("p",[a._v("解除模块全局 link，模块目录下，npm unlink 模块名")]),a._v(" "),n("h3",{attrs:{id:"npm-的困境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-的困境"}},[a._v("#")]),a._v(" npm 的困境")]),a._v(" "),n("p",[a._v("通过抽离 npm 包可以进行代码复用。")]),a._v(" "),n("p",[a._v("问题一：\n如果项目 A,以来了某某工具包，工具包里面又依赖了某一个 xxx 模块。某一天 xxx 模块发布了一个新的包，但这个包是有问题了。整体项目没有 package-lock.json 的情况下或者重新安装会出现问题。只能提 issue,进行修复。")]),a._v(" "),n("p",[a._v("问题二：\n通过 lerna 进行项目管理，一个 repo 中有多个 packages,然后通过 lerna publish 发布后。如果出了问题，必须全盘回滚。")]),a._v(" "),n("p",[a._v("因为 A 如果写死了 1.1.0 版本，那么 11.1.0 版本里面的依赖 B，也是 1.1.0，还会安装到 1.1.0 版本，所以还是可能出错。")]),a._v(" "),n("h4",{attrs:{id:"解决办法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[a._v("#")]),a._v(" 解决办法")]),a._v(" "),n("p",[a._v("如何来屏蔽他人给我们带来的不确定因素，因为我们自身的代码可以通过单元测试等流程进行保障。")]),a._v(" "),n("p",[a._v("[确定的自己 + [不确定的第三方] ] ?= 稳定")]),a._v(" "),n("p",[a._v("让这个整体变的稳定，大概流程：")]),a._v(" "),n("ul",[n("li",[a._v("[ 确定的自己 + [不确定的第三方] ] = [ version 包 ]")]),a._v(" "),n("li",[a._v("[ version 包 ] = 稳定")])]),a._v(" "),n("p",[a._v("通过 ncc 这个工具来解决，ncc 是一个 Node Cli 工具，停驶也能作为 api 将 Node 程序编译到一个 Javascript 文件中。")]),a._v(" "),n("p",[a._v("我们通过 ncc 将我们的 npm 包，打包成一个 JS 文件。")]),a._v(" "),n("p",[a._v("然后我们发布的 npm 包，package.json 里面的 dependencies 也不需要去加对应的依赖，npm 安装的时候，也就不用去安装对应的依赖了。")]),a._v(" "),n("p",[a._v("这样的好处：")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("将依赖包都固定在发包时刻的包里面的内容，其他包再发包，也不影响我们，因为我们最终发的是 ncc 的产物。")])]),a._v(" "),n("li",[n("p",[a._v("安装速度变快了，比如原来的模式 xxx 依赖 A，B，C，A 又可能引用别的包。最终可能安装一个包，实际安装了几十个包或者上百个包。现在只需要安装 1 个。")])]),a._v(" "),n("li",[n("p",[a._v("安装的结果是变少了，比如原来 node_modules 可能占用了 50M，现在你可能只要安装 900KB 的东西，硬盘不会因为前端项目太多，导致 node_modules 大量占用空间了。")])]),a._v(" "),n("li",[n("p",[a._v("启动速度也能变快，因为原来 xxx 模块，会去引用 A，B，C，都是需要走 require 的流程，这个过程就会耗费一些时间")])])]),a._v(" "),n("h4",{attrs:{id:"相关问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关问题"}},[a._v("#")]),a._v(" 相关问题")]),a._v(" "),n("p",[a._v("1、ncc 跟 pkg 有什么区别？")]),a._v(" "),n("p",[a._v("ncc 生成的产物是 javascript 文件(text)，而 pkg 工具的产物是 binary 的可执行文件(binary)，ncc 的产物，我们还需要借助 node xxx.js 运行，而 pkg 的产物自带运行时，因此在宿主机未安装 Node 的情况下也可以运行。两者有相同之处，也有各自的应用场景")]),a._v(" "),n("h2",{attrs:{id:"yarn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[a._v("#")]),a._v(" Yarn")]),a._v(" "),n("p",[a._v("快速、可靠、安全的依赖管理工具.")]),a._v(" "),n("h3",{attrs:{id:"特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[a._v("#")]),a._v(" 特性")]),a._v(" "),n("ul",[n("li",[a._v("速度超快——Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。")]),a._v(" "),n("li",[a._v("超级安全——在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。")]),a._v(" "),n("li",[a._v("超级安全——使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。")])]),a._v(" "),n("h3",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),n("ul",[n("li",[a._v("离线模式——如果你以前安装过某个包，再次安装时可以在没有任何互联网连接的情况下进行。")]),a._v(" "),n("li",[a._v("确定性——不管安装顺序如何，相同的依赖关系将在每台机器上以相同的方式安装。")]),a._v(" "),n("li",[a._v("网络性能——Yarn 有效地对请求进行排队处理，避免发起的请求如瀑布般倾泻，以便最大限度地利用网络资源。")]),a._v(" "),n("li",[a._v("相同的软件包——从 npm 安装软件包并保持相同的包管理流程。")]),a._v(" "),n("li",[a._v("网络弹性——重试机制确保单个请求失败并不会导致整个安装失败。")]),a._v(" "),n("li",[a._v("扁平模式——将依赖包的不同版本归结为单个版本，以避免创建多个副本。")])]),a._v(" "),n("h3",{attrs:{id:"快速入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[a._v("#")]),a._v(" 快速入门")]),a._v(" "),n("p",[a._v("代码通过包(package)(或者称为模块(module))的方式来共享.一个包里包含所有需要共享的代码,以及描述包信息的文件,成为"),n("code",[a._v("package.json")]),a._v("。")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看版本")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" -v\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化一个新项目")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加依赖包")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将依赖项太牛加到不同的依赖类别中")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加到devDependencies")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加到peerDependencies")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --peer\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加到optionalDependencies")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --optional\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 升级依赖包")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 移除依赖包")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" remove "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装项目的全部依赖(等同于yarn install)")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n\n")])])]),n("h3",{attrs:{id:"yarn-工作流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yarn-工作流"}},[a._v("#")]),a._v(" Yarn 工作流")]),a._v(" "),n("ol",[n("li",[a._v("创建一个新项目")]),a._v(" "),n("li",[a._v("添加/更新/删除依赖项")]),a._v(" "),n("li",[a._v("安装/重新安装依赖项")]),a._v(" "),n("li",[a._v("使用版本管理工具（例如 git）")]),a._v(" "),n("li",[a._v("持续集成")])]),a._v(" "),n("h2",{attrs:{id:"pnpm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pnpm"}},[a._v("#")]),a._v(" Pnpm")]),a._v(" "),n("p",[a._v("速度快,节省磁盘空间的软件包管理工具。")]),a._v(" "),n("h3",{attrs:{id:"特性-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性-2"}},[a._v("#")]),a._v(" 特性")]),a._v(" "),n("ul",[n("li",[a._v("快速——pnpm 是同类工具速度的将近 2 倍")]),a._v(" "),n("li",[a._v("高效——node_modules 中的所有文件文件是从一个单一的可内容寻址的存储中链接过来的(均链接自单一存储位置)")]),a._v(" "),n("li",[a._v("支持 monorepos——pnpm 内置了对单个源码仓库中包含多个软件包的支持")]),a._v(" "),n("li",[a._v("严格——pnpm 创建的 node_modules 并非扁平结构，因此代码不能对任意软件包进行访问")])]),a._v(" "),n("h3",{attrs:{id:"快速入门-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速入门-2"}},[a._v("#")]),a._v(" 快速入门")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 通过npm安装")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("pnpm")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 通过npx安装")]),a._v("\nnpx "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("pnpm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" -g "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("pnpm")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装依赖")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("pnpm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pkg"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 执行脚本")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("pnpm")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("cmd"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),n("h3",{attrs:{id:"pnpx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pnpx"}},[a._v("#")]),a._v(" pnpx")]),a._v(" "),n("p",[a._v("npm 有一个很棒的包运行器叫做 npx。 pnpm 通过 pnpx 命令提供相同的工具。 唯一的不同是 pnpx 使用 pnpm 安装软件包。")]),a._v(" "),n("h2",{attrs:{id:"npm、yarn、pnpm-比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm、yarn、pnpm-比较"}},[a._v("#")]),a._v(" npm、yarn、pnpm 比较")]),a._v(" "),n("h2",{attrs:{id:"cnpm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cnpm"}},[a._v("#")]),a._v(" cnpm")]),a._v(" "),n("p",[a._v("使用中国镜像源地址")]),a._v(" "),n("h2",{attrs:{id:"nrm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[a._v("#")]),a._v(" nrm")]),a._v(" "),n("p",[a._v("nrm(npm registry manager )是 npm 的镜像源管理工具,允许你快速地在 npm 源间切换。")]),a._v(" "),n("h3",{attrs:{id:"nrm-操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nrm-操作"}},[a._v("#")]),a._v(" nrm 操作")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装nrm")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i -g nrm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nrm自带默认配置,*为当前的配置")]),a._v("\nnrm "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换当前源地址")]),a._v("\nnrm use taobao\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除源地址")]),a._v("\nnrm del taobao\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加源地址")]),a._v("\nnrm "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 测试时间")]),a._v("\nnrm "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v("\n\n")])])]),n("h2",{attrs:{id:"nvs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nvs"}},[a._v("#")]),a._v(" nvs")]),a._v(" "),n("p",[a._v("nvs 管理本地 Node 版本")]),a._v(" "),n("ul",[n("li",[a._v("nvs 是跨平台的")]),a._v(" "),n("li",[a._v("nvs 是基于 Node 编写的")])]),a._v(" "),n("h3",{attrs:{id:"配置镜像地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像地址"}},[a._v("#")]),a._v(" 配置镜像地址")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[a._v("nvs remote node https://npm.taobao.org/mirrors/node/\nnvs remote\ndefault             node\nnvs remote chakracore https://github.com/nodejs/node-chakracore/releases/\nnvs remote chakracore-nightly https://nodejs.org/download/chakracore-nightly/\nnvs remote nightly  https://nodejs.org/download/nightly/\nnvs remote node https://nodejs.org/dist/\n")])])]),n("h3",{attrs:{id:"nvs-使用指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nvs-使用指南"}},[a._v("#")]),a._v(" nvs 使用指南")]),a._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装最新的LTS")]),a._v("\nnvs "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" lts\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置为默认版本")]),a._v("\nnvs "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" lts\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装其他版本")]),a._v("\nnvs "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看已安装的版本")]),a._v("\nnvs "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换版本")]),a._v("\nnvs use "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),n("h3",{attrs:{id:"共用-npm-全局模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#共用-npm-全局模块"}},[a._v("#")]),a._v(" 共用 npm 全局模块")]),a._v(" "),n("p",[a._v("使用 nvs 时,默认的 prefix 是当前激活的 Node.js 版本的安装路径,切换版本之后,之前安装全局命令模块需要重新安装.")]),a._v(" "),n("p",[a._v("解决方案:配置统一的全局模块安装路径")])])}),[],!1,null,null,null);s.default=e.exports}}]);