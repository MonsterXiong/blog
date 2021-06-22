# ES6

- 数组新增扩展
- 对象新增扩展
- 函数新增扩展
- Set、Map
- Promise
- Generator
- Proxy
- Module
- Decorator
- 新增数据类型
- 类

## ES Module

模块化的核心功能是

### export 命令

export 命令用于规定模块的对外接口

1. export 命令规定的是对外的接口,必须与模块内部的变量建立一一对应的关系。它们的实质是，在接口名与模块内部变量之间建立了一一对应的关系。
2. function 和 class 也遵守这样的语法。
3. export 语句输出的接口与其对应的值是动态绑定关系，可以通过接口取到模块内部实时的值。
4. export 和 import 命令要处于模块顶层，如果处于块级作用域，就没办法做静态优化了

::: tip 正确语法

```js
// 语法一
export const name = "Monster";

// 语法二
const name = "Monster";
export { name };

// 语法三
const name = "Monster";
export { name as cname };
```

:::

::: warning 错误语法

```js
const name = "Monster"

// 报错
export "Monster"
// 报错
export name

// 以上两种两种写法都是直接输出Monster，Monster是一个值，不是接口

```

:::

### export default 命令

1. export default 用于指定模块的默认输出。本质上，export default 就是输出一个叫做 default 的变量或方法(所以它后面不能跟变量声明语句)，然后系统允许我们为它取任意名字
2. 使用 import 命令时需要知道所加载的变量名或函数名，否则无法加载。
3. 为了方便不阅读文档就可以加载模块，可以使用 export default 命令为模块指定默认输出。
4. 其他模块加载该模块时，import 命令可以为该匿名函数或者变量指定任意名称。此时 import 命令后面不使用大括号。

::: tip 正确语法

```js
export default function() {
  console.log("foo");
}

// 或者

export default function foo() {
  console.log("foo");
}

// 或者
function foo() {
  console.log("foo");
}
export default foo;
```

:::

::: warning 案例

```js
// 正确
const a = 1
export default a

// 正确
export default 1

// 报错
export default const a = 1;

// export default a本质上是将该命令后面a的值赋给default
```

:::

### import 命令

import 命令用于加载模块。

1. import 接受一个大括号，里面指定要从其他模块导入的变量名。大括号的变量名必须与被导入模块对外接口的名称相同。

> 注意：import 命令具有提升效果，会提升到整个模块的头部并首先执行,本质是因为 import 命令是在编译阶段执行的，在代码运行之前。

::: tip 正确语法

```js
// 语法一
import { name } from "./foo";

// 语法二
import { name as fname } from "./foo";

// 语法三
// 这是整体加载（即星号*）来指定一个对象，所有输出值都加载在这个对象上
// 模块加载所在的对象应该是可以静态分析的，所以不允许运行时改变
import * as foo from "./foo";
```

:::

::: warning 错误语法

```js
// 报错
import { 'f'+'oo'} from 'my_module'

// 报错
const module = 'my_module'
impoer { foo } from module

// 报错
if(true){
    import { name } from 'my_module'
}

// 因为他们用到了表达式、变量和if结构，在静态分析阶段，这些语法都是无法得到值的

```

:::

::: tip 案例分析

```js
// import语句会执行loadsh模块，但不会输入任何值
// 如果多次重复执行同一句import，那么只会执行一次
import "loadsh";

// 等同于import { foo, bar } from 'my_module'
// 虽然在两个语句加载，但是是同一个my_module实例
// 也就是说import语句是Singleton模式
import { foo } from "my_module";
import { bar } from "my_module";

// 在一条语句中同时输入默认方法和其他接口
import _, { each } from "loadsh";
```

:::
