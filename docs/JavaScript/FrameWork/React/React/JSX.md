# JSX

## JSX注释

- 在JSX中遇到<会当做XML元素解析, 遇到{会当做JS解析
  所以在JSX中不能使用HTML的注释
- JSX代码用于定义网页的结构, 而网页的内容中必然会包含内容
  所以直接在JSX中使用单行注释//或多行注释/**/会被当做元素的内容处理
- 正确打开姿势:
  https://zh-hans.reactjs.org/docs/faq-build.html
- 所以在{}中使用JS注释

## JSX绑定属性

- 在JSX中只要看到{}就会当做JS解析(执行里面的JS代码)
  所以无论是绑定属性,还是绑定类名,还是绑定样式, 只需要将字符串改为{}
  然后再通过JS动态获取, 动态绑定即可

- 绑定普通属性
- 绑定类名(class)
  +  由于JSX本质是转换成JS代码, 而在JS中class有特殊含义, 所以不能使用
         同理可证, 但凡是属性名称是JS关键字的都不能直接使用，className
- 绑定样式(style)
  + 由于样式是键值对形式的, 所以在JSX中如果想要动态绑定样式
    必须将样式放到一个对象中, 并且所有以-连接的样式名称都要转换成驼峰命名

## JSX嵌入内容

```html
<!--
2.JSX嵌入数据注意点
- 以下代码等价
<div></div>
<div>{[]}</div>
<div>{false}</div>
<div>{true}</div>
<div>{null}</div>
<div>{undefined}</div>
- 要想显示以上内容必须先转换成字符串
- 以下代码报错
<div>{{}}</div>
- 其它数据正常显示
-->
<!--
1.JSX嵌入表达式
- 只要是合法的表达式, 都可以嵌入到JSX中
-->

render(){
  return (
    <div>
       {/*1.任何合法的JS表达式都可以嵌入到{}中*/}
       <p>{this.state.flag ? '为真' : '为假'}</p>
       {/*2.以下嵌入的内容不会被显示出来 [] true false null undefined*/}
       <p>{[]}</p>
       <p>{true}</p>
       <p>{false}</p>
       <p>{null}</p>
       <p>{undefined}</p>
        {/*3.如果想显示上面的这些内容, 那么就必须先转换成字符串,但是对于空数组来说, 哪怕转换成了字符串, 也不能显示*/}
       <p>{[].toString()}</p>
       <p>{true + ''}</p>
       <p>{false + ''}</p>
       <p>{null + ''}</p>
       <p>{undefined + ''}</p>
         {/*4.除了上述内容以外, 其它的内容都可以正常显示*/}
       <p>我是段落</p>
       <p>{this.state.message}</p>
     </div>
            )
        }
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));

```

## JSX灵活性

- JSX使我们在JS中拥有了直接编写XML代码的能力
- 所以在JS中能干的事, 在JSX中都能干
- 可以模仿v-show,v-if，v-for

## JSX书写规范

- JSX的顶层只能有一个根元素
- JSX中的标签可以是单标签也可以是双标签, 但如果是单标签必须闭合(/>)
- 如果JSX中包含多个元素, 建议使用()包裹

## JSX绑定事件

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
1.JSX绑定事件
- JSX中绑定事件必须使用驼峰命名
    + <button onClick={this.btnClick}>按钮</button>

2.监听方法this处理
- 箭头函数
- 创建时通过bind修改
- 注册时通过bind修改
- 普通函数和箭头函数结合

https://zh-hans.reactjs.org/docs/handling-events.html

3.企业开发推荐方案
- 普通函数和箭头函数结合
-->
<div id="app"></div>
<script type="text/babel">
    class Home extends React.Component{
        constructor(){
            super();
            this.state = {
                message: '知播渔'
            }
            this.myClick = this.btnClick.bind(this);
        }
        render() {
            return (
                <div>
                    <div>{this.state.message}</div>
                    {/*
                    <button onClick={this.btnClick.bind(this)}>按钮</button>
                    */}
                    {/*
                    <button onClick={this.myClick}>按钮</button>
                    */}
                    <button onClick={()=>{this.btnClick()}}>按钮</button>
                </div>
            )
        }
        /*
        2.如何解决监听方法中this默认是undefined的问题
        2.1通过箭头函数
        2.2通过添加监听方法的时候, 手动通过bind修改监听方法中的this
        2.3通过在构造函数中,  手动通过bind修改监听方法中的this
        2.4手动绑定一个箭头函数, 然后再箭头函数的函数体中手动调用监听方法
           因为箭头函数中的this, 就是当前的实例对象
           因为监听方法并不是React调用的, 而是我们在箭头函数中手动调用的
           因为普通的方法, 默认情况下谁调用就是谁
        注意点: 在企业开发中, 最为推荐的一种方式就是第四种
        * */
        btnClick(){
            // alert(123);
            console.log(this, '----');
        }
        /*
        btnClick = ()=>{
            console.log(this);
        }
        /*
        1.事件监听方法中的this
        默认情况下React在调用事件监听方法的时候, 是通过apply来调用的
        并且在调用的时候将监听方法中的this修改为了undefined
        所以默认情况下我们是无法在监听方法中使用this的
        * */
        /*
        btnClick(){
            // alert(123);
            console.log(this);
        }
         */
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));
</script>
</body>
</html>

```

## JSX事件传参

```html
<button onClick={()=>{this.btnClick(1, 'abc')}}>按钮5</button>
```

## JSX事件对象

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
1.JSX事件参数
- 和原生JS一样, React在执行监听方法会传递一个事件对象给我们
  但是React传递给我们的并不是原生的事件对象, 而是一个React自己合成的事件对象

2.什么是合成事件?
- 合成事件是 React 在浏览器事件基础上做的一层包装，
  基本上有着和浏览器的原生事件有相同的接口，
  也能够进行 stopPropagation() 和 preventDefault()，
  并且合成事件在所有浏览器中的工作方式相同

- 如果由于某种原因需要浏览器的原生事件，
  则能够简单的通过 nativeEvent 属性就能够获取

- 注意点:
    + 从 ReactV0.14 起，从事件处理程序返回 false 将不再停止事件的传递。
      应当手动调用 e.stopPropagation() 或 e.preventDefault() 去阻止传递。
    + 合成事件 是合并而来。这意味着 合成事件 对象可能会被重用，
      而且在事件回调函数被调用后，所有的属性都会无效。出于性能考虑，你不能通过异步访问事件。

3.React事件处理性能优化
- React并不会把事件处理函数直接绑定到真实的节点上，
  而是使用一个统一的事件监听器 ReactEventListener，
  把所有事件绑定到结构的最外层 document 节点上，依赖冒泡机制完成事件委派

- ReactEventListener：React事件监听器维持了一个映射来保存所有组件内部的事件监听和处理函数，
  负责事件注册和事件分发。当组件在挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象；
  当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。
  这样简化了事件处理和回收机制，提升了效率


https://zh-hans.reactjs.org/docs/handling-events.html
https://zh-hans.reactjs.org/docs/events.html
-->
<div id="app"></div>
<script type="text/babel">
    class Home extends React.Component {
        constructor() {
            super();
            this.state = {
                message: '知播渔'
            }
        }
        render() {
            return (
                <div>
                    <div>{this.state.message}</div>
                    {/*
                    在React中当监听方法被触发的时候, React也会传递一个事件对象给我们
                    但是React传递给我们的这个事件对象并不是原生的事件对象,
                    而是React根据原生的事件对象自己合成的一个事件对象
                    注意点: 虽然传递给我们的是React自己合成的事件对象, 但是提供的API和元素的几乎一致
                           如果你用到了一个没有提供的API, 那么你也可以根据合成的事件对象拿到原生的事件对象
                    */}
                    <button onClick={(e)=>{console.log(e)}}>按钮</button>
                    <button onClick={(e)=>{console.log(e.nativeEvent)}}>按钮</button>
                </div>
            )
        }
    }
    ReactDOM.render(<Home/>, document.getElementById('app'));
</script>
</body>
</html>

```

