---
sidebar: auto
---

# Lerna

## Lerna 是什么？

Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。

Lerna 是一个用来优化托管在 git/npm 上的多 packag 代码库的工作流的一个管理工具,可以让你在主项目下管理多个子项目,从而解决了多个包互相依赖,且发布时需要手动维护多个包的问题。

## Lerna 解决了什么?

**资源浪费**

通常情况下,一个公司的业务项目只有一个主干,多 git repo 的方式,这样 node_modules 会出现大量的冗余,它们可能都会安装同样的包,浪费了大量存储空间。

**调试繁琐**

很多公共的包通过 npm 安装,想要调试依赖的包时,需要通过 npm link 的方式进行调试。

**资源包升级的问题**

一个项目依赖了多个 npm 包,当某一个子包代码修改升级时,都要对主干项目包进行升级修改。

## Lerna 的核心原理

**monorepo 和 multirepo 对比**

monorepo:时将所有的模块统一的放在一个主干分支中管理。

multirepo:将项目分化为多个模块,并针对每一个模块单独的开辟一个 repository 来进行管理。

**lerna 软链实现**

Node.js 中如何实现软链

lerna 也是通过这种方式来试炼软链,它会创建名为 path 的链接,该链接指向 target。
`fs.symlinkSync(target,path,type)`

## Lerna 的使用

```sh
# lerna在使用之前需要全局安装lerna工具
npm i -g lerna

# 初始化lerna项目
lerna init

# 创建一个新的由lerna管理的包
lerna create <project-name>

# 安装所有依赖项并连接所有的交叉依赖
lerna bootstrap

# 从所有的包中删除node_modules目录
lerna clean
# lerna clean 不会删除项目最外层的根node_modules

# 增加模块包到最外层的公共node_odules中
lerna add <package-name>

# 将本地路径<pathToRepo>中的软件包导入(import)packages/<directory-name>中并提交commit
lerna import <pathToRepo>
# lerna管理的项目和导入的项目必须都是git项目,提交了commit,以及npm初始化

# 增加模块包到packages中指定项目下面是将demo1模块增加到demo2项目中
lerna add demo1 --scope=demo2

# 在packages中对应包下执行任意命令下的命令,是对packages下的demo2项目执行yarn start命令,
# 比较常用,可以把它配置到最外层的package.json中
lerna exec --scope demo2 -- yarn start
# 如果命令中不增加--scope demo2直接使用下面的命令,
# 这会在packages下所有的包执行命令rm -rf ./node_moudles
lerna exec -- rm -rf ./node_modules

# 显示lerna管理的所有包
lerna list (等同于 lerna ls)

# 检查自上次发布以来哪些软件包被修改过。
lerna changed

# 列出所有或某个软件包自上次发布以来的修改情况。
lerna diff [package?]

# 在每一个包含 [script] 脚本的软件包中运行此 npm 脚本。
lerna run [script]

# 在当前项目中发布包
lerna publish

# 这个命令可以结合lerna.json中的"version":"independent"配置一起使用,
# 可以完成统一发布版本号和packages下每个模板发布的效果

# lerna publish 永远不会发布标记为private的包(package.json中的"private":true)

```

## Lerna 应用(适用场景)

- [`facebook/jest`](https://github.com/facebook/jest) 使用的是 `lerna` 进行管理
- [`alibaba/rax`](https://github.com/alibaba/rax) 使用的是 `lerna` 进行管理
- [`vuejs/vue-cli`](https://github.com/vuejs/vue-cli) 使用的是 `lerna` 进行管理

## Lerna 弊端

由于源码在一起,仓库变更非常常见,存储空间也变得很大,甚至几 G,CI 测试运行实践也会变长。

## 踩坑

有时候创建项目,项目之间会有很多重复部分,并且会占用大量的硬盘空间。

**lerna bootstrap**

lerna 提供了可以将子项目的依赖包提升到最顶层的方式,我们可以执行`lerna clean`先删除每个子项目的`node_modules`,然后在执行命令 `lerna bootstrap --hoist`。

`lerna bootstrap --hoist`会将`packages`目录下的公共模块抽离到最顶层,但是这种方式会有一个问题,不同版本号只会保留使用最多的版本,这种配置不太好,当项目中有些功能需要依赖老版本时,就会出现问题。

**yarn workspaces**

`yarn workspaces`可以解决当不同项目依赖不同的版本号问题,`yarn workspaces`会检查每个子项目里面依赖及其版本,如果版本不一致都会保留到自己的`node_modules`中,只有依赖版本号一致的时候才会提升到顶层.需要在`lerna.json`中增加配置。

```json
"npmClient":"yarn", //指定npmClient为yarn
"useWorkspaces":true //将useWorkspaces设置为true
```

并在顶层的 package.json 中增加配置。

```json
// 顶层的package.json
{
  "workspaces": ["packages/*"]
}
```

增加这个配置之后不再需要`lerna bootstrap`来安装依赖了,可以直接使用`yarn install` 进行依赖的安装.`yarn install` 无论在顶层运行还是在任意一个子项目运行效果都是可以的。

## 实践

```sh
git init lerna-repo && cd lerna-repo && lerna init
```
