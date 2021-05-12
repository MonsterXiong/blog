## 简介

Sass以简为美，简约至上





## 语法格式



### 字符串

字符串在CSS和SCSS中都占有重要地位。大多数的CSS值不是长度就是标识符，所以遵循固定的编码规范处理Sass中的字符串是非常重要的一项工作。



### 编码@charset

为了避免潜在的字符编码问题，强烈建议在入门文件中通过@charset指令使用UTF-8编码格式。确保该指令是文件的第一条语句，并排除其他字符编码声明。



```scss
@charset 'utf-8';
```



### 引用

在Sass中字符串应该始终被单引号（‘）所包裹

```scss
$foo: 'center';
```



#### 包含引号的字符串

如果字符串内包含了一个或多个单引号，一种解决方案就是使用双引号包裹整个字符串，从而避免使用转义字符。

```scss
@warn 'You can\'t do that.';
// or
@warn "You can't do that.";
```







### URLS

URL 最好也用引号包裹起来;

```scss
background-image:url('/logo.jpg')
```





## 变量$

变量让值得以重用，避免了一遍遍地复制副本。最重要的是，使用变量让更新一个值变得很方便。不用查找、替换，更不用手动检索

- 该值至少重复出现了两次；
- 该值至少可能会被更新一次；
- 该值所有的表现都与变量有关（非巧合）。

基本上，没有理由声明一个永远不需要更新或者只在单一地方使用变量。



### 变量声明

Sass使用$符号来标识变量。变量名可以用中划线或者下划线分隔

```scss
//	$变量名：值
$primary-color: #f90
```

### 引用变量

```scss
.foo{
	color : $primary-color
}
```



## 嵌套



父选择器的标识符&

子选择器器>，同层相邻组合选择器+，同层全体组合选择器~

嵌套属性

```scss
// border-style border-width border-color =>border-*
border:{
	style:solid;
	width:1px;
	color:#eee;
}
// border:1px solid #eee; border-left:0px; border-right:0px;
border:1px solid #eee {
    left:0px;
    right:0px
}
```



## 导入@import

`css`有一个特别不常用的特性，即`@import`规则，它允许在一个`css`文件中导入其他`css`文件。然而，后果是只有执行到`@import`时，浏览器才会去下载其他`css`文件，这导致页面加载起来特别慢。

`sass`也有一个`@import`规则，但不同的是，`sass`的`@import`规则在生成`css`文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个`css`文件中，而无需发起额外的下载请求。另外，所有在被导入文件中定义的变量和混合器（参见2.5节）均可在导入文件中使用。

使用`sass`的`@import`规则并不需要指明被导入文件的全名。你可以省略`.sass`或`.scss`文件后缀

### 使用SASS部分文件

`sass`局部文件的文件名以下划线开头。这样，`sass`就不会在编译时单独编译这个文件输出`css`，而只把这个文件用作导入。当你`@import`一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入`themes/_night-sky.scss`这个局部文件里的变量，你只需在样式表中写`@import` `"themes/night-sky";`。

局部文件可以被多个不同的文件引用。当一些样式需要在多个页面甚至多个项目中使用时，这非常有用。在这种情况下，有时需要在你的样式表中对导入的样式稍作修改，`sass`有一个功能刚好可以解决这个问题，即默认变量值。



## 默认变量值!default



## 嵌套导入



## 原生的CSS导入



## 注释

### 静默注释

```scss
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```

### css标准注释格式

```css
body {
  color /* 这块注释内容不会出现在生成的css中 */: #333;
  padding: 1; /* 这块注释内容也不会出现在生成的css中 */ 0;
}
```



## 混合器@mixin=》可深入

混合器用@mixin标识符定义，你可以通过`sass`的混合器实现大段样式的重用。

```scss
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

引用混合器@include

```scss
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```

混合器传参以及默认参数值

```scss
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
// 默认参数值
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}

```





## 选择器继承=》可深入

选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式(包括组合)。这个通过`@extend`语法实现。

```scss
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```





# API



## SassScript

### 插值语句`${}`





## @at-root

## @content

## @if

## @each