# Koa

## 目的

- 了解 koa
- 实现一个精简版 koa
- 阅读 koa 源码

三个模块构成

Application => http server 的封装 => 基本的服务器框架

Context => 理解 koa 上下文 => 服务器框架基本数据结构的封装，用以 http 请求解析及响应

Middleware => 深入理解洋葱模型 => 中间件，也是洋葱模型的核心

## 洋葱模型

> 先从皮到心，再从心到皮
>
> koa 的洋葱模型：每一个中间件都像是洋葱的每一层，当从洋葱的中心穿过时，每一层都会一进一出穿过两次，最先传入的一层最后穿出。
>
> middleware：第一个中间件将会执行
>
> next：每一个中间件都会通过 next 来执行下一个中间件
>
> middleware(xtx,next)
