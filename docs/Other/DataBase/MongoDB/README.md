# MongoDB

## 查看数据库

语法： show databases (show dbs)

## 删除数据库

语法：

1. 通过 use 语法选中数据库
2. db.dropDatabase()

## 选择数据库

语法： use 数据库名

留心：在 MongoDB 中选择不存在的数据库不会报错，后期当该数据库有数据时，系统自动创建（隐式创建）

## 查看集合

语法： show collections

## 创建集合

语法： db.createCollections('c1')

## 删除语法

语法：db.集合名.drop()

## MongoDB 文档增删改查（CURD）

### C 新增

语法：db.集合名.insert(JSON 数据)

说明：集合存在-则直接插入数据，集合不存在-隐式创建

练习：在 test2 数据库的 C1 集合中插入数据（姓名叫张三，年龄 18 岁）

```
use test2
db.c1.insert({
	username:"张三",
	age：18
})
留心1：数据库和集合都不存在=》都隐式创建
留心2：对象的键同意不加引号方便看，但是查看集合数据时系统会自动加
留心3：mongodb会给每条数据增加一个全球唯一的_id键
多学一招_id的组成
```

### 思考 1：是否可以自定义\_id 值？

回答：可以，只需要给插入的 JSON 数据增加\_id 键即可覆盖(不推荐)

```
db.c1.insert({_id:1,uname:"web",age:18})
```

### 思考 2：如何一次性插入多条记录？

回答：传递数据，在数组中写一个个 JSON 数据即可

```
db.c1.insert([
	{uname:"z3",age:3},
	{uname:"z4",age:4}
])
```

### 思考 3：如何快速插入 10 条数据

回答：mongodb 底层使用 JS 引擎实现的，所以支持部分 js 语法

因此：可以写 for 循环

```
需求：在test2数据库c2集合中插入10条数据，分别为a1 a2 ... a10
use test2
for(var i=1;i<=10;i++){
	db.c2.insert({uname:"a"+i,age:i})
}

for循环是一条一条插入，前九条的提示看不到，最后一条提示可以出现
```

## R 查询

基础语法：

```
db.集合名.find(条件[,查询的列])
```

升级语法：

```
db.集合名.find({键：值})	注：值不直接写
				  {运算符：值}

db.集合名.find({
	键：{运算符：值}
})
```

```
条件
	查询所有的数据			    {}或者不写
	查询age=6的数据			 {age:6}
	既要age=6又要性别=男		{age:6,sex:'男'}

查询的列（可选参数
	不写-这查询全部列（字段
	{age:1}-只显示age列（字段
	{age:0}-除了age列（字段都显示
	留心：不管你怎么写，系统自定义的_id都会在
```

| 运算符 | 作用     |
| ------ | -------- |
| \$gt   | 大于     |
| \$gte  | 大于等于 |
| \$lt   | 小于     |
| \$lte  | 小于等于 |
| \$ne   | 不等于   |
| \$in   | in       |
| \$nin  | not in   |

### 练习 1：查询所有数据

db.c1.find()

### 练习 2：查询年龄大于 5 岁的数据？

db.c1.find({

​ age:{\$gt:5}

})

### 练习 3：查询年龄是 5 岁、8 岁、10 岁的数据

db.c1.find({

​ age:{\$in:[5,8,10,]}

})

### 练习 4：只看年龄列，或者年龄以外的列（\_id 别管它）？

##### 只看年龄列

db.c1.find({},{age:1})

##### 年龄以外的列

db.c1.find({},{age:0})

## U 修改

基础语法：

```
db.集合名.update(条件，新数据[,是否新增，是否修改多条])
```

```
是否新增：指条件匹配不到数据插入（true是插入，false否，不插入，默认）是否修改多条：指将匹配的成功的数据都修改（true是，false否,默认）
```

升级语法：

```
db.集合名.update(条件，新数据)					{修改器：{键：值}}
```

| 修改器   | 作用     |
| -------- | -------- |
| \$inc    | 递增     |
| \$rename | 重命名列 |
| \$set    | 修改列值 |
| \$unset  | 删除列   |

### 准备工作

```
for (var i=1;i<=10;i++){ db.test3.insert({"uname":"zs"+i,"age":i})}
```

### 练习 1：将{uname:"zs1"}改为{uname:"zs2"}

> 发现： db.test3.update({uname:"zs1"},{uname:"zs2"}),替换，只剩下\_id 和 uname:"zs2"的列值，默认不是修改，而是替换
>
> 解决：使用升级语法 修改器
>
> 需求：使用修改器将 zs3 的姓名修改为 zs33

### 练习 2：将{uname:"zs3"}的年龄增加 2 岁或者减少 2 岁

```
db.test3.update({uname:"zs3"},{$inc:{age:2}}) //增加db.test3.update({uname:"zs2"},{$inc:{age:-2}}) //减少
```

### 练习 3：修改器综合练习

插入数据：db.c4.insert({uname:"神龙教主"，age:888,who:"男",other:"非国人"});

> 完成需求：
>
> uname:改成神龙教主 （修改器：\$set）
>
> age 增加 111 （修改器：\$inc）
>
> who 改字段 sex （修改器：\$rename）
>
> other 删除 （修改器：\$unset）

语法|分析：

```
db.c4.update({uname:"神龙教主",{uname:"web"}) #错误 替换							{$set:{uname:"web"}}							{$inc:{age:111}}							{$rename:{who:"sex"}}							{$unset:{other:true}}留心：如何一次性写多个修改器db.c4.update({uname:"神龙教主",{	$set:{uname:"web"}，	$inc:{age:111}，	$rename:{who:"sex"}，	$unset:{other:true}}）
```

### 练习 4：验证语法最后两个参数（了解）

【验证】是否新增 true 是 false 否：修改 uname 等于 zs30 的年龄 30 岁

```
db.c4.update({uname:"zs30"},{$set:{age:30}})db.c4.update({uname:"zs30"},{$set:{age:30}},false)// 不存在就插入db.c4.update({uname:"zs30"},{$set:{age:30}},true)
```

【验证】是否修改多条 true 是，false 否默认

```
// 只修改一条db.c4.update({},{$set:{age:10}},false,false)// 修改多条db.c4.update({},{$set:{age:20}},false,true)
```

## D 删除

语法：

```
db.集合名.remove(条件[,是否删除一条])注意：是否删除一条true是，false否 默认
```

## 教学管理系统数据库设计

### 数据库设计流程

根据 UI 设计稿

1 确定功能模块所属集合

2 确定集合字段

```
UI设计稿每个展示内容对应一个字段创建于字段更新于字段状态字段最后：先中文、再英文留心：上述规则照顾基础差的，如果大神或者久而久之就变成肌肉记忆，下意识直接创建
```

### 练习

- 需求：根据教学系统，设置存放学生信息的集合，并插入 20 条测试数据
- 代码

```
1. 先中文集合名词：学生集合集合字段：编号、学号、姓名、电话、性别、年龄、学历、备注2. 再英文use schoolfor(var num=1;num<=20;num++){	db.stu.insert({        id:num,        no:"QF"+num,        uname:"神龙教"+num,        tel:"1111111111111",        sex:'女',        age:num,        school:"研究生",        remark:"土豪"	})}db.stu.find().pretty()
```

## MongoDB 排序&分页

### 排序

- 语法：db.集合名.find().sort(JSON 数据)
- 说明：键-就是要排序的列/字段、值：1 升序 -1 降序
- 练习：年龄升序&降序

> db.test.find().sort({age:1})

### 分页：Limit 与 Skip 方法

- 语法：db.集合名.find().sort().skip(数字).limit(数字)
- 说明：skip 跳过指定数量（可选），limit 限制查询的数量
- 练习：1-降序查询查询 2 条，2-降序跳过两条并查询 2 条

> db.test.find().sort({age:-1}).skip(2).limit(2)

### 实战分页

需求：数据库 1-10 数据，每页显示两条(5 页)

语法：db.集合名.find().skip.limit(2)=》count()-统计总数量

```
skip计算公式：（当前页-1）*每页显示条数1页	1  2	02页	3  4	13页	5  6	24页	7  8	35页	9  10	4
```

## MongoDB 聚合查询

### 明确需求

思考：如何统计数据、如何实现分组统计等？

回答：通过 MongoDB 聚合查询

### 概念

顾名思义就是把数据聚起来，然后统计

### 语法

语法：

```
db.集合名称.aggregate([	{管道:{表达式}}	...])
```

常用管道

```
$group	将集合中的文档分组，用于统计结果$match	过滤数据，只要输出符合条件的文档$sort	聚合数据进一步排序$skip	跳过指定文档数$limit	限制集合数据返回文档数...
```

常用表达式

```
$sum 总和		$sum:1同count表示统计$avg 平均$min 最小值$max 最大值...
```

### 准备

```
use test4db.c1.insert({_id:1,name:"a",sex:1,age:1})db.c1.insert({_id:2,name:"b",sex:1,age:2})db.c1.insert({_id:3,name:"c",sex:2,age:3})db.c1.insert({_id:4,name:"d",sex:2,age:4})db.c1.insert({_id:5,name:"e",sex:2,age:5})
```

### 练习

- 统计男生、女生的总年龄

```
db.c1.aggregate([
    {
        $group:{
            _id:"$sex",
            rs:{
                $sum:"$age"
                }
            }
    }
])
```

- 统计男生、女生的总人数

```
db.c1.aggregate([
    {
        $group:{
            _id:"$sex",
            rs:{
                $sum:1
            }
        }
    }
])
```

- 求学生总数和平均年龄

```
db.c1.aggregate([
    {
        $group:{
            _id:null,
            total_num:{
                $sum:1
            },
            total_avg:{
                $avg:"$age"
            }
        }
    }
])
```

- 查询男生、女生人数，按人数升序

```
db.c1.aggregate([
    {
        $group:{
            _id:"$sex",
            rs:{
                $sum:1
            }
        }
    },
    {
        $sort:{
            rs:1
        }
    }
])
```

## MongoDB 优化索引

### 生活中的索引

公交车站牌-新华字典-写字楼办公区域索引=》加快找到目标速度

### 数据库中的索引

- 说明：索引是一种排序好的便于快速查询的数据结构
- 作用：帮助数据库高效的查询数据

### 索引优缺点

- 优点

> 提高数据查询的效率，降低数据库的 IO 成本
>
> 通过索引对数据进行排序，降低数据排序的成本，降低 CPU 的消耗

- 缺点

> 占用磁盘空间
>
> 大量索引影响 SQL 语句效率，因为每次插入何修改数据都需要更新索引

### 语法

- 创建索引语法：db.集合名.createIndex(带创建索引的列，[，额外选项])
- 参数：

> 带创建索引的列：{键：1，...，键：-1}
>
> 说明：1 升序 -1 降序（）例如{age:1}表示创建 age 索引并按照升序的方式存储
>
> 额外选项：设置索引的名称或者唯一索引等等

- 删除索引语法：

> 全部删除：db.集合名.dropIndexes()
>
> 删除指定：db.集合名.dropindex(索引名)

- 查看索引语法：db.集合名.getIndexes()

### 练习

**准备：**向数据库新增十万条数据

```
// 选择数据库use test5;

// 向数据库中添加数据
for(var i=0;i<100000;i++){
    db.c1.insert({'name':"aaa"+i,"age":i})
}
```

**创建普通索引**

> 需求：给 name 添加普通索引
>
> 练习 1：给 name 添加普通索引，命令：
>
> db.c1.createIndex({name:1})
>
> 练习 2：删除 name 索引，命令：
>
> db.c1.dropIndex("name_1")
>
> 练习 3：给 name 创建索引并起名 webopenfather
>
> 命令：db.c1.createIndex({name:1},{name:"webopenfather"})

**创建复合/组合索引**

> 需求：给 name 和 age 添加组合索引
>
> 说明：一次性给两个字段建立索引
>
> 语法：db.集合名.createIndex({键 1：方式，键 2：方式})

**创建唯一索引**

> 需求：给 name 添加普通索引
>
> 语法：db.集合名.createIndex(待添加索引的列，{unique:列名})
>
> 练习 1：删除全部索引，命令：
>
> db.c1.dropIndexes(); //系统的还在
>
> 练习 2：设置唯一索引，命令：
>
> db.createIndex({name:1},{unique:"name"})
>
> 练习 3：测试唯一索引特性，命令：
>
> db.c1.insert({name:"a"});=>成功
>
> db.c1.insert({name:"a"});=>报错

### 分析索引（explain）

### 选择规则（如何选择合适的列创建索引）
