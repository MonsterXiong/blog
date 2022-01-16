(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{468:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),s("p",[t._v("Parcel 采用与许多其它工具稍微不同的策略，许多常见的格式都被开箱即用地包含进来，而不需要安装或者配置额外的插件。然而，有些情况你可能会想在非标准的情况下扩展 Parcel 的能力，而那些时候，插件是被支持的。安装的插件会基于 package.json 的依赖会被自动检测并加载。")]),t._v(" "),s("p",[t._v("当你添加一种全新的文件格式到 Parcel，你应该先考虑它会有多通用，还有它的实现会有多标准化。如果它足够通用及标准，该格式很可能应该被添加到 Parcel 的核心，而不是作为一种用户需要安装的插件。如果你有其它的疑惑，可以到 GitHub 一起讨论。")]),t._v(" "),s("h2",{attrs:{id:"插件-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件-api"}},[t._v("#")]),t._v(" 插件 API")]),t._v(" "),s("p",[t._v("Parcel 插件很简单。它们只是简单地将几个模块输出成一个函数，它会被 Parcel 在初始化的时候自动调用。函数接收 Bundler 对象作为输入，也可以做一些配置，比如注册资源类型和注册 packager。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("bundler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bundler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAssetType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./MyAsset"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  bundler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPackager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./MyPackager"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("请发布这个包到 npm，并使用 parcel-plugin- 前缀，那它就会像后文提到的那样被自动检测和加载。")]),t._v(" "),s("h2",{attrs:{id:"使用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[t._v("#")]),t._v(" 使用插件")]),t._v(" "),s("p",[t._v("在 Parcel 中使用插件是前所未有的简单。你所做的，只是将它们安装好并保存到 package.json 中。插件需要以 parcel-plugin- 作为前缀被命名。例如 parcel-plugin-foo。任何在 package.json 中被列出的带有此前缀的依赖，都会在初始化的时候被自动加载。")])])}),[],!1,null,null,null);a.default=e.exports}}]);