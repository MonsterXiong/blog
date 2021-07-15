---
sidebar: auto
---

# 懒加载

懒加载就是延时加载一些非关键资源的技术，需要用到的时候再去加载,也就是按需加载。

## 常见场景

- 懒加载图片
- 懒加载视频
  [具体可以看](https://www.jianshu.com/p/e86c61468285)

## 图片懒加载

1. 我们要知道页面中的 img 元素，如果没有 src 属性，浏览器就不会发出请求去下载图片，只有通过 javascript 设置了图片路径，浏览器才会发送请求。
2. 加载图片的过程时异步的

图片懒加载就是当图片出现到页面的可视化区域，或者到达某一个触发条件时，会动态的将伪属性替换成 src 属性或者利用 css 图像，完成图片加载。

### 两种加载情况：

- 条件加载：符合某些条件，或触发了某些事件，才将自定义属性中的地址存储到 src 属性中，开始异步加载。
- 可视区加载：仅加载用户可以看到的区域。当 js 监听到该图片元素进入到可视窗口时，将自定义属性中的地址存储到 src 属性中，开始异步加载。

### 图片懒加载的优点

- 防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题。
- 减少请求数或延迟请求数，是页面加载速度快，用户体验好。

### 实现的方法：

1. 元素的位置

- offsetTop：直接通过 img.offsetTop 就可以获取；
- scrollTop：通过 document.documentElement.scrollTop 获取；
- clientHeight：通过 document.documentElement.clientHeight 获取；

2. getBoundClientRect()
3. intersectionObeserver
4. loading=lazy 属性

### 最佳实践

1. 加载默认或者 loading 图片
2. 判断哪些图片要加载
3. 隐形加载图片
4. 替换真图片

其中需要监听滚动事件，可以做节流优化
已经加载的图片不需要再进行判断
刷新是否需要回到顶部，则根据实际情况考虑

## 懒加载视频

播放视频会用到 video，懒加载视频取决于特定的场景

### 视频不需要自动播放

```html
<video controls preload="none" poster="one-does-not-simply-placeholder.jpg">
  <source src="one-does-not-simply.webm" type="video/webm" />
  <source src="one-does-not-simply.mp4" type="video/mp4" />
</video>
```

我们需要添加一个 poster 属性给 video 标签，相当于一个占位符。preload 属性则规定是否在页面加载后载入视频，鉴于浏览器之间的 preload 默认值差异，显式定义会更改具有兼容性。在这种情况下，当用户点击播放视频时，视频才会被加载，预加载视频就简单的实现了。

### 用视频模拟 Gif

GIF 在很多地方都不及视频，特别是文件大小方面。在相同质量下，视频的尺寸一般会比 GIF 文件小得多。当然，利用视频取代 GIF 并不是直接用 video 取代 img 标签那么简单。因为 GIF 图片有三种要注意的行为：

1. 加载完成后自动播放
2. 不停地循环播放
3. 没有音轨

```html
<video autoplay muted loop playsinline>
  <source src="one-does-not-simply.webm" type="video/webm" />
  <source src="one-does-not-simply.mp4" type="video/mp4" />
</video>
```

autoplay、muted 和 loop 的作用就是为了实现上述三个功能，playsinline 是为了兼容 IOS 的 autoplay。现在我们有一个跨平台的视频模板用于取代 GIF 图片了。Chrome 会帮我们自动完成这项工作，但不能保证所有浏览器都能做到这个。

```html
<video
  autoplay
  muted
  loop
  playsinline
  width="610"
  height="254"
  poster="one-does-not-simply.jpg"
>
  <source data-src="one-does-not-simply.webm" type="video/webm" />
  <source data-src="one-does-not-simply.mp4" type="video/mp4" />
</video>
```

poster 属性是一个占位符，在被懒加载之前，poster 里面指定的内容会在 video 中显示，我们指定真正的 url 在每个 source 的 data-src 中。

```js
document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(
      entries,
      observer
    ) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (
              typeof videoSource.tagName === "string" &&
              videoSource.tagName === "SOURCE"
            ) {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});
```

当懒加载一个视频时，首先要迭代 video 里面的每一个 source，然后将 data-src 中的 url 分配给 src 属性。然后调用元素的 load 方法，视频就可以自动播放了。

这是一个模拟 GIF 动画的视频解决方案，不会消耗带宽加载不必要的媒体资源，而且还能实现懒加载。

## 细节

### 布局偏移和占位符

如果没有使用占位符，懒加载会导致页面布局的偏移。除了用户体验不好之外，会导致没必要的浏览器 reflow，性能大幅下载，所以需要用一张固定的图片填充 img 标签或者使用像[LQIP](https://link.jianshu.com/?t=http%3A%2F%2Fwww.guypo.com%2Fintroducing-lqip-low-quality-image-placeholders%2F)和[SQIP](https://link.jianshu.com/?t=https%3A%2F%2Fgithub.com%2Ftechnopagan%2Fsqip)这样的技术在加载之前提示媒体资源的内容。

对于 img，src 属性初始化应该只想一张展位图片，最终会被替换成目标图片。

对于 video，可以使用 poster 属性制定占位符。

除此之外对于 img 和 video 来说，显式声明 width 和 height 属性都是十分必要的，这可以保证从占位符切换到目标资源的过程都不会导致浏览器 reflow。

### 延迟图片解码

用 JS 加载一些比较大的图片会阻塞线程，导致网页短暂地失去交互能力。可以用 decode 方法异步解码图片，可以避免阻塞线程。

```js
var newImage = new Image();
newImage.src = "my-awesome-image.jpg";

if ("decode" in newImage) {
  // Fancy decoding logic
  newImage.decode().then(function() {
    imageContainer.appendChild(newImage);
  });
} else {
  // Regular image load
  imageContainer.appendChild(newImage);
```

[具体可以看这里](https://link.jianshu.com/?t=https%3A%2F%2Fcodepen.io%2Fmalchata%2Fpen%2FWzeZGW)，如果图片不是太大，可以选择直接同步加载。

### 加载失败

有时候媒体资源回家再失败，一个网页设置了 HTML 短时间的缓存（5 分钟），然后用户打开了 tab 几个小时之后再浏览这个网页，在这个过程的某个时间，缓存会重新部署，基于 hasg 的版本号会改变或者丢失，如果这时候懒加载图片，会导致失败。

这种情况虽然优点极端，但是一般会有策略来应对图片加载失败着中国情况。例如可以使用一个按钮替代图片填充，用户可以点击这个按钮重新加载图片，或者提示用户发生了错误。

## 懒加载库

如果你不关心懒加载背后是如何实现的，你只是想找一个库去实现这个功能，可供选择的有：

- lazysizes 是一个功能十分强大的懒加载库，主要用于加载图片和 iframes。你只需要指定 data-src/data-srcset 属性，lazysizes 会帮你自动懒加载内容。值得注意的是，lazysizes 基于 intersection observer，因此你需要一个 polyfill。你还可以通过一些插件扩展库的功能以用于懒加载视频。
- lozad.js 是一个轻量级、高性能的懒加载库，基于 intersection observer，你同样需要提供一个相关的 polyfill。
- blazy 是一个轻量级的懒加载库，大小仅为 1.4KB。相对于 lazysizes，它不需要任何的外部依赖，并且兼容 IE7+。你可能猜测到了，blazy 不支持 intersection observer，性能相对较差。
- yall.js 是作者本人写的一个懒加载库，基于 IntersectionObserver 和事件，兼容 IE11 和大部分的浏览器。
- 如果你想寻找一个基于 React 的懒加载工具，react-lazyload 可能是你的选择。

上述每个懒加载库的文档都写得很好，同时提供了大量的标记模式。如果你不想深究懒加载的技术细节，就选择任意一个去使用，这能节省你很多的时间和功夫。
