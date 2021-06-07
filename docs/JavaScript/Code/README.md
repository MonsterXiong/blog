# 手撕代码

- call/apply/bind
- new
- instanceof
- eventBus
- pubsub
- 浅拷贝/深拷贝
- promise
- 数组 API
  - 去重
  - 合并/切片
  - 扁平化
  - 分块
  - 取差异
  - 删除部分元素
  - 得到部分元素
- 字符串 API
  - 反转
  - 回文
  - 截取
- 节流/防抖
- 事件委托
- 数据绑定
- vite
- ajax
- vue

## 谈谈你对 this、call、apply 和 bind 的理解

详情可看我之前的文章：**「前端料包」一文彻底搞懂 JavaScript 中的 this、call、apply 和 bind**[9]

1. 在浏览器里，在全局范围内 this 指向 window 对象；
2. 在函数中，this 永远指向最后调用他的那个对象；
3. 构造函数中，this 指向 new 出来的那个新的对象；
4. call、apply、bind 中的 this 被强绑定在指定的那个对象上；
5. 箭头函数中 this 比较特殊,箭头函数 this 为父作用域的 this，不是调用时的 this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的 this 指向是静态的,声明的时候就确定了下来；
6. apply、call、bind 都是 js 给函数内置的一些 API，调用他们可以为函数指定 this 的执行,同时也可以传参。
