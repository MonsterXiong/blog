# XSS

- 跨站脚本攻击（Cross Site Scripting）
  - 是指恶意攻击者利用网站没有对用户提交数据进行转义处理或者过滤不足的缺点，进而添加一些代码，嵌入到 web 页面中去。使得别的用户访问都会执行相同的嵌入代码，从而盗取用户资料，利用用户身份进行某种动作或者对访问者进行病毒式侵害得一种攻击方式。

跨站：我希望我网站中所有运行的逻辑都来自本站，也就是说是我自己网站的东西才能在我的网站中运行，如果我的网站运行了来自别的网站的东西，这时候就产生了跨站脚本攻击。

一般演示和攻击探测的时候会使用 alert 框来检测是否存在 XSS 攻击漏洞。

本来程序+数据=结果，但是当数据中包含一部分程序的时候，那实际上程序中的逻辑就被改变了。

## XSS 攻击分类

XSS 攻击变种特别的多，一般分为以下几种：

- 反射型：url 参数直接注入

  - 把用户输入的数据“反射”给浏览器端，这种攻击方式需要攻击者诱使用户点击一个恶意链接，或者提交一个表单或者进入一个恶意网站，注入脚本进入会被攻击者的网站，可以获取用户隐私数据的脚本（传播时转换为短网址减少访问者的疑惑）

- 存储型：存储到 DB 后读取时注入
  - 把用户输入的数据存储在服务器端，当浏览器请求数据时，脚本从服务器上传回并执行，这种 XSS 攻击具有很强的稳定性。
  - 场景：攻击者在论坛写下一遍包含恶意 JavaScript 文章或评论，文章或评论发表后，所有访问该文章或评论的用户，都会在它们的浏览器中执行这段恶意的 JavaScript 代码。
- 基于 DOM
  - 通过恶意脚本修改页面的 DOM 结构，是纯粹发生在客户端的攻击。

## XSS 攻击危害

取决于攻击者的想象力：

- 获取页面数据
- 获取 Cookies
- 劫持前端逻辑
- 发送请求
- 用户金额名称邮箱
- 偷取网站任意数据
- 偷取用户资料
- 偷取用户密码和登录态
- 欺骗用户

```js
XSS案例1：站酷搜索
远程脚本JS文件,创建了一个图片，将图片的url指向了远程的PHP的一个脚本。
接收者接收到这个cookie之后，就可以把cookie拿出来，
应用在自己的网站上就可以获取到用户的登录态了，发送一个url就可以盗取到用户的登录态

XSS案例2：QQ空间：富文本

XSS案例3：XXX商城：填信息会提交到后台，提交的时候可以提交脚本，
这个脚本就回到管理者后台界面上运行，同时把后台地址的网站，cookie都可以看到了
```

## XSS 攻击注入点

- HTML 节点内容（节点内容是动态生成的，里面包含用户输入的生成，里面的信息可能会包含脚本）

```html
<div>
  {{content}}
</div>
<!--可能会出现-->

<div>
  <script>
    alert(1);
  </script>
</div>
```

- HTML 属性

```html
<img src="{{image}}" />

<!--可能会出现-->
<img src="1" onerror="alert(1)" />
```

- JS 代码

```html
<script>
  // data是服务器给出的数据，有可能也是用户输入的数据
  var data = "#{data}";
  // 可能会出现
  var data = "hello";
  alert(1);
  ("");
</script>
```

- 富文本
  - 富文本要保留 HTML
  - HTML 有 XSS 攻击风险

## XSS 防御

- 浏览器自带防御：可以关闭浏览器自带的防御 header（'X-Xss-Protection,0'），这是现代浏览器的一种防御机制，0 是关掉，1 是打开（默认值），除此之外在 1 后面可以指定一个 url，当你的网站出现 XSS 攻击的时候，chrome 浏览器就会向这个 url 发送一个通知。（防御手段有限，防御的是反射型的 XSS 攻击，只防御参数出现在 HTML 内容或属性中，并不是所有浏览器都支持）

- 转义字符：将双引号、单引号、空格、尖括号等
- CSP 内容安全策略

所以 XSS 防御基本上就使用以下四种方法：

- 内置函数转义
- DOM 解析白名单
- 第三方库
- CSP

### HTML 节点内容

我们只希望用户输入文字，不输入 html 标签,所以替换尖括号即可，转义的时机：用户发表进入数据库之前进行转义，一种是显示的时候进行转义

- 转义<：`&lt;`
- 转义>：`&gt;`

```js
if (!str) return "";
str.replace(/</g, "&lt;");
str.replace(/>/g, "&gt;");
return str;
```

### HTML 属性

- 转义双引号：`&quto;`

- 转义单引号：`&#39;`

- 转义空格：`&#32;`(HTML 属性是可以不带引号的，通过空格截断的,一般来说 HTML 可能带有连续的多个空格，在渲染的时候只看到一个空格，所以转义之后，可能显示会有问题，所以一般解决方案是不转义空格，因此 html 属性必须带引号)

- 转义&：`&amp;`(在 html5 之前需要对&进行转义，html5 之后不需要，但是还是做一下，要放在最前面，否则后面的转义还会转义一次)

```js
if (!str) return "";
str.replace(/"/g, "&quto;");
str.replace(/'/g, "&#39;");
str.replace(/ /g, "&#32;");
return str;
```

所以通过转义可以解决 HTML 属性和内容:

```js
if (!str) return "";
str.replace(/&/g, "&amp;");
str.replace(/</g, "&lt;");
str.replace(/>/g, "&gt;");
str.replace(/"/g, "&quto;");
str.replace(/'/g, "&#39;");
// str.replace(/ /g,'&#32;');
return str;
```

### JS 代码

- 转义双引号（JS 不能解析 html 实体，使用\）
- 转义斜杠\
- 可能还有单引号一起其他情况，所以直接转换为 json

```js
if (!str) return "";
str = str.replace(/\\/g, '\\\\"');
str = str.replace(/"/g, '\\"');
return str;

// 转为json
JSON.stringify(str);
```

### 富文本

XSS 最麻烦的就是富文本，因为富文本要保留 HTML 格式，要保留 HTML 就面临着 XSS 风险，一般的思路就是过滤，过滤的思路有以下两种：

- 按黑名单过滤，把指定的标签和属性进行过滤。比如说 script 标签，onerror 属性将它们去掉（实现比较简单，根据正则表达式去过滤就好了，弊端就是 HTML 是非常繁杂庞大的系统，稍不留神就会留下漏洞）

```js
if (!html) return "";
html = html.replace(/<s*\/?script\s*>/g, "");
html = html.replace(/javascript:[^'"]*/g, "");
html = html.replace(/onerror\s*=\s*['"]?[^'"]*['"]?/g, "");
return html;
```

- 按白名单保留部分标签和属性（好处比较彻底，只允许指定的标签和属性存在，弊端就是实现比较麻烦，需要将 HTML 完全解析成数据结构（富文本在允许的标签和属性将它列举出来，除了这些允许的标签和属性之外，其他的都不允许，首先我们需要将一大段的 HTML 解析成为一个树状结构，这个浏览器解析 HTML 的过程的差不多的，然后根据 DOM 树一个一个去遍历它的属性是否在允许的标签和属性，是则处理，不是则去除，cheerio），然后将数据结构进行过滤然后再组装成 HTML）,第三方库 xss

输入只需要过滤一次，输出影响性能。

### CSP

- 内容安全策略（Content Security Policy）:用于指定哪些内容可执行

首先它是 HTTP 里面的一个头，它规定了有哪些来源可以限制：

- `child-src` `connect-src` `default-src`
- `font-src` `frame-src` `img-src`
- `manifest-src` `media-src` `object-src`
- `script-src` `style-src` `worker-src`
- `<host-source>` `<scheme-source>` `'self'`
- `'unsafe-inline'` `'unsafe-eval'` `'none'`
- `'nonce-<base-value>'` `<hash-source>`
- `'strict-dynamic'`