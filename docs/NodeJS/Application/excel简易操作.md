# Excel 简易操作

支持 Excel 的 node.js 模块：

node-xlsx：基于 Node.js 解析 excel 文件数据及生成 excel 文件；

excel-parser：基于 Node.js 解析 excel 文件数据，支持 xls 及 xlsx 文件；

excel-export：基于 Node.js 将数据生成导出 excel 文件，生成文件格式为 xlsx；

node-xlrd：基于 Node.js 从 excel 文件中提取数据。

测试用例：

```javascript
npm init -y
npm install node-xlsx -S
```

引入依赖包：

```javascript
const xlsx = require("node-xlsx");
const fs = require("fs");
```

测试数据:

```javascript
var data = [
  {
    name: "sheet1",
    data: [
      ["id", "name", "age"],
      ["1", "zhangsan", "18"],
      ["2", "lisi", "16"],
    ],
  },
  {
    name: "sheet2",
    data: [
      ["username", "gender"],
      ["zhangsan", "1"],
    ],
  },
];
```

```javascript
/**
 * 读取路径信息
 * @param {string} path 路径
 */
function getStat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false);
      } else {
        resolve(stats);
      }
    });
  });
}
```

```javascript
/**
 * 创建路径
 * @param {string} dir 路径
 */
function mkdir(dir) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
```

```javascript
/**
 * 写入文件
 * @param {string} path 路径
 * @param {buffer} data 数据
 */
function write(path, data) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Write to finished");
    }
  });
}
```

```javascript
(async function() {
  // 创建数据
  var buffer = xlsx.build(data);
  // 路径
  const filepath = "./excel/resut.xlsx";
  // 获取文件路径信息
  const isExist = await getStat("./excel");
  // 是否存在该路径信息
  if (!isExist) {
    // 不存在，则创建文件夹
    const result = await mkdir("./excel");

    write(filepath, buffer);
  } else {
    // 获取完整路径信息
    const isExistFile = await getStat(filepath);
    // 若没有信息
    if (!isExistFile) {
      // 则直接写入数据
      write(filepath, buffer);
    } else {
      // 若已存在文件，则读取文件信息
      var obj = xlsx.parse(filepath);
      // 数据操作
      obj[0].data.push(data[0].data);
      // 创建数据
      const buf = xlsx.build(obj);
      // 写入完整数据
      write(filepath, buf);
    }
  }
})();
```
