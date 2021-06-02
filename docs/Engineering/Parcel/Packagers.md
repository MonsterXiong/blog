# Packagers

在 Parcel 中，一个 Packager 将多个 资源合并到一个最终生成的 bundle 中。此过程发生在主进程中，且在所有资源被处理及 bundle 树被创建之后。Packager 的注册是基于输出文件类型，并且用于生成这种文件类型的资源会被送到 packager 中去生成最后生成的输出文件。

## Packager 接口

```js
const { Packager } = require("parcel-bundler");

class MyPackager extends Packager {
  async start() {
    // 可选，写文件头部内容
    await this.dest.write(header);
  }

  async addAsset(asset) {
    // 必须。将资源写入生成文件。
    await this.dest.write(asset.generated.foo);
  }

  async end() {
    // 可选，写文件尾内部内容。
    await this.dest.end(trailer);
  }
}
```

## 注册一个 Packager

你可以用 addPackager 方法在打包工具中注册一个 packager 。它接受一个文件类型及 packager 模块的所在路径用于注册。

```js
const Bundler = require("parcel-bundler");

let bundler = new Bundler("input.js");
bundler.addPackager("foo", require.resolve("./MyPackager"));
```
