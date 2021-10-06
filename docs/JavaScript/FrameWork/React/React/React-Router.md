# React-Router
## 基本使用

### 什么是路由?

- 路由维护了URL地址和组件的映射关系, 通过这个映射关系,我们就可以根据不同的URL地址，去渲染不同的组件



### 如何在React中使用路由？

```shell
# 安装react-router
npm install react-router-dom
```

[官网文档地址](https://reactrouter.com/web/guides/quick-start) 

- 通过指定监听模式
  - BrowserRouter history模式 http://www.it666.com/home
  - HashRouter hash模式 http://www.it666.com/#/home
- 通过Link修改路由URL地址
- 通过Route匹配路由地址



BrowserRouter和HashRouter作用:

- 指定路由的监听模式 history模式 / hash模式

Link作用:

- 用于修改URL的资源地址

Route作用:

- 用于维护URL和组件的关系
- Route是一个占用组件, 将来它会根据匹配到的资源地址渲染对应的组件

```html
    render(){
        // 需求: 界面上有两个按钮, 点击不同按钮显示不同组件
        return (
            <div>
                <HashRouter>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                </HashRouter>
            </div>
        )
    }
```

## React路由注意点

- react-router4之前, 所有路由代码都是统一放到react-router中管理的

- react-router4开始, 拆分为了两个包react-router-dom和react-router-native
  - react-router-dom 在浏览器中使用路由
  - react-router-native 在原生应用中使用路由
- BrowserRouter history模式使用的是H5的特性, 所以兼容性会比HashRouter hash模式差一些
- 在企业开发中如果不需要兼容低级版本浏览器, 建议使用BrowserRouter

​      如果需要兼容低级版本浏览器, 那么只能使用HashRouter

- 无论是Link还是Route都只能放到BrowserRouter和HashRouter中才有效





Route注意点

- 默认情况下Route在匹配资源地址时, 是模糊匹配

 如果必须和资源地址一模一样才匹配, 那么需要添加exact属性, 开启精准匹配



Link注意点

- 默认情况下Link会渲染成一个a标签, 如果想渲染成其他的元素, 可以通过手动路由跳转来实现



NavLink注意点

- 默认情况下NavLink在匹配资源地址时, 是模糊匹配，如果必须和资源地址一模一样才匹配, 那么需要添加exact属性, 开启精准匹配
- NavLink在匹配路由的时候, 是利用当前资源地址从左至右的和path中的地址进行匹配的，只要当前资源地址从左至右完整的包含了path中的地址那么就认为匹配



## Switch

默认情况下路由会从上至下匹配所有的Route, 只要匹配都会显示

但是在企业开发中大部分情况下, 我们希望的是一旦有一个匹配到了后续就不要再匹配了

此时我们就可以通过Switch来实现

```html
class App extends React.PureComponent{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>

                    <Switch>
                        <Route exact path={'/home'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        {/*如果Route没有指定path, 那么表示这个Route和所有的资源地址都匹配*/}
                        <Route component={Other}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
```

## Redirect

资源重定向, 也就是可以在访问某个资源地址的时候重定向到另外一个资源地址

例如: 访问/user 重定向到 /login

```jsx
import React from 'react';
import {Redirect} from 'react-router-dom';

class User extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        }
    }
    render(){
        let user = (
            <div>
                <h1>用户界面</h1>
                <p>用户名: jonathan_lee</p>
                <p>密码: www.it666.com</p>
            </div>
        );
        let login = <Redirect to={'/login'}/>
        return this.state.isLogin ? user : login;
    }
}

export default User;
```



## 嵌套路由

嵌套路由(子路由):路由里面又有路由, 我们就称之为嵌套路由



注意点:如果要使用嵌套路由, 那么外层路由不能添加精准匹配exact

注意点: 由于当前组件是在BrowserRouter or HashRouter中显示的,所以在当前组件中不用使用BrowserRouter or HashRouter来包裹NavLink/Switch/Route



## 手动路由跳转

手动路由跳转:不通过Link/NavLink来设置资源地址, 而是通过JS来设置资源地址



```js
// 如果是Hash模式, 那么只需要通过JS设置Hash值即可
// window.location.hash = '/discover/playlist';
// 如果一个组件是通过路由创建出来的, 那么系统就会自动传递一个history给我们
// 我们只需要拿到这个history对象, 调用这个对象的push方法, 通过push方法修改资源地址
// console.log(this.props.history);

*this*.props.history.push('/discover/playlist');
```

手动路由跳转注意点:

- 只有通过路由创建出来的组件才有history对象, 所以不能在根组件中使用手动路由跳转
- 如果想在根组件中使用手动路由跳转, 那么需要借助一个withRouter高阶组件

```js
export default withRouter(App);
```



## URL参数

路由参数传递

- URL参数?key=value&key=value
- 路由参数(动态路由)/path/:key
- 对象

https://reactrouter.com/web/api/Link

```jsx
import React from 'react';

class Home extends React.PureComponent{
    constructor(props){
        super(props);
        // console.log(this.props.location);
        // console.log(this.props.location.search);
        let query = this.props.location.search.substring(1);
        query = query.split('&');
        let obj = {};
        query.forEach((item)=>{
            // name=lnj  [name, lnj]
            let temp = item.split('=');
            obj[temp[0]] = temp[1];
        });
        console.log(obj);
    }
    render(){
        return (
            <div>Home</div>
        )
    }
}

export default Home;

```

## 动态路由

```jsx
import React from 'react';

class About extends React.PureComponent{
    constructor(props){
        super(props);
        // console.log(this.props.match);
        console.log(this.props.match.params);
    }
    render(){
        return (
            <div>About</div>
        )
    }
}

export default About;
```

## 路由传参

```jsx
<NavLink to={{     pathname: "/user",     search: "",     hash: "",     state: obj}} activeStyle={{color:'red'}}>User</NavLink>{/*组件中可以使用*/}console.log(this.props.location.state);
```



## 集中式管理

现在虽然我们能通过路由实现组件切换, 但是现在我们的路由都比较分散, 不利于我们管理和维护,所以React也考虑到了这个问题, 也给我们提供了统一管理路由的方案
https://www.npmjs.com/package/react-router-config

1. 安装依赖

```sh
npm install --save react-router-config
```

2. 创建router目录且创建index.js文件

```js
import Home from '../components/Home'import About from '../components/About'import Other from '../components/Other'import User from '../components/User'import Login from '../components/Login'import Discover from '../components/Discover'const routers = [    {        path:'/home',        exact:true,        component: Home    },    {        path:'/about/:name/:age',        exact:true,        component: About    },    {        path:'/user',        exact:true,        component: User    },    {        path:'/login',        exact:true,        component: Login    },    {        path:'/discover',        exact:true,        component: Discover    },    {        component: Other    },];export default routers;
```

```jsx
import React from 'react';import {NavLink, withRouter} from 'react-router-dom';import {renderRoutes} from 'react-router-config';import routers from './router/index';{/*   <Switch>    <Route exact path={'/home'} component={Home}/>    <Route exact path={'/about/:name/:age'} component={About}/>    <Route exact path={'/user'} component={User}/>    <Route exact path={'/login'} component={Login}/>    <Route path={'/discover'} component={Discover}/>    <Route component={Other}/>   </Switch>*/}{renderRoutes(routers)}export default withRouter(App);
```

嵌套路由的方式

```js
import Home from '../components/Home'import About from '../components/About'import Other from '../components/Other'import User from '../components/User'import Login from '../components/Login'import Discover from '../components/Discover'import {Hot, TopList, PlayList} from '../components/Discover';const routers = [    {        path:'/home',        exact:true,        component: Home    },    {        path:'/about/:name/:age',        exact:true,        component: About    },    {        path:'/user',        exact:true,        component: User    },    {        path:'/login',        exact:true,        component: Login    },    {        path:'/discover',        component: Discover,        routes:[            {                path:'/discover',                exact:true,                component: Hot,            },            {                path:'/discover/toplist',                exact:true,                component: TopList,            },            {                path:'/discover/playlist',                exact:true,                component: PlayList,            },        ]    },    {        component: Other    },];export default routers;
```

