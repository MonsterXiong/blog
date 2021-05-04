# Sequelize 总结

## 起步

### 配置初始环境

```javascript
//	通过npm安装sequelize
npm install --save sequelize
```

```javascript
//	安装数据库驱动程序
npm install --save mysql2
```

```javascript
//	建立连接

/**
*	1.要连接到数据库，必须创建一个Sequelize实例。
*	2.这可以通过将连接参数分别传递到Sequelize构造函数或通过传递单个连接URI来完成
*/
const Sequelize = require('sequelize')

// with database, username, and password in the options object
const sequelize = new Sequelize({ database, username, password, dialect: 'mysql' });

// with uri=>dialect://username:password@hots:port/database
const sequelize = new Sequelize('mysql://localhost:3306/database', {})

const sequelize = new Sequlize('database','username','password',{
  host:'localhost',
  dialect:'mysql',
  define:{
    timestamps:false
  }
  // 生产环境配置连接池
  pool：{
    max:5,
  	min:0,
  	acquire:30000,
  	idle:10000
  }
})
```

测试连接

```javascript
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.err("Unable to connect to thr database:", err);
  });
```

关闭连接

```javascript
sequelize.close();
```

### 模型

1. **Model.init**

   ```javascript
   const Model = Sequelize.Model
   class User extend Model{}
   User.init({
     // attributes
     firstName:{
       type:Sequelize.STRING,
       allowNull:false
     },
     lastName:{
       type:Sequelize.STRING,
       // allowNull defasults to true
     }
   },{
     sequelize,
     modelName:'user',
     timestamps:true
     // options
   });
   ```

2. **define**

   ```javascript
   const User = sequelize.define(
     "user",
     {
       // attributes
       firstName: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       lastName: {
         type: Sequelize.STRING,
         // allowNull defasults to true
       },
     },
     {
       //options
     }
   );

   module.exports = User;
   ```

### 同步模型到数据库

```javascript
User.sync({ force: true }).then(() => {
  return User.create({
    firstName: "John",
    lastName: "Hancock",
  }).catch((err) => {
    console.err("sync fail:", err);
  });
});
```

### 简易的增删改查

```javascript
// Find all User
User.findAll().then((users) => {
  console.log("All users :", JSON.stringify(users, null, 4));
});

// Create a new user
User.create({
  firstName: "Jane",
  lastName: "Doe",
}).then((jane) => {
  console.log("Jane's auto-gennerated ID:", jane.id);
});

// Delete every named "Jane"
User.destory({
  where: {
    firstName: "Jane",
  },
}).then(() => {
  console.log("Done");
});

// Change everyone without a last name to "Doe"
User.update(
  { lastName: "Doe" },
  {
    where: {
      lastName: null,
    },
  }
).then(() => {
  console.log("Done");
});
```
