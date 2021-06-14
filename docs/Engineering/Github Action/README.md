---
sidebar: auto
---

# Github Action

- husky
- 代码规范

  - ESLint
  - esditorconfig

- commit 提交规范

## 概述

### 为什么使用 Github Actions

前端部署一般是将打包后的代码放到 nginx html 目录就可以了，每次修改文件，我们都需要重新打包，登陆服务器，上传代码，重启服务器。Github Actions 就可以帮我们做这一系列的操作。

### Github Actions 是什么

持续集成由很多操作组成，比如拉去最新代码，运行测试，登陆服务器、部署服务器等，

一般开发流程是：需求=>开发=>构建=>测试=>预发=>部署，这些操作是可重复利用的，Github 集成了 actions 市场，允许开发者把操作写成独立的脚本，发布到 Actions 市场允许所有开发者使用。

Github 给我们提供了一个以下配置的服务器来允许我们配置对应的 actions:

- 2-core CPU
- 7GB of RAM memory
- 14GB of SSD disk space

如果你有网络时延 的需求（比如推送及拉取镜像时产生的网络时延），可以自建服务器

### 基本概念

workflow(流程)：持续集成一次运行的过程，就是一个 workflow。

job(任务)：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

step(步骤)：每个 job 由多个 step 构成，一步步完成。

action(动作)：每个 step 可以依次执行一个或多个命令（action）。

创建 workflow 文件，在项目的./github/workflows 目录，创建一个 workflow 文件，例如 ci.yml。

```YAML
# workflow名称。省略的话，默认为当前workflow文件名
name: Node.js CI
# 触发workflow的条件，
on:
  push:
# 只有master分支发生push事件时，才会触发workflow
  branches: [ master ]
  pull_request:
  branches: [ master ]

# jobs表示执行的一项或多项任务
jobs:
# 任务的job_id，具体名称自定义，这里build代表打包
  build:

    # # runs-on字段指定运行所需要的虚拟机环境。注意：这个是必填字段，有[ubuntu | windows | macos]-latest三种
    runs-on: ubuntu-latest
# 用于配置当前workflow的参数
    strategy:
      matrix:
        # node-version指定node版本，有三种配置方式，可以指定多个版本都运行，也可以指定单个版本下运行
        # 1. 使用三个node版本，'x'是一个通配符
        # node-version: [8.x, 10.x, 12.x]
        # 2. 可以写具体的版本好
        # node-version: [8.11.2, 14.16.0]
        # 3. 单个版本号
        # node-version: '12.x'
        # 如果不指定node版本，则GitHub使用环境的默认值node版本
        node-version: [8.x, 10.x, 12.x]

    # steps字段指定每个job的运行步骤，可以包含一个或多个步骤，每个步骤都可以配置指定字段
    steps:
    # 切代码到 runner拉取代码。这里用的是 GitHub 官方的 action: actions/checkout@v2
    - uses: actions/checkout@v2
    # 在当前操作系统安装node
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    # npm ci和yarn --frozen-lockfile安装package-lock.json或者npm-shrinkwrap.json文件中的依赖，这样可以防止npm install安装时lock文件发生变化。
    # 该运行的命令或者action
    # 安装依赖、运行测试、打包
    - run: npm install
    - run: npm test
    - run: npm run build
      env:
        CI: true
```

### 常见的 Actions 配置

- 打版本标签 Create Tag Release
- 创建 Github Pages 站点
- 多人协作开发，云端代码检测

[更多 Actions 配置](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions?fileGuid=1PWJAvQBtLA5IGh3)

## 搭配 Docker

### 为什么要使用 Docker

没有 Docker 之前，使用 webhook 实现自动部署，但后面遇到了服务器到期更换服务器的时候，就只能重复操作进行迁移，而且文件目录管理混乱，项目变多时，维护成本也会越来越高，Docker 五大优势：持续集成、版本控制、可移植性、隔离性和安全性

### 实践

#### 在项目根目录下新建 Nginx 配置

在项目根目录新建 Nginx 配置文件 vhost.nginx.conf。

```conf
server {
listen 80;
server_name localhost;
location / {
  root /usr/share/nginx/html;
  index index.html index.htm;
  proxy_set_header Host $host;
  if (!-f $request_filename) {
    rewrite ^.*$ /index.html break;
  }
}
error_page 500 502 503 504 /50x.html;
location = /50x.html {
    root /usr/share/nginx/html;
  }
}
```

#### 项目根目录新建 Dockerfile 文件

在项目根目录新建 Dockerfile 文件，构建镜像包使用。

```sh
FROM nginx
COPY ./dist/ /usr/share/nginx/html/
# 第一步nginx配置文件名称
  COPY ./vhost.nginx.conf /etc/nginx/conf.d/bilibili-vue.conf
EXPOSE 80
```

#### 配置容器镜像服务

这里我选择了阿里云的容器镜像服务 (https://www.aliyun.com/product/acr?fileGuid=1PWJAvQBtLA5IGh3)，为什么不使用国外的 dockhub (https://hub.docker.com/?fileGuid=1PWJAvQBtLA5IGh3) 呢，因为这样使用起来速度快一点，而且有免费的个人版足够我们使用。

1. 初次打开需要开通服务，配置登陆密码（记录下来，后面要用）
2. 然后创建命名空间，再创建我们的镜像仓库，这里如果不想别人下载你的镜像的话就可以选择私有。然后点击下一步配置代码源，这里我选择了本地仓库，一方面是为了日志统一，可以在 Github Actions 看到所有日志，一方面是可以通过命令行直接推送镜像到镜像仓库，自由度比较高。
3. 之后就可以在页面看到我们创建的仓库，点击仓库名称进入，可以看到仓库的基本信息和操作指南，这个时候一个镜像仓库就完全创建成功了。

#### 如何跟 Actions 联动

我们只要在 Actions 中 build 镜像后登陆阿里云 Registry 实例就好了，但是这个时候如果铭文写在 yml 中肯定不行，可以在 Settings => Secrets => New repository secret ，设置 secret，配置上述容器镜像账号的用户名（阿里云用户名）和密码（上述配置容器镜像服务时设置的登录密码）。

#### 完整的 Actions

```sh
name: Docker Image CI # Actions名称
on: [push] # 执行时机
jobs:

# 这里我使用的是yarn，想用npm的同学将yarn命令修改为npm命令即可
build:
runs-on: ubuntu-latest
steps:
- name: checkout
uses: actions/checkout@master
# 安装依赖
- name: install
run: yarn
# 打包
- name: build project
run: yarn run build

# 打包镜像推送到阿里云容器镜像服务
- name: Build the Docker image
run: |
docker login --username=${{ secrets.DOCKER_USERNAME }} registry.cn-hangzhou.aliyuncs.com --password=${{ secrets.DOCKER_PASSWORD }}
docker build -t bilibili-vue:latest .
docker tag bilibili-vue registry.cn-hangzhou.aliyuncs.com/zlyyyy/bilibili-vue:latest
docker push registry.cn-hangzhou.aliyuncs.com/zlyyyy/bilibili-vue:latest # 推送
- name: ssh docker login # 使用appleboy/ssh-action@master登录服务器执行拉取镜像脚本，服务器ip、用户名、密码配置方式同容器镜像服务配置方式一样
uses: appleboy/ssh-action@master
with:
        host: ${{ secrets.SSH_HOST }}
username: ${{ secrets.SSH_USERNAME }}
password: ${{ secrets.SSH_PASSWORD }}
script: cd ~ && sh bilibili-vue-deploy.sh ${{ secrets.DOCKER_USERNAME }} ${{ secrets.DOCKER_PASSWORD }}
```

最后一步登录服务器后，我执行了一个脚本来拉取云端最新镜像，并删除旧镜像，启动新镜像。脚本内容如下。

```sh
echo -e "---------docker Login--------"
docker login --username=$1 registry.cn-hangzhou.aliyuncs.com --password=$2
echo -e "---------docker Stop--------"
docker stop bilibili-vue
echo -e "---------docker Rm--------"
docker rm bilibili-vue
docker rmi registry.cn-hangzhou.aliyuncs.com/zlyyyy/bilibili-vue:latest
echo -e "---------docker Pull--------"
docker pull registry.cn-hangzhou.aliyuncs.com/zlyyyy/bilibili-vue:latest
echo -e "---------docker Create and Start--------"
docker run --rm -d -p 8081:80 --name bilibili-vue registry.cn-hangzhou.aliyuncs.com/zlyyyy/bilibili-vue:latest
echo -e "---------deploy Success--------"
```

#### 测试流程，查看日志

推送一次代码测试，打开 Actions 后可以看到自动运行的实时 workflow 结果，以及每步的日志信息。

#### 总结

自动化部署成功之后，我们不需要每次修改代码，手动更新线上了，后面迁移也会更方便，还有更多的自动化部署方式，比如直接使用 Github+阿里云镜像仓库的触发器一样可以做到，容器服务有很多云服务厂商都是一样的使用方式

## GitHub Actions 部署 VuePress 文档

GitHub Actions 是 GitHub 的持续集成服务。在 2018 年 10 月推出。

### Vuepress 文档

```sh
# 创建并进入新目录，使用包管理器进行初始化并安装vuepress依赖
mkdir vuepress-demo && cd vuepress-demo && yarn init -y && yarn add -D vuepress

# 创建文档
mkdir docs && echo '# Hello VuePress' > docs/README.md

# 添加script脚本
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }

# 启动服务
yarn docs:dev

# 在docs/.vuepress/config.js设置正确的base
```

### 创建 GitHub Actions

首先在仓库菜单栏中选择 Actions 进入到创建页面。

简单的修改一下命令

```sh

# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the action will run.
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: Run a ci script
        run: npm i
      - name: Run a docs script
        env:
          TOKEN: ${{secrets.DEPLOY_KEY}}
        run: npm run docs
      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
```

GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的.github/workflows 目录。

workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为.yml，一个库可以有多个 workflow 文件。GitHub 只要发现.github/workflows 目录里面有.yml 文件，就会自动运行该文件。

因为代码中定义了一个环境变量 Token 用来 git ssh 免密操作登录的，如果不配置就无法 git push 这些操作。我们需要将构建后的代码发到 GitHub 仓库，因此需要 GitHub 密钥。

这个密钥存储到当前仓库的 Settings/Secrets 里面。

再创建文件 build/deploy.sh 用来执行 bash 脚本。

```sh
# Prepare
cd docs
rm -rf .vuepress/dist

# Build
vuepress build

# Publish to GitHub Pages
cd .vuepress/dist
git init
git config user.name "MonsterXiong"
git config user.email "942849672@qq.com"
git add -A
git commit -m "[vuepress] update docs"
git push --force "https://${TOKEN}@github.com/MonsterXiong/vuepress-demo.git" "master:gh-pages"

# Cleanup
cd ../..
rm -rf .vuepress/dist
```

在 package.json 中增加一行 Scripts 命令。

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs": "bash ./build/deploy.sh"
  }
}
```

最后提交代码，就会自动执行 Actions 将部署 Vuepress 文档到 GitHub Pages。我们就可以访问页面了，而且之后的每一次提交都会自动执行然后去更新文档的内容。
