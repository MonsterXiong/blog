---
sidebar: auto
---

# 包管理器

## npm

**node package management** 是 nodejs 内置的软件包管理器

npm 由三大独立部分组成：

- 网站：开发者查找包、设置参数以及管理 npm 使用的主要途径，网址为：[点击](<[https://www.npmjs.com/](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.npmjs.com%2F)>)
- 注册表：是一个巨大的数据库，保存了每个包的基本信息。
- 命令行工具：开发者与 npm 包打交道的工具。

```sh
# 安装nrm
npm i nrm -g --registry=https://registry.npm.taobao.org

# 更改源地址
npm set registry https://registry.npm.taobao.org/

# 查看源地址
npm config list

# 删除源地址
npm config rm registry
```

### npx

npm 从 5.2 版本开始增加了 npx 命令。

Node 自带 npm 模块，所以可以直接使用 npx 命令，万一不能用，就手动安装一下。

```sh
npm i -g npx
```

#### 调用项目安装的模块

npx 想要解决的主要问题就是调用项目内部安装的模块。比如项目内部安装了测试工具 Mocha。

```sh
npm i -D mocha
```

一般来说，调用 Mocha，只能在项目脚本和 package.json 的 scripts 字段里面，如果想在命令行下调用，必须像下面这样。

```sh
# 在项目根目录下执行
node_modules/.bin/mocha --version
```

npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行可。

```sh
npx mocha --version
```

npx 的原理很简单，就是运行的时候，会到 node_modules/.bin 路径和环境变量`$PATH`里面，检查命令是否存在。

由于 npx 会检查环境变量`$PATH`,所以系统命令可以调用。

```sh
npx ls
```

主要以，Bash 内置的命令不在`$PATH`里面，所以不能用。比如，cd 是 Bash 命令，因此不能用`npx cd`。

#### 避免全局安装模块

create-react-app 这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

```sh
npx create-react-app my-react-app
```

上面代码运行时，npx 将`create-react-app`下载到一个临时目录，使用后再删除。所以，以后再执行上面的命令，会重新下载`create-react-app`。

下载全局模块时，npx 允许指定版本

```sh
$ npx uglify-js@3.1.0 main.js -o ./dist/main.js
```

只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装`http-server`模块，下面的命令就会自动下载该模块，在当前目录启动一个 Web 服务。

```sh
npx http-server
```

#### 参数

**--no-install 参数**

如果想让 npx 强制使用本地模块，不下载远程模块，可以使用`--no-install`参数，如果本地不存在该模块就会报错。

```sh
npx --no-install http-server
```

**--ignore-existing 参数**

如果忽略本地的同名模块，强制安装使用远程模块，可以使用`--ignore-existing`参数。比如，本地已经全局安装了 create-react-app，但还是想使用远程模块,就用这个参数。

```sh
npx --ignore-existing create-react-app my-react-app
```

**-p 参数**
-p 参数用以指定 npx 所要安装的模块，所以可以这样

```sh
npx -p node@14.16.0 node-v
```

先指定安装`node@14.16.0`，然后再执行`node -v`命令

**-c 参数**

如果 npx 安装多个模块，默认情况下，所执行的命令之中，只有第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释。

```sh
# 会报错
npx -p lolcatjs -p cowsay 'cowsay hello | lolcatjs'

```

上面代码中，`cowsay hello | lolcatjs`执行时会报错，原因是第一项`cowsay`由 npx 解释，而第二项命令`localcatjs`由 Shell 解释，但是`lolcatjs`并没有全局安装，所以报错。

-c 参数可以将所有命令都用 npx 解释。有了它，下面代码就可以正常执行了。

```sh
npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'
```

`-c`参数的另一个作用，是将环境变量带入所要执行的命令。举例来说，npm 提供当前项目的一些环境变量，可以用下面的命令查看。

```sh
npm run env | grep npm_
```

`-c`参数可以把这些 npm 的环境变量带入 npx 命令。

```sh
npx -c 'echo "$npm_package_name"'
```

上面代码会输出当前项目的项目名。

#### 使用不同版本的 Node

利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。

```sh
npx node@14.16.0 -v
```

上面命令会使用 14.16.0 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。

某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。

#### 执行 GitHub 源码

npx 还可以执行 GitHub 上面的模块源码。

```sh
# 执行 Gist 代码
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32

# 执行仓库代码
npx github:piuccio/cowsay hello
```

注意，远程代码必须是一个模块，即必须包含 package.json 和入口脚本。

### npm link

npm link 用来在本地项目和本地 npm 模块之间建立连接，可以在本地进行模块测试

具体用法：

1. 项目和模块在同一个目录下，可以使用相对路径

npm link ../module

2. 项目和模块不在同一个目录下

cd 到模块目录，npm link，进行全局 link

cd 到项目目录，npm link 模块名(package.json 中的 name)

3. 解除 link

解除项目和模块 link，项目目录下，npm unlink 模块名

解除模块全局 link，模块目录下，npm unlink 模块名

### npm 的困境

通过抽离 npm 包可以进行代码复用。

问题一：
如果项目 A,以来了某某工具包，工具包里面又依赖了某一个 xxx 模块。某一天 xxx 模块发布了一个新的包，但这个包是有问题了。整体项目没有 package-lock.json 的情况下或者重新安装会出现问题。只能提 issue,进行修复。

问题二：
通过 lerna 进行项目管理，一个 repo 中有多个 packages,然后通过 lerna publish 发布后。如果出了问题，必须全盘回滚。

因为 A 如果写死了 1.1.0 版本，那么 11.1.0 版本里面的依赖 B，也是 1.1.0，还会安装到 1.1.0 版本，所以还是可能出错。

#### 解决办法

如何来屏蔽他人给我们带来的不确定因素，因为我们自身的代码可以通过单元测试等流程进行保障。

[确定的自己 + [不确定的第三方] ] ?= 稳定

让这个整体变的稳定，大概流程：

- [ 确定的自己 + [不确定的第三方] ] = [ version 包 ]
- [ version 包 ] = 稳定

通过 ncc 这个工具来解决，ncc 是一个 Node Cli 工具，停驶也能作为 api 将 Node 程序编译到一个 Javascript 文件中。

我们通过 ncc 将我们的 npm 包，打包成一个 JS 文件。

然后我们发布的 npm 包，package.json 里面的 dependencies 也不需要去加对应的依赖，npm 安装的时候，也就不用去安装对应的依赖了。

这样的好处：

1. 将依赖包都固定在发包时刻的包里面的内容，其他包再发包，也不影响我们，因为我们最终发的是 ncc 的产物。

2. 安装速度变快了，比如原来的模式 xxx 依赖 A，B，C，A 又可能引用别的包。最终可能安装一个包，实际安装了几十个包或者上百个包。现在只需要安装 1 个。

3. 安装的结果是变少了，比如原来 node_modules 可能占用了 50M，现在你可能只要安装 900KB 的东西，硬盘不会因为前端项目太多，导致 node_modules 大量占用空间了。

4. 启动速度也能变快，因为原来 xxx 模块，会去引用 A，B，C，都是需要走 require 的流程，这个过程就会耗费一些时间

#### 相关问题

1、ncc 跟 pkg 有什么区别？

ncc 生成的产物是 javascript 文件(text)，而 pkg 工具的产物是 binary 的可执行文件(binary)，ncc 的产物，我们还需要借助 node xxx.js 运行，而 pkg 的产物自带运行时，因此在宿主机未安装 Node 的情况下也可以运行。两者有相同之处，也有各自的应用场景

## Yarn

快速、可靠、安全的依赖管理工具.

### 特性

- 速度超快——Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 超级安全——在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
- 超级安全——使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

### 简介

- 离线模式——如果你以前安装过某个包，再次安装时可以在没有任何互联网连接的情况下进行。
- 确定性——不管安装顺序如何，相同的依赖关系将在每台机器上以相同的方式安装。
- 网络性能——Yarn 有效地对请求进行排队处理，避免发起的请求如瀑布般倾泻，以便最大限度地利用网络资源。
- 相同的软件包——从 npm 安装软件包并保持相同的包管理流程。
- 网络弹性——重试机制确保单个请求失败并不会导致整个安装失败。
- 扁平模式——将依赖包的不同版本归结为单个版本，以避免创建多个副本。

### 快速入门

代码通过包(package)(或者称为模块(module))的方式来共享.一个包里包含所有需要共享的代码,以及描述包信息的文件,成为`package.json`。

```sh
# 安装
npm i -g yarn

# 查看版本
yarn -v

# 初始化一个新项目
yarn init

# 添加依赖包
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

# 将依赖项太牛加到不同的依赖类别中
# 添加到devDependencies
yarn add [package] --dev

# 添加到peerDependencies
yarn add [package] --peer

# 添加到optionalDependencies
yarn add [package] --optional

# 升级依赖包
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

# 移除依赖包
yarn remove [package]

# 安装项目的全部依赖(等同于yarn install)
yarn

```

### Yarn 工作流

1. 创建一个新项目
2. 添加/更新/删除依赖项
3. 安装/重新安装依赖项
4. 使用版本管理工具（例如 git）
5. 持续集成

## Pnpm

速度快,节省磁盘空间的软件包管理工具。

### 特性

- 快速——pnpm 是同类工具速度的将近 2 倍
- 高效——node_modules 中的所有文件文件是从一个单一的可内容寻址的存储中链接过来的(均链接自单一存储位置)
- 支持 monorepos——pnpm 内置了对单个源码仓库中包含多个软件包的支持
- 严格——pnpm 创建的 node_modules 并非扁平结构，因此代码不能对任意软件包进行访问

### 快速入门

```sh
# 通过npm安装
npm i -g pnpm

# 通过npx安装
npx pnpm add -g pnpm

# 安装依赖
pnpm add <pkg>

# 执行脚本
pnpm <cmd>

```

### pnpx

npm 有一个很棒的包运行器叫做 npx。 pnpm 通过 pnpx 命令提供相同的工具。 唯一的不同是 pnpx 使用 pnpm 安装软件包。

## npm、yarn、pnpm 比较

## cnpm

使用中国镜像源地址

## nrm

nrm(npm registry manager )是 npm 的镜像源管理工具,允许你快速地在 npm 源间切换。

### nrm 操作

```sh
# 全局安装nrm
npm i -g nrm

# nrm自带默认配置,*为当前的配置
nrm ls

# 切换当前源地址
nrm use taobao

# 删除源地址
nrm del taobao

# 添加源地址
nrm add [name] [url]

# 测试时间
nrm test npm

```

## nvs

nvs 管理本地 Node 版本

- nvs 是跨平台的
- nvs 是基于 Node 编写的

### 配置镜像地址

```sh
nvs remote node https://npm.taobao.org/mirrors/node/
nvs remote
default             node
nvs remote chakracore https://github.com/nodejs/node-chakracore/releases/
nvs remote chakracore-nightly https://nodejs.org/download/chakracore-nightly/
nvs remote nightly  https://nodejs.org/download/nightly/
nvs remote node https://nodejs.org/dist/
```

### nvs 使用指南

```sh
# 安装最新的LTS
nvs add lts

# 配置为默认版本
nvs link lts

# 安装其他版本
nvs add [version]

# 查看已安装的版本
nvs ls

# 切换版本
nvs use [version]
```

### 共用 npm 全局模块

使用 nvs 时,默认的 prefix 是当前激活的 Node.js 版本的安装路径,切换版本之后,之前安装全局命令模块需要重新安装.

解决方案:配置统一的全局模块安装路径
