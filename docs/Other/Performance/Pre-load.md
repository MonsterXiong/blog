---
sidebar: auto
---

# 预加载

预加载就是提前加载，需要用的时候直接用

## 预加载图片

预加载图片就是提前加载图片，当用户需要查看时可以直接从本地缓存中渲染

## 目的

- 图片预先加载到浏览器中，用户可以享受到极快的加载速度。
- 保证了图片快速、无缝地发布，也可以提高用户体验。

## 实现方法

方法一：

```js
function loadImage(url, callback) {
  // 创建一个Image对象，实现图片的预下载
  const img = new Image();
  // 图片下载完调用callback函数
  img.onload = function() {
    callback(img);
  };
  img.src = url;
}
```

::: tip 注意

- 注意：要将 img.src 放在 img.onload 后面
  - 否则，若将 img.src 放在 img.onload 前面
    - 若没有缓存：没问题
      - 给 img.src 赋值后开始异步加载图片，加载过程的时间很长，当加载完图片时，onload 的赋值语句已经执行，所以加载完图片发生 onload 事件时就会调用 callback 函数
    - 若缓存，有问题
      - 给 img.src 赋值后 开始异步加载图片，加载过程的时间很短，当加载完图片时，还没有执行到 onload 的赋值语句，所以加载完图片发生 onload 事件时不会调用 callback 函数
- 问题：
  - 内存泄漏：img.onload 引用的匿名函数形成了闭包，闭包的作用域链保存着 img，创建了循环引用
  - 只考虑了静态图片的加载，忽略了 gif 等动态图片，可能会多次触发 onloaad

:::

方法二：

```js
function loadImage(url, callback) {
  const img = new Image();
  //   图片下载完毕时将img.onload设为null,并异步调用callback函数
  img.onload = function() {
    img.onload = null;
    callback(img);
  };
  img.src = url;
}
```
