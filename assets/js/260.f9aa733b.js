(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{641:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"postman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postman"}},[t._v("#")]),t._v(" Postman")]),t._v(" "),a("h2",{attrs:{id:"_1-接口测试的简介和分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-接口测试的简介和分类"}},[t._v("#")]),t._v(" 1. 接口测试的简介和分类")]),t._v(" "),a("blockquote",[a("p",[t._v("接口测试就是测试系统组件接口之间的一种测试。")])]),t._v(" "),a("p",[a("strong",[t._v("分类")])]),t._v(" "),a("p",[t._v("测试外部接口：测试被测系统和外部系统之间的接口（只需要测试正例即可）")]),t._v(" "),a("p",[t._v("测试内部接口：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. 内部接口只提供给内部系统使用。（预算系统，承保系统）（只需要测试正例即可）\n")])])]),a("h2",{attrs:{id:"_2-接口测试的流程以及用例的涉及"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-接口测试的流程以及用例的涉及"}},[t._v("#")]),t._v(" 2.接口测试的流程以及用例的涉及")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("拿到接口 api 文档（通过开发或者抓包工具获取），熟悉接口业务，接口地址，鉴权方式，入参，出参，错误码。")])]),t._v(" "),a("li",[a("p",[t._v("编写接口用例以及评审")]),t._v(" "),a("p",[t._v("思路：")]),t._v(" "),a("p",[t._v("​ 正例： 输入正常入参，接口能够成功返回数据。")]),t._v(" "),a("p",[t._v("​ 反例：")]),t._v(" "),a("p",[t._v("​ 鉴权反例：")]),t._v(" "),a("p",[t._v("​ 鉴权码为空，鉴权码错误，鉴权码过期，.....")]),t._v(" "),a("p",[t._v("​ 参数反例：")]),t._v(" "),a("p",[t._v("​ 参数为空，参数类型异常，参数长度异常")]),t._v(" "),a("p",[t._v("​ 错误码覆盖：")]),t._v(" "),a("p",[t._v("​ 根据业务而定")]),t._v(" "),a("p",[t._v("​ 其他错误场景：")]),t._v(" "),a("p",[t._v("​ 接口黑名单，接口调用次数限制，分页场景")])]),t._v(" "),a("li",[a("p",[t._v("使用接口测试工具 Postman 执行接口测试")])]),t._v(" "),a("li",[a("p",[t._v("Postman+Newman+Jekins 实现持续集成，并且输入测试报告以及发送邮件")])])]),t._v(" "),a("h2",{attrs:{id:"_3-环境变量-全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-环境变量-全局变量"}},[t._v("#")]),t._v(" 3.环境变量&&全局变量")]),t._v(" "),a("p",[t._v("环境变量：环境变量就是全局变量")]),t._v(" "),a("p",[t._v("全局变量：全局变量是能够在任何接口里面访问的变量。")]),t._v(" "),a("p",[t._v("获取环境变量和全局变量的值："+t._s(t.变量名))]),t._v(" "),a("h2",{attrs:{id:"_4-接口关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-接口关联"}},[t._v("#")]),t._v(" 4.接口关联")]),t._v(" "),a("blockquote",[a("p",[t._v("获取接口值，设置为全局变量，就可以在其他接口中调用")])]),t._v(" "),a("h3",{attrs:{id:"json-提取器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-提取器"}},[t._v("#")]),t._v(" Json 提取器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("responseBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"正则表达式提取器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式提取器"}},[t._v("#")]),t._v(" 正则表达式提取器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" responseBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'"access_token":"(.*?)"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"cookie-提取器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-提取器"}},[t._v("#")]),t._v(" Cookie 提取器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" postman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResponseCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"csrf_token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-内置动态参数-自定义动态参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-内置动态参数-自定义动态参数"}},[t._v("#")]),t._v(" 5.内置动态参数&&自定义动态参数")]),t._v(" "),a("h3",{attrs:{id:"内置动态参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置动态参数"}},[t._v("#")]),t._v(" 内置动态参数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成速记 GUID 字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$guid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成当前时间的时间戳")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$timestap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成 0-1000 之间的随机数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$randomInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"自定义动态参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义动态参数"}},[t._v("#")]),t._v(" 自定义动态参数")]),t._v(" "),a("ol",[a("li",[t._v("在预请求脚本中（Pre-Script）中设置")]),t._v(" "),a("li",[t._v("保存为全局变量")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" times "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"times"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" times"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用时使用{{times}}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_6-断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-断言"}},[t._v("#")]),t._v(" 6.断言")]),t._v(" "),a("h3",{attrs:{id:"常规断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常规断言"}},[t._v("#")]),t._v(" 常规断言")]),t._v(" "),a("ul",[a("li",[t._v("检查返回的状态码是否为 200")]),t._v(" "),a("li",[t._v("检查响应中包括指定字符串")]),t._v(" "),a("li",[t._v("检查响应中其中 json 的值")]),t._v(" "),a("li",[t._v("检查响应等于一个字符串")]),t._v(" "),a("li",[t._v("检查是否包含响应头 Content-Type")]),t._v(" "),a("li",[t._v("检查请求耗时小于 200ms")])]),t._v(" "),a("h3",{attrs:{id:"自定义动态参数-全局变量-断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义动态参数-全局变量-断言"}},[t._v("#")]),t._v(" 自定义动态参数（全局变量）断言")]),t._v(" "),a("ul",[a("li",[t._v("pm.global.get('times')")]),t._v(" "),a("li",[t._v("globals['times']")]),t._v(" "),a("li",[t._v("globals.times")])]),t._v(" "),a("blockquote",[a("p",[t._v("在断言中获取自定义动态参数时不能使用{{}}，要使用获取全局变量的 API")])]),t._v(" "),a("h2",{attrs:{id:"_7-csv-文件或-json-文件实现数据驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-csv-文件或-json-文件实现数据驱动"}},[t._v("#")]),t._v(" 7.CSV 文件或 Json 文件实现数据驱动")]),t._v(" "),a("p",[t._v("步骤 1： 参数改为"),a("code",[t._v("{{}}")]),t._v("方式取值")]),t._v(" "),a("p",[t._v("步骤 2：写 CSV 文件或 JSON 文件,可以预览")]),t._v(" "),a("div",{staticClass:"language-csv extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csv"}},[a("code",[a("span",{pre:!0,attrs:{class:"token value"}},[t._v("grant_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("appid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("assert_value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("client_credential")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("xxxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("xxxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v('"access_token"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token value"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("xxxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("xxxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("40002")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("client_credential")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("xxxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("41002")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("client_credential")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("xxxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token value"}},[t._v("41004")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_credential"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"assert_value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_token"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"assert_value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40002")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_credential"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"assert_value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("41002")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_credential"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"assert_value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("41004")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("步骤 3：断言取值")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("responseBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("responseBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("access_token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Body matches access_token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assert_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_8-请求头接口测试以及常用请求头详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-请求头接口测试以及常用请求头详解"}},[t._v("#")]),t._v(" 8.请求头接口测试以及常用请求头详解")]),t._v(" "),a("p",[t._v("常见请求头：")]),t._v(" "),a("ul",[a("li",[t._v("Host 请求的主机地址")]),t._v(" "),a("li",[t._v("Connection 连接方式")]),t._v(" "),a("li",[t._v("Accept 客户端接收到的数据格式")]),t._v(" "),a("li",[t._v("X-Requested-With 异步请求")]),t._v(" "),a("li",[t._v("User-Agent 客户端的用户类型")]),t._v(" "),a("li",[t._v("Referer 来源")]),t._v(" "),a("li",[t._v("Cookie Cookie 信息")]),t._v(" "),a("li",[t._v("Content-Type 请求内容格式")])]),t._v(" "),a("h2",{attrs:{id:"_9-mock-server-自定义接口服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-mock-server-自定义接口服务器"}},[t._v("#")]),t._v(" 9.Mock Server 自定义接口服务器")]),t._v(" "),a("p",[t._v("Mock 模拟")]),t._v(" "),a("blockquote",[a("p",[t._v("后端的接口还没有开发完成，前端的业务需要调用后端的接口")])]),t._v(" "),a("h2",{attrs:{id:"_10-cookie-鉴权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-cookie-鉴权"}},[t._v("#")]),t._v(" 10.Cookie 鉴权")]),t._v(" "),a("p",[t._v("什么是 Cookie?")]),t._v(" "),a("p",[t._v("cookie 是一小段文本，格式 key=value")]),t._v(" "),a("p",[a("strong",[t._v("cookie 鉴权的原理")])]),t._v(" "),a("ol",[a("li",[t._v("当客户端第一次访问服务器的时候，那么服务器就会生成 Cookie 信息，并且在响应头的 set-cookie 里面把生成的 cookie 信息发送给客户端")]),t._v(" "),a("li",[t._v("当客户端第 2-N 次访问服务器的时候，那么客户端就会在请求头的 cookie 带上 cookie 信息，从而实现鉴权")])]),t._v(" "),a("p",[a("strong",[t._v("cookie 的分类")])]),t._v(" "),a("p",[t._v("会话 cookie：保存在内存，当浏览器关闭之后会自动清除 cookie")]),t._v(" "),a("p",[t._v("持久 cookie：保存在硬盘，浏览器关闭后不会清除，只有当失效时间到了才会自动清除")]),t._v(" "),a("h2",{attrs:{id:"_11-接口加密解密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-接口加密解密"}},[t._v("#")]),t._v(" 11.接口加密解密")]),t._v(" "),a("ol",[a("li",[t._v("目前市面上的加密方式")])]),t._v(" "),a("p",[t._v("对称式加密：DES,AES,Base64 加密算法")]),t._v(" "),a("p",[t._v("非对称加密：双钥（公钥，私钥，公钥加密私钥解密，私钥加密公钥解密）加密，RSA 加密算法")]),t._v(" "),a("p",[t._v("不考虑解密：MD5，SHA1，SHA3")]),t._v(" "),a("p",[t._v("自定义加密算法")]),t._v(" "),a("p",[t._v("接口签名（难度系数高，金融项目、支付项目，银行项目、电信项目）")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Postman 实现加密和解密")])]),t._v(" "),a("p",[t._v("MD5 最广泛，通过 JS（预请求中加密解密）")])])}),[],!1,null,null,null);s.default=e.exports}}]);