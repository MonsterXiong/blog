(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{630:function(n,e,t){"use strict";t.r(e);var r=t(26),a=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"js-的深浅拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-的深浅拷贝"}},[n._v("#")]),n._v(" JS 的深浅拷贝")]),n._v(" "),t("p",[n._v("JavaScript 的深浅拷贝一直是个难点，如果现在面试官让我写一个深拷贝，我可能也只是能写出个基础版的。所以在写这条之前我拜读了收藏夹里各路大佬写的博文。具体可以看下面我贴的链接，这里只做简单的总结。")]),n._v(" "),t("ul",[t("li",[t("strong",[n._v("浅拷贝：")]),n._v(" 创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。")]),n._v(" "),t("li",[t("strong",[n._v("深拷贝：")]),n._v(" 将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。")])]),n._v(" "),t("p",[t("strong",[n._v("浅拷贝的实现方式：")])]),n._v(" "),t("ul",[t("li",[t("strong",[n._v("Object.assign() 方法：")]),n._v(" 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。")]),n._v(" "),t("li",[n._v("**Array.prototype.slice()：**slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end（不包括 end）决定的原数组的浅拷贝。原始数组不会被改变。")]),n._v(" "),t("li",[t("strong",[n._v("拓展运算符"),t("code",[n._v("...")]),n._v("：")])])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('let a = {\n    name: "Jake",\n    flag: {\n        title: "better day by day",\n        time: "2020-05-31"\n    }\n}\nlet b = {...a};\n')])])]),t("p",[t("strong",[n._v("深拷贝的实现方式：")])]),n._v(" "),t("ul",[t("li",[t("strong",[n._v("乞丐版：")]),n._v(" JSON.parse(JSON.stringify(object))，缺点诸多（会忽略 undefined、symbol、函数；不能解决循环引用；不能处理正则、new Date()）")]),n._v(" "),t("li",[t("strong",[n._v("基础版（面试够用）：")]),n._v(" 浅拷贝+递归 （只考虑了普通的 object 和 array 两种数据类型）")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function cloneDeep(target,map = new WeakMap()) {\n  if(typeOf taret ==='object'){\n     let cloneTarget = Array.isArray(target) ? [] : {};\n\n     if(map.get(target)) {\n        return target;\n    }\n     map.set(target, cloneTarget);\n     for(const key in target){\n        cloneTarget[key] = cloneDeep(target[key], map);\n     }\n     return cloneTarget\n  }else{\n       return target\n  }\n\n}\n")])])]),t("ul",[t("li",[t("strong",[n._v("终极版：")])])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const mapTag = '[object Map]';\nconst setTag = '[object Set]';\nconst arrayTag = '[object Array]';\nconst objectTag = '[object Object]';\nconst argsTag = '[object Arguments]';\n\nconst boolTag = '[object Boolean]';\nconst dateTag = '[object Date]';\nconst numberTag = '[object Number]';\nconst stringTag = '[object String]';\nconst symbolTag = '[object Symbol]';\nconst errorTag = '[object Error]';\nconst regexpTag = '[object RegExp]';\nconst funcTag = '[object Function]';\n\nconst deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];\n\n\nfunction forEach(array, iteratee) {\n    let index = -1;\n    const length = array.length;\n    while (++index < length) {\n        iteratee(array[index], index);\n    }\n    return array;\n}\n\nfunction isObject(target) {\n    const type = typeof target;\n    return target !== null && (type === 'object' || type === 'function');\n}\n\nfunction getType(target) {\n    return Object.prototype.toString.call(target);\n}\n\nfunction getInit(target) {\n    const Ctor = target.constructor;\n    return new Ctor();\n}\n\nfunction cloneSymbol(targe) {\n    return Object(Symbol.prototype.valueOf.call(targe));\n}\n\nfunction cloneReg(targe) {\n    const reFlags = /\\w*$/;\n    const result = new targe.constructor(targe.source, reFlags.exec(targe));\n    result.lastIndex = targe.lastIndex;\n    return result;\n}\n\nfunction cloneFunction(func) {\n    const bodyReg = /(?<={)(.|\\n)+(?=})/m;\n    const paramReg = /(?<=\\().+(?=\\)\\s+{)/;\n    const funcString = func.toString();\n    if (func.prototype) {\n        const param = paramReg.exec(funcString);\n        const body = bodyReg.exec(funcString);\n        if (body) {\n            if (param) {\n                const paramArr = param[0].split(',');\n                return new Function(...paramArr, body[0]);\n            } else {\n                return new Function(body[0]);\n            }\n        } else {\n            return null;\n        }\n    } else {\n        return eval(funcString);\n    }\n}\n\nfunction cloneOtherType(targe, type) {\n    const Ctor = targe.constructor;\n    switch (type) {\n        case boolTag:\n        case numberTag:\n        case stringTag:\n        case errorTag:\n        case dateTag:\n            return new Ctor(targe);\n        case regexpTag:\n            return cloneReg(targe);\n        case symbolTag:\n            return cloneSymbol(targe);\n        case funcTag:\n            return cloneFunction(targe);\n        default:\n            return null;\n    }\n}\n\nfunction clone(target, map = new WeakMap()) {\n\n    // 克隆原始类型\n    if (!isObject(target)) {\n        return target;\n    }\n\n    // 初始化\n    const type = getType(target);\n    let cloneTarget;\n    if (deepTag.includes(type)) {\n        cloneTarget = getInit(target, type);\n    } else {\n        return cloneOtherType(target, type);\n    }\n\n    // 防止循环引用\n    if (map.get(target)) {\n        return map.get(target);\n    }\n    map.set(target, cloneTarget);\n\n    // 克隆set\n    if (type === setTag) {\n        target.forEach(value => {\n            cloneTarget.add(clone(value, map));\n        });\n        return cloneTarget;\n    }\n\n    // 克隆map\n    if (type === mapTag) {\n        target.forEach((value, key) => {\n            cloneTarget.set(key, clone(value, map));\n        });\n        return cloneTarget;\n    }\n\n    // 克隆对象和数组\n    const keys = type === arrayTag ? undefined : Object.keys(target);\n    forEach(keys || target, (value, key) => {\n        if (keys) {\n            key = value;\n        }\n        cloneTarget[key] = clone(target[key], map);\n    });\n\n    return cloneTarget;\n}\n\nmodule.exports = {\n    clone\n};\n")])])]),t("p",[n._v("参考文章：")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484366&idx=1&sn=e6b01d4eff645518b48ea66716b3ddfe&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[n._v("👉 如何写出一个惊艳面试官的深拷贝"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("strong",[n._v("深拷贝的终极探索（99%的人都不知道）")]),n._v("[43]")])])}),[],!1,null,null,null);e.default=a.exports}}]);