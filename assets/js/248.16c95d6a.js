(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{627:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),s("p",[t._v("懒加载就是延时加载一些非关键资源的技术，需要用到的时候再去加载,也就是按需加载。")]),t._v(" "),s("h2",{attrs:{id:"常见场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见场景"}},[t._v("#")]),t._v(" 常见场景")]),t._v(" "),s("ul",[s("li",[t._v("懒加载图片")]),t._v(" "),s("li",[t._v("懒加载视频\n"),s("a",{attrs:{href:"https://www.jianshu.com/p/e86c61468285",target:"_blank",rel:"noopener noreferrer"}},[t._v("具体可以看"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"图片懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载"}},[t._v("#")]),t._v(" 图片懒加载")]),t._v(" "),s("ol",[s("li",[t._v("我们要知道页面中的 img 元素，如果没有 src 属性，浏览器就不会发出请求去下载图片，只有通过 javascript 设置了图片路径，浏览器才会发送请求。")]),t._v(" "),s("li",[t._v("加载图片的过程时异步的")])]),t._v(" "),s("p",[t._v("图片懒加载就是当图片出现到页面的可视化区域，或者到达某一个触发条件时，会动态的将伪属性替换成 src 属性或者利用 css 图像，完成图片加载。")]),t._v(" "),s("h3",{attrs:{id:"两种加载情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种加载情况"}},[t._v("#")]),t._v(" 两种加载情况：")]),t._v(" "),s("ul",[s("li",[t._v("条件加载：符合某些条件，或触发了某些事件，才将自定义属性中的地址存储到 src 属性中，开始异步加载。")]),t._v(" "),s("li",[t._v("可视区加载：仅加载用户可以看到的区域。当 js 监听到该图片元素进入到可视窗口时，将自定义属性中的地址存储到 src 属性中，开始异步加载。")])]),t._v(" "),s("h3",{attrs:{id:"图片懒加载的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载的优点"}},[t._v("#")]),t._v(" 图片懒加载的优点")]),t._v(" "),s("ul",[s("li",[t._v("防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题。")]),t._v(" "),s("li",[t._v("减少请求数或延迟请求数，是页面加载速度快，用户体验好。")])]),t._v(" "),s("h3",{attrs:{id:"实现的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现的方法"}},[t._v("#")]),t._v(" 实现的方法：")]),t._v(" "),s("ol",[s("li",[t._v("元素的位置")])]),t._v(" "),s("ul",[s("li",[t._v("offsetTop：直接通过 img.offsetTop 就可以获取；")]),t._v(" "),s("li",[t._v("scrollTop：通过 document.documentElement.scrollTop 获取；")]),t._v(" "),s("li",[t._v("clientHeight：通过 document.documentElement.clientHeight 获取；")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("getBoundClientRect()")]),t._v(" "),s("li",[t._v("intersectionObeserver")]),t._v(" "),s("li",[t._v("loading=lazy 属性")])]),t._v(" "),s("h3",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),s("ol",[s("li",[t._v("加载默认或者 loading 图片")]),t._v(" "),s("li",[t._v("判断哪些图片要加载")]),t._v(" "),s("li",[t._v("隐形加载图片")]),t._v(" "),s("li",[t._v("替换真图片")])]),t._v(" "),s("p",[t._v("其中需要监听滚动事件，可以做节流优化\n已经加载的图片不需要再进行判断\n刷新是否需要回到顶部，则根据实际情况考虑")]),t._v(" "),s("h2",{attrs:{id:"懒加载视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载视频"}},[t._v("#")]),t._v(" 懒加载视频")]),t._v(" "),s("p",[t._v("播放视频会用到 video，懒加载视频取决于特定的场景")]),t._v(" "),s("h3",{attrs:{id:"视频不需要自动播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频不需要自动播放"}},[t._v("#")]),t._v(" 视频不需要自动播放")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("video")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("controls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("preload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("poster")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply-placeholder.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply.webm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/webm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply.mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("我们需要添加一个 poster 属性给 video 标签，相当于一个占位符。preload 属性则规定是否在页面加载后载入视频，鉴于浏览器之间的 preload 默认值差异，显式定义会更改具有兼容性。在这种情况下，当用户点击播放视频时，视频才会被加载，预加载视频就简单的实现了。")]),t._v(" "),s("h3",{attrs:{id:"用视频模拟-gif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用视频模拟-gif"}},[t._v("#")]),t._v(" 用视频模拟 Gif")]),t._v(" "),s("p",[t._v("GIF 在很多地方都不及视频，特别是文件大小方面。在相同质量下，视频的尺寸一般会比 GIF 文件小得多。当然，利用视频取代 GIF 并不是直接用 video 取代 img 标签那么简单。因为 GIF 图片有三种要注意的行为：")]),t._v(" "),s("ol",[s("li",[t._v("加载完成后自动播放")]),t._v(" "),s("li",[t._v("不停地循环播放")]),t._v(" "),s("li",[t._v("没有音轨")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("video")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autoplay")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("muted")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("playsinline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply.webm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/webm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply.mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("autoplay、muted 和 loop 的作用就是为了实现上述三个功能，playsinline 是为了兼容 IOS 的 autoplay。现在我们有一个跨平台的视频模板用于取代 GIF 图片了。Chrome 会帮我们自动完成这项工作，但不能保证所有浏览器都能做到这个。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("video")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autoplay")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("muted")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loop")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("playsinline")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("610"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("254"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("poster")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply.webm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/webm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-does-not-simply.mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/mp4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("poster 属性是一个占位符，在被懒加载之前，poster 里面指定的内容会在 video 中显示，我们指定真正的 url 在每个 source 的 data-src 中。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOMContentLoaded"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lazyVideos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"video.lazy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IntersectionObserver"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lazyVideoObserver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      observer")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("video")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isIntersecting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" videoSource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" videoSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n              videoSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SOURCE"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              videoSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" videoSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n          video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lazy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          lazyVideoObserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unobserve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    lazyVideos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("lazyVideo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lazyVideoObserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lazyVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当懒加载一个视频时，首先要迭代 video 里面的每一个 source，然后将 data-src 中的 url 分配给 src 属性。然后调用元素的 load 方法，视频就可以自动播放了。")]),t._v(" "),s("p",[t._v("这是一个模拟 GIF 动画的视频解决方案，不会消耗带宽加载不必要的媒体资源，而且还能实现懒加载。")]),t._v(" "),s("h2",{attrs:{id:"细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#细节"}},[t._v("#")]),t._v(" 细节")]),t._v(" "),s("h3",{attrs:{id:"布局偏移和占位符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局偏移和占位符"}},[t._v("#")]),t._v(" 布局偏移和占位符")]),t._v(" "),s("p",[t._v("如果没有使用占位符，懒加载会导致页面布局的偏移。除了用户体验不好之外，会导致没必要的浏览器 reflow，性能大幅下载，所以需要用一张固定的图片填充 img 标签或者使用像"),s("a",{attrs:{href:"https://link.jianshu.com/?t=http%3A%2F%2Fwww.guypo.com%2Fintroducing-lqip-low-quality-image-placeholders%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("LQIP"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://link.jianshu.com/?t=https%3A%2F%2Fgithub.com%2Ftechnopagan%2Fsqip",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQIP"),s("OutboundLink")],1),t._v("这样的技术在加载之前提示媒体资源的内容。")]),t._v(" "),s("p",[t._v("对于 img，src 属性初始化应该只想一张展位图片，最终会被替换成目标图片。")]),t._v(" "),s("p",[t._v("对于 video，可以使用 poster 属性制定占位符。")]),t._v(" "),s("p",[t._v("除此之外对于 img 和 video 来说，显式声明 width 和 height 属性都是十分必要的，这可以保证从占位符切换到目标资源的过程都不会导致浏览器 reflow。")]),t._v(" "),s("h3",{attrs:{id:"延迟图片解码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#延迟图片解码"}},[t._v("#")]),t._v(" 延迟图片解码")]),t._v(" "),s("p",[t._v("用 JS 加载一些比较大的图片会阻塞线程，导致网页短暂地失去交互能力。可以用 decode 方法异步解码图片，可以避免阻塞线程。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newImage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnewImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-awesome-image.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"decode"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" newImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fancy decoding logic")]),t._v("\n  newImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    imageContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Regular image load")]),t._v("\n  imageContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://link.jianshu.com/?t=https%3A%2F%2Fcodepen.io%2Fmalchata%2Fpen%2FWzeZGW",target:"_blank",rel:"noopener noreferrer"}},[t._v("具体可以看这里"),s("OutboundLink")],1),t._v("，如果图片不是太大，可以选择直接同步加载。")]),t._v(" "),s("h3",{attrs:{id:"加载失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载失败"}},[t._v("#")]),t._v(" 加载失败")]),t._v(" "),s("p",[t._v("有时候媒体资源回家再失败，一个网页设置了 HTML 短时间的缓存（5 分钟），然后用户打开了 tab 几个小时之后再浏览这个网页，在这个过程的某个时间，缓存会重新部署，基于 hasg 的版本号会改变或者丢失，如果这时候懒加载图片，会导致失败。")]),t._v(" "),s("p",[t._v("这种情况虽然优点极端，但是一般会有策略来应对图片加载失败着中国情况。例如可以使用一个按钮替代图片填充，用户可以点击这个按钮重新加载图片，或者提示用户发生了错误。")]),t._v(" "),s("h2",{attrs:{id:"懒加载库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载库"}},[t._v("#")]),t._v(" 懒加载库")]),t._v(" "),s("p",[t._v("如果你不关心懒加载背后是如何实现的，你只是想找一个库去实现这个功能，可供选择的有：")]),t._v(" "),s("ul",[s("li",[t._v("lazysizes 是一个功能十分强大的懒加载库，主要用于加载图片和 iframes。你只需要指定 data-src/data-srcset 属性，lazysizes 会帮你自动懒加载内容。值得注意的是，lazysizes 基于 intersection observer，因此你需要一个 polyfill。你还可以通过一些插件扩展库的功能以用于懒加载视频。")]),t._v(" "),s("li",[t._v("lozad.js 是一个轻量级、高性能的懒加载库，基于 intersection observer，你同样需要提供一个相关的 polyfill。")]),t._v(" "),s("li",[t._v("blazy 是一个轻量级的懒加载库，大小仅为 1.4KB。相对于 lazysizes，它不需要任何的外部依赖，并且兼容 IE7+。你可能猜测到了，blazy 不支持 intersection observer，性能相对较差。")]),t._v(" "),s("li",[t._v("yall.js 是作者本人写的一个懒加载库，基于 IntersectionObserver 和事件，兼容 IE11 和大部分的浏览器。")]),t._v(" "),s("li",[t._v("如果你想寻找一个基于 React 的懒加载工具，react-lazyload 可能是你的选择。")])]),t._v(" "),s("p",[t._v("上述每个懒加载库的文档都写得很好，同时提供了大量的标记模式。如果你不想深究懒加载的技术细节，就选择任意一个去使用，这能节省你很多的时间和功夫。")])])}),[],!1,null,null,null);a.default=e.exports}}]);