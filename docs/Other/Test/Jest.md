# Jest

## 导学

前端工程化

- 前端自动化测试
- 高质量的代码设计
- 高质量的代码实现

流行的开源库，框架，全都包含了大量的自动化测试的代码,开源的库需要稳定性，通过自动化测试保证

- Loadsh
- Ant Design
- Vue
- React
- Echarts
- Redux

系统质量糟糕，针对核心流程去编写测试用例，从而去修改代码，相对于重构任务量就轻很多了

**Automatic FrontEnd Testing 前端自动化测试**

- 修复时间少
- 修复难度低

**Code Refactoring 代码重构**

- 修复时间长
- 修复成本高
- 业务很有可能废弃

灰度发布=>局部验证 降低 bug 出现概率

TS Flow EsLint StyleLint 也可以提高代码质量

常用的单元测试、集成测试、E2E 测试、性能、压力、回归测试等

## Jest 前端自动化测试框架基础入门

### 自动化测试背景及原理

**Jest：expect 实现原理：**

```js
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}
// 假设我又增加了一个multi方法

function multi(a, b) {
  return a * b;
}
// 增加multi的时候一不小心改了minus，测试就通不过了
// 这样就有一个回归测试的概念，编写了新的代码有没有影响到老的代码

// 套路：预期结果是不是等于实际结果
```

```js
var result = add(3, 7);
var expected = 10;

if (result !== 10) {
  throw Error(`3 + 7 应该等于${expected},但是结果却是${result}`);
}

var result = minus(3, 3);
var expected = 0;

if (result !== 0) {
  throw Error(`3 - 3 应该等于${expected},但是结果却是${result}`);
}
```

```js
// 抽离提出公共方法

function expect(result) {
  return {
    toBe: function(actual) {
      if (result !== actual) {
        throw new Error(`预期值和实际值不相等预期${actual} 结果却是${result}`);
      }
    },
  };
}

expect(add(3, 3)).toBe(6);
expect(minus(6, 3)).toBe(3);
// 以上代码结果一样，需要增加测试描述

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc}通过测试`);
  } catch (e) {
    console.log(`${desc}没有通过测试 ${e}`);
  }
}

test("测试加法3+7", () => {
  expect(add(3, 7)).toBe(10);
});

test("测试减法3-3", () => {
  expect(minus(3, 3)).toBe(0);
});
```

> 判断实际结果和预期结果是否相等来判断是否存在问题，通过额外的测试代码就可以在代码上线之前提前做测试，这些测试不是人肉点击，而是通过提前写好的代码帮我们运行，这就是前端自动化测试，这也是主流前端自动化测试框架 mocha 和 jest 的一些底层实现原理。

### 前端自动化测试框架 Jest

```js
// 对很多expect和一些机制进行扩充
// ------主流的框架
// Jasmine
// Mocha+chai(扩充)
// Jest

// ------好的前端自动化测试框架框架应该具备
-性能 - 功能 - 易用性;

// 学会一个其他都差不多

// ------好用的点

// 速度快
// API简单
// 易配置
// 隔离性好
// 监控模式
// IDE整合
// Snapshot
// 多项目并行
// 覆盖率
// Mock丰富

// 支持得非常好，后台前端项目都可以支持，还有很多插件结合使用enzyme测试React，VTU测试Vue
Babel;
TypeScript;
node;
React;
Angular;
Vue;
```

### Jest 修改自动化测试样例

单元测试相当于模块测试，集成测试相当于多个模块测试，所以必须有模块的概念

```shell
npm init -y
yarn add --dev jest
# 修改script
"test":"jest"
```

### jest 简单配置

jest 本身是有默认配置的，修改配置，需要把配置项暴露出来。

```shell
# 生成一个基础配置文件
npx jest --init
# 自动生成代码测试覆盖率报告
npx jest --coverage
```

node 下只认识 commonjs，无法测试 es module，所以需要使用 babel 转化一下

#### jest 与 babel 结合

```shell
# 安装依赖
yarn add --dev babel-jest @babel/core @babel/preset-env
# 新建配置文件.babelrc
```

根据当前 node 的环境结合@babel/preset-env 对现在的代码进行转化，这样 node 就可以运行了，jest 也可以正常运行了

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

#### 底层运行机制原理

```shell
npm run test
# jest内部集成了一个插件jest(babel-jest)，会检查你是否安装了babel或者babel-core
# 取.babelrc配置
# 在运行测试之前，结合babel，先把你的代码做一次转化
# 运行转化过的测试用例代码
```

### Jest 中的匹配器 matchers

```json
// 监听所有测试文件的变化
"test":"jest --watchAll"
```

```shell
# object.is() ===
toBe

# 测试内容
toEqual

# 真假匹配器
toBeNull
toBeUndefined
toBeDefind
toBeTruthy
toBeFalsy

# 取反not匹配器,以下两个相等
.not.toBeFalsy()
toBeTruthy()

# 数字相关匹配器
toBeGreaterThan #大于
toBeLessThan #小于
toBeGreaterThanOrEqual #大于等于
toBeLessThanOrEqual #小于等于
toBeCloseTo # 计算浮点数
expect(0.1+0.2).toEqual(0.3) # 错误的
expect(0.1+0.2).toBeCloseTo(0.3) # 0.1+0.2接近于0.3

# 字符串匹配器
toMatch # 匹配

# Array,Set
toContain # 包含

# 异常
toThrow #抛出异常，toThrow('可以放匹配的异常内容'或者正则表达式)
```

> 可以使用不同的匹配器实现同样的效果

### 命令行工具的使用

```shell
# vscode
ctrl+shift+p
# 输入
install code command
# code安装的作用，code .  打开切换
```

```shell
将不正确的修改正确，不希望重新跑一遍测试用例，只跑修改的测试用例
w: 按出指令
a: all模式
f: 只跑之前没通过的测试用例，再点f退出f模式
o：仅仅测试改变文件的测试，需要记录文件的改变，需要用git去记录代码的改变，跟上次提交对比
p：根据文件过滤
t：根据测试名字去过滤我们想要测试的测试用例
q：离开watch模式
enter
ctrl+c两次退出
# 直接进入o模式
jest --watch
# 直接进入a模式
jest --watchAll
```

### 异步代码测试方法

两种案例：分别是 callback 和 promise

```shell
npm install axios --save
```

#### Callback

```js
import axios from 'axios'

// 接收一个回调
export fetchData = (fn)=>{
    axios.get(url).then(response=>{
        fn(response.data)
    })
}
```

```js
import { fetchData } from "./fetchData";

test("fetchData返回结果为{success:true}", () => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
  });
});
// 这个测试用例中，如果url不存在，测试依然会通过，只要fetchData能够正常运行就代表测试用例通过了，里面代码没跑测试用例就结束了
// 解决办法在测试用例第二个参数中，写个done参数
// 只有调用done函数测试用例才结束

// 回调类型异步函数的测试
test("fetchData返回结果为{success:true}", (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
    done();
  });
});
// 总结：当异步函数接收回调函数的形式的时候，需要传递done参数，在回调函数去执行done参数才代表测试结束了
```

#### Promise

```js
import axios from "axios";

// 请求结束后自己来处理,返回promise
export const fetchData = () => {
  return axios.get(url);
};
```

##### 方式 1

```js
import { fetchData } from "./fetchData";

test("fetchData返回结果为{success:true}", () => {
  // 注意：返回的是promise的时候需要return一下
  return fetchData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});

test("fetchData返回结果为404", () => {
  // 需要执行一个expect
  expect.assertions(1);
  return fetchData().catch((e) => {
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});
// 如果不加expect.assertions(1)，正确请求数据不会走catch，也同样会通过测试用例，所以需要补充一句
```

##### 方式 2

```js
import { fetchData } from "./fetchData";
// expect(fetchData()).resolves返回的是fetchData()拿到的所有结果去匹配toMatchObject只要包含对象内容就可以了

test("fetchData返回结果为{success:true}", () => {
  // 期望去取数据，取得的数据resolves,里面包含指定内容
  return expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

test("fetchData返回结果为404", () => {
  // 期望去取数据，取得的数据rejects,抛出了异常
  return expect(fetchData()).rejects.toThrow();
});
```

##### 方式 3

```js
import { fetchData } from "./fetchData";

// 使用async await，不需要return了
test("fetchData返回结果为{success:true}", async () => {
  await expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
test("fetchData返回结果为404", async () => {
  await expect(fetchData()).rejects.toThrow();
});
```

##### 方式 4

```js
import {fetchData} from './fetchData'

test('fetchData返回结果为{success:true}',async ()=>{
    // 先获取数据
   const response = await fetchData()
   expect(response.data).toEqual({
       success:true
   })
})

// 存在一个问题：如果返回结果正常，那么不会走catch,那就正常通过了，与实际不符，所以需要增加一句expect.assertions(1)
test('fetchData返回结果为404',async()=>{
    expect.assertions(1)
    try{
        await fetchData()
    }catch(e){
        expect(e.toString().toEqual('Error： Request failed with status code')
    }
})
```

### Jest 中的钩子函数

> 钩子函数指在 jest 执行过程的某些具体时刻会自动被 jest 调用的某些函数。

> 4 个核心钩子函数
>
> beforeAll
>
> beforeEach
>
> afterEach
>
> afterAll

#### 案例一：

```js
export default class Counter {
  constructor() {
    this.number = 0;
  }
  addOne() {
    this.number += 1;
  }
  minusOne() {
    this.number -= 1;
  }
}
```

```js
import Counter from "./Counter";

const counter = new Counter();

test("测试Counter中的addOne方法", () => {
  counter.addOne();
  expect(counter.number).toBe(1);
});

test("测试Counter中的minusOne方法", () => {
  // 还是同一个counter实例，所以肯定是0
  counter.minusOne();
  expect(counter.number).toBe(0);
});
// 存在问题：
// 两个测试之间是相互影响的，都会用到counter实例
// 在测试之前需要进行初始化的时候建议使用钩子函数
```

```js
import Counter from "./Counter";

let counter = null;

// 在所有测试用例执行之前会调用beforeAll
beforeAll(() => {
  console.log("beforeAll");
});

// 我们希望每个counter都是一个全新的counter实例，不希望有依赖关系互相影响，
// 每个测试用例执行之前都会让beforeEach执行一次
beforeEach(() => {
  console.log("beforeEach");
  counter = new Counter();
});

// 每个测试用例执行之前都会让afterEach执行一次
afterEach(() => {
  console.log("afterEach");
});

// 等到所有测试用例都执行结束之后会调用afterAll
afterAll(() => {
  console.log("afterAll");
});

test("测试Counter中的addOne方法", () => {
  counter.addOne();
  expect(counter.number).toBe(1);
});

test("测试Counter中的minusOne方法", () => {
  // 新的实例，所以为-1
  counter.minusOne();
  expect(counter.number).toBe(-1);
});
```

#### 案例二：

```js
export default class Counter {
  constructor() {
    this.number = 0;
  }
  addOne() {
    this.number += 1;
  }
  addTwo() {
    this.number += 2;
  }
  minusOne() {
    this.number -= 1;
  }
  minusTwo() {
    this.number -= 2;
  }
}
```

```js
import Counter from "./Counter";

let counter = null;

// 在所有测试用例执行之前会调用beforeAll
beforeAll(() => {
  console.log("beforeAll");
});

// 我们希望每个counter都是一个全新的counter实例，不希望有依赖关系互相影响，
// 每个测试用例执行之前都会让beforeEach执行一次
beforeEach(() => {
  console.log("beforeEach");
  counter = new Counter();
});

// 每个测试用例执行之前都会让afterEach执行一次
afterEach(() => {
  console.log("afterEach");
});

// 等到所有测试用例都执行结束之后会调用afterAll
afterAll(() => {
  console.log("afterAll");
});

test("测试Counter中的addOne方法", () => {
  console.log("测试Counter中的addOne方法");
  counter.addOne();
  expect(counter.number).toBe(1);
});

test("测试Counter中的addTwo方法", () => {
  console.log("测试Counter中的addTwo方法");
  counter.addTwo();
  expect(counter.number).toBe(2);
});

test("测试Counter中的minusOne方法", () => {
  console.log("测试Counter中的minusOne方法");
  // 新的实例，所以为-1
  counter.minusOne();
  expect(counter.number).toBe(-1);
});

test("测试Counter中的minusTwo方法", () => {
  console.log("测试Counter中的minusTwo方法");
  counter.minusTwo();
  expect(counter.number).toBe(-2);
});

// 存在问题：太臃肿，都在一个文件中
```

#### 分组语法

```js
import Counter from "./Counter";

let counter = null;

beforeEach(() => {
  counter = new Counter();
});

describe("测试增加相关的代码", () => {
  test("测试Counter中的addOne方法", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });

  test("测试Counter中的addTwo方法", () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });
});

describe("测试减少相关的代码", () => {
  test("测试Counter中的minusOne方法", () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });

  test("测试Counter中的minusTwo方法", () => {
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });
});

// 默认相当于全局有一个describe
```

### 钩子函数的作用域

```js
// 一个describe在的钩子函数对它下面的所有测试用例都有效
// 在内层也可以写钩子函数

// 所有descript同步代码=>外部beforeAll=>[第一个decript内部beforeAll=>外部beforeEach=>内部beforeEach=>addone=>内部afterEach=>外部afterEach=>内部beforeEach=>addTwo=>内部afterEach=>外部afterEach=>内部的afterAll]=>循环下一个decript中的测试用例=>外部的afterAll
// 由外到内

test.only();
// 单个测试用例的调试
```

### Jest 中的 Mock

1. 捕获函数的调用和返回结果，以及 this 和调用顺序
2. 它可以让我们自由的设置返回结果
3. 改变内部函数的实现

#### 存在问题

```js
export const runCallback = (callback) => {
  callback();
  // 修改之后
  // return callback()
};
```

```js
import { runCallback } from "./demo";

test("测试runCallback", () => {
  const func = () => {
    return "hello";
  };

  expect(runCallback(func)).toBe("hello");
});
// 测试无法通过，需要在函数代码中增加return
// 实际上我不想修改原来函数的代码
```

#### 作用案例

```js
export const runCallback = (callback) => {
  callback();
  // callback('abc')
};
export const createObject = (classItem) => {
  new classItem();
};

export const getData = () => {
  return axios.get(url).then((res) => res.data);
};
```

```js
import { runCallback } from "./demo";

// Mock用法
// 只要func执行过了，就代表runCallback执行过了
test("测试runCallback", () => {
  // mock函数，捕获函数的调用，普通方法无法追溯调用的
  const func = jest.fn();
  runCallback(func);
  runCallback(func);
  // 被调用了
  // expect(func).toBeCalled()
  // 调用了2次
  // expect(func.mock.calls.length).toBe(2)
  // 参数
  // expect(func.mock.calls[0]).toEqual(['abc'])

  console.log(func.mock);
  // calls:被调用的情况
  // [[],[]]，func被调用两次，传递的参数都是空的

  // instances：实例this的指向

  // invocationCallOrder：被调用的顺序
  // [1，2，3] 按顺序执行的

  // results：函数执行输出的结果（返回值）是什么
  const func = jest.fn(() => {
    return 456;
  });
  // 模拟返回一次结果
  // func.mockReturnValueOnce('a')
  // 第二次
  // func.mockReturnValueOnce('b')
  // 链式调用
  // func.mockReturnValueOnce('a').mockReturnValueOnce('b')
  // 返回多次固定结果
  // func.mockReturnValue('a')
});
```

```js
import { createObject } from "./demo";
test("测试createObject", () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock);
});
```

```js
// 一般来说在真实的项目里，在测试异步函数代码的时候不会真正的发送ajax去请求接口，如果有N测试用例多个接口情况，花费时间太多，我们只需要确保异步请求发送就可以了
import { getData } from "./demo";
import axios from "axios";

// 使用jest对axios去做一个模拟，这样就不会去请求真正的数据了
jest.mock("axios");

test.only("测试getData", async () => {
  // 意思就是axios去发get请求的时候，去模拟请求成功结果是{data:'hello'}
  axios.get.mockResolvedValue({ data: "hello" });
  // mockResolvedValueOnce()
  // 这时候去调用axios的get方法的时候不会真实的去请求接口，而是会以后面的数据作为结果
  // 这样就把异步获取数据的内容变成了同步准备的内容
  const data = await getData();
  expect(data).toBe("hello");
});
```

#### 其他

```js
import { runCallback } from "./demo";

test.only("测试runCallback", () => {
  const func = jest.fn();
  // func.mockReturnValue('Monster')
  // 更底层的实现，mock函数模拟的是以下这个的实现
  //  const func = jest.fn(()=>{
  //    console.log('11')
  //    return 'Monster'
  //})
  //func.mockImplementation()等价于往jest.fn()里面传一个函数
  func.mockImplementation(() => {
    console.log("11");
    return "Monster";
  });
  // mockImplementationOnce() 比mockReturnValue强大的是还可以往里面再写逻辑
  // mockReturnThis()
  runCallback(func);
  runCallback(func);
  runCallback(func);
  // expect这样的语句在测试中叫断言，断定什么样的内容会有什么样的结果
  expect(func.mock.calls[0]).toEqual(["abc"]);
  expect(func.mock.calls.length).toBe(3);
  expect(func.mock.results[0].value).toBe(["Monster"]);
  expect(func.mock.results[0].value).toBeUndefined();
  // 额外的匹配符
  // 每次调用的参数都是abc
  expect(func).toBeCalledWith("abc");
});
```

## Jest 难点进阶

### Snapshot 快照测试

```js
export const generateConfig = () => {
  return {
    server: "http:localhost",
    port: 8080,
  };
};
```

```js
import { generateConfig } from "../demo";

test("测试generrateConfig函数", () => {
  expect(generateConfig()).toEqual({
    server: "http:localhost",
    port: 8080,
  });
});

// 问题：测试文件内容越来越多，改完代码就需要修改测试用例
// 换个方法
// 第一次并没有任何的快照，所以会生成一个快照，会把generateConfig生成的内容去保存到一个快照文件中
test("测试generrateConfig函数", () => {
  expect(generateConfig()).toMatchSnapshot();
});
// 测试配置文件非常好用，只要测试文件不变就可以一直通过
// 如果改了配置项，Snapshot就会有问题，现在的快照跟上一次的快照不匹配，其实就是在提醒我们是不是要真的修改配置文件
// 命令：
// u更新，更新不通过的快照，老的快照就更新成了新的内容
// s跳过
```

```js
test('测试generrateAnotherConfig函数',()=>{
    expect(generateConfig()).toMatchSnapshot()
})
// 假设我们改了第一个函数的内容，同时也改了第二个函数函数的内容
// 两个测试用例就都无法通过
// 按u两个都会被更新，从而通过了
// i模式，交互式的一个个去提示做更新，最后按回车就回到上一个面板


// 快照对配置文件和UI组件很好用

// 如果配置文件里面的内容是动态的，那么每一次对上一次都对不上，就通不过了new Date()
// 解决问题,快照里面的time是任意一个Date都可以，不需要和上次是一样的
// 使用expect.any()
test('测试generrateConfig函数',()=>{
    expect(generateConfig()).toMatchSnapshot({
        time：expect.any(Date)
    // expect.any(Number)
    // expect.any(String)
    })
})
```

```js
// 行列的Snapshot
// 1.npm install prettier --save
test("测试generrateAnotherConfig函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot();
});
// 这时候生成的快照内容就在测试用例里面去
```

### mock 深入学习

```js
import axios from "axios";

export const fetchData = () => {
  return axios.get("/").then((res) => res.data);
};

// 假设后端返回的是'{
// data:(function(){return '123'})()
// }'
```

```js
import {fetchData} from '../demo'

test('fetchData测试',()=>{
    return fetchData().then(data=>{
        expect(eval(data)).toEqual('123')
    })
})

// 测试不通过
// 真正做前端自动化测试的时候，不会真正发请求，而是模拟请求
jest.mock('axios')
test('fetchData测试',()=>{
    axios.get.mockReturnResolvedValue({
       data:'(function(){return '123'})()'
    })
    return fetchData().then(data=>{
        expect(eval(data)).toEqual('123')
    })
})


```

```js
// 除了上面这个方法的话，还有其他解决办法
// 自己写一个函数去替代fetchData这个函数
// 创建__mocks__目录，新建同名文件demo.js

export const fetchData=()=>{
    return new Promise((resolved,reject)=>{
        resolved( '(function(){return '123'})()')
    })
}
```

```js
// 在测试用例中使用假的fetchData替换真的做测试，把异步代码的测试就改成了同步代码的测试
// 让jest去模拟demo的内容，它会自动到__mocks__下面去demo.js去取
jest.mock("./demo");

import { fetchData } from "../demo";

test("fetchData测试", () => {
  return fetchData().then((data) => {
    expect(eval(data)).toEqual("123");
  });
});
// 这种模拟数据的形式就不是模拟axios库，而是在本地模拟demo下面的函数了
// 取消对demo的模拟
// jest.unmock('./demo')
```

```js
// 修改jest的配置文件
// automock:true
// 就会先看目录下有没有__mocks__目录，有的话就会去找同名文件，用这个文件中的内容取替换真正的内容，如果没有那就无法模拟了
```

```js
import axios from "axios";

export const fetchData = () => {
  return axios.get("/").then((res) => res.data);
};

export const getNumber = () => {
  return 123;
};
```

```js
jest.mock("./demo");
import { fetchData, getNumber } from "./demo";

test("getNumber 测试", () => {
  expect(getNumber()).toEqual(123);
});

// 通不过，不是一个函数
// 原因是现在用的是mock的demo下的一个函数，而不会用真正demo.js的内容
```

```js
// 我们希望异步函数去模拟，同步函数就用原来的同步函数去测试
jest.mock("./demo");
// fetchData是模拟的
import { fetchData } from "./demo";
// getNumber是来自真正的demo文件中的
const { getNumber } = jest.requireActual("./demo");
```

官方文档中的 API Mock 和 the Jest Object 查漏补缺

### mock timers

```js
export default (callback) => {
  setTimeout(() => {
    callback();
  }, 3000);
};
```

```js
import timer from "../timer";

test("test测试", () => {
  timer(() => {
    expect(1).toBe(1);
    // 这个也会运行成功
    // expect(2).toBe(1)
  });
});

// 回调函数的解决办法就是使用done
test("test测试", (done) => {
  timer(() => {
    expect(1).toBe(1);
    done();
  });
});

// 问题：等待时间太久
```

```js
import timer from "../timer";

// 告诉jest，在下面的测试用例中只要看见setTimeout,setInterval的时候，用假的timers模拟
jest.useFakeTimers();

test("test测试", () => {
  const fn = jest.fn();
  timer(fn);
  // 执行通不过，还是要等三秒之后才能执行
  // useFakeTimers,runAllTimers配对使用的，去跳过timer等待时间
  // runAllTimers可以让所有的定时器立即执行
  jest.runAllTimers();
  expect(fn).toHaveBeenCalledTimes(1);
});

// 问题：如果嵌套setTimeout呢？
```

```js
export default (callback) => {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      callback();
    }, 3000);
  }, 3000);
};
```

```js
import timer from "../timer";

jest.useFakeTimers();

test("test测试", () => {
  const fn = jest.fn();
  timer(fn);
  jest.runAllTimers();
  // 2次
  expect(fn).toHaveBeenCalledTimes(2);
});
// 把所有timer都运行了
// 如果我只想执行在当前即将要运行的timer，还没在任务队列中的timer不执行呢？
// 只想执行外部的timer,不想执行内部的timer
test("test测试", () => {
  const fn = jest.fn();
  timer(fn);
  // 只运行加入队列中的timer
  jest.runOnlyPendingTimers();
  expect(fn).toHaveBeenCalledTimes(1);
});

// 这两个API有点难记，在jest22版本有新的API

test("test测试", () => {
  const fn = jest.fn();
  timer(fn);
  // 让时间快进3秒就可以了
  jest.advanceTimersByTime(3000);
  // 快进2秒不通过，快进4秒通过，快进6秒不通过，因为已经调用2次了
  expect(fn).toHaveBeenCalledTimes(1);
});
//jest.advanceTimersByTime(3000)是在上一个advanceTimersByTime基础上计算的，其他的测试用例如果也有这样的代码的话，会形成依赖关系，所以需要用到beforeEach钩子函数
beforeEach(() => {
  // 每次运行测试用例之前都重新初始化
  jest.useFakeTimers();
});
```

- 对函数做 mock 是希望函数是可以被追溯的
- ajax 请求
- 定时器

只需保证流程是否能够走通

### ES6 类中的测试

#### 通过对类的 Mock 理解单元测试和集成测试

```js
class Util {
  init() {
    // 异常复杂
  }
  a() {
    // 异常复杂
  }
  b() {
    // 异常复杂
  }
}

export default Util;
```

```js
import Util from "../util.js";

const util = null;

beforeAll(() => {
  util = new Util();
});

test("测试a方法", () => {
  // expect(util.a(1,2)).toBe('12')
});

// 首先创建一个实例，然后对实例的方法进行执行就可以对结果进行测试，比较简单
```

```js
import Util from "../util";
const demoFunction = (a, b) => {
  const util = new Util();
  util.a(a);
  util.b(b);
};

export default demoFunction;
```

```js
import demoFunction from '../demo
// 原理：
// 会自动提高到第一行，所以我们可以手动写到第一行
// 发现util.js是一个类，这样就会自动把类的构造函数和方法都会替换成jest.fn()
// 就不再是异常复杂的util了，而是自动会做转换
// const Util = jest.fn() Util.a= jest.fn() Util.b= jest.fn()
// 都是jest.fn()，就可以做追溯了
jest.mock('./util')

test('测试demoFunction',()=>{
    // 如果创建Util了实例，并且a,b方法都运行了，就证明运行成功了
    // 异常复杂，可以会真实的去创建，我们实际不需要了解结果，做了什么事情，我们只要知道执行了就可以了
    // 所以我们只要模拟，这样有利于性能
    demoFunction()
})
```

```js
jest.mock('./util')
import Util from './util'
import demoFunction from '../demo

test('测试demoFunction',()=>{
    demoFunction()
    expect(Util).toHaveBeenCalled()
    console.log(Util.mock)
    expect(Util.mock.instances[0].a).toHaveBeenCalled()
    expect(Util.mock.instances[0].b).toHaveBeenCalled()
})

// 单元测试经常会看见mock，因为mock让我们引入的外部模块变得简单，让单元测试运行起来变得更加的快速，只对自己的功能点进行测试
// 集成测试：对功能点下所有的模块，所有的依赖都做测试
// 不去模拟Util，一起测试就是集成测试，模拟util，重点就测试demoFunction的一个单元测试
```

```js
// 自定义模拟__ mocks__,可以进一步封装

const Util = jest.fn(() => {
  console.log("constructor");
});
Util.prototype.a = jest.fn(() => {
  console.log("a");
});
util.prototype.b = jest.fn(() => {
  console.log("b");
});

export default Util;
```

```js
// 其他方法，不推荐
jest.mock('./util,'()=>{
    const Util = jest.fn(()=>{
    	console.log('constructor')
    })
    Util.prototype.a =jest.fn(()=>{
         console.log('a')
    })
    util.prototype.b = jest.fn(()=>{
         console.log('b')
    })
    return Util;
})
```

### Jest 中对 DOM 节点操作的测试

```shell
npm install jquery --save
```

```js
import $ from "jquery";

const addDivTobody = () => {
  $("body").append("<div/>");
};

export default addDivTobody;
```

```js
import addDivTobody from "../demo";
import $ from "jquery";

test("测试dom操作，addDivTobody", () => {
  addDivTobody();
  addDivTobody();
  expect($("body").find("div").length).toBe(2);
  // document.getElementById什么的dom操作都可以使用
});

// 为什么可以Jest可以对dom可以操作呢
// node不具备dom
// jest在node环境下自己模拟了一套dom的api,jsDom
```

## Vue 中的 TDD 与单元测试

### 什么是 TDD？

**Test Driven Development(TDD) 测试驱动的开发**

TDD 的开发流程（Red-Green Development）

1. 编写测试用例
2. 运行测试，测试用例无法通过测试
3. 编写代码，使测试用例通过测试
4. 优化代码，完成开发
5. 新增功能，重复上述步骤

TDD 的优势

1. 长期减少回归 bug
2. 代码质量更好（组织，可维护性）
3. 测试覆盖率高
4. 错误测试代码不容易出现

### Vue 环境中配置 Jest

```shell
# 安装vue脚手架工具
npm i @vue/cli@3.8.4 -g

# 创建项目
vue create project-name

# 问答环节
# 手动配置
Babel
CSS Pre-processors
Linter
Unit Testing
# stylus
# ESLint Standard config
# Lint on save && Lint and fix on commit
# Jest
# in dedicated config filer 单独生成不同的配置文件
# n 不保存

# 运行项目
npm run serve
```

```js
// jest配置内容讲解
// 看看测试用例文件夹 tests
// 脚本增加--watch
// npm run test:unit
// 选择a

// 测试文件中有可能引入外部的模块,没有后缀 ，逐个查找
moduleFileExtensions: ["js", "jsx", "json", "vue"];
// 模块的转化vue使用vue-jest,css图片字体使用jest-transform-stub静态资源没必要解析变成字符串就行了,jsx，js使用babel-jest转化
tansform: {
}
// 那些文件下的内容不需要被转化
tansformIgnorePatterns: ["/node_modules/"];
// 语法简写@，模块的映射，把别名映射到真正的文件上去
moduleNameMapper: {
}
//对vue做快照测试做存储的时候格式化
snapshotSerializers: ["jest-serializer-vue"];
// 运行测试命令，去哪里找测试文件
testMatch: [];
// 在jest测试的时候，有一个虚拟的dom，jsDom,测试环境下模拟的浏览器地址是什么
testURL: "http://localhost";
// 两个插件，方便使用jest，p可以过滤文件，上下鼠标选中它，交互式选择
watchPlugins: [
  "jest-watch-typeahead/filename",
  "jest-watch-typeahead/testname",
];

// 官方文档configuring Jest了解
// 自带git仓库
// git branch lesson1
// git checkout lesson
// 可以合并为git checkout -b lesson1
// git merge master
// lesson1上的代码就和master一样了
```

```shell
# 手动搭建
npm i jest
# 配置jest.config.js的配置文件
# 安装第三方模块babel-jest vue-jest等等一系列模块
```

### VTU 的配置及使用

[VTU 文档](https://vue-test-utils.vuejs.org/zh/)

```shell
# git checkout -b lesson2
# git merge lesson1
# 清空App.vue,assets的图片，Helloworld组件内容
# 启动服务器
```

```js
// example.spec.js修改为HelloWorld.test.js
// 第一种方式
// 去修改jest中testMatch ,增加test

// test目录修改为__tests__以及所有的目录下
//  testMatch: [
//    '**/__tests__/**/*.(js|jsx|ts|tsx)'
//  ]

// .eslintrc.js移到__test__目录下
// 修改jest配置文件
// testPathIgnorePatterns:[
// '\.eslintrc\.js'
// ]
```

```js
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const root = document.createElement("div");
    root.className = "root";
    document.body.appendChild(root);
    expect(document.body.childNodes[0].className).toBe("root");
  });
});
```

```js
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const root = document.createElement("div");
    root.className = "root";
    document.body.appendChild(root);
    expect(document.body.childNodes[0].className).toBe("root");
    new Vue({
      render: (h) =>
        h(HelloWorld, {
          props: {
            msg: "Monster",
          },
        }),
    }).$mount("#root");
    console.log(document.body.innerHTML);
  });
});

// 局限性：我想看一下组件渲染过程结束之后的属性，data,props是否是正确的,只能测试UI展现上的一些东西，而且编写也不是那么快捷
// 所以官方提供一个@vue/test-utils库
```

```js
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    // shallowMount,渲染一个HelloWorld浅渲染，只渲染HelloWorld，不渲染子组件，性能就比较高，所以shallowMount常见于但与测试
    // mount适合集成测试
    // wrapper会有很多方法
    // wrapper.findAll('.mmm')
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
```

```js
// 快照测试,及时捕获UI的变化

it("组件渲染正常", () => {
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg: "Monster" },
  });
  expect(wrapper).toMatchSnapshot();
});
```

### 使用 TDD 的方式开发 Header 组件

```js
// src下创建containers文件夹，页面级别的东西

// 在containers文件夹下TodoList/TodoList.vue

// 在app中引入

// __tests__目录移动到TodoList文件夹下

// 修改对应的测试文件内容
```

```js
// TDD先写测试用例
// TODOList查看页面了解功能 http://www.todolist.cn/
import { shallowMonut } from "@vue/test-utils";
import Header from "@/components/Header.vue";

it("Header 包含input框", () => {
  const wrapper = shallowMount(Header);
  // 为了测试与业务解耦，一般做法
  // 测试用例肯定通不过，还没有开发业务代码，接着就需要去完善代码，从而通过测试用例
  // 先想好测试怎么写再完善代码
  const input = wrapper.find('[data-test="input"]');
  expect(input.exists()).toBe(true);
});
it("Header 中 input 框初始内容为空", () => {
  const wrapper = shallowMount(Header);
  const inputValue = wrapper.vm.$data.inputValue;
  expect(inputValue).toBe("");
});
it("Header 中 input发生变化，数据应该跟着变", () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  input.setValue("Monster");
  const inputValue = wrapper.vm.$data.inputValue;
  expect(inputValue).toBe("Monster");
});
it("Header 中 input 框输入回车，无内容时，无反应", () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  // 什么内容都没有输入的时候
  input.setValue("");
  // input触发，用enter键
  input.trigger("keyup.enter");
  // 按了回车没有向父组件触发事件就是成功的
  // 就是说不应该向外去触发一个事件
  // 先写成truthy,完善UI之后，再改为Falsy
  expect(wrapper.emitted().add).toBeFalsy();
});

it("Header 中 input 框输入回车，有内容时,向外触发事件,同时清空inputValue", () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  input.setValue("Monster");
  input.trigger("keyup.enter");
  expect(wrapper.emitted().add).toBeTruthy();
  input.setValue("");
  expect(wrapper.vm.$data.inputValue).toBe("");
});
```

```vue
<input data-test="input" />
<!--
	1. 先搞个输入框 
	2. 绑定value
	3. 双向绑定v-model
	4. 子组件触发，无内容就不要告诉父组件 @keyup.enter="addTodoItem",
	addTodoItem(){this.$emit('add',this.inputValue)}
	4.1 所以需要增加一个判断if(this.inputValue){},有内容才去触发
	5. 写个反面，用来兼顾有内容无内容的情况，同时清空inputValue
	6. 在TodoList上引入Header组件，通过TDD写的应该没什么问题

Header在UI展示和使用上面都没什么问题，TDD开发Header完了

TDD开发思想：先去想清楚代码怎么写要怎么做，把测试用例写出来，然后围绕测试用例再去写代码
TDD带来的好处：让我们写代码之前先去思考再去写，所以可以有效的提高我们的代码质量
-->
```

```js
import { shallowMonut } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
import Header from "@/components/Header.vue";

it("TodoItem 初始化时，undoList应该为空", () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([]);
});
// 集成测试：通过header操作，去看todoLsit的反应
it("TodoItem 监听到Header的add事件时，会增加一个内容", () => {
  const content = "Monster";
  const wrapper = shallowMount(TodoList);
  const header = shallowMount(Header);
  // const input =header.find('[data-test="input"]')
  // input.setValue('Monster')
  // input.trigger('keyup.enter')
  header.vm.$emit(add, content);
  // 触发方法
  // wrapper.vm.addUndoItem('Monster')
  const undoList = wrapper.vm.$data.undoList;
  expect(undoList).toEqual([content]);
});
// 单元测试
it("TodoList中handleAddItem方法被调用时，UndoList列表内容会增加一个", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: [1, 2, 3],
  });
  wrapper.vm.handleAddItem(4);
  expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4]);
});
```

```vue
<!--
对TodoList组件进行TDD开发

	1. 首先应该有个UndoList数组，存放未完成的事项
	2. 执行addItem,增加内容，但不是对的，我们希望的不是手动增加，而是Header触发input事件的时候，然后往我的事件中增加一项
	3. 可以在TodoList遍历以下数据看一下效果
-->
```

### Header 组件样式新增及快照测试

```css
* {
  margin: 0;
  padding: 0;
}
body {
  background: #cdcdcd;
}
```

```css
.header {
  line-height: 60px;
  background: #333;
}
.header-content {
  width: 600px;
  margin: 0 auto;
  color: #fff;
  font-size: 24px;
}
.header-input {
  float: right;
  width: 360px;
  margin-top: 16px;
  line-height: 24px;
  outline: none;
  color: #333;
  text-indent: 10px;
}
```

```shell
npm run lint --fix
npm run serve
```

```js
// Header样式和功能的快照
// 只要对UI或者逻辑做了修改，就会提醒了，确认无问题就可以更新
// 不发生变化，发生变化可以提示我们
it("Header样式发生改变做提示", () => {
  const wrapper = shallowMount(Header);
  expect(wrapper).toMatchSnapshot();
});
```

### 通用代码提取封装

在 Vue 中对通用代码封装

```js
// 找子的data-test
// utils/testUtils.js
export const findTestWrapper = (wrapper, tag) => {
  return wrapper.findAll(`[data-test="${tag}"]`);
};
```

测试用例的代码比我的 Header 组件的代码还要多，测试用例和代码都是 50 多行，增加了很多的开发成本。

举例：复杂系统：这样的系统开发比较渣的话，会担心影响老的功能，每次都会做大量的回归测试，核心流程上的代码会写单元测试或者流程测试，引入自动化测试，就不需要重新做手动测试了，耗费了一定的编码时间，节约了大量的回归测试时间。

### UndoList 的实现

```js
it("UndoList参数为[],count值应该为0，且列表无内容", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [],
    },
  });
  const countElem = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "item");
  expect(countElem.at[0].text()).toEqual("0");
  expect(listItems.length).toEqual(0);
});

it("UndoList参数为[1,2,3],count值应该为3，且列表有内容", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3],
    },
  });
  const countElem = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "item");
  expect(countElem.at[0].text()).toEqual("3");
  expect(listItems.length).toEqual(3);
});

it("UndoList参数为[1,2,3],count值应该为3，且列表有内容，且存在删除按钮", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3],
    },
  });
  const countElem = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "item");
  const deleteButtons = findTestWrapper(wrapper, "delete-button");
  expect(countElem.at[0].text()).toEqual("3");
  expect(listItems.length).toEqual(3);
  expect(deleteButtons.length).toEqual(3);
});

it("UndoList删除按钮被点击时，向外触发删除事件", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3],
    },
  });
  const deleteButtons = findTestWrapper(wrapper, "delete-button").at[1];
  deleteButtons.trigger("click");
  expect(wrapper.emitted().delete).toBeTruthy();
  expect(wrapper.emitted().delete[0][0]).toBe(1);
});
```

```vue
<!--
	1. count区域，list.length
	2.item区域， ul-li
	3. 删除按钮
	4. 绑定事件handleDelete，触发delete事件，传入index过去
	5. todoList调用undoList,传入list以及监听delete
	6. handleDelteItem this.undoList.splice(index,1)
-->
```

```js
// 监听delete事件比较难写
it("TodoList调用UndoList，应该传递list参数", () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.find(UndoList);
  const list = undoList.props("list");
  expect(list).toBeTruthy();
});

it("TodoList中handleDelteItem方法被调用时，UndoList列表内容会减少一个", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: [1, 2, 3],
  });
  wrapper.vm.handleDelteItem(1);
  expect(wrapper.vm.$data.undoList).toEqual([1, 3]);
});
```

### UndoList 样式修饰及测试代码优化

```css
.undolist {
  width: 600px;
  margin: 0 auto;
}
.title {
  margin: 10px 0;
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
}
.count {
  margin-top: 5px;
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  font-szie: 12px;
  color: #000;
}
.list {
  list-style-type: none;
}
.item {
  line-height: 32px;
  font-size: 14px;
  background: #fff;
  border-left: 5px solid #629a9a;
  border-radius: 3px;
  margin-bottom: 10px;
  text-indent: 10px;
}
.delete {
  display: block;
  float: right;
  margin-top: 5px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  font-szie: 12px;
  color: #000;
  text-indent: 0;
  cursor: pointer;
}
```

测试文件优化

```js
import { shallowMonut } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
import Header from "@/components/Header.vue";

describe("TodoList组件", () => {
  it("初始时，undoList应该为空", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  });
  // 集成测试：通过header操作，去看todoLsit的反应
  it("监听到Header的add事件时，undoList会增加一个内容", () => {
    const content = "Monster";
    const wrapper = shallowMount(TodoList);
    const header = shallowMount(Header);
    // const input =header.find('[data-test="input"]')
    // input.setValue('Monster')
    // input.trigger('keyup.enter')
    header.vm.$emit(add, content);
    // 触发方法
    // wrapper.vm.addUndoItem('Monster')
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([content]);
  });
  // 单元测试
  it("handleAddItem执行时，UndoList列表内容会增加一个", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3],
    });
    wrapper.vm.handleAddItem(4);
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4]);
  });

  // 监听delete事件比较难写
  it("使用UndoList组件，应该传递list参数", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.find(UndoList);
    const list = undoList.props("list");
    expect(list).toBeTruthy();
  });

  it("handleDelteItem执行时，UndoList列表内容会减少一个", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3],
    });
    wrapper.vm.handleDelteItem(1);
    expect(wrapper.vm.$data.undoList).toEqual([1, 3]);
  });
});
```

Header 组件，UndoList 组件都可以做对应的优化，使用 describe 描述，case 都放进去

### UndoList 编辑功能实现

```js
// 点击正在运行时的就会变成input状态
// 数据结构发生变化{status:'input',value:1}
// TDD方式，这时候需要先去修改Header测试文件，不需要变更
// TodoList测试文件修改，组件对应修改，这时候页面有问题，展示区域，所以需要去调整UndoList.vue
// 通过变更流程，当项目采用TDD和单元测试的时候，需要先去改测试用例，再去改业务逻辑，两遍的工作，原因：测试代码和业务组件是有耦合的，测试的代码依赖于组件里面undolist的数据，数据存在耦合，所以需要两遍的工作
// 业务逻辑的开发，TDD+单元测试并不是一个好的组合，先去写测试再写开发，还存在耦合
// 函数组件库，如loadsh，测试用例和函数实现不会有太多的耦合，只要给入参，判断结果就行，就不会存在这种问题

// TodoList减少功能也需要修改
// 再检查undolit测试文件，修改数据结构中的list即可
```

```js
// 单元测试
it("handleAddItem执行时，UndoList列表内容会增加一个", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: [
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
    ],
  });
  wrapper.vm.handleAddItem(4);
  expect(wrapper.vm.$data.undoList).toEqual(
    { status: "div", value: 1 },
    { status: "div", value: 2 },
    { status: "div", value: 3 },
    { status: "div", value: 4 }
  );
});

it("handleDelteItem执行时，UndoList列表内容会减少一个", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: [
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
    ],
  });
  wrapper.vm.handleDelteItem(1);
  expect(wrapper.vm.$data.undoList).toEqual([
    { status: "div", value: 1 },
    { status: "div", value: 3 },
  ]);
});
```

```js
// 功能实现
// UndoList
it("列表项被点击，向外触发status事件", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    },
  });
  const deleteButton = findTestWrapper(wrapper, "item").at[1];
  deleteButton.trigger("click");
  expect(wrapper.emitted().status).toBeTruthy();
  expect(wrapper.emitted().status[0][0]).toBe(1);
});
```

```vue
<!--
	1. 绑定事件，changeIndex(index),this.$emit('status',index)
	2. 修改TodoList测试用例以及业务代码
	3. UndoList测试用例修改以及修改业务代码
	4. TodoList监听
	5. Undolist失去焦点时，status状态清空
	6. TodoList的用例,再去修改业务逻辑
	7. Undolist输入框变化时，业务代码：(e.target.value,index)
	8. TodoList测试用例修改，业务逻辑修改，监听事件需要及时补充，TDD没测试
	9. UndoList修改样式
-->
```

```js
// TodoList.test.js
it("changeStatus方法执行时，UndoList内容变化", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    list: [
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
    ],
  });
  wrapper.vm.handleStatusItem(1);
  expect(wrapper.vm.$data.list).toEqual(
    { status: "div", value: 1 },
    { status: "input", value: 2 },
    { status: "div", value: 3 }
  );
});

it("resetStatus方法执行时，UndoList内容变化", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    list: [
      { status: "div", value: 1 },
      { status: "input", value: 2 },
      { status: "div", value: 3 },
    ],
  });
  wrapper.vm.resetStatus(1);
  expect(wrapper.vm.$data.list).toEqual(
    { status: "div", value: 1 },
    { status: "div", value: 2 },
    { status: "div", value: 3 }
  );
});

it("changeItemvalue方法执行时，UndoList内容变化", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    list: [
      { status: "div", value: 1 },
      { status: "input", value: 2 },
      { status: "div", value: 3 },
    ],
  });
  wrapper.vm.changeItemvalue({
    value: "444",
    index: 1,
  });
  expect(wrapper.vm.$data.list).toEqual(
    { status: "div", value: 1 },
    { status: "input", value: "444" },
    { status: "div", value: 3 }
  );
});
```

```js
// UndoList.js
it("列表项显示一个输入框，两个正常内容", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ],
    },
  });
  const input = findTestWrapper(wrapper, "input");
  // 能够获取到DOM节点
  expect(input.at[0].element.value).toBe("2");
  expect(input.length).toBe(1);
  // expect(wrapper.emitted().status).toBeTruthy()
});

it("失去焦点时，向外触发reset事件", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ],
    },
  });
  const inputElem = findTestWrapper(wrapper, "input").at[0];
  inputElem.trigger("blur");
  expect(wrapper.emitted().reset).toBeTruthy();
});

it("输入框变化时，向外触发change事件", () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [
        { status: "div", value: 1 },
        { status: "input", value: 123 },
        { status: "div", value: 3 },
      ],
    },
  });
  const inputElem = findTestWrapper(wrapper, "input").at[0];
  inputElem.trigger("change");
  expect(wrapper.emitted().change).toBeTruthy();
  expect(wrapper.emitted().change[0][0]).toEqual({
    value: "123",
    index: 1,
  });
});
// 缺陷还是挺明显的
```

```css
.input {
  height: 22px;
  text-indent: 10px;
  width: 460px;
}
```

### CodeCoverage 代码覆盖率

```js
// 删除node_modules
// 重新安装依赖
// 运行测试，会报错
// 修改将vm.$data.xxx改为vm.xxx
// vue文件样式如果没有要有个空行
// input的样式名字也需要更改user-input
// UndoList.js 输入框变化时，向外触发change事件 的expect报错，需要打印wrapper.emitted().change[0][0]，获取结果复制粘贴到expect的toEqual
```

测试覆盖率

```js
// jest.config.js
// 测试代码覆盖了多少业务代码的逻辑，任何目录下的js和vue除了node_modules
"collectCoverageFrom":["**/*.{js,vue}","!**/node_modules/**"]

// package.json增加脚本
"test:cov":"vue-cli-service test:unit --coverage"

// .gitignore
coverage
```

通过 Code Coverage 发现，当我们使用单元测试对我们的项目进行测试的时候，测试覆盖率非常的高，先写测试代码再写的逻辑，但是 TDD 存在的问题就是业务与测试耦合

### 章节小结

TDD 和单元测试不是一定要结合在一起使用的

尝试过 TDD 和单元测试以及 TDD 和集成测试都尝试过

TDD 代码质量提高

单元测试 测试覆盖率高 业务耦合度高 代码量大 过于独立

几个单元放在一起不确定能不能运行，只能保证单个是可以使用的

最佳实践就是函数库

BDD 用户行为的驱动 以及集成测试（针对一堆东西测）

## Vue 中的 BDD 与集成测试

### BDD 的概念以及 TDD 的对比

BDD （Behavior Driven Development） 行为驱动开发

先写代码再写测试

采用 BDD，用户先开发一个功能，先写代码，基于用户想怎么测试，再写测试用例

```js
// 不去想测试，先写业务代码
// 启动服务器
// 基于用户行为
// test下创建文件夹integration集成测试
// 是在header里面输入然后undolist展示的
// 用户行为是什么样的，那些行为是重要的
// 123，点回车，就显示在正在运行中，这就是一个比较基础必须好用的行为，
// 通过用户的行为去编写一个测试用例，我们把这个用户的行为过程叫story，story就是一个故事，当我们编写BDD的测试用例的时候实际上是结合story去编写的，这些是专业术语，记以下就好
```

```js
import {mount} from '@vue/test-utils'
import {findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../TodoList'
it(`
	1. 用户会在header输入框输入内容
	2. 用户会点击回车按钮
	3.列表项应该增加用户输入内容的列表项
`,()=>{
    // 现在不能用shallowMount了，是多个组件一起测试，用mount做一个深渲染，把组件树都渲染出来
    const wrapper = mount(TodoList)
    const inputElem = findTestWrapper(wrapper,'header-input').at[0]
    const content = 'Monster'
    inputElem.setValue(content)
    inputElem.trigger('change')
    inputElem.trigger('keyup.enter')
    const listItems = findTestWrapper(wrapper,'list-item')
    expect(listItems.length).toBe(1)
    expect(listItems.at[0].text()).toContain(content)
})

// 流程：
// 1.首先我们会先去写业务代码，不关心测试
// 2.接着我们会去想用户的行为是怎么样的，然后接着写一个story，去描述用户的行为
// 3.然后我们模拟用户的行为去做测试

// package.json 修改脚本
"test:integration":"vue-cli-service test:unit --watch"
```

```js
// TDD
// 1.先写测试再写代码
// 2.一般结合单元测试使用，是白盒测试
// 3.测试重点在代码
// 4.安全感低
// 5.速度快

// 看着代码测试，是白盒测试，我们知道代码是怎么实现的
// 单个组件测试，组装到一起不确定能否使用，安全感低
// shallowMount浅渲染速度快

// BDD
// 1.先写代码再写测试
// 2.一般结合集成测试使用，是黑盒测试
// 3.测试重点在UI（DOM）
// 4.安全感高
// 5.速度慢

// 一般是操作多个组件，多个组件有关联，所以集成测试，只关注用户做了什么操作，展示了什么，不关注代码怎么写的，只关注结果是否正确
// BDD测试通过了，代表用户用是没什么问题的
// 整个组件树挂载，速度会慢一些
```

### 使用 BDD 和集成测试进行 Vuex 项目的测试

如何进行 Vuex 相关的测试？

```js
// 使用vuex管理状态
// 1. 安装依赖
// 2. 编写store.js文件
// 3. main.js中引入
// 4. 找到Header.vue的代码，inputValue就从store里面去
// 5.@input="e=>changeInputValue(e.target.value)"
// 6.回车会执行addTodoItem,清空需要调用this.changInputValue('')
// 7.作为一个开发人员，我们代码写完了，我要做一个回归测试，我要看一下之前的流程还能使用嘛，之前已经有集成测试用例的沉淀了，它会报错，读不到state
```

```shell
npm i vuex --save
```

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(vuex);

const store = new Vuex.Store({
  state: {
    inputValue: "",
  },
  mutations: {
    changInputValue(state, payload) {
      state.inputValue = payload;
    },
  },
});

export default store;
```

```js
import store from "./store";

// 创建根实例的时候把store传减去就可以了
```

```vue
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      inputValue: (state) => state.inputValue,
    }),
  },
  methods: {
    ...mapMutations({
      changeInputValue: "changeInputValue",
    }),
  },
};
</script>
```

```js
import { mount } from "@vue/test-utils";
import { findTestWrapper } from "../../../../utils/testUtils";
import TodoList from "../../TodoList";
//1. 引入store
import store from "../../../../store";
it(`
	1. 用户会在header输入框输入内容
	2. 用户会点击回车按钮
	3.列表项应该增加用户输入内容的列表项
`, () => {
  // 现在不能用shallowMount了，是多个组件一起测试，用mount做一个深渲染，把组件树都渲染出来

  // 2. 把store传进去
  const wrapper = mount(TodoList, { store });
  const inputElem = findTestWrapper(wrapper, "header-input").at[0];
  const content = "Monster";
  inputElem.setValue(content);
  inputElem.trigger("change");
  inputElem.trigger("keyup.enter");
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(1);
  expect(listItems.at[0].text()).toContain(content);
});
// 测试用例就通过了，测试用例里面的代码就复用了
// 优势：
// 先不考虑测试，先写代码，拿到需求，直接开发
// 开发完成之后写测试用例，如果是修改代码，测试用例不需要怎么修改
// 如果测试用例通过，那基本上可以确定页面可以正常显示，页面上用户的操作也会成功

// 单元测试的话，测试用例通过了，但整体流程未必跑得通，因为单元测试跑的只是一个单元，不能保证所有用户运行的代码集成在一起之后可以正常地运行
// 问题：代码地覆盖率就不会那么地高了
// 现在只是对新增的逻辑做一些测试，后续可以对删除地逻辑也做一些测试，包括对点击input框进行编辑地测试，现在制作了一个测试，整体覆盖率很低
// 可以根据测试覆盖率地报告做相应地测试，但是集成测试很难很高，但是测过的东西一定好用
// 扩充：
// 1.一个项目中既可以使用BDD也可以使用TDD，既可以使用单元测试也可以使用集成测试，混着用，有函数库用TDD+单测，业务逻辑使用BDD+集测
// 2.案例2：对store做一个单独的单元测试才去TDD，什么样的测试对我是有价值有必要的时候就可以去做
// 掌握前端自动化测试指的是，能够结合项目的需求诉求，去做出正确的判断什么时候去使用TDD或BDD，单元测试或者集成测试，测试业务优先BDD+集成测试，测试函数库优先使用TDD+单元测试
```

```js
// store.test.js
import store from "../../../../store";

it("当store接收changeInputValue的commit时，inputValue发生变化", () => {
  const value = "123";
  store.commit("changeInputValue", value);
  expect(store.state.inputValue).toBe(value);
});
```

### 异步测试

集成测试+BDD,很好的确保代码的质量，同时确保测试用例通过，用户就可以使用，如何通过 BDD+集成测试对异步的代码做一个测试

```js
// 现在希望做一个新的功能:当页面加载完成的时候去发一个ajax请求，获取服务器返回的数据显示到列表中
```

```shell
npm i axios --save
```

```vue
<script>
import axios from "axios";
export default {
  mounted() {
    // 5秒之后再发送ajax请求呢

    /*
        {
            success:true,
            data:[{
                status:'div',
                value:'Monster'
            }]
        }
        */
    // 请求不到会走catch，但是并不耽误我们去写前端的自动化测试用例，即便后端没有提供这样的接口给我们，因为我们不会真正去请求而是模拟这个接口返回的数据.
    // 对于前端来说，我们只关注当我们接收到真正的数据的时候，我怎么处理，当我接收到错误的数据我怎么处理，具体这个数据返回地正不正确，前端不是特别关注地，而后端地自动化测试应该关注这个内容地结构体地样子的
    // 后端的接口也不一定写完了
    axios
      .get("/getUndoList.json")
      .then((res) => {
        this.undoList = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
```

```js
import { mount } from "@vue/test-utils";
import { findTestWrapper } from "../../../../utils/testUtils";
import TodoList from "../../TodoList";
//1. 引入store
import store from "../../../../store";
it(`
	1. 用户会在header输入框输入内容
	2. 用户会点击回车按钮
	3.列表项应该增加用户输入内容的列表项
`, () => {
  // 现在不能用shallowMount了，是多个组件一起测试，用mount做一个深渲染，把组件树都渲染出来

  // 2. 把store传进去
  const wrapper = mount(TodoList, { store });
  const inputElem = findTestWrapper(wrapper, "header-input").at[0];
  const content = "Monster";
  inputElem.setValue(content);
  inputElem.trigger("change");
  inputElem.trigger("keyup.enter");
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(1);
  expect(listItems.at[0].text()).toContain(content);
});

// 首先写一个story
it(`
	1. 用户进入页面时，请求远程数据（等待5s）
	2. 列表应该展示远程返回的数据
`, () => {
  // 去渲染一下wrapper，现在去发ajax请求，请求过后应该有对应的几条数据
  // 因为挂载的时候就会去请求数据
  // 1. 去建一个文件夹__mock__以及axios.js文件
  const wrapper = mount(TodoList, { store });

  // 还没等拿到数据，组件就渲染，所以我想等数据拿到之后
  // const listItems = findTestWrapper(wrapper,'list-item')
  // expect(listItems.length).toBe(2)
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(listItems.length).toBe(2);
  });
  //------------------------------------
  setTimeout(() => {
    // 数据变了自动更新
    const listItems = findTestWrapper(wrapper, "list-item");
    // 3，4也可以通过，测试用例里面出现了异步的代码，不会等你代码完成的再关闭测试用例的
    // done函数
    expect(listItems.length).toBe(3);
  }, 5500);
  //-------------------------------------------
  // 5s的请求，使用jest.useFakeTimers()，配合jest.runAllTimers()
  // 测试时不通过的。业务代码的setTimeout同步执行，但是里面有有一个异步代码，数据我们还没拿到，所以还需要$nextTick()
  jest.runAllTimers();
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(2);
  //-------------------------------------------
  // 挂载的时候就被调用了1次，可以写个断言，测试不通过，实际调用一次，但是真正调用了2次，原因：上面的测试用例对下面的测试用例产生了影响，两个测试用例存在影响，需要beforeEach(()=>{jest.useFakeTimers()}),测试之前清零
  // expect(setTimeout).toHaveBeenCalledTimes(1)
  jest.runAllTimers();
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(listItems.length).toBe(2);
  });
});
```

```js
const undolist = {
  success: true,
  data: [
    {
      status: "div",
      value: "Monster",
    },
    {
      status: "div",
      value: "Bear",
    },
  ],
};

export default {
  get(url) {
    if (url === "/getUndoList.json") {
      return new Promise((resolved, reject) => {
        resolve(undolist);
      });
    }
  },
};
```

```js
import { mount } from "@vue/test-utils";
import { findTestWrapper } from "../../../../utils/testUtils";
import TodoList from "../../TodoList";
import store from "../../../../store";
import axios from "../../__mocks__/axios";

beforeEach(() => {
  axios.success = true;
  jest.useFakeTimers();
});
// ----------------------------补充异步代码的测试
//
it(`
	1. 用户进入页面时，请求远程数据
	2. 列表应该展示远程返回的数据
`, () => {
  const wrapper = mount(TodoList, { store });
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(listItems.length).toBe(2);
  });
});

it(`
	1. 用户进入页面时，请求远程数据失败
	2. 列表应该展示空数据，不应该挂掉
`, () => {
  axios.success = false;
  const wrapper = mount(TodoList, { store });
  // $nextTick也是一个异步的函数，需要使用done
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(listItems.length).toBe(0);
  });
});
```

```js
const undolist = {
  success: true,
  data: [
    {
      status: "div",
      value: "Monster",
    },
    {
      status: "div",
      value: "Bear",
    },
  ],
};

export default {
  get(url) {
    if (url === "/getUndoList.json") {
      return new Promise((resolved, reject) => {
        if (this.success) {
          resolve(undolist);
        } else {
          reject(new Error());
        }
      });
    }
  },
};
```

### 路由页面的代码组织

```js
// 复杂的项目进行代码组织
// NotFoundPage
// 有多个页面
// NotFoundPage文件夹下放__mocks__以及__tests__/unit以及__tests__/integration文件夹以及组件vue

// 其他页面组织形式
// components所有组件打平放到这里面，而不是页面级别下管理组件，页面级别下只有页面，这样页面级别下的tests就可以直接放测试文件，我们会认为这是集成测试文件，然后我们到components文件夹下创建tests和__mock__文件夹做单元测试甚至小组件的集成测试
// 这样比较好理解你的页面组织结构，方便了解你的测试代码结构
```

```shell
npm i vue-router --save
```

```js
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: TodoList,
  },
];

const router = new VueRouter({ routes });

// 引入到实例中以及router-view
```

## React 中的 TDD 与单元测试（x）

React 环境中配置 Jest

Enzyme 的配置及使用

TDD 方式开发 Header 组件

Header 组件样式新增及快照测试

通用代码提取封装

UndoList 的实现

UndoList 样式修饰及测试代码优化

UndoList 编辑功能实现

CodeCoverage 代码覆盖率

## React 中的 BDD 与集成测试(x)

BDD 的概念以及 TDD 的对比

使用 BDD 和集成测试进行 Vuex 项目的测试

异步测试

路由页面的代码组织

## 前端自动化测试的思考总结

### 前端自动化测试的优势

1. 更好的代码组织，项目的可维护性增强.

> 当我们使用前端自动化测试的方案时，我们会采用 TDD 或者 BDD 的方案进行代码的编写，编写代码的时候我们就会考虑测试该怎么去写，代码怎么写更容易进行测试，我们就会对代码进行更深一步的思考，从而使代码组织得到一个优化，帮助我们项目的可维护性更强

2. 更小的 Bug 出现概率，尤其是回归测试的 Bug.

> 当我们去做代码的回归测试的时候，我们去改变之前代码的逻辑的时候，没有自动化测试的时候，很容易影响功能，如果有了自动化测试，你之前的代码已经沉淀了一些自动化测试的用例，当我们去修改代码，只要重新跑一边用例，就能确保之前写的功能没有任何问题，如果用例出现的报错，代表你修改的代码影响了之前的功能，那就只要修改就好了，这样更小的出现 BUG

3. 修改工程质量差的项目，更加安全

> 跟第 2 点很像，我们修改代码很担心影响之前的功能，这些测试用例可以保证代码的整体核心功能没问题，修改代码没问题就可以上线了，有问题就修改

4. 项目具备潜在的文档特性

> 如果自动化测试用例写得很多，通过用例我就知道现在一步一步，整个工程的主流程是什么，核心业务功功能点是什么，之前需要文档去描述项目要做的事情，现在可以通过测试来描述在做什么，其实每个集成测试就是一个 story，这个 story 就可以告诉我们这块代码它的业务逻辑在干什么

5. 扩展前端知识面

> 可以深入框架的底层原理学习，因为只有了解才更好的写自动化测试用例，可以提升广度

### 前端自动化测试的重要知识点

1. BDD，TDD。

> 函数库 TDD 不错，写业务 BDD 更有帮助，效率更高

2. 集成测试，单元测试

> 集成测试优势在于覆盖功能比较广，集成测试通过，一般代码问题不大，而单元测试测试更细，可以提高边界测试覆盖率带来很大的帮助，各有优势，业务使用集成测试，函数库单元测试，测得很细的时候也可以使用单元

3. 测试与业务的解耦

4. 代码测试覆盖率并不代表一定靠谱

> 高是好事，业务代码做了大量的单元测试都通过了，但是项目不一定跑得起来，覆盖面广，覆盖率高才靠谱，因为集成测试用例多，覆盖率广

5. 功能测试以及 UI 测试

> jest,enzme,vtu 是功能测试，相对 UI 测试是比较弱一点的，做 UI 测试需要 cypress 去抓浏览器，e2e 测试

6. 测试越独立，隐藏的问题越多

> 前端自己模拟数据，但是数据不是自己写得，可以去爬虫，每隔两三天去爬取线上后端的数据，这样可以保证跟后端的数据匹配得上
