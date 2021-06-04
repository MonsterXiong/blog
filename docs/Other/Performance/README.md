---
sidebar: auto
---

# 性能优化

::: details 展开

- 打包优化
  - webpack
    - loader
    - dll
    - happypack
    - 压缩代码
    - tree shaking
    - scope hoisting
    - code splitting
  - 图片 base64,cdn
- 网络优化
  - dns
  - cdn
  - 缓存
  - preload/prefetch/懒加载
  - ssr
- 代码优化
  - loading/骨架屏
  - web worker
  - 虚拟列表
  - 懒加载 dom/style 批量更新

:::

## 概要

### 前端性能优化-六大角度综合性优化方案

- 平凡程序员和大牛程序员、架构师的分水岭
- 怎样做出高性能的工程，达到大厂产品水平
- 提高自身含金量，一线大厂面试的敲门砖

### 目标

使用流行的性能优化技术，快速提高 Web 性能

### 性能优化意义何在？

WPOStarts 性能优化案例库-业界经验

高性能

- 用户参与度-用户留存
- 高转换率-SEO 排名
- 业务收益

我们优化的工作是围绕 web 的基本工作原理来展开的，包括客户端服务端去进行连接，然后对这些资源去进行加载，加载到的资源如何进行解析和渲染，每个环节都可以去做优化

### 行动的标准是什么？

loading
动画
事件处理

## 性能优化指标与测量工具

- 行业的标准
- 优化模型
- 测量工具
- 性能相关 APIS

### 为什么要进行 Web 性能优化

互联网发展非常快，网站内容越来越多，功能越来越强大，页面越做越漂亮。内容多了，速度会受到影响，但是用户却希望速度越来越快，只能对网站进行持续的优化，才能保证在发展的过程中，我们始终网站的速度能跟得上用户体验的一个需求

### 性能-Web 网站和应用的支柱

流量 =》搜索 =》转换率 =》用户体验

阅读：Amazon 发现每 100ms 延迟导致 1%的销量损失

### 寻找性能瓶颈

- 了解性能指标-多块才算快
- 利用测量工具和 APIS
- 优化问题，重新测量（迭代）

### 移动端挑战多

- 设备硬件、网速、屏幕尺寸、交互方式
- 用户更缺少耐心，>3 秒加载导致 53%的跳出率（bounce rate）
- 持续增长的移动用户和移动电商业务

### 性能指标和优化目标

以淘宝为例

**Network**

**LightHouse**

First Contentful Paint 第一次出现内容的时间

Speed Index 速度指数（4s）

**Performance**

**性能优化-加载**

- 理解加载瀑布图
- 基于 HAR 存储与重建性能信息
- 速度指数（Speed Index）
- 重要测量指标
  Speed Index
  TTFB 请求发送出去，到响应回来时间
  页面加载时间 页面加载完要多少时间
  首次渲染 第一次内容时间

**性能优化-响应**

- 交互动作的反馈时间

  交互响应要足够快

- 帧率 FPS
  在开发者工具中，ctrl-shift-p >frame =>show frames 监控页面帧数变化，画面要足够流畅
- 异步请求的完成时间

  所有异步请求都够快（1s），完成不了加 loading 动画

### RAIL 测量模型

谷歌提出来量化的一个测量标准，量化指标=>指导性的作用

#### 什么是 RAIL？

就是一个标准，它告诉我们要做到什么程度，从用户角度出发

- Response 响应
- Animation 动画
- Idle 空闲
- Load 加载

#### RAIL 的目标

让良好的用户体验成为性能优化的目标

#### RAIL 评估标准

- 响应：处理事件应在 50ms 以内完成
- 动画：每 10ms 产生一帧，1s60 帧，（6ms 绘制一帧）
- 空闲：尽可能增加空闲时间
- 加载：在 5s 内完成内容加载并可以交互

### 性能测量工具

- Chrome DevTools 开发调试、性能评测
- Lighthouse 网站整体质量评估
- WebPageTest 多测试地点、全面性能报告

#### 使用 WebPageTest 评估 Web 网站性能

##### 解读 WebPageTest 的报告

- waterfall chart 请求瀑布图
- first view 首次访问
- repeat view 二次访问

##### WebPageTest

- 在线进行网站性能分析
- 如何本地部署 WebPageTest 工具

```sh
# 打开命令行和终端，使用docker
docker pull webpagetest/server

docker pull webpagetest/agent

docker run -d -p 4000:80 webpagetest/server

docker run -d -p 4001:80 --network="host" -e "SERVER_URL=http://localhost:4000/work/" -e "LOCATION=Test" webpagetest/agent

# -----制作一个自定义镜像-----
# 创建一个文件夹
mkdir wpt-mac-server
cd wpt-mac-server
vim Dockerfile

# 基于server镜像添加一个配置文件，会做一个自定义的修改，然后放到目录下
# FROM webpagetest/server
# ADD locations.ini /var/www/html/settings/

vim locations.ini

# [locations]
# 1=Test_loc
# [Test_loc]
# 1=Test
# label=Test Location
# group=Desktop
# [Test]
# browser=Chrome,Firefox
# label="Test Location"
# connectivity=LAN

docker build -t wpt-mac-server .


mkdir wpt-mac-agent
cd wpt-mac-agent
vim Dockerfile

# FROM webpagetest/agent
# ADD script.sh /
# ENTRYPOINT /script.sh

vim script.sh

# #!/bin/bash
# set -e
# if [ -z "$SERVER_URL" ]; then
#   echo >&2 'SERVER_URL not set'
#   exit 1
# fi
# if [ -z "$LOCATION" ]; then
#   echo >&2 "LOCATION not set"
#   exit 1
# fi
# EXTRA_ARGS=""
# if [ -n "$NAME" ]; then
#   EXTRA_ARGS="$EXTRA_ARGS --name $NAME"
# fi
# python /wptagent/wptagent.py --server $SERVER_URL --location $LOCATION $EXTRA_ARGS --xvfb --dockerized -vvvvv --shaper none

# 给脚本添加执行权限
chmod u+x script.sh
# 镜像打包，自定义名称叫wpt-mac-agent
docker build -t wpt-mac-agent .

# docker ps
# 停掉镜像实例
docker stop

# 跑自定义镜像
docker run -d -p 4000:80 wpt-mac-server

docker run -d -p 4001:80 --network="host" -e "SERVER_URL=http://localhost:4000/work/" -e "LOCATION=Test" wpt-mac-agent

```

#### 使用 Lighthouse 分析性能

除了生成一个完整的报告,还可以提供建议。

```sh
npm i -g lighthouse

lighthouse http://www.bilibili.com
```

#### Lighthouse 的安装及使用

- 本地 npm 安装 Lighthouse
- Chrome DevTools 中使用
- 通过 chrome web store 安装插件

## 代码优化

### JS 优化

### HTML 优化

### CSS 优化

## 渲染优化

### 现代浏览器渲染原理

### 可优化的渲染环节和方法

## 资源优化

### 压缩&合并

### 图片格式

### 图片加载

### 字体优化

## 构建优化

### webpack 的优化配置

### 代码拆分

### 代码压缩

### 持久化缓存

### 检测与分析

### 按需加载

## 传输加载优化

### Gzip

### KeepAlive

### HTTP 缓存

### Service Worker

### HTTP/2

### SSR

### Nginx

## 更多流行优化技术

### SVG 优化图标

### FlexBox 布局

### 预加载

### 预渲染

### 窗口化提高列表性能

### 骨架组件
