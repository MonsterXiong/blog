# New

这个问题如果你在掘金上搜，你可能会搜索到类似下面的回答：

```
new操作符做了这些事：
1.它创建了一个全新的对象。
2.它会被执行[[Prototype]]（也就是_proto_）链接。
3.它使this指向新创建的对象。
4.通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
5.如果函数没有返回对象类型Object（包含Function，Array，Date,RegExg，Error）,那么new表达式中的函数调用将返回该对象引用
```

说实话，看第一遍，我是不理解的，我需要去理一遍原型及原型链的知识才能理解。所以我觉得**MDN**[47]对 new 的解释更容易理解：

`new` 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。`new` 关键字会进行如下的操作：

1. 创建一个空的简单 JavaScript 对象（即{}）；
2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
3. 将步骤 1 新创建的对象作为 this 的上下文 ；
4. 如果该函数没有返回对象，则返回 this。

接下来我们看实现：

```
function Dog(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}

Dog.prototype={
  getName: function() {
    return this.name
  }
}

var dog = new Dog('大黄', 'yellow', 3)
```

上面的代码相信不用解释，大家都懂。我们来看最后一行带`new`关键字的代码，按照上述的 1,2,3,4 步来解析`new`背后的操作。

第一步：创建一个简单空对象

```
var obj = {}
```

第二步：链接该对象到另一个对象（原型链）

```
// 设置原型链
obj.__proto__ = Dog.prototype
```

第三步：将步骤 1 新创建的对象作为 `this` 的上下文

```
// this指向obj对象
Dog.apply(obj, ['大黄', 'yellow', 3])
```

第四步：如果该函数没有返回对象，则返回 this

```
// 因为 Dog() 没有返回值，所以返回obj
var dog = obj
dog.getName() // '大黄'
```

需要注意的是如果 Dog() 有 return 则返回 return 的值

```
var rtnObj = {}
function Dog(name, color, age) {
  // ...
  //返回一个对象
  return rtnObj
}

var dog = new Dog('大黄', 'yellow', 3)
console.log(dog === rtnObj) // true
```

接下来我们将以上步骤封装成一个对象实例化方法，即模拟 new 的操作：

```
function objectFactory(){
    var obj = {};
    //取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数
    var Constructor = [].shift.apply(arguments);
    //将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法
    obj.__proto__ = Constructor.prototype;
    //取得构造函数的返回值
    var ret = Constructor.apply(obj, arguments);
    //如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
    return typeof ret === "object" ? ret : obj;
}
```
