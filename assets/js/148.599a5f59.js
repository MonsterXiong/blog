(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{529:function(e,v,_){"use strict";_.r(v);var a=_(26),t=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"mvvm模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvvm模式"}},[e._v("#")]),e._v(" MVVM模式")]),e._v(" "),_("p",[e._v("MVVM模式是Model-View-ViewModel的简写，即模型-视图-视图模型。模型指的是后端传递的数据，视图指的是HTML页面，视图模型是MVVM模式的核心，它是连接View和Model的桥梁。MVVM有两个方向：一是将模型转化成视图，即将后端传递的数据转化成所看到的页面，实现的方式是数据绑定。二是将视图转化成模型，即将所看到的页面转化成后端的数据，实现的方式是DOM事件监听。如果这两个方向都实现，称之为数据的双向绑定。")]),e._v(" "),_("p",[e._v("在MVVM的框架中，视图和模型是不能直接直接通信的，它们通过ViewModel来通信，ViewModel通常扮演一个监听者的角色，当数据发生变化时，ViewModel能够监听到数据的变化，然后通知对应的是视图做自动更新；而当用户操作视图时，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View和ViewModel可以相互通信。MVVM流程图")]),e._v(" "),_("p",[e._v("Vue就是基于MVVM模式实现的一套框架，在Vue中，Model指的是JavaScript中的数据，例如对象，数组等，View指的是页面视图，ViewModel指的是Vue实例化对象。")]),e._v(" "),_("h3",{attrs:{id:"vue是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue是什么"}},[e._v("#")]),e._v(" Vue是什么")]),e._v(" "),_("p",[e._v("Vue是一个渐进式的JavaScript框架，渐进式的意义如下：")]),e._v(" "),_("ol",[_("li",[e._v("用户可以一步一步、有阶段性地来使用Vue，不必一开始就使用所有东西。")]),e._v(" "),_("li",[e._v("如果已经有一个现成地服务端应用，可以将Vue作为该应用的一部分嵌入其中，带来更加丰富的交互体验。")]),e._v(" "),_("li",[e._v("如果希望将更多业务逻辑放到前端来实现，那么Vue的核心库及其生态系统也可以满足用户的各种需求。和其他前端框架一样，Vue允许用户将一个网页分割成可复用的组件，每个组件都包含属于自己的HTML、CSS、JavaScript以用来渲染网页中相应的地方。")]),e._v(" "),_("li",[e._v("如果用户构建一个大型的应用，可能需要将东西分割成各自的组件和文件，Vue有一个命令行工具，使快速初始化一个真实的工程变得非常简单。")])]),e._v(" "),_("p",[e._v("所以Vue的使用可大可小，它都会有相应的方式来整合到用户的项目中，所以说它是一个渐进式的框架。")]),e._v(" "),_("p",[e._v("Vue本身具有响应式编程和组件化的特点。")]),e._v(" "),_("p",[e._v("响应式：即为保持状态和视图的同步，也被称为数据绑定，声明实例new Vue({data:data})后自动对data里面的数据进行了视图上的绑定，修改data的数据，视图中的数据也会随之更改。")]),e._v(" "),_("p",[e._v("组件化：Vue组件化的概念和React异曲同工——“一切都是组件”。可以将任意封装好的代码注册成标签，例如Vue.component('example',Example),可以在模板中以"),_("example"),e._v("的形式调用。如果组件设计合理，在很大程度上能减少重复开发，而且配合Vue的插件vue-loader，可以将一个组件的CSS、HTML和JavaScript都写在一个文件里，做到模块化的开发。除此之外，Vue也可以与vue-router和vue-resource插件配合起来，以支持路由和异步请求，这样就满足了开发单页面应用的基本条件。")],1),e._v(" "),_("blockquote",[_("p",[e._v("Vue不支持IE 8及以下版本，因为Vue使用了IE 8 无法模拟的ECMAScript 5 特性，但它支持所有兼容ECMAScript 5 的浏览器。")])]),e._v(" "),_("h3",{attrs:{id:"vue有什么不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue有什么不同"}},[e._v("#")]),e._v(" Vue有什么不同")]),e._v(" "),_("p",[e._v("在前端开发中，会遇到动画、交互效果、页面特性等业务，原生的JavaScript或JQuery库通过操作DOM来实现，数据和界面是连接在一起的。")]),e._v(" "),_("p",[e._v("Vue将数据层和视图层完全分离开，不仅对API进行封装，还提供了一系列的解决方案。这是一种思想的转变，数据驱动的机制，主要操作的是数据而不是频繁地操作DOM（导致页面频繁重绘）。")]),e._v(" "),_("ol",[_("li",[e._v("jQuery首先要获取到DOM对象，然后对DOM对象进行值的修改等操作。")]),e._v(" "),_("li",[e._v("Vue首先把值和JavaScript对象进行绑定，然后修改JavaScript对象的值，Vue框架就会自动把DOM的值进行更新")]),e._v(" "),_("li",[e._v("可以简单地理解为Vue帮我们做了DOM操作，以后使用Vue只需要修改对象的值以及做好元素和对象的绑定，Vue框架就会自动帮我们做好DOM的相关操作。")]),e._v(" "),_("li",[e._v("如果DOM元素跟随JavaScript对象值的变化而变化，叫做单向数据绑定；如果JavaScript对象的值也跟随着DOM元素的值变化而变化，叫做双向数据绑定。")])]),e._v(" "),_("h3",{attrs:{id:"传统的前端开发模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传统的前端开发模式"}},[e._v("#")]),e._v(" 传统的前端开发模式")]),e._v(" "),_("p",[e._v("传统开发模式可称为硬代码开发，数据、展现和逻辑都混在一起，彼此相互混杂，整体看起来非常混乱，它有以下缺点：")]),e._v(" "),_("ol",[_("li",[e._v("由于展现、数据和逻辑都混到一起，从而代码的可读性就会很差，很难完成知识的转移和交付。")]),e._v(" "),_("li",[e._v("界面变更修改复杂，无法快速调试，问题出来了，无法快速定位问题所在。")]),e._v(" "),_("li",[e._v("维护复杂，容易在修复中出现新bug。")]),e._v(" "),_("li",[e._v("数据处理功能单一，若出现排序、筛选等工作，需要重新编写代码。")])]),e._v(" "),_("p",[e._v("随着项目的扩大和时间的推移，出现了更复杂的业务场景，例如组件解耦、SPA等。为了提高开发效率，降低维护成本，传统的前端开发模式已不能完全满足我们的需求，这时候就出现了三大框架。")]),e._v(" "),_("h3",{attrs:{id:"vue的开发模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue的开发模式"}},[e._v("#")]),e._v(" Vue的开发模式")]),e._v(" "),_("p",[e._v("Vue是基于MVVM模式实现的一套框架，MVVM模式分离视图（View）和数据（Model），通过自动化脚本实现自动化关键，ViewModel搭起了视图与数据的桥梁，同时在ViewModel里进行交互及逻辑处理。可以简单地理解为Vue就是HTML、DOM，数据Model就是要处理的JSON数据，这种模式有以下优势：")]),e._v(" "),_("ol",[_("li",[e._v("低耦合。将View和Model进行分离，两者中其中一方变更时，另一方不会受到影响。")]),e._v(" "),_("li",[e._v("重用性。无论是View、ViewModel还是Model，三者都可以进行重用，提高了开发效率。")]),e._v(" "),_("li",[e._v("HTML模板化。修改模板不影响逻辑和数据，模板可直接调试。")]),e._v(" "),_("li",[e._v("数据自动处理。Model实现了标准的数据处理封装，例如排序、筛选等。")]),e._v(" "),_("li",[e._v("双向绑定。通过DOM和Model双向绑定使数据更新自动化，缩短了开发时间。")])]),e._v(" "),_("h3",{attrs:{id:"安装vue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装vue"}},[e._v("#")]),e._v(" 安装Vue")]),e._v(" "),_("ol",[_("li",[e._v("直接使用script标签引入，一种是官网下载独立的版本，另一种是使用CDN的方式")]),e._v(" "),_("li",[e._v("NPM，在用Vue构建大型应用时推荐使用NPM安装。NPM能很好地和诸如webpack或Browserify模块打包器配合使用。同时Vue也提供了配套工具来开发单文件组件")])]),e._v(" "),_("p",[e._v("命令行工具")]),e._v(" "),_("p",[e._v("Vue提供了一个官方的脚手架（CLI），为单页面应用SPA快速搭建繁杂的脚手架。他为现代前端工作流提供了batteries-included的构建设置，只需要几分钟的时间就可以运行起来并带有热重载、保存时lint校验以及生产环境可用的构建版本。")]),e._v(" "),_("p",[e._v("在创建的Vue实例中，el选项用于指定一个页面中已经存在的DOM元素来挂载Vue实例，它可以是HTMLElement，也可以是CSS选择器。data选项用于声明应用内需要双向绑定的数据。建议所有会用到的数据都预先在data声明，这样不至于将数据散落在业务逻辑中，难以维护。Vue实例代理了data对象里的所有属性，所以可以直接访问，除了显示的声明数据外，也可以指向一个已有的变量，并且它们之间默认建立了双向绑定。")]),e._v(" "),_("h3",{attrs:{id:"vue-devtools是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-devtools是什么"}},[e._v("#")]),e._v(" Vue Devtools是什么？")]),e._v(" "),_("p",[e._v("Vue Devtools是基于Google Chrome浏览器的一款调试Vue应用的开发者浏览器扩展，可以在浏览器开发者工具下调试代码。")]),e._v(" "),_("h3",{attrs:{id:"vue很适合创建单页面应用-那什么是单页面页面-优缺点是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue很适合创建单页面应用-那什么是单页面页面-优缺点是什么"}},[e._v("#")]),e._v(" Vue很适合创建单页面应用，那什么是单页面页面？优缺点是什么?")]),e._v(" "),_("p",[e._v("单页面应用SPA是指只有一个主页面的应用，浏览器一开始要加载所有必需的html、css、js。所有的页面内容都包含在这个主页面中。但在编写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。")]),e._v(" "),_("p",[e._v("单页面的优点：")]),e._v(" "),_("ol",[_("li",[e._v("用户体验良好。不需要重新刷新页面，减少TTFB的请求耗时，数据也是通过Ajax异步获取，页面显示流畅。")]),e._v(" "),_("li",[e._v("前后端分离。前端负责界面显示，后端负责数据存储和计算，各司其职，不会把前后端的逻辑混杂在一起。")]),e._v(" "),_("li",[e._v("减轻服务端压力，服务器只需要提供API接口，不用管理页面逻辑和页面的拼接，吞吐能力会提高几倍。")]),e._v(" "),_("li",[e._v("共用一套后端程序代码，适配多端同一套后端程序代码，不用修改就可以适用于Web、手机、平板。")])]),e._v(" "),_("p",[e._v("单页面的缺点：")]),e._v(" "),_("ol",[_("li",[e._v("不利于SEO的优化。因为页面数据都是前端异步加载的方式，不利于搜索引擎的抓取。")]),e._v(" "),_("li",[e._v("首屏加载过慢。单页面首次加载，需要将所有页面依赖的CSS和JS合并后统一加载，所以CSS和JS文件会较大，影响页面首次打开的时间。")])])])}),[],!1,null,null,null);v.default=t.exports}}]);