---
sidebar: auto
---

# 包管理器

## npm

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

nrm(npm registry manager )是 npm 的镜像源管理工具。

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

## nvm

nvm(node.js version management)是一个 nodejs 的版本管理工具。通过它可以安装和切换不同版本的 nodejs。

::: tip 注意
安装路径最好不要出现中文和空格。
:::

### nvm 使用指南

```sh
# 查看本地安装的所有版本;有可选参数available,显示所有可下载的版本
nvm list [有可选参数available]

# 列出所有可以安装的node版本号
nvm ls-remote

# 列出所有已经安装的node版本
nvm ls

# 当前node版本
nvm current

# 设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
nvm npm_mirror [url]

# nvm配置淘宝镜像，在setting.txt文件中最后一行添加以下两行
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

# 使用指定版本node，可指定32/64位
nvm use [version] [arch]

# 卸载指定版本node
nvm uninstall [version]

# 安装node,version是指定版本也可以是最新的latest，可选arch是指定安装32位还是64位，默认系统位数
# 可以添加--insecure绕过远程服务器的SSL
nvm install <version> [arch]

# 显示node是运行在32位还是64位
nvm arch

# 开启node.js版本管理
nvm on

# 关闭node.js管理
nvm off

# 设置下载代理，不加可选参数url，显示当前代理，将url设置位none则移除代理
nvm proxy [url]

# 设置存储不同版本node的目录，如果未设置，默认使用当前目录
nvm root [path]

# 显示nvm版本
nvm -v



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
