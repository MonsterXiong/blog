# 未来计划

源码的深入，一些库的使用与了解

## 已写文章，待整理

::: details 排期

## 排期

各个节点的时间安排，才能整体对项目的排期做一个规划

### 如何进项项目排期

排期向上汇报通常以天为单位，有些小需求也可能以 0.5 天为一个单位，但是我们想要预估准确，排期时就要以小时为单位给自己拆分任务，所以需要考虑一个问题，每天的有效工作时间有几个小时

### 作息

早上 10 点上班，中午 12 点午休，下午 2 点开始工作，晚上 7 点下班。
那么每天的工作时间为 2+5=7 小时
新需求来了，你估时为 30 小时，那么排期为 30/7≈5 天

### 但每天 7 小时真的能都投入到项目开发吗？

计划五天的事情，最后却总需要加班 996 甚至通宵熬夜，一些影响开发时间的一系列问题

1. 开发时是否经历过被其它线上问题打扰，修复线上问题是否占用了这 7 个小时的一部分时间
2. 上个项目提测后是否还需要跟测？修改上个项目的 bug 时是否占用了 7 个小时中的一部分时间？
3. 上个项目测试通过后需要上线和回归？如果上线后有问题，是否会被占用时间
4. 本次需求是否进行了接口评审？没评审之前就给排期，接口和预想不一致时是否占用了这 7 个小时中的一部分时间去沟通做接口评审
5. 是否预留了本次需求方案设计时间？
6. 是否预留了本次需求联调时间？
7. 是否预留了本次需求自测时间，如果不做好自测，在做下个需求时，这个需求频繁报 bug，是否还会影响下个需求的开发时间？
8. 提测部署代码和环境是否要预留时间？
9. 是否预留了各种开会时间？周会、周报、月会、日会、日报、其他需求评审等，遇到开会占用了一天时间应该怎么处理

### 假设如下

1. 每天预留半个个小时处理各种线上问题（7-0.5=6.5）
2. 新项目中预留上个项目修改 bug 时间 5 小时（本次项目估时+5 小时）
3. 新项目中预留上个项目的上线和回归时间 4 小时（本次项目估时+4 小时）
4. 在开发之前进行接口评审，没评审之前不进入开发阶段（接口不确定，前端无法进入开发）
5. 如果本次需求是新项目，需要预留技术预研和方案设计时间（新项目需求+技术预研和方案设计时间）
6. 需求评估联调时间，这个估时依据主要看后端人员的接口开发质量，前后端都按照接口文档严格开发，后端接口毫无 bug，1 天就能结束联调（主要看接口质量，根据之前的经验来估时）
7. 自测很重要，根据需求预留自测时间（本次项目估时+5 小时）
8. 提测部署代码是否需要预留时间，有些公司基建很好，部署代码完全自动化，有些则需要搞很久，公司问题，公司要为它买单，所以根据实际情况预留时间（本次项目估时+2 小时）
9. 首先每天预留 1.5 小时的开会时间（6.5-1.5=5）

### 再来看刚才的估时

30 小时+5 小时 bug+4 小时上线和回归+5 小时自测+2 小时提测部署=46 小时

46/每天有效工作时间 5 小时=9 天

### 总结

公司基建好，可以节省很多提测部署上线时间，所以根据实际情况来合理排期，准确预估好自己的排期。
:::

## 概念

- 模板引擎
- 抽象语法树
- 虚拟 DOM 和 diff 算法
- 生命周期
- Devops

## 团队协作以及提效

- 前后端分离
  - mockjs
- 监控，日志系统

## 待续-笔记整理

::: details Pinia
面向未来的 Vuex——[pinia](https://pinia.esm.dev/)
[rfcs/271](https://github.com/vuejs/rfcs/pull/271)

- no mutation,
- only state、getters、actions

:::

::: details cypressjs

面向未来的组件测试方式

基于 cypress 在 chrome 中测试组件

e2e=>组件级测试=>单元测试

:::

::: details Vue 以及周边

:::

::: details Webpack

:::

::: details Jest

:::

::: details 模块化

:::

::: details 深入牙羽 JS

:::

::: details Vuepress

:::

::: details Koa

:::

::: details CLI

:::

::: details 自定义工具函数

:::

::: details 权限设计

:::

::: details 术语

:::

## windows 命令

https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/tree#BKMK_examples

## 使用 Jenkins 自动部署项目 Vue

### 目标

本地 push 代码到 Github，webhook 自动触发 jenkins 上的构建动作，完成 node 插件并且打包，然后通过 publish over ssh 插件，将打包出来的文件，部署到目标服务器上。

### 前期准备

1. github 账号和项目
2. centos 服务器
3. 服务器安装 Java SDK
4. 服务器安装 nginx+启动；
5. 服务器安装 jenkins+启动

### jenkins 介绍

Jenkins 是开源的，使用 Java 编写的持续集成的工具，在 Centos 上可以通过 yum 命令行直接安装。Jenkins 只是一个平台，真正运作的都是插件。这就是 jenkins 流行的原因，因为 jenkins 什么插件都有。

```sh
# 首先登陆服务器更新系统软件
yum update

# 安装Java和git
yum install java
yum install git

# 安装nginx
yum install nginx
# 启动nginx
service nginx start

# 安装Jenkins
wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key

# yum命令安装Jenkins
yum install jenkins
# 启动Jenkins，默认端口是8080
service jenkins restart
# 输入cat /var/lib/jenkins/secrets/initialAdminPassword 查看初始密码
# 安装通用推荐的插件即可，然后安装两个推荐的插件 Rebuilder和SafeRestart
```

### 在 jenkins 中安装 nodeJs 插件

### 安装 Publish Over SSH 插件，

我们将通过这个工具实现服务器部署功能。

安装完成后在系统管理->系统设置->publish over SSH 里设置服务器信息。

```sh
Passphrase：密码（key的密码，没设置就是空）
Path to key：key文件（私钥）的路径
Key：将私钥复制到这个框中(path to key和key写一个即可)

SSH Servers的配置：
SSH Server Name：标识的名字（随便你取什么）
Hostname：需要连接ssh的主机名或ip地址（建议ip）
Username：用户名
Remote Directory：远程目录（上面第二步建的testjenkins文件夹的路径）

高级配置：
Use password authentication, or use a different key：勾选这个可以使用密码登录，不想配ssh的可以用这个先试试
Passphrase / Password：密码登录模式的密码
Port：端口（默认22）
Timeout (ms)：超时时间（毫秒）默认300000
```

在刚才的 testJenkins 工程中配置构建后操作，选择 send build artificial over SSH， 参数说明：

```sh
Name:选择一个你配好的ssh服务器
Source files ：写你要传输的文件路径
Remove prefix ：要去掉的前缀，不写远程服务器的目录结构将和Source files写的一致
Remote directory ：写你要部署在远程服务器的那个目录地址下，不写就是SSH Servers配置里默认远程目录
Exec command ：传输完了要执行的命令，我这里执行了进入test目录,解压缩,解压缩完成后删除压缩包三个命令
```

注意在构建中添加压缩 dist 目录命令

接下来实现开发本地 push 代码到 github 上后，触发 Webhook，jenkins 自动执行构建。

jenkins 安装 Generic Webhook Trigger 插件
github 添加触发器

配置方法

1. 在刚才的 testJenkins 工程中点击构建触发器中选择 Generic Webhook Trigger，填写 token
2. github 配置 Webhook
   选择 github 项目中的 Settings->Webhooks>add webhook
   配置方式按上图红框中的格式，选择在 push 代码时触发 webhook，成功后会在下方出现一个绿色的小勾勾

试一下，把 vue 项目首页的 9900 去了，然后 push 代码去 github，发现 Jenkins 中的构建已经自动执行.

一套简单的前端自动化工作流就搭建完成，是选择代码 push 后在 Jenkins 中手动构建，还是 push 后自动构建，看公司情况使用
