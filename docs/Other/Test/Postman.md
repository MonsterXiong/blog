# Postman

## 1. 接口测试的简介和分类

> 接口测试就是测试系统组件接口之间的一种测试。

**分类**

测试外部接口：测试被测系统和外部系统之间的接口（只需要测试正例即可）

测试内部接口：

    1. 内部接口只提供给内部系统使用。（预算系统，承保系统）（只需要测试正例即可）

## 2.接口测试的流程以及用例的涉及

1. 拿到接口 api 文档（通过开发或者抓包工具获取），熟悉接口业务，接口地址，鉴权方式，入参，出参，错误码。

2. 编写接口用例以及评审

   思路：

   ​ 正例： 输入正常入参，接口能够成功返回数据。

   ​ 反例：

   ​ 鉴权反例：

   ​ 鉴权码为空，鉴权码错误，鉴权码过期，.....

   ​ 参数反例：

   ​ 参数为空，参数类型异常，参数长度异常

   ​ 错误码覆盖：

   ​ 根据业务而定

   ​ 其他错误场景：

   ​ 接口黑名单，接口调用次数限制，分页场景

3. 使用接口测试工具 Postman 执行接口测试

4. Postman+Newman+Jekins 实现持续集成，并且输入测试报告以及发送邮件

## 3.环境变量&&全局变量

环境变量：环境变量就是全局变量

全局变量：全局变量是能够在任何接口里面访问的变量。

获取环境变量和全局变量的值：{{变量名}}

## 4.接口关联

> 获取接口值，设置为全局变量，就可以在其他接口中调用

### Json 提取器

```js
JSON.parse(responseBody);
```

### 正则表达式提取器

```js
const result = responseBody.match(new RegExp('"access_token":"(.*?)"'));
console.log(result[1]);
```

### Cookie 提取器

```js
const result = postman.getResponseCookie("csrf_token");
console.log(result.value);
```

## 5.内置动态参数&&自定义动态参数

### 内置动态参数

```sh
# 生成速记 GUID 字符串
{{$guid}}
# 生成当前时间的时间戳
{{$timestap}}
# 生成 0-1000 之间的随机数
{{$randomInt}}
```

### 自定义动态参数

1. 在预请求脚本中（Pre-Script）中设置
2. 保存为全局变量

```js
const times = Date.now();
pm.globals.set("times", times);

// 使用时使用{{times}}
```

## 6.断言

### 常规断言

- 检查返回的状态码是否为 200
- 检查响应中包括指定字符串
- 检查响应中其中 json 的值
- 检查响应等于一个字符串
- 检查是否包含响应头 Content-Type
- 检查请求耗时小于 200ms

### 自定义动态参数（全局变量）断言

- pm.global.get('times')
- globals['times']
- globals.times

> 在断言中获取自定义动态参数时不能使用{{}}，要使用获取全局变量的 API

## 7.CSV 文件或 Json 文件实现数据驱动

步骤 1： 参数改为`{{}}`方式取值

步骤 2：写 CSV 文件或 JSON 文件,可以预览

```csv
grant_type,appid,secret,assert_value
client_credential,xxxx,xxxx,"access_token"
"",xxxx,xxxx,40002
client_credential,,xxxx,41002
client_credential,xxxx,,41004
```

```json
[
  {
    "grant_type": "client_credential",
    "appid": "xxxx",
    "secret": "xxxx",
    "assert_value": "access_token"
  },
  {
    "grant_type": "",
    "appid": "xxxx",
    "secret": "xxxx",
    "assert_value": 40002
  },
  {
    "grant_type": "client_credential",
    "appid": "",
    "secret": "xxxx",
    "assert_value": 41002
  },
  {
    "grant_type": "client_credential",
    "appid": "xxxx",
    "secret": "",
    "assert_value": 41004
  }
]
```

步骤 3：断言取值

```js
if (responseBody.search("access_token") != -1) {
  pm.globals.set("access_token", JSON.parse(responseBody).access_token);
}

pm.test("Body matches access_token", function() {
  pm.expect(pm.response.text()).to.include(data.assert_value);
});
```

## 8.请求头接口测试以及常用请求头详解

常见请求头：

- Host 请求的主机地址
- Connection 连接方式
- Accept 客户端接收到的数据格式
- X-Requested-With 异步请求
- User-Agent 客户端的用户类型
- Referer 来源
- Cookie Cookie 信息
- Content-Type 请求内容格式

## 9.Mock Server 自定义接口服务器

Mock 模拟

> 后端的接口还没有开发完成，前端的业务需要调用后端的接口

## 10.Cookie 鉴权

什么是 Cookie?

cookie 是一小段文本，格式 key=value

**cookie 鉴权的原理**

1. 当客户端第一次访问服务器的时候，那么服务器就会生成 Cookie 信息，并且在响应头的 set-cookie 里面把生成的 cookie 信息发送给客户端
2. 当客户端第 2-N 次访问服务器的时候，那么客户端就会在请求头的 cookie 带上 cookie 信息，从而实现鉴权

**cookie 的分类**

会话 cookie：保存在内存，当浏览器关闭之后会自动清除 cookie

持久 cookie：保存在硬盘，浏览器关闭后不会清除，只有当失效时间到了才会自动清除

## 11.接口加密解密

1. 目前市面上的加密方式

对称式加密：DES,AES,Base64 加密算法

非对称加密：双钥（公钥，私钥，公钥加密私钥解密，私钥加密公钥解密）加密，RSA 加密算法

不考虑解密：MD5，SHA1，SHA3

自定义加密算法

接口签名（难度系数高，金融项目、支付项目，银行项目、电信项目）

2. Postman 实现加密和解密

MD5 最广泛，通过 JS（预请求中加密解密）
