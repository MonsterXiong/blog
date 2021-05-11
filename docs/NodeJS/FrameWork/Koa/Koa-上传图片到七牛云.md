```js
//	app.js
//	1.下载依赖并引用依赖
const koaBody = require("koa-body");
//	2.判断目录是否存在，不存在则建立
const serverPath = path.join(__dirname, "/public/uploads");
if (!fs.existsSync(serverPath)) {
  fs.mkdirSync(serverPath);
}

// 3.
// middlewares
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "/public/uploads"),
      keepExtensions: true,
      maxFileSize: 200 * 1024 * 1024,
    },
  })
);
```

```js
// routes/upload.js
const router = require("koa-router")();

// 引入七牛模块
const qiniu = require("qiniu");

const fs = require("fs");
const path = require("path");

const imageUrl = ""; // 域名地址
const bucket = ""; // 空间名称
const accessKey = ""; // 你的七牛的accessKey
const secretKey = ""; // 你的七牛的secretKey

// 写入目录
const mkdirsSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
  return false;
};

function getSuffix(fileName) {
  return fileName.split(".").pop();
}

// 重命名
function Rename(fileName) {
  return (
    Math.random()
      .toString(16)
      .substr(2) +
    "." +
    getSuffix(fileName)
  );
}
// 删除文件
function removeTemImage(path) {
  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
}
// 上传到七牛
function upToQiniu(filePath, key) {
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  const options = {
    scope: bucket, // 你的七牛存储对象
  };
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken = putPolicy.uploadToken(mac);

  const config = new qiniu.conf.Config();
  // 空间对应的机房
  config.zone = qiniu.zone.Zone_z2;
  const localFile = filePath;
  const formUploader = new qiniu.form_up.FormUploader(config);
  const putExtra = new qiniu.form_up.PutExtra();
  // 文件上传
  return new Promise((resolved, reject) => {
    formUploader.putFile(uploadToken, key, localFile, putExtra, function(
      respErr,
      respBody,
      respInfo
    ) {
      if (respErr) {
        reject(respErr);
      }
      if (respInfo.statusCode == 200) {
        resolved(respBody);
      } else {
        resolved(respBody);
      }
    });
  });
}

router.post("/upload", async (ctx, next) => {
  console.log(ctx.request.files);
  // 获取上传图片

  const { name: FileName, path: ImgPath } = ctx.request.files.file;
  // 获取改名
  const renameFile = Rename(FileName);

  // 上传到七牛
  const qiniu = await upToQiniu(ImgPath, renameFile);

  removeTemImage(ImgPath);

  ctx.body = {
    imgUrl: `${imageUrl}/${qiniu.key}`,
  };
});

module.exports = router;
```

::: details 测试网页

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <input id="btn1" type="file" name="file" />
    <input id="btn2" type="submit" value="提交" />
  </body>
  <script>
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");
    var file = null;
    btn1.addEventListener("change", function(e) {
      file = e.target.files[0];
    });

    btn2.onclick = function() {
      var _data = new FormData();
      _data.append("file", file);
      xhr(_data);
    };

    var xhr = function(formdata) {
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.open("post", "http://localhost:3000/upload", true);

      xmlHttp.send(formdata);

      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
          if (xmlHttp.status == 200) {
            var data = xmlHttp.responseText;
            console.log(data);
          }
        }
      };
    };
  </script>
</html>
```

:::
