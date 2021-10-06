# Hook

Hook 是 React16.8 的新增特性，它可以让函数式组件拥有类组件特性。

> Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用

## Hook 使用规则

Hook 就是一个特殊的函数

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。

## useState

可以让函数式组件保存自己状态的函数。

```js
import React, {useState} from 'react';

* */
function App() {
    /*
    useState:
    参数: 保证状态的初始值
    返回值: 是一个数组, 这个数组中有两个元素
           第一个元素: 保存的状态
           第二个元素: 修改保存状态的方法
    * */
    const arr = useState(666);
    const [state, setState] = arr;
    return (
        <div>
            <p>{state}</p>
            <button onClick={()=>{setState(state + 1)}}>增加</button>
            <button onClick={()=>{setState(state - 1)}}>减少</button>
        </div>
    )
}
export default App;
```

- 在同一个函数式组件中, 是可以多次使用同名的 Hook 的
- useState 注意点:和类组件中的 setState 一样

## useEffect

- 可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期函数的组合

- 可以设置依赖, 只有依赖发生变化的时候才执行

```js
import React, { useState, useEffect } from "react";

function Home() {
  const [nameState, setNameState] = useState("lnj");
  const [ageState, setAgeState] = useState(0);
  useEffect(() => {
    // componentDidMount
    // componentDidUpdate
    console.log("组件被挂载或者组件更新完成");
    return () => {
      // componentWillUnmount
      console.log("组件即将被卸载");
    };
  });
  return (
    <div>
      <p>{nameState}</p>
      <button
        onClick={() => {
          setNameState("it666");
        }}
      >
        修改
      </button>
      <p>{ageState}</p>
      <button
        onClick={() => {
          setAgeState(ageState + 1);
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          setAgeState(ageState - 1);
        }}
      >
        减少
      </button>
      <hr />
    </div>
  );
}
function App() {
  const [isShowState, setIsShowState] = useState(true);
  return (
    <div>
      {isShowState && <Home />}
      <button
        onClick={() => {
          setIsShowState(!isShowState);
        }}
      >
        切换
      </button>
    </div>
  );
}
export default App;
```

优势：useEffect Hook 对比类组件生命周期方法，易于拆分。

## useContext

useContext 相当于 类组件中的 static contextType = Context

```js
import React, { createContext, useContext } from "react";

const UserContext = createContext({});
const ColorContext = createContext({});

// const {Provider, Consumer} = UserContext;
function Home() {
  const user = useContext(UserContext);
  const color = useContext(ColorContext);
  return (
    /*
        <UserContext.Consumer>
            {
                value1 =>{
                    return (
                        <ColorContext.Consumer>
                            {
                                value2 =>{
                                    return (
                                        <div>
                                            <p>{value1.name}</p>
                                            <p>{value1.age}</p>
                                            <p>{value2.color}</p>
                                        </div>
                                    )
                                }
                            }
                        </ColorContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
         */
    /*
        <div>
            <p>{this.context.name}</p>
            <p>{this.context.age}</p>
        </div>
         */
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{color.color}</p>
    </div>
  );
}
// Home.contextType = UserContext;
function App() {
  return (
    <UserContext.Provider value={{ name: "lnj", age: 18 }}>
      <ColorContext.Provider value={{ color: "red" }}>
        <Home />
      </ColorContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
```

## useReducer

从名称来看, 很多人会误以为 useReducer 是用来替代 Redux 的, 但是其实不是

useReducer 是 useState 的一种替代方案, 可以让我们很好的复用操作数据的逻辑代码

useReducer 接收的参数:

第一个参数: 处理数据的函数

第二个参数: 保存的默认值

useReducer 返回值:

会返回一个数组, 这个数组中有两个元素

第一个元素: 保存的数据

第二个元素: dispatch 函数

```js
import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, num: state.num + 1 };
    case "SUB":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
}
function Home() {
  /*
    const [numState, setNumState] = useState(0);
    function increment() {
        setNumState(numState + 1);
    }
    function decrement() {
        setNumState(numState - 1);
    }
     */
  const [state, dispatch] = useReducer(reducer, { num: 0 });
  return (
    <div>
      <p>{state.num}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        减少
      </button>
    </div>
  );
}
function About() {
  /*
    const [numState, setNumState] = useState(5);
    function increment() {
        setNumState(numState + 1);
    }
    function decrement() {
        setNumState(numState - 1);
    }
     */
  const [state, dispatch] = useReducer(reducer, { num: 5 });
  return (
    <div>
      <p>{state.num}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        减少
      </button>
    </div>
  );
}
function App() {
  return (
    <div>
      <Home />
      <About />
    </div>
  );
}
export default App;
```

注意点: 不同组件中的 useState 保存的状态是相互独立的, 是相互不影响的

## useCallback

useCallback 用于优化代码, 可以让对应的函数只有在依赖发生变化时才重新定义

当前 Home 和 About 重新渲染的原因是因为

父组件中的数据发生了变化, 会重新渲染父组件

重新渲染父组件, 就会重新执行父组件函数

重新执行父组件函数, 就会重新定义 increment/decrement

既然 increment/decrement 是重新定义的, 所以就和上一次的不是同一个函数了

既然不是同一个函数, 所以 Home 和 About 接收到的内容也和上一次的不一样了

既然接收到的内容和上一次不一样了, 所以就会重新渲染

## useMemo

useMemo 用于优化代码, 可以让对应的函数只有在依赖发生变化时才返回新的值

### useCallback 与 useMemo 区别：

useCallback 返回的永远都是同一个'函数'。

useMemo 返回的可以自定义

## useRef

useRef 就是 createRef 的 Hook 版本, 只不过比 createRef 更强大一点

### createRef 和 useRef 区别:

useRef 除了可以用来获取元素以外, 还可以用来保存数据

### useState 和 useRef 区别:

useRef 中保存的数据, 除非手动修改, 否则永远都不会发生变化

## useImperativeHandle

useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值

## useLayoutEffect

- 大部分情况下 useLayoutEffect 和 useEffect 没太大区别(用法格式都相同)

- 但是如果需要修改 DOM 的布局样式, 那么推荐使用 useLayoutEffect

### 为什么推荐在 useLayoutEffect 中修改 DOM 的布局样式?

- useEffect 函数会在组件渲染到屏幕之后才执行, 所以会可能会出现闪屏情况

- useLayoutEffect 函数是在组件渲染到屏幕之前执行, 所以不会出现闪屏情况

### useEffect 和 useLayoutEffect 区别:

#### 执行时机不同:

如果是挂载或者更新组件, 那么 useLayoutEffect 会比 useEffect 先执行

如果是卸载组件, 那么 useEffect 会比 useLayoutEffect 先执行

useEffect: 同步

useLayoutEffect: 异步

#### 什么时候使用 useEffect?

在绝大多数的情况下能用 useEffect, 就用 useEffect

#### 什么时候用 useLayoutEffect?

只有在需要组件挂载之后更新 DOM 的布局和样式的时候才使用 useLayoutEffect

#### 为什么要使用 useLayoutEffect 来更新 DOM 布局和样式?

- useEffect 是组件已经渲染到屏幕上了才执行

- useLayoutEffect 是组件还没有渲染到屏幕上就会执行

  所以如果在组件已经渲染到屏幕上了, 才去更新 DOM 的布局和样式, 那么用户体验不好, 会看到闪屏的情况

  而如果是在组件还没有渲染到屏幕上, 就去更新 DOM 的布局和样式, 那么用户体验更好, 看不到闪屏情况

## Custom Hook

1. 通过自定义 Hook，可以对其它 Hook 的代码进行复用。
2. 只要在函数名称前面加上 use, 那么就表示这个函数是一个自定义 Hook, 就表示可以在这个函数中使用其它的 Hook
