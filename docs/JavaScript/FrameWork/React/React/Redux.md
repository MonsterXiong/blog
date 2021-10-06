# Redux

## 核心概念

[官方文档](https://www.redux.org.cn/docs/introduction/CoreConcepts.html)



### 什么是Redux？

Redux是一个管理状态（数据）的容器，提供了可预测的状态管理

### 什么是可预测的状态管理？

数据 在什么时候， 因为什么， 发生了什么改变，都是可以控制和追踪的， 我们就称之为预测的状态管理

### 为什么要使用Redux？

- React是通过数据驱动界面更新的，React负责更新界面， 而我们负责管理数据
- 默认情况下我们可以在每个组件中管理自己的状态， 但是现在前端应用程序已经变得越来越复杂
  状态之间可能存在依赖关系（父子、共享等），一个状态的变化会引起另一个状态的变化
- 所以当应用程序复杂的时候， 状态在什么时候改变，因为什么改变，发生了什么改变，就会变得非常难以控制和追踪
- 所以当应用程序复杂的时候，我们想很好的管理、维护、追踪、控制状态时， 我们就需要使用Redux

### Redux核心理念

- 通过store来保存数据
- 通过action来修改数据
- 通过reducer将store和action串联起来

```js
import React from 'react';

/*

                    -------------
        --------->  | Component |  ---------
       |            -------------           |
       |                                    ↓
-------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  Action   |
-------------       -------------       -------------


const initialState = {
   heroes:[
     {name:'鲁班'， age:18},
     {name:'虞姬'， age:22},
   ]
}

const action = {type:'CHANGE_NAME', playload:{index:0, newName:'黄忠'}}
const action = {type:'CHANGE_AGE', playload:{index:1, newAge:66}}

function reducer(state = initialState, action){
    switch(action.type){
        case: 'CHANGE_NAME':
            // 修改姓名
            return newState;
        case: 'CHANGE_AGE':
             // 修改年龄
            return newState;
    }
}


* */
class App extends React.PureComponent{
    render(){
        return (
            <div></div>
        )
    }
}

export default App;

```

## 三大原则

- 单一数据源
  -  整个应用程序的state只存储在一个 store 中
  - Redux并没有强制让我们不能创建多个Store，但是那样做并不利于数据的维护
  - 单一的数据源可以让整个应用程序的state变得方便维护、追踪、修改



- State是只读的
  - 唯一修改State的方法一定是触发action，不要试图在其他地方通过任何的方式来修改State
  - 这样就确保了View或网络请求都不能直接修改state，它们只能通过action来描述自己想要如何修改stat；
  - 这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心race condition（竟态）的问题；

- 使用纯函数来执行修改
  - 通过reducer将 旧state和 action联系在一起，并且返回一个新的State：
  - 随着应用程序的复杂度增加，我们可以将reducer拆分成多个小的reducers，分别操作不同state tree的一部分
  - 但是所有的reducer都应该是纯函数，不能产生任何的副作用

### 什么是纯函数？

返回结果只依赖于它的参数，并且在执行过程里面没有副作用

```js
// 纯函数
function sum(num1, num2){
    return num1 + num2;
}

// 非纯函数
let num1 = 10;
function sum(num2){
    return num1 + num2;
}

// 纯函数
const num1 = 10;
function sum(num2){
    return num1 + num2;
}
```

官方文档： https://www.redux.org.cn/docs/introduction/ThreePrinciples.html



## 基本使用

```shell
npm i redux
```

```js
const redux = require('redux');

// 定义一个状态
let initialState = {
    count: 0
};

// 利用store来保存状态（state）
const store = redux.createStore(reducer);

// 利用action来修改状态
const addAction = {type:'ADD_COUNT', num: 1};
const subAction = {type:'SUB_COUNT', num: -1};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COUNT':
            return {count: state.count + action.num};
        case 'SUB_COUNT':
            return {count: state.count - action.num};
        default:
            return state;
    }
}

// 在组件中如何监听状态的改变？
store.subscribe((a)=>{
    console.log(store.getState());
});

// 在组件中如何从Store中获取存储的状态？
console.log(store.getState());

// 在组件中如何修改Store中存储的状态？
store.dispatch(addAction);

// console.log(store.getState());

```



## 简单优化

> 当前代码存在的问题：
>
> 1.store、action、reducer代码都写在一个文件中， 不利于维护
>
> 2.action和reducer中都是使用字符串来指定和判断操作类型， 写错不报错
>
> 3.action中的操作写死了， 不够灵活
>
> 分为store.js,reducer.js,constants.js,action.js

```js
// store.js
import {createStore} from 'redux'
import reducer from './reducer';

// 利用store来保存状态（state）
const store = createStore(reducer);

export default store;
```

```js
// constants.js
export const ADD_COUNT = 'ADD_COUNT';
export const SUB_COUNT = 'SUB_COUNT';
```

```js
// reducer.js
import {ADD_COUNT,SUB_COUNT} from './constants';

// 定义一个状态
let initialState = {
    count: 666
};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {count: state.count + action.num};
        case SUB_COUNT:
            return {count: state.count - action.num};
        default:
            return state;
    }
}

export default reducer;
```

```js
// action.js
import {ADD_COUNT,SUB_COUNT} from './constants';

// 利用action来修改状态
export const addAction = (num)=>{
    return {type:ADD_COUNT, num: num};
};
export const subAction = (num)=>{
    return {type:SUB_COUNT, num: num};
};

```

```js
// app.js
import React from 'react';
import store from './store/store';
import {addAction, subAction} from './store/action';

class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count: store.getState().count
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                count: store.getState().count
            })
        })
    }
    componentWillUnmount() {
        store.unsubscribe();
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={()=>{this.btnClick()}}>增加</button>
            </div>
        )
    }
    btnClick(){
        store.dispatch(addAction(5));
    }
}

export default App;

```

## 其他组件中使用

重复代码

```js
import React from 'react';
import store from '../store/store';
import {addAction, subAction} from '../store/action';

class About extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count: store.getState().count
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                count: store.getState().count
            })
        })
    }
    componentWillUnmount() {
        store.unsubscribe();
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={()=>{this.btnClick()}}>递减</button>
            </div>
        )
    }
    btnClick(){
        store.dispatch(subAction(1));
    }
}

export default About;

```

## react-redux

1. 当前使用Redux存在的问题

- 冗余代码太多, 每次使用都需要在构造函数中获取

​       每次使用都需要监听和取消监听

- 操作store的代码过于分散



2. 如何解决冗余代码太多问题?

- 使用React-Redux



3. 什么是React-Redux

- React-Redux是Redux官方的绑定库,能够让我们在组件中更好的读取和操作Redux保存的状态

https://react-redux.js.org/introduction/quick-start

```shell
npm i react-redux
```



```js
// index.js
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store';

ReactDOM.render(
    /*只要利用Provider将祖先组件包裹起来,
      并且通过Provider的store属性将Redux的store传递给Provider
      那么就可以在所有后代中直接使用Redux了*/
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
    , document.getElementById('root'));
```

```js
import React from 'react';
import { connect } from 'react-redux'
import {addAction, subAction} from '../store/action';

class Home extends React.PureComponent{
    render(){
        return (
            <div>
                {/*通过props来使用redux中保存的数据*/}
                <p>{this.props.count}</p>
                <button onClick={()=>{this.props.increment()}}>递增</button>
            </div>
        )
    }
}
// 在mapStateToProps方法中告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state)=>{
    return {
        count: state.count
    }
};
// 在mapDispatchToProps方法中告诉React-Redux, 需要将哪些派发的任务映射到当前组件的props上
const mapDispatchToProps = (dispatch) =>{
    return {
        increment(){
            dispatch(addAction(1));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

```



## react-redux实现原理

```js
// connect.js
import ReactDOM from 'react-dom';
import React from 'react';
import store from '../store/store';

function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceComponent(WrappedComponent) {
        class AdvComponent extends React.PureComponent{
            constructor(props){
                super(props);
                this.state = {
                    storeState : {...mapStateToProps(store.getState())}
                }
            }
            componentDidMount() {
                store.subscribe(()=>{
                    this.setState({
                        storeState: {...mapStateToProps(store.getState())}
                    })
                })
            }
            componentWillUnmount() {
                store.unsubscribe();
            }
            render() {
                return (<WrappedComponent {...this.props}
                                      			 {...mapStateToProps(store.getState())}
                                          {...mapDispatchToProps(store.dispatch)}/>)
            }
        }
        return AdvComponent;
    }
}
export default connect;

```

## redux-thunk

1. 当前保存异步数据存在的问题

- 异步数据既然要保存到Redux中, 所以获取异步数据也应该是Redux的一部分，所以获取异步数据的代码应该放到Redux中, 而不是放到组件生命周期方法中



2. 如何在Redux中获取网络数据?

- 使用redux-thunk中间件



3. redux-thunk作用?

- 默认情况下dispatch只能接收一个对象,
- 使用redux-thunk可以让dispatch除了可以接收一个对象以外, 还可以接收一个函数
- 是的通过dispatch派发一个函数的时候能够去执行这个函数, 而不是执行reducer函数



4. redux-thunk如何使用?

```shell
npm install redux-thunk
```



- 在创建store时应用redux-thunk中间件

- 在action中获取网络数据

- 在组件中派发action



官方文档地址: https://www.redux.org.cn/docs/advanced/AsyncActions.html

```js
// store.js
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';

// 创建store之前, 通过applyMiddleware方法, 告诉Redux需要应用哪些中间件
const storeEnhancer = applyMiddleware(thunkMiddleware);
// 利用store来保存状态（state）
const store = createStore(reducer, storeEnhancer);

export default store;
```

```js
// reducer.js
import {
    ADD_COUNT,
    SUB_COUNT,
    CHANGE_INFO
} from './constants';

// 定义一个状态
let initialState = {
    count: 666,
    info: {}
};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            // ...state,防止其他数据丢失
            return {...state ,count: state.count + action.num};
        case SUB_COUNT:
            return {...state ,count: state.count - action.num};
        case CHANGE_INFO:
            return {...state ,info: action.info};
        default:
            return state;
    }
}

export default reducer;
```

```js
// action.js
import {
    ADD_COUNT,
    SUB_COUNT,
    CHANGE_INFO
} from './constants';

// 利用action来修改状态
export const addAction = (num)=>{
    return {type:ADD_COUNT, num: num};
};
export const subAction = (num)=>{
    return {type:SUB_COUNT, num: num};
};
export const changeAction = (info)=>{
    return {type:CHANGE_INFO, info: info};
};
export const getUserInfo = (dispatch, getState) =>{
    fetch('http://127.0.0.1:7001/info')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            // console.log('在action中获取到的网络数据', data);
            dispatch(changeAction(data));
        })
        .catch((error)=>{
            console.log(error);
        })
}

```

```js
// About.js
import React from 'react';
import { connect } from 'react-redux'
import {addAction, subAction, getUserInfo} from '../store/action';
/*
使用redux-thunk之前:
                 --------------------
        ------>  | Component 异步请求 |  -----
       |         --------------------       |
       |                                    ↓
-------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  Action   |
-------------       -------------       -------------

使用redux-thunk之后:
                    -------------
        --------->  | Component |  ---------------------------------
       |            -------------                                   |
       |                                                            ↓
-------------       -------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  异步请求   | <---- |  Action   |
-------------       -------------       -------------       -------------
* */
class About extends React.PureComponent{
    componentDidMount() {
        this.props.changeInfo();
    }

    render(){
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={()=>{this.props.decrement()}}>递减</button>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.age}</p>
            </div>
        )
    }
}
// 在mapStateToProps方法中告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state)=>{
    return {
        count: state.count,
        info: state.info
    }
};
// 在mapDispatchToProps方法中告诉React-Redux, 需要将哪些派发的任务映射到当前组件的props上
const mapDispatchToProps = (dispatch) =>{
    return {
        decrement(){
            dispatch(subAction(1));
        },
        changeInfo(info){
            // redux-thunk中间件作用:
            // 可以让dispatch方法可以接收一个函数, 可以让我们在通过dispatch派发任务的时候去执行我们传入的方法
            dispatch(getUserInfo);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(About);

```

```js
/*
使用redux-thunk之前:
                 --------------------
        ------>  | Component 异步请求 |  -----
       |         --------------------       |
       |                                    ↓
-------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  Action   |
-------------       -------------       -------------

使用redux-thunk之后:
                    -------------
        --------->  | Component |  ---------------------------------
       |            -------------                                   |
       |                                                            ↓
-------------       -------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  异步请求   | <---- |  Action   |
-------------       -------------       -------------       -------------
* */
```

## redux-thunk原理

```js
const redux = require('redux');

// 定义一个状态
let initialState = {
    count: 0
};

// 利用store来保存状态（state）
const store = redux.createStore(reducer);

// 利用action来修改状态
const addAction = {type:'ADD_COUNT', num: 1};
const subAction = {type:'SUB_COUNT', num: 1};
const getUserInfo = (dispatch, getState)=>{
    setTimeout(()=>{
        console.log('获取到了异步数据');
        dispatch(addAction);
    }, 3000);
};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    console.log('reducer被执行了');
    switch (action.type) {
        case 'ADD_COUNT':
            return {count: state.count + action.num};
        case 'SUB_COUNT':
            return {count: state.count - action.num};
        default:
            return state;
    }
}

// 在组件中如何修改Store中存储的状态？
/*
console.log('执行reducer之前做的事情');
store.dispatch(addAction);

console.log('执行reducer之前做的事情');
store.dispatch(subAction);
 */

/*
在redux-thunk中, 如果通过dispatch派发的任务是一个对象, 那么就立即执行reducer
                如果通过dispatch派发的任务是一个函数, 那么就执行这个函数
* */
/*
function thunkDispatch(action) {
    // console.log('执行reducer之前做的事情');
    // store.dispatch(action);
    if(typeof action === 'function'){
        action(store.dispatch, store.getState);
    }else{
        store.dispatch(action);
    }
}

// thunkDispatch(addAction);
thunkDispatch(getUserInfo);
 */
function thunkDispath(store) {
    const storeDispath = store.dispatch;
    const storeGetState = store.getState;

    function myDispatch(action) {
        if(typeof action === 'function'){
            action(storeDispath, storeGetState);
        }else{
            storeDispath(action);
        }
    }
    // 将官方的dispatch函数修改为我们自定义的dispatch函数
    store.dispatch = myDispatch;
}

thunkDispath(store);

// 调用的实际是我们自定义的dispatch函数
// store.dispatch(addAction);
store.dispatch(getUserInfo);

```

## redux-saga



### 什么是Redux-saga?

- redux-saga和redux-thunk一样,是一个Redux中获取存储异步数据的中间件

- redux-saga可以直接拦截dispatch派发的action, 从而实现在执行reducer之前执行一些其它操作



### 如何使用Redux-saga?

```shell
# 安装安装Redux-saga
npm install redux-saga
```



- 在创建store时应用redux-saga中间件

- 在生成器函数中获取网络数据

- 在组件中派发action



https://redux-saga-in-chinese.js.org/

```js
// saga.js
import {takeEvery, put} from 'redux-saga/effects'
import {GET_USER_INFO} from './constants';
import {changeAction} from './action';

function *myHandler() {
    // 获取网络数据
    const data = yield fetch('http://127.0.0.1:7001/info')
        .then((response)=>{
            return response.json();
        })
        .catch((error)=>{
            console.log(error);
        });
    // console.log(data);
    // 保存获取到的数据
    // 相当于 store.dispatch(changeAction());
    yield put(changeAction(data));

}
function *mySaga() {
    // 指定需要拦截的action类型
    // 指定拦截到这个类型的action之后交给谁来处理
    yield takeEvery(GET_USER_INFO, myHandler)
}
export default mySaga;

```

```js
// store.js
import {createStore, applyMiddleware } from 'redux';
/*
注意点: 如果导入的是redux-thunk, 那么返回给我们的是一个中间件对象
       如果导入的是redux-saga, 那么返回给我们的是一个用于创建中间件对象的方法
* */
// import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

import reducer from './reducer';

// 通过createSagaMiddleware方法创建saga中间件对象
const sagaMiddleware = createSagaMiddleware();
// 创建store之前, 通过applyMiddleware方法, 告诉Redux需要应用哪些中间件
const storeEnhancer = applyMiddleware(sagaMiddleware);
// 利用store来保存状态（state）
const store = createStore(reducer, storeEnhancer);
/*
注意点: 如果是redux-thunk, 那么在创建store的时候指定完中间件即可
       如果是redux-saga, 那么除了需要在创建store的时候指定中间件以外, 还需要手动的调用中间件的run方法才行
* */
// 我们可以利用传入的生成器告诉redux-saga, 需要拦截哪些dispatch派发的action
sagaMiddleware.run(mySaga);

export default store;

```

注意点: 

- 如果导入的是redux-thunk, 那么返回给我们的是一个中间件对象
- 如果导入的是redux-saga, 那么返回给我们的是一个用于创建中间件对象的方法



## redux-saga实现原理

```js
// saga.js
/*
// 定义了一个生成器函数, 这个函数保存了3个状态
function *gen() {
    yield '123';
    yield '456';
    yield '789';
}
// 只要执行生成器函数, 就会拿到一个可迭代对象
// 注意点: 执行生成器函数并不会执行对应的函数体
const result = gen();
// console.log(result);
// 注意点: 只要调用一个next方法, 就会执行一个yield
console.log(result.next()); // { value: '123', done: false }
console.log(result.next()); // { value: '456', done: false }
console.log(result.next()); // { value: '789', done: false }
 */
/*
function *gen() {
    console.log('1 + 1');
    yield 1 + 1;
    console.log('2 + 2');
    yield 2 + 2;
    console.log('3 + 3');
    yield 3 + 3;
}
const result = gen();
// 注意点: 每次调用next方法执行的是当前对应yield和上次yield之前所有的代码
console.log(result.next());
console.log(result.next());
console.log(result.next());
 */
/*
function *gen() {
    const a = yield 1 + 1;
    console.log('a = ', a);
    const b = yield 2 + 2;
    console.log('b = ', b);
    const c = yield 3 + 3;
    console.log('c = ', c);
}
const result = gen();

// { value: 2, done: false }
// console.log(result.next());
// a =  undefined
// { value: 4, done: false }
// 注意点: 默认情况下并不会将yield的执行结果赋值给某个变量
//        在生成器函数中如果想给上一次yield对应的变量赋值,
//        那么就必须在下一次调用next的时候给next传参
//        生成器函数会将下一次next传递的参数作为上一次yield变量的值
// console.log(result.next());
// a =  2
// { value: 4, done: false }
// console.log(result.next(2));

const a = result.next();
const b = result.next(a.value);
const c = result.next(b.value);
const d = result.next(c.value);
*/

function *gen() {
    const data = yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('abc');
        }, 3000)
    });
    console.log('生成器函数中的data = ', data);
}
const result = gen();
// console.log(result.next()); // { value: Promise { <pending> }, done: false }
result.next().value.then((data)=>{
    // console.log('生成器函数外面的data = ', data);
    result.next(data);
});

// 推荐阅读: https://zhuanlan.zhihu.com/p/37356948

```



## Redux-DevTools

1. 什么是Redux DevTools?

- Redux DevTools是一款Redux官方提供的浏览器调试工具,

- 可以让我们很方便的对Redux保存的状态进行追踪调试

https://github.com/reduxjs/redux-devtools



2. 如何使用Redux DevTools

- 在浏览器中安装Redux DevTools

- 添加Redux DevTools中间件配置

https://github.com/zalmoxisus/redux-devtools-extension

```js
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';

// 创建store之前, 通过applyMiddleware方法, 告诉Redux需要应用哪些中间件
const storeEnhancer = applyMiddleware(thunkMiddleware);
// 进行Redux DevTools配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
// 利用store来保存状态（state）
const store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;
```

## Reducer拆分

1. 当前reducer存在的问题?

- 所有的操作都是在一个reducer中处理的, 如果项目很复杂, 那么会变得非常难以维护



2. 如何解决?

- 对reducer进行拆分

官方文档地址: https://www.redux.org.cn/docs/recipes/StructuringReducers.html

```js
import {
    CHANGE_INFO
} from './constants';

let initialAboutState = {
    info: {}
};
function aboutReducer(aboutState = initialAboutState, action) {
    switch (action.type) {
        case CHANGE_INFO:
            return {...aboutState ,info: action.info};
        default:
            return aboutState;
    }
}
export default aboutReducer;

```

```js
import homeReducer from './home/reducer';
import aboutReducer from './about/reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    countData: homeReducer,
    infoData: aboutReducer
});

export default reducer;

```

