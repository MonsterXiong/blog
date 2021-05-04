# Json-server

### json-server 安装

```javascript
npm install -g json-server
```

### 创建一个含有数据的 db.json 文件

```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

### 启动 json-server

```javascript
json-server --watch db.json
```
