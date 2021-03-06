# 面试一

## 其它

#### vue 中 v-show 和 v-if 区别

```
v-if 创建、删除（没有元素）
v-show 显示、隐藏（有元素）

v-show和v-if是做什么用的，两者区别是什么
v-if是“真正的”条件渲染，因为它会被确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建

v-if也是惰性地：如果在初始渲染时条件为假，则什么也不做，一直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show就简单得多---不管初始条件是什么，元素总是会被渲染，并且只是简单地基于CSS进行切换。

一般来说，v-if有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用v-show较好；如果在运行时条件不太可能改变，则使用v-if较好

总结：v-if按照条件是否渲染，v-show是display的block或none
```

#### css 只在当前组件起作用

```
在style标签中写入scoped即可
```

#### 在 vue 中使用插件的步骤[awesome-vue](https://github.com/vuejs/awesome-vue)

```
vuex、router、图片轮播swiper插件等

1.下载
npm install xx
2.引入
import xx from 'xx'
Vue.use(xx);
3.配置
<xx v-model='0' selecteid='0'></xx>

vue秒杀插件、滑动头部
```

### [vue 的 computed 和 watch 的细节全面分析](https://segmentfault.com/a/1190000012948175?utm_source=tag-newest)

[差别](https://www.cnblogs.com/jiajialove/p/11327945.html)

#### 1.computed

##### 1.1 定义

是一个计算属性，类似于过滤器，对绑定到 view 的数据进行处理。

##### 1.2get 用法

```javascript
data:{
	firstName:'Foo',
	lastName:'Bar'
},
computed:{
	fullName:function(){
		return this.firstName+' '+this.lastName
	}
}
```

> fullName 不可在 data 里面定义，如果定义会报错误，因为对应的 computed 作为计算属性定义 fullName 并返回对应的结果给这个变量，变量不可被重复定义和赋值

##### 1.3get 和 set 用法

```javascript
data:{
	firstName:'Foo',
	lastName:'Bar'
},
computed:{
	fullName:{
        //回调函数，当需要读取当前属性值时执行，根据相关数据计算并返回当前属性的值
		get(){
			return this.firstName+' '+this.lastName
		},
        //监听当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
		set(val){
            //val就是fullName的最新属性值
			console.log(val)
            const names=val.split(' ')
            console.log(names)
            this.firstName = names[0]
            this.lastName = name[1]
		}
	}
}
```

#### 2.watch

##### 2.1 定义

watch 是一个观察的动作。

##### 2.2 示例

```javascript
data:{
	firstName:'Foo',
	lastName:'Bar',
	fullName:'Foo Bar'
},
watch:{
	firstName:function(val){
		this.fullName = val+ ' '+this.lastName
	},
	lastName:function(val){
		this.fullName = this.firstName+ ' '+val
	}
}

//上面是监听firstName和lastName的变化，但是仅限简单数据类型
```

##### 2.3 监听复杂数据类型

```javascript
// 1.监听复杂数据类型需用深度监听
data(){
	return {
        'first':{
            second:0
        }
    }
},
watch:{
    secondChange:{
        handle(oldVal,newVal){
            console.log(oldVal)
            console.log(newVal)
        },
        deep：true
    }
}

// 2.console.log打印的结果，发现oldVal和newVal值是一样的，所以深度监听虽然可以监听到对象的变化，但是无法监听到具体对象里面那个属性的变化

// 3.oldVal和newVal值一样的原因是它们索引同一个对象/数组。Vue不会保留修改之前值得副本。vm.$watch（https://cn.vuejs.org/v2/api/#vm-watch)）

// 4.深度监听对应得函数名必须为handler，否则无效果，因为watcher里面对应得是对handler的调用
```

##### 2.4 监听对象单个属性

```
方法一：可以直接用对象.属性的方法拿到属性
data(){
	return{
		'first':{
			second:0
		}
	}
},
watch:{
	first.second:function(newVal,oldVal){
		console.log(newVal,oldVal)
	}
}

方法二：watch如果想要监听对象的单个属性的变化，必须用computed作为中间件转化，因为computed可以取到对应的属性值

data(){
	return{
		'first':{
			second:0
		}
	}
},
computed:{
	secondChange(){
		return this.first.second
	}
},
watch:{
	secondChange(){
		console.log('second属性值变化了')
	}
}
```

#### 3.watch 和 computed 差异

##### 3.1computed 特性

1. 是计算值
2. 应用：就是简化 template 里面（{}）计算和处理 props 或\$emit 的传值
3. 具有缓存性，页面重新渲染值不变化，计算属性会立即返回之前的计算结果，而不必再次执行函数

##### 3.2watch 特性

1. 是观察的动作
2. 应用：监听 props，\$emit 或本组件的值执行异步操作
3. 无缓存性，页面重新渲染时值不变化也会执行

```
watch是进行数据监听，然后进行相应的操作、执行方法等computed和methods的合体使用，比较耗性能，与vue性能优化相背而驰，尽量减少使用！computed是数据改变进行相应的数据变化，由老数据迸发新的数据（return返回），会利用缓存机制对数据进行缓存，只有当依赖数据变化的时候才会进行相应的变化
```

### 概念

#### 数据劫持

在访问或者修改对象的某个属性时，通过一段代码拦截这个行为，进行额外的操作或者修改返回结果.数据劫持最典型的应用------双向的数据绑定(一个常用的面试题),

> Object.defineProperty() 和 ES2015 中新增的 Proxy 对象,会经常用来做数据劫持.

Object.defineProperty() 的问题主要有三个：

- 不能监听数组的变化
- 必须遍历对象的每个属性
- 必须深层遍历嵌套的对象

**不能监听数组的变化**

**数组的这些方法是无法触发 set 的:push, pop, shift, unshift,splice, sort, reverse.**
Vue 把会修改原来数组的方法定义为变异方法 (mutation method)
非变异方法 (non-mutating method):例如 filter, concat, slice 等，它们都不会修改原始数组，而会返回一个新的数组。
Vue 的做法是把这些方法重写来实现数组的劫持

#### keep-alive

```
Keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染
在vue2.1.0版本之后，keep-alive新加入了两个属性：include（包含的组件缓存）与exclude（排除的组件不缓存，优先级大于include）

参数解释：
include-字符串或正则表达式，只有名称匹配的组件会被缓存
exclude-字符串或正则表达式，任何名称匹配的组件都不会被缓存
include和exclude的属性允许组件有条件地缓存。二者都可以用“，”分割字符串、正则表达式、数组。
当使用正则或者是数组时，要记得使用v-bind
```

#### 插槽

插槽就是 Vue 实现的一套内容分发的 API，将<slot></slot>元素作为承载分发内容的出口

插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的<slot></slot>标签。

> 总结：如果子组件没有使用插槽，父组件如果需要往子组件中填充模板或者 html, 是没法做到的

##### 具名插槽

具名插槽其实就是给插槽娶个名字。一个子组件可以放多个插槽，而且可以放在不同的地方，而父组件填充内容时，可以根据这个名字把内容填充到对应插槽中。

父组件填充内容, 父组件通过 v-slot:[name] 的方式指定到对应的插槽中

> 父组件填充内容时，是可以根据这个名字把内容填充到对应插槽中的

##### 默认插槽

默认插槽就是指没有名字的插槽，子组件未定义的名字的插槽，父级将会把 未指定插槽的填充的内容填充到默认插槽中。

> 注意：
>
> 1. 父级的填充内容如果指定到子组件的没有对应名字插槽，那么该内容**不会**被填充到默认插槽中。
>
> 2. 如果子组件没有默认插槽，而父级的填充内容指定到默认插槽中，那么该内容就“**不会**”填充到子组件的任何一个插槽中。
>
> 3. 如果子组件有多个默认插槽，而父组件所有指定到默认插槽的填充内容，将“**会**” “**全都**”填充到子组件的每个默认插槽中。

##### 作用域插槽

作用域插槽其实就是带数据的插槽，即带参数的插槽，简单的来说就是子组件提供给父组件的参数，该参数仅限于插槽中使用，父组件可根据子组件传过来的插槽数据来进行不同的方式展现和填充插槽内容。

1. 子组件存放一个带数据的插槽: mylist 和 title 是子组件传给父组件的参数
2. 父组件通过 “slot-scope” 来接收子组件传过来的插槽数据，再根据插槽数据来填充插槽的内容

##### [vue 组件间的通讯方式](https://segmentfault.com/a/1190000019208626)

1. **`props`和`$emit`**

父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过\$emit 触发事件来做到的.

> 1).父组件传递了 message 数据给子组件，并且通过 v-on 绑定了一个 getChildData 事件来监听子组件的触发事件；
>
> 2).子组件通过 props 得到相关的 message 数据,最后通过 this.\$emit 触发了 getChildData 事件

2. **`$attrs`和`$listeners`**

第一种方式处理父子组件之间的数据传输有一个问题：如果父组件 A 下面有子组件 B，组件 B 下面有组件 C,这时如果组件 A 想传递数据给组件 C 怎么办呢？ 如果采用第一种方法，我们必须让组件 A 通过 prop 传递消息给组件 B，组件 B 在通过 prop 传递消息给组件 C；要是组件 A 和组件 C 之间有更多的组件，那采用这种方式就很复杂了。Vue 2.4 开始提供了$attrs和$listeners 来解决这个问题，能够让组件 A 之间传递消息给组件 C。

3. **中央事件总线**

上面两种方式处理的都是父子组件之间的数据传递，而如果两个组件不是父子关系呢？这种情况下可以使用中央事件总线的方式。新建一个 Vue 事件 bus 对象，然后通过`bus.$emit`触发事件，`bus.$on`监听触发的事件

4. **provide 和 inject**

在 Vue.js 的 `2.2.0+` 版本中添加加了 provide 和 inject 选项。他们成对出现，用于父级组件向下传递数据。

父组件中通过 provider 来提供变量，然后在子组件中通过 inject 来注入变量。不论子组件有多深，只要调用了 inject 那么就可以注入 provider 中的数据。而不是局限于只能从当前父组件的 prop 属性来获取数据，只要在父组件的生命周期内，子组件都可以调用。

5. **v-model**

父组件通过 v-model 传递值给子组件时，会自动传递一个 value 的 prop 属性，在子组件中通过 this.\$emit(‘input',val)自动修改 v-model 绑定的值

6. **`$parent`和`$children`**

在组件内部可以直接通过子组件`$parent`对父组件进行操作，父组件通过`$children`对子组件进行操作.

7. **vuex 处理组件之间的数据交互**

如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候才有上面这一些方法可能不利于项目的维护，vuex 的做法就是将这一些公共的数据抽离出来，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的。

### 渲染机制

- 什么是 DOCTYPE 及作用
- 浏览器渲染过程
- 重排 Reflow
- 重绘 Repaint
- 布局 Layout

### js 运行机制

- 如何理解 JS 的单线程
- 什么是任务队列
- 什么是 Event Loop
- 理解哪些语句会放入异步任务队列
- 理解语句放入异步任务队列的时机
- 异步任务
  - setTimeout 和 setInterval
  - DOM 事件
  - ES6 中的 Promise

### 页面性能

- 提升页面性能的方法有哪些?
  1. 资源压缩合并，减少 HTTP 请求
  2. 非核心代码异步加载=》异步加载的方式=》异步加载的区别
  3. 利用浏览器缓存=》缓存的分类=》缓存的原理
  4. 使用 CDN
  5. 预解析 DNS

### 错误监控

- 前端错误的分类

  - 即时运行错误：代码错误
  - 资源加载错误

- 错误的捕获方式

  - 及时运行错误的捕获方式
    1. try..catch
    2. window.onerror
  - 资源加载错误
    1. object.onerror
    2. performance.getEntries()
    3. Error 事件捕获

  > 延伸：跨域的 JS 运行错误可以捕获吗,错误提示什么，应该怎么处理？

- 上级错误的基本原理

  - 采用 ajax 通信的方式上报
  - 利用 image 对象上报

### vue 面试题

1. 对于 MVVM 的理解？
2. Vue 的生命周期？
3. Vue 实现数据双向绑定的原理？
4. Vue 组件间的参数传递
5. Vue 的路由实现？
6. Vue 与 Angular 以及 React 的区别？
7. Vue 路由的钩子函数？
8. Vuex 是什么？怎么使用？哪种功能场景使用它？
9. Vue-cli 如何新增自定义指令？
10. Vue 如何自定义一个过滤器？
11. 对 Keep-alive 的了解？
12. 一句话就能回答的面试题
    - css 只在当前组件起作用
    - v-if 和 v-show 的区别
    - $route和$router 的区别
    - vue.js 的两个核心是什么？
    - vue 几种常用的指令
    - vue 常用的修饰符
    - v-on 可以绑定多个方法吗？
    - vue 中 key 值的作用
    - 什么是 vue 的计算属性
    - vue 等单页面应用及其缺点
    - 怎么定义 vue-router 的动态路由?怎么获取传过来的值？

[Vue 面试中，经常会被问到的面试题/Vue 知识点整理](https://segmentfault.com/a/1190000016344599)

[前端面试题大集合：来自真实大厂的 532 道面试题（只有题，没有答案）](https://segmentfault.com/a/1190000016481101)

[98 道经典 Vue 面试题总结](https://segmentfault.com/a/1190000016351284)

[vue 常见面试题](https://zhuanlan.zhihu.com/p/92407628)

[vue 面试题整理](https://www.cnblogs.com/blogcxz/p/11102271.html)

[vue 面试题，知识点汇总(有答案)](https://www.cnblogs.com/yalong/p/9881926.html)

[2020 前端最新面试题（vue 篇）](https://blog.csdn.net/weixin_45325238/article/details/104968195)

[2020 年 web 前端程序员 Vue.js 面试题（建议收藏）](https://zhuanlan.zhihu.com/p/100350717)

[2020 前端面试问题及答案整理](https://www.jianshu.com/p/c26c9c1c73f0)

[2019 前端面试题汇总（主要为 Vue）](https://zhuanlan.zhihu.com/p/57338228)

[[很全面的 vue 面试题总结](https://segmentfault.com/a/1190000018630871)]

[20 道必看的 Vue 面试题｜原力计划](https://baijiahao.baidu.com/s?id=1661170896733464277&wfr=spider&for=pc)

Vue 使用-考点串讲

- 基本使用，组件使用——常用，必须会
- 高级特性——不常用，但体现深度

回顾之前的 Vue 面试题

- v-show 和 v-if 的区别
- 为何 v-for 中要用 key
- 描述 Vue 组件生命周期（有父子组件的情况）
- vue 组件如何通讯
- 描述组件渲染和更新的过程
- 双向数据绑定 v-model 的实现原理

面试会考察哪些 vue 高级特性

vue 如何自己实现 v-model

vue 组件更新之后如何获取最新 DOM

slot 是什么？

vue 动态组件是什么？

vue 如何异步加载组件？

vue 如何缓存组件？

### 项目设计

组件和状态设计

框架（Vue React）的使用（和高级特性）是必要条件

能独立负责项目？还是需要别人带着？--考察设计能力

面试必考（二面/三面），场景题

### 项目流程

- 项目分多人、多角色参与
- 项目分多阶段
- 项目需要计划和执行

#### 为何考察项目流程？

- 确定你真正参与过实际项目（而不是个人项目、毕业设计等）
- 确定你能真正解决项目的问题
- 看你能否独立承担起一个项目（作为项目负责人）

##### 和前端开发相关的项目角色有哪些?

- 项目的所有角色
- 项目的全流程
- 各个阶段中常见的问题

相关性不大的少讲

项目角色

- PM 产品经理：提需求的，前端开发页面是怎么样的，流程是什么样的，点击流程是什么样的，对接比较多的一个人，因为他提的需求可能会很不合理或者乱加一些需求，沟通最多的一个人
- UE 视觉设计师：原型图的形式或者文章，比较丑，表示出功能就 OK，文字描述就可以了，根据原型图会画出一个特别漂亮规范的视觉设计图，交给前端开发
- FE 前端开发
- RD 后端开发=》通过 AJAX 请求的一些接口
- CRD 移动端开发=》页面开发要放在客户端的一个 webview 里面，通过客户端承载我们的页面，客户端可以提供给我们什么能力，我们前端可以调用这个能力，在微信里面分享文章，文章是个 H5 页，公众号的文章是 H5，图片可以放大可以缩小，可以滑动
- QA 测试人员=》所以功能的提测都是提交给测试人员，测试通过才可以上线

##### 一个完整的项目要分哪些阶段？(按照 FE 的视角)

> 需求分析（各个角色）=》（UE 同步进行界面设计）技术方案设计（FE、RD、CRD）=》开发（FE）=》联调（FE-RD-CRD）=》测试（FE、QA）=》上线（FE）

1. 需求讲一遍，UE 这个需求该怎么画图，前端页面该怎么做，后端需要提供什么接口，客户端需要提供什么能力或者更改页面，QA 测试哪些重点哪些功能，需求分析可能存在问题，存在问题就更改，不存在就定稿
2. 输入输出，需要什么接口
3. 开发
4. 联调，调用接口，需要调用客户端能力，先在本地环境下调一调，UE 看一下 i，是否符合要求，颜色间距。。。，PM 过来看一下功能有没有问题，是否符合预期。。
5. QA 为主，QA 提 BUG，我们解决问题，有问题改问题，没问题就上线
6. 上线有问题就回滚，抓紧时间找 QA，测试一下线上回顾测试是否影响线上功能，PM 做个验收项目总结

##### 评审项目需求时需要注意哪些事项？

stage1-需求分析

开发人员和需求人员=》花里胡哨会带来成本，有些情况下加成本也不方便做，PM 倾向于理想化，开发就是现实情况的落地，考虑工期、成本、线上性能，存在矛盾，但不是贬义词

- **了解背景**：为啥要做，给我讲明白，不是说人家有我们就要，必须告诉我们不做就落后
- **质疑需求是否合理**：是否符合我们的产品，我虽然是开发人员，但我也是一个用户，VIP 用户，需求不合理，要求下线，浪费时间，不会有任何的价值，让 PM 说服我要做这一点
- **需求是否闭环**：新闻 APP 有个评论，加点赞就闭环了吗？有数据之后我们需要用这个数据，给用户反馈给我们信息，点完赞之后根据数据排名或者什么就是闭环，分享回流，分享不是目的，打开回到 APP 中，微信中点开不是目的，吸引用户回归，有来有去，有来有往
- **开发难度如何**：这个要用 H5 来做，加一个很复杂的动画，性能不高而且很麻烦，我们只做一个比较简单原生动画，放到 APP 上去做，对需求影响不那么大，需求做一个妥协可以降低很大的成本
- **是否需要其它支持**：是否需要客户端需求，这个我做不了，需要 CRD 支持
- **不要急于给排期**=》要不今天下班给你，或者本周末给你，看看是不是有其他活，或者于老员工讨论是否合理，看整个部门安排的情况，需要协调

##### 如何做好技术方案设计？

stage2-技术方案设计

- **求简，不过渡设计**=》换个框架也是为了节省人力，提高开发效率，减少出错。eg:前端路由，可以用 hash 也可以 h5=>history,如果没有特殊的 h5 需求，服务端改动比较大
- 产出文档=》文字描述，图，代码描述，切勿眼高手低，方便发现问题，长时间之后，而且便于查找复习
- **找准设计重点**：组件设计，拆分，数据结构设计，和其他角色对接，写接口文档，是什么请求，输入输出是什么
- **组内评审**：必须有文档，我写的文档没问题，除非你资历能力很强，设计文档没问题的话，那就拉一些组长，高级工程师，架构师帮你评审，看出这个设计是否合理，是否具有扩展性，安全隐患，是否具有性能问题，能看出你看不到的问题，他们对公司的产品比较熟悉，公司有工具，，节省成本，可以统一公司技术能力
- 和 RD CRD 沟通=》三方达出一致
- **发出会议结论**，1.沟通已完成，达成一致了，技术方案设计也已经完成，表明一个时间点的结束。2.留一个证据，三方都是同意的，不背锅

##### 如何保证代码质量?

stage3-开发

- **如何反馈排期**，预留空间 buffer=》1/4 的时间，考虑并行时间，协同人依赖的情况，依赖视觉设计师的视觉稿（图），考虑它的排期，也可能依赖 RD,CRD 的排期，综合考虑她们，如果没确定可以给个工作量，几天完成，啥时候开始不确定
- 符合开发规范=》git 规范，分支规范，模块命名规范，commit 规范，注释规范=》如果没有可以试着定一个，很好的表现机会
- **写出开发文档**=》公共的 API 或者 UI 组件，写清楚如何调用，注意事项，文档注释代码都是一起的，不要分开
- 及时单元测试=》不要相信自己的代码,考量开发质量的重要工具
- **Mock API**=>使用工具来做
- **Code Review**=>技术比你好或者资历比你老，让它帮你 review 一下，审查一下，有啥风险或者有什么不规范的地方

> 我们要符合开发规范，写出开发文档，及时单元测试，Code Review

##### PM 想在项目开发过程中增加需求，该怎么办？

Stage4-联调

- 和 RD CRD 技术联调
- 让 UE 确定视觉效果
- 让 PM 确定产品功能

尽早介入视觉功能，今早暴露问题

**PM 加需求怎么办?**

- 不能拒绝，走需求变更流程即可
- 如果公司有规定，则按规定走
- 否则，发起项目组和 leader 的评审，重新评估排期

##### 项目即将延期了，该怎么办?

> 每个人的项目都会延期，工期压得比较紧

##### 不要对 QA 说：我电脑没问题呀！

- 不要说这句话！
- 当面讨论，让 QA 帮你复现
- 如果需要特定设备才能复现，让 QA 提供设备

Stage5-测试

- 提测发邮件，抄送项目组
- 测试问题要详细记录
- 有问题及时沟通，QA 和 FE 天生信息不对称

最好有一个在线测试管理平台，在线提交问题，查找问题，修改问题

Stafe6-上线

- 上线之后及时通知 QA 回归测试
- 上线之后及时同步给 PM 和项目组
- 如有问题，及时回滚。先止损，再排查问题
