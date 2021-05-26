# Gulp 常用的 API

## task()

**作用：创建一个基于流的任务**

**语法：**

```sh
task([taskName], taskFunction)
```

**例子：**

```js
const { task } = require("gulp");

function defaultTask(cb) {
  console.log("hello gulp");
  cb();
}

task("default", defaultTask);
// npx gulp
// task(defaultTask);
// npx gulp defaultTask
```

::: warning
这个 API 已经不再是推荐的模式了。
:::

在任务系统中定义任务。然后可以从命令行和 series()、parallel()和 lastRun()api 访问该任务。

- 将命名函数注册为一个任务

```js
const { task } = require("gulp");

function build(cb) {
  // body omitted
  cb();
}

task(build);
```

- 将匿名函数注册为一个任务

```js
const { task } = require("gulp");

task("build", function(cb) {
  // body omitted
  cb();
});
```

**参数**
如果 taskName 未提供，则该任务将由 name 命名函数的属性或用户定义的 displayName 属性引用。该 taskName 参数必须用于缺少 displayName 属性的匿名函数。

由于可以从命令行运行任何已注册的任务，因此请避免在任务名称中使用空格。

## src()

**作用：找到源文件**

**语法：**

```sh
src(glob)
```

**例子：**

```js
// 找到一个指定文件
gulp.src("./a/b.html");
// 找到指定目录下，指定后缀的文件
gulp.src("./a/*.html");
// 找到指定目录下的所有文件
gulp.src("./a/*.*");
gulp.src("./a/**");
// 找到a目录下的所有子目录的所有文件
gulp.src("./a/**/*");
// 找到a目录下所有子目录里面的所有html文件
gulp.src("./a/**/*.html");
```

## lastRun()

**作用：没有修改的文件不进行构建**

**语法：**

```sh
lastRun(glob)
```

**例子：**

```js
lastRun("./abc");
```

## dest()

**作用：把一个内容放入指定目录**

**语法：**

```sh
dest(glob)
```

**例子：**

```js
// 把它接收到的内容放到abc目录下
dest("./abc");
```

## watch()

**作用：监听 globs 并在发生更改时运行任务.任务与任务的其余部分被统一处理**

**语法：**

```sh
watch(globs, [options], [task])
# globs => string | array => Globs用来监听文件系统
# options object 参见官网选项
# task => function | string => 一个 任务函数 或由 series() 和 parallel() 生成的组合任务

# 返回值 chokidar的一个实例,用于对监听设置进行细粒度控制


```

**例子：**

```js
// 当指定目录下的html文件发生变化，就会执行htmlHandler这个任务
watch("./src/pages/*.html", htmlHandler);
```

**Chokidar 实例**

watch() 方法返回 chokidar 的底层实例，提供对监听设置的细粒度控制。最常用来注册提供更改文件的 path 或 stats 的单个事件处理程序。

当直接使用 chokidar 实例时，您将无法访问任务系统集成，包括异步完成、队列和延迟

```js
const { watch } = require("gulp");

const watcher = watch(["input/*.js"]);

watcher.on("change", function(path, stats) {
  console.log(`File ${path} was changed`);
});

watcher.on("add", function(path, stats) {
  console.log(`File ${path} was added`);
});

watcher.on("unlink", function(path, stats) {
  console.log(`File ${path} was removed`);
});

watcher.close();
```

**Chokidar 语法**

```sh
watcher.on(eventName, eventHandler)
# eventName => string => 可以观察到的事件有 'add'、'addDir'、'change'、'unlink'、'unlinkDir'、'ready'、'error'、 或 'all'.
# eventHandler => function => 当指定的事件发生时调用的函数,参数可见官网

# 关闭文件监听器。一旦关闭，就不会再发出任何事件。
watcher.close()

# 向已经运行的监听器实例添加额外的 globs。
watcher.add(globs)

# 删除正在被监听的 globs，而监视程序继续使用剩余的路径。
watcher.unwatch(globs)

```

## series()

**作用：逐个执行多个任务，**

**语法：**

```sh
series('任务1','任务2','任务3')

```

**例子：**

```js
// clean结束，htmlHandler才开始开始
series(clean, htmlHandler);
```

## parallel()

**作用：并行开始多个任务**

**语法：**

```sh
parallel('任务1','任务2','任务3')

```

**例子：**

```js
// cssHandler，htmlHandler一起开始
parallel(cssHandler, htmlHandler);
```

## pipe()

**作用：管道函数，所有的 Gulp API 都是基于流，接收当前流，进入下一个流过程的管理函数**

**例子：**

```js
src()
  .pipe(压缩任务)
  .pipe(转码)
  .pipe(dest("./dist"));
```
