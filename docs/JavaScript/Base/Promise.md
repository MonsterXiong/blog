# Promise

1. 函数对象：将函数作为对象使用时，简称为函数对象。
2. 实例对象：通过 new 函数产生的对象，简称对象。

两种类型的回调函数

1. 同步回调

   理解：立即执行，完全执行完了才结束，不会放入回调队列中。

   eg：数组遍历相关的回调函数/Promise 的 excutor 函数。

2. 异步回调

   理解：不会立即执行，会放入回调队列中将来执行。

   eg：定时器回调/ajax 回调/Promise 的成功或失败的回调。

   > 注：可通过 console.log()来验证同步异步

常见的内置错误

1. 错误类型
   - Error：所有错误的父类型
   - ReferanceError：引用的变量不存在
   - TypeError：数据类型不正确的错误
   - RangeError：数据值不在其所允许的范围内
   - SyntaxError：语法错误
2. 错误处理
   - 捕获错误：try...catch
   - 抛出错误 throw error
3. 错误对象
   - message 属性：错误相关信息
   - stack 属性：函数调用栈记录信息

## Promise 的理解

Promise 的状态改变

- pending 变为 resolved
- pending 变为 rejected
- 一个 Promise 对象只能改变一次状态

Promise 的基本运行流程

Promise 的基本使用及 API

excutor、then、catch、finally、Promise.resolve、Promise.reject、Promise.all、Promise.race

为什么要用 Promise？

- 指定回调函数的方式更加灵活
- 支持链式调用，可以解决回调地狱问题

## 关键问题

1. 如何改变 promise 的状态？

   - resolve(value)，如果当前是 pending 就变为 resolved
   - reject(reason)，如果当前是 pending 就变为 rejected

2. 一个 promise 指定多个成功或失败的回调函数，都会调用吗？

   - 当 promise 改变为对应状态时都会调用

3. 改变 promise 状态和指定回调函数谁先谁后？

   - 都有可能，正常情况下是先指定回调再改变状态，但也可以先改变状态再指定回调。
   - 如何先改状态再指定回调
     1. 在执行器中直接调用 resolve()/reject()
     2. 延迟更长时间才调用 then()
   - 什么时候才能得到数据
     1. 如果先指定的回调，那当状态发生改变时，回调函数就会调用，得到数据
     2. 如果先改变的状态，那当指定回调时，回调函数就会调用，得到数据

4. promise.then()返回的新的 peomise 的结果状态由什么决定？

   - 简单表达：由 then()指定的回调函数执行的结果决定
   - 详细表达
     1. 如果抛出异常，新的 promise 变为 rejected，reason 为抛出的异常。
     2. 如果返回的是非 promise 的任意值，新的 promise 变为 resolved，value 为返回的值
     3. 如果返回的是另一个新的 promise，此 promise 的结果就会成为新 promise 的结果

5. promise 如何串联多个操作任务？

   - promise 的 then()返回一个新的 promise，可以形成 then()的链式调用
   - 通过 then()的链式调用串联多个同步/异步任务

6. promise 异常传透？

   - 当使用 promise 的 then 链式调用时，可以在最后指定失败的回调
   - 前面任何操作出了异常，都会传到最后失败的回调函数中处理

7. 中断 promise 链？
   - 当使用 promise 的 then 链式调用时，在中间中断，不再调用后面的回调函数
   - 办法：在回调函数中返回一个 pending 状态的 promise 对象

## 自定义 Promise

```jsx
/**
 * 自定义Promise
 */

(function(window) {
  const PENDING = "pending";
  const FULFILLIED = "fulfilled";
  const REJECTED = "rejected";

  /**
   * Promise构造函数
   * excutor：内部同步执行的函数（resolve，reject)
   */
  function Promise(excutor) {
    const self = this;
    this.status = PENDING;
    this.data = undefined;
    this.callbacks = [];

    function resolve(value) {
      if (self.status !== PENDING) {
        return;
      }
      //将状态改为fulfilled
      self.status = FULFILLIED;
      //保存value数据
      self.data = value;
      // 如果有待执行的callback函数，立即异步执行回调函数onFulfilled()
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksobj) => {
            //放入队列中执行所有的成功回调
            callbacksobj.onFulfilled(self.data);
          });
        });
      }
    }

    function reject(reason) {
      if (self.status !== PENDING) {
        return;
      }
      //  将状态改为rejected
      self.status = REJECTED;
      //  保存reason数据
      self.data = reason;
      //  如果有待执行的callback函数，立即异步执行回调函数onRejected()
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((callbacksobj) => {
            callbacksobj.onRejected(reason);
          });
        });
      }
    }

    // 立即同步执行excutor
    try {
      excutor(resolve, reject);
    } catch (error) {
      //  如果执行器抛出异常，promise对象变为rejected状态
      reject(error);
    }
  }

  /**
   *
   *  异步执行
   * then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。
   *
   */
  Promise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;

    //  指定回调函数的默认值（必须是函数）
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    //  返回一个新的promise对象
    return new Promise((resolve, reject) => {
      /**
       *
       * 执行指定的回调函数
       * 根据执行的结果改变return的promise的状态/数据
       */
      function handle(callback) {
        /**
         * 返回的Promise的结果由onFulfilled/onRejected执行结果决定
         * 1.如果抛出异常，return的promise就会失败，reason就是error
         * 2.如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
         * 3.如果回调函数返回的是promise，返回的promose的结果就是这个promise的结果
         */
        try {
          const result = callback(self.data);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (self.status === FULFILLIED) {
        //fulfilled状态
        //  立即异步执行失败的回调函数
        setTimeout(() => {
          handle(onFulfilled);
        });
      } else if (self.status === REJECTED) {
        //rejected状态
        //  立即异步执行成功的回调函数
        setTimeout(() => {
          handle(onRejected);
        });
      } else {
        //pending状态，将回调函数保存起来
        //  将成功和失败的回调函数保存callbacks容器中缓存起来
        self.callbacks.push({
          onFulfilled() {
            handle(onFulfilled);
          },
          onRejected() {
            handle(onRejected);
          },
        });
      }
    });
  };
  /**
   * .then()语法糖，返回promise失败的回调函数
   */
  Promise.prototype.catch = function(reason) {
    this.then(undefined, reason);
  };

  Promise.prototype.finally = function(onFinally) {
    this.then(
      (value) => {
        return Promise.resolve(onFinally()).then(() => value);
      },
      (reason) => {
        return Promise.resolve(onFinally()).then(() => {
          throw reason;
        });
      }
    );
  };

  /**
   * 返回一个指定结果的成功的promise
   */
  Promise.resolve = function(value) {
    return new Promise((resolve, reject) => {
      //  value是promise
      if (value instanceof Promise) {
        //  使用value的结果作为promise的结果
        value.then(resolve, reject);
      } else {
        //  value不是promise=》promise变为成功，数据是value
        resolve(value);
      }
    });
  };

  /**
   * 返回一个指定reason的失败的promise
   */
  Promise.reject = function(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  };

  /**
   * 返回一个promise，只有当所有promise都成功时才成功，否则只要有一个失败的就是失败
   */
  Promise.all = function(promises) {
    //  用来保存所有成功的数组
    const values = new Array(promises.length);
    //  用来保存成功promise的数量
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {
      //  遍历promises获取每个promise的结果
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (value) => {
            resolvedCount++; // 成功的数量
            values[index] = value; //  按索引保存成功的value
            //  如果全部成功了，将return的promise改变成功
            if (resolvedCount === promises.length) {
              resolve(values);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  };
  /**
   * 返回一个promise，最新执行完的promise的结果为返回的promise的结果
   */
  Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p) => {
        Promise.resolve(p).then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  };
  /**
   * 在指定之间内，返回一个指定结果的成功的promise
   */
  Promise.resolveDelay = function(value, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value instanceof Promise) {
          value.then(resolve, reject);
        } else {
          resolve(value);
        }
      }, time);
    });
  };
  /**
   * 在指定时间内，返回一个指定reason失败的promise
   */
  Promise.rejectDelay = function(reason, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(reason);
      }, time);
    });
  };

  window.Promise = Promise;
})(window);
```
