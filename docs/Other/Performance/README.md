---
sidebar: auto
---

# 性能优化

本质上提高运行效率，降低运行消耗的行为都可以看作是性能优化。

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

## 概要（前端性能优化-六大角度综合性优化方案）

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

[懒加载](./Lazy-load.md)

[预加载](./Pre-load.md)

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

前端的压缩方式有很多，现在的一些 gulp、webpack 等，基本能压缩 50%以上，**gzip 能在压缩的基础上再进行压缩 50%以上**。

#### gzip 压缩原理

请求头中有个 Accept-Encoding 来标识对压缩的支持。客户端 http 请求头中声明浏览器支持的压缩方式，服务端配置启用压缩，压缩的文件类型，压缩方式。当客户端请求到服务端时，服务器解析请求头，如果客户端支持 gzip 压缩，响应时对请求的资源进行压缩并返回客户端，浏览器按照自己的方式解析，在 http 响应头，如果可以看到 content-encoding：gzip，这是指服务端使用了 gzip 的压缩方式。

#### 启用 gzip

node 端很简单，只要加上 [compress](https://github.com/expressjs/compression) 模块即可

```js
var compression = require("compression");
var app = express();

//尽量在其他中间件前使用compression
app.use(compression());
```

这是基本用法，如果还要对请求进行过滤的话，还要加上

```js
app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // 这里就过滤掉了请求头包含'x-no-compression'
    return false;
  }

  return compression.filter(req, res);
}
```

**koa**

```js
const compress = require("koa-compress");
const app = (module.exports = new Koa());
app.use(compress());
```

因为 node 读取的是生成目录中的文件，所以要先用 webpack 等其他工具进行压缩成 gzip，webpack 的配置如下

```js
const CompressionWebpackPlugin = require("compression-webpack-plugin");
plugins.push(
  new CompressionWebpackPlugin({
    asset: "[path].gz[query]", // 目标文件名
    algorithm: "gzip", // 使用gzip压缩
    test: new RegExp(
      "\\.(js|css)$" // 压缩 js 与 css
    ),
    threshold: 10240, // 资源文件大于10240B=10kB时会被压缩
    minRatio: 0.8, // 最小压缩比达到0.8时才会被压缩
  })
);
```

**nginx**

gzip 使用环境:http,server,location,if(x),一般把它定义在 nginx.conf 的 http{…..}之间

- gzip on

  on 为启用，off 为关闭

- gzip_min_length 1k

  设置允许压缩的页面最小字节数，页面字节数从 header 头中的 Content-Length 中进行获取。默认值是 0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大。

- gzip_buffers 4 16k

  获取多少内存用于缓存压缩结果，‘4 16k’表示以 16k\*4 为单位获得

- gzip_comp_level 5

  gzip 压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值;

- gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php
  对特定的 MIME 类型生效,其中'text/html’被系统强制启用
- gzip_http_version 1.1

  识别 http 协议的版本,早起浏览器可能不支持 gzip 自解压,用户会看到乱码

- gzip_vary on

  启用应答头"Vary: Accept-Encoding"

- gzip_proxied off

  nginx 做为反向代理时启用,off(关闭所有代理结果的数据的压缩),expired(启用压缩,如果 header 头中包括"Expires"头信息),no-cache(启用压缩,header 头中包含"Cache-Control:no-cache"),no-store(启用压缩,header 头中包含"Cache-Control:no-store"),private(启用压缩,header 头中包含"Cache-Control:private"),no_last_modefied(启用压缩,header 头中不包含"Last-Modified"),no_etag(启用压缩,如果 header 头中不包含"Etag"头信息),auth(启用压缩,如果 header 头中包含"Authorization"头信息)

- gzip_disable msie6

  (IE5.5 和 IE6 SP1 使用 msie6 参数来禁止 gzip 压缩 )指定哪些不需要 gzip 压缩的浏览器(将和 User-Agents 进行匹配),依赖于 PCRE 库

以上代码可以插入到 http {...}整个服务器的配置里，也可以插入到虚拟主机的 server {...}或者下面的 location 模块内

### KeepAlive

[KeepAlive 详解](https://www.jianshu.com/p/9fe2c140fa52)

### HTTP 缓存

### Service Worker

### HTTP/2

### SSR

### Nginx

## 更多流行优化技术

### SVG 优化图标

### FlexBox 布局

在早期的 CSS 布局方式中我们能对元素实行绝对定位、相对定位或浮动定位。而现在，我们有了新的布局方式 flexbox，它比起早期的布局方式来说有个优势，那就是性能比较好。

### 预加载

### 预渲染

### 窗口化提高列表性能

### 骨架组件
