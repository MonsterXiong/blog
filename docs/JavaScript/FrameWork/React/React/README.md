# React

## React开篇

```html
<!--
1.什么是React?
- React 起源于 Facebook 的内部项目，
  因为Facebook对市场上所有 JavaScript MVC 框架，都不满意，
  就决定自己写一个框架，用来架设 Instagram 的网站
来源: https://reactjs.org/blog/2013/06/05/why-react.html

2.什么是框架?
- 框架是一个'半成品',已经对基础的代码进行了封装并提供相应的API，
  开发者在使用框架时,可以复用框架中封装好的代码，从而提高工作效率
- 框架就是毛坯房, 已经帮助我们搭建好了基本的架子, 我们只需要拿过来根据我们自己的需求装修即可

3.为什么要学习框架?
- 提升开发效率：
    + 对于企业来说，时间就是金钱
    + 对于个人来说, 时间≈女朋友

4.为什么要学习React?
- 真香定律(国内技术发展潜规则)
    + 国外流行 -> 国内大厂尝试 -> 大厂觉得很香 -> 其它公司觉得也很香
- 国外流行
    + 2020 Stackoverflow 全球开发者调研报告中, 最受欢迎框架排第二
        + https://insights.stackoverflow.com/survey/2020
        + https://www.sohu.com/a/398379279_827544
    + HackerRank 2020 全球开发者调研报告, 程序员最想学习框架排第一
        + https://research.hackerrank.com/developer-skills/2020
        + https://segmentfault.com/a/1190000021729876
    +
- 国内大厂尝试
    + 阿里: https://www.aliyun.com/
    + 斗鱼: https://www.douyu.com/
    + 优酷: https://youku.com/
    + 飞猪: https://www.fliggy.com/
    + 知乎: https://www.zhihu.com/
    + 滴滴: https://www.didiglobal.com/
    + 网易: http://yuedu.163.com/
    + ... ...
- 其它公开觉得也很香
    + 猎聘: https://wow.liepin.com/
    + 36氪: https://36kr.com/
    + 墨刀: https://www.modao.cc/
    + 丁香医生: https://dxy.com/
    + 石墨文档: https://shimo.im/
    + ... ...(江哥怎么知道的?)

5.为什么要学习React?
- 安全可靠
    + React是由Facebook来更新和维护, 所以一般不会出现跑路情况
- 思想升华
    + React是一个开源项目, 融合了全世界诸多优秀成员的编程思想
- 值得借鉴
    +  Vue.js设计之初，有很多的灵感来自Angular和React
       Vue3的很多新特性, 在React中你也能看到它们的身影 ()
       诸如: Composition API / Fragment / Teleport(Protal)/ Suspense

6.为什么要学习React?
- 面向未来, 迎接5G
    + 2013年，React发布之初主要是开发Web页面
    + 2015年，Facebook推出了ReactNative，用于开发移动端跨平台(Android/iOS APP)
    （虽然目前Flutter非常火爆，但是还是有很多公司在使用ReactNative）
    + 2017年，Facebook推出ReactVR，用于开发虚拟现实Web应用程序
    （随着5G的普及，VR也会是一个火爆的应用场景）
-->

```



## React核心思想

- 数据驱动界面更新(声明式渲染):
  - 只要数据发生了改变, 界面就会自动改变

- 组件化开发(乐高帝国):
  - 将网页拆分成一个个独立的组件来编写,然后再将编写好的组件拼接成一个完整的网页
  - https://cn.vuejs.org/images/components.png
  - https://reactjs.org/



## 什么是虚拟DOM?

- 虚拟 DOM 是相对于浏览器所渲染出来的真实 DOM 的
- 虚拟 DOM 就是使用JS对象来表示页面上真实的 DOM

```jsx
// 真实的DOM
<div id="name" title= "name">
// 虚拟DOM
let obj = {         
 tagName: 'div',
 attrs:{
  id: "name" ，
  title: "name"
}
```

## React的基本使用

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
</head>
<body>
<!--
1.使用React的几种方式?
- 自行配置
    + https://zh-hans.reactjs.org/docs/add-react-to-a-website.html
- 通过脚手架自动配置
    + https://zh-hans.reactjs.org/docs/create-a-new-react-app.html
-->
<!--
2.react.js和react-dom.js
- react.js包含了React和React-Native所共同拥有的核心代码, 主要用于'生成虚拟DOM'
- react-dom.js包含了针对不同平台渲染不同内容的核心代码, 主要用于'将虚拟DOM转换为真实DOM'
- 简而言之:
    + 利用react.js编写界面(创建虚拟DOM)
    + 利用react-dom.js渲染界面(创建真实DOM)
-->
<!--
3.React如何创建DOM元素?
- 在React中, 我们不能通过 HTML标签 直接创建DOM元素
- 在React中, 我们必须先通过react.js创建虚拟DOM, 在通过react-dom.js渲染元素(创建真实DOM)

4.如何通过react.js创建虚拟DOM?
- 通过React.createElement()方法
- 该方法接收3个参数
    + 第一个参数: 需要创建的元素类型或组件
    + 第二个参数: 被创建出来的元素拥有的属性
    + 第三个参数: 被创建出来的元素拥有的内容(可以是多个)

https://zh-hans.reactjs.org/docs/react-api.html#createelement
-->
<!--
5.如何通过react-dom.js渲染虚拟DOM?
- 通过 ReactDOM.render()方法
- 该方法接收3个参数
    + 第一个参数: 被渲染的虚拟DOM
    + 第二个参数: 要渲染到哪个元素中
    + 第三个参数: 渲染或更新完成后的回调函数

https://zh-hans.reactjs.org/docs/react-dom.html#render
-->
<!--
6.如何给元素添加监听?
- 给元素添加监听的本质就是给元素添加属性
  所以可以在createElement()的第二个参数中添加
- <button onclick="btnClick">按钮</button>
- React.createElement('button', {onClick: btnClick}, '按钮');

注意事项:
如果想给元素绑定事件, 那么事件名称必须是驼峰命名
-->
<div id="app"></div>
<script>
    // 1.创建虚拟DOM
    let message = '知播渔';
    // <div>知播渔</div>
    let oDiv = React.createElement('div', null, message);

    // 2.将虚拟DOM转换成真实DOM
    ReactDOM.render(oDiv, document.getElementById('app'), ()=>{
        console.log('已经将虚拟DOM转换成了真实DOM, 已经渲染到界面上了');
    });
</script>
</body>
</html>

```



## React写法

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
</head>
<body>
<!--
1.render方法注意点
- 多次渲染, 后渲染会覆盖先渲染
- render方法一次只能渲染一个元素/组件

2.createElement方法注意点
- 可以添加3个以上参数, 后续参数都会作为当前创建元素内容处理

3.如何给元素添加监听?
- 给元素添加监听的本质就是给元素添加属性
  所以可以在createElement()的第二个参数中添加
- <button onclick="btnClick">按钮</button>
- React.createElement('button', {onClick: btnClick}, '按钮');

注意事项:
如果想给元素绑定事件, 那么事件名称必须是驼峰命名
-->
<div id="app"></div>
<script>
    // 1.创建虚拟DOM
    let message = '知播渔';
    // <div>知播渔</div>
    let oDiv = React.createElement('div', null, message);
    // <button onclick='myfn'>按钮</button>
    let oBtn = React.createElement('button', null, '按钮');
    // 注意点: 默认createElement方法只能接收3个参数, 但是我们也可以传递3个以上的参数
    //        如果我们传递了3个以上参数, 那么从第3个开始都会当做是内容来处理
    /*
    React.createElement(
      type,
      [props],
      [...children]
    )
    * */
    // 注意点: 如果想通过React绑定事件, 那么事件名称必须是驼峰命名
    let oRoot = React.createElement('div', {onClick:myFn}, oDiv, oBtn);

    // 2.将虚拟DOM转换成真实DOM
    ReactDOM.render(oRoot, document.getElementById('app'), ()=>{
        console.log('已经将虚拟DOM转换成了真实DOM, 已经渲染到界面上了');
    });
    function myFn() {
        message = 'www.it666.com';
        // 注意点: 默认情况下载React中, 修改完数据之后, 是不会自动更新界面的
        let oDiv = React.createElement('div', null, message);
        let oBtn = React.createElement('button', null, '按钮');
        let oRoot = React.createElement('div', {onClick:myFn}, oDiv, oBtn);
        ReactDOM.render(oRoot, document.getElementById('app'), ()=>{
            console.log('已经将虚拟DOM转换成了真实DOM, 已经渲染到界面上了');
        });
    }
    // 注意点: render方法最多只能接收3个参数, 所以不能同时渲染多个元素
    // ReactDOM.render(oDiv, oBtn, document.getElementById('app'), ()=>{
    //     console.log('已经将虚拟DOM转换成了真实DOM, 已经渲染到界面上了');
    // });
    // 注意点: 如果多次调用render方法, 那么后渲染的会覆盖先渲染的
    // ReactDOM.render(oBtn, document.getElementById('app'), ()=>{
    //     console.log('已经将虚拟DOM转换成了真实DOM, 已经渲染到界面上了');
    // });
</script>
</body>
</html>

```

## JSX写法

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<!--
1.通过createElement创建元素存在的问题?
- 如果结构比较简单还好, 但是如果结构比较复杂, 就比较难以下手
  所以大牛们就发明了JSX, 专门用来编写React中的页面结构体

2.什么是JSX?
- JSX === JavaScript + X === (XML) === (eXtension)
- JSX 是一个看起来很像 XML 的 JavaScript 语法扩展

3.为什么要使用JSX?
- 使用JSX使得我们在React中编写页面结构更为简单、灵活
- JSX 是类型安全的，在编译过程中就能发现错误
- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化
- 防止XSS注入攻击

https://zh-hans.reactjs.org/docs/introducing-jsx.html
-->
<!--
4.JSX本质?
- 浏览器只认识JS不认识JSX, 所以我们编写的JSX代码是无法在浏览器中执行的
- 为了解决这个问题, 我们需要借助babel将JSX转换成JS, 也就是转换成React.createElement();

https://zh-hans.reactjs.org/docs/react-without-jsx.html
https://babeljs.io/repl/

5.如何在项目中将JSX转换成JS?
- 导入babel.js
- 在script标签上添加type="text/babel"
-->
<div id="app"></div>
<script type="text/babel">
    // 1.创建虚拟DOM
    let message = '知播渔123';

    function myRender() {
        // let oDiv = React.createElement('div', null, message);
        // let oBtn = React.createElement('button', null, '按钮');
        // let oRoot = React.createElement('div', {onClick:myFn}, oDiv, oBtn);

        let oRoot = (
            <div>
                <div>{message}</div>
                <button onClick={myFn}>按钮</button>
            </div>
        )

        ReactDOM.render(oRoot, document.getElementById('app'), ()=>{
            console.log('已经将虚拟DOM转换成了真实DOM, 已经渲染到界面上了');
        });
    }
    myRender();
    function myFn() {
        message = 'www.it666.com';
        myRender();
    }
</script>
</body>
</html>

```

## 函数组件

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<!--
1.在React中如何定义组件?
- 在React中创建组件有两种方式
    + 第一种: 通过ES6之前的构造函数来定义(无状态组件)
    + 第二种: 通过ES6开始的class来定义(有状态组件)
-->
<!--
2.如何通过ES5的构造函数来定义组件
- 在构造函数中返回组件的结构即可
function Home() {
    return (
      <div>
          <div>{message}</div>
          <button onClick={btnClick}>按钮</button>
      </div>
    );
}
https://zh-hans.reactjs.org/docs/components-and-props.html
-->
<div id="app"></div>
<script type="text/babel">
    let message = '知播渔';
    function Home() {
        return (
            <div>
                <div>{message}</div>
                <button onClick={myFn}>按钮</button>
            </div>
        )
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));

    function myFn() {
        message = 'www.it666.com';
        ReactDOM.render(<Home/>, document.getElementById('app'));
    }
</script>
</body>
</html>

```

## 类组件

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<!--
3.如何通过ES6的class来定义组件
- 定义一个类, 在这个类中实现render方法, 在render方法中返回组件的结构即可
class Home extends React.Component{
    render(){
        return (
            <div>
                <div>{message}</div>
                <button onClick={btnClick}>按钮</button>
            </div>
        )
    }
}
https://zh-hans.reactjs.org/docs/components-and-props.html
-->
<div id="app"></div>
<script type="text/babel">
    let message = '知播渔';
    /*
    function Home() {
        return (
            <div>
                <div>{message}</div>
                <button onClick={myFn}>按钮</button>
            </div>
        )
    }
     */
    class Home extends React.Component{
        render(){
            return (
                <div>
                    <div>{message}</div>
                    <button onClick={myFn}>按钮</button>
                </div>
            )
        }
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));

    function myFn() {
        message = 'www.it666.com';
        ReactDOM.render(<Home/>, document.getElementById('app'));
    }
</script>
</body>
</html>

```

## 有状态和无状态组件

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<!--
1.有状态组件和无状态组件?
- 首先需要明确的是, 组件中的状态(state)指的其实就是数据
    + 有状态组件指的就是有自己数据的组件(逻辑组件)
    + 无状态组件指的就是没有自己数据的组件(展示组件)

2.如何定义自己的状态?
- 凡是继承于React.Component的组件, 默认都会从父类继承过来一个state属性
  这个state属性就是专门用来保存当前数据的
- 所以但凡是继承于React.Component的组件, 都是有状态组件
- 所以但凡不是继承于React.Component的组件, 都是无状态组件
- 所以类组件就是有状态组件
- 所以函数组件就是无状态组件
-->
<div id="app"></div>
<script type="text/babel">
    function Home() {
        return (
            <div>
                <div>{state + ''}</div>
                <button onClick={myFn}>按钮</button>
            </div>
        )
    }
    /*
    class Home extends React.Component{
        render(){
            return (
                <div>
                    <div>{this.state + ''}</div>
                    <button onClick={myFn}>按钮</button>
                </div>
            )
        }
    }
     */
    ReactDOM.render(<Home/>, document.getElementById('app'));

    function myFn() {
        message = 'www.it666.com';
        ReactDOM.render(<Home/>, document.getElementById('app'));
    }
</script>
</body>
</html>

```

## this问题

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<!--
1.this指向问题
- 在ES6之前, 方法中的this谁调用就是谁,
  并且还可以通过call/apply/bind方法修改this
- 从ES6开始, 新增了箭头函数, 箭头函数没有自己的this,
  箭头函数中的this是函数外最近的那个this
  并且由于箭头函数没有自己的this, 所以不能通过call/apply/bind方法修改this
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions


2.监听事件中的this
- React内部在调用监听方法的时候, 默认会通过apply方法将监听方法的this修改为了undefined
  所以在监听方法中无法通过this拿到当前组件的state. (undefined.state)
- 如果想在监听方法中拿到当前组件的state, 那么就必须保证监听方法中的this就是当前实例
  所以我们可以借助箭头函数的特性, 让React无法修改监听方法中的this, 让监听方法中的this就是当前实例
-->
<div id="app"></div>
<script type="text/babel">
    // let message = '知播渔';
    class Home extends React.Component{
        constructor(){
            super();
            this.state = {
                message:'知播渔123'
            }
        }
        render(){
            return (
                <div>
                    <div>{this.state.message}</div>
                    <button onClick={this.myFn}>按钮</button>
                </div>
            )
        }
        myFn = () => {
            // 注意点: React在调用监听方法的时候, 会通过apply修改监听方法的this
            //        所以在普通的方法中, 我们拿到的this是undefined,
            //        所以我们无法在普通的方法中通过this拿到当前组件的state
            // func.apply(context, funcArgs);
            // console.log(this, '----------');
            this.state.message = 'www.it666.com';
            console.log(this.state.message);
            ReactDOM.render(<Home/>, document.getElementById('app'));
        }
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));

    // function myFn() {
    //     message = 'www.it666.com';
    //     ReactDOM.render(<Home/>, document.getElementById('app'));
    // }
</script>
</body>
</html>

```

## state注意点

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<!--
1.state属性注意点
- 永远不要直接修改state
- 直接修改state并不会触发界面更新
- 只有使用setState方法修改state才会触发界面更新
https://zh-hans.reactjs.org/docs/state-and-lifecycle.html
-->
<div id="app"></div>
<script type="text/babel">
    class Home extends React.Component{
        constructor(){
            super();
            this.state = {
                message:'知播渔123'
            }
        }
        render(){
            return (
                <div>
                    <div>{this.state.message}</div>
                    <button onClick={this.myFn}>按钮</button>
                </div>
            )
        }
        myFn = () => {
            // 注意点:
            // 如果要修改state中的数据, 那么永远不要直接修改
            // 如果要修改state中的数据, 那么需要通过setState方法来修改
            // this.state.message = 'www.it666.com';
            // console.log(this.state.message);
            this.setState({
                message: 'www.it666.com'
            })
            //ReactDOM.render(<Home/>, document.getElementById('app'));
        }
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));
</script>
</body>
</html>

```

## 数据驱动更新原理

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    class NJComponent extends React.Component{
        constructor(){
            super();
            this.state = null;
        }
        setState(val){
            console.log('需要更新界面');
            this.state = val;
            ReactDOM.render(this.render(), document.getElementById('app'));
        }
    }
    class Home extends NJComponent{
        constructor(){
            super();
            this.state = {
                message:'知播渔123'
            }
        }
        render(){
            return (
                <div>
                    <div>{this.state.message}</div>
                    <button onClick={this.myFn}>按钮</button>
                </div>
            )
        }
        myFn = () => {
            this.state.message = 'www.it666.com';

            this.setState({
                message: 'www.it666.com'
            })
        }
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));
</script>
</body>
</html>

```

## 万金油案例

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../react17/react.development.v17.js"></script>
    <script src="../react17/react-dom.development.v17.js"></script>
    <script src="../react17/babel.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    /*购物车*/
    class Counter extends React.Component{
        constructor(){
            super();
            this.state = {
                count : 0
            }
        }
        render(){
            return (
                <div>
                    <button onClick={this.sub}>减少</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.add}>增加</button>
                </div>
            )
        }
        sub = ()=>{
            this.setState({
                count: this.state.count - 1
            })
        }
        add = ()=>{
            this.setState({
                count: this.state.count + 1
            })
        }
    }
    ReactDOM.render(<Counter/>, document.getElementById('app'));
</script>
</body>
</html>

```


