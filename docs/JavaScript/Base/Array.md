# 数组

## 数组常用的方法

### 增

- push()
- unshift()
- splice()
- concat()

### 删

- pop()
- shift()
- splice()
- slice()

### 改

- splice()

### 查

查找元素，返回元素坐标或者元素值

- indexOf()
- includes()
- find()

### indexOf

返回要查找的元素在数组中的位置，如果没找到则返回-1

### includes

返回要查找的元素在数组中的位置，找到返回 true,否则 false

### find

返回第一个匹配的元素。参数是(item,index,array)

## 排序方法

- reverse()
- sort()

### reverse

将数组反向排列

### sort

接受一个比较函数，用于判断哪个值应该在前面

## 转换方法

- join()

### join

接收一个参数，字符串分隔符，返回包含所有项的字符串。

## 迭代方法

迭代数组的方法（不改变原数组），参数都为一个函数，数组的每一项都会运行该函数，函数的参数是 (item,index,array)。

- some()
- every()
- forEach()
- filter()
- map()

### some

如果有一项函数返回 true，则这个方法返回 true

### every

如果对每一项函数都返回 true，则这个方法返回 true

### forEach

没有返回值

### filter

函数返回 true 的项会组成数组之后返回。

### map

返回由每次函数调用的结果构成的数组
