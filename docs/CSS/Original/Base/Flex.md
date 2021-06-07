# Flex

## 一、Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```
.box {
	display:flex
}
```

行内元素也可以使用 Flex 布局。

```
.box{
	display:inline-flex
}
```

Webkit 内核的浏览器，必须加上-webkit 前缀。

```
.box{
	display:-webkit-flex; /* Safari */
	display:flex
}
```

注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

## 二、基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container),简称“容器”。它的所有子元素自动成为容器成员,称为 Flex 项目（flex item），简称“项目”。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis)。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end;交叉轴的开始位置叫做 cross start,结束位置叫做 cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。

## 三、容器的属性

以下 6 个属性设置在容器上。

```
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
```

### 3.1 flex-direction 属性

**flex-direction**属性决定主轴的方向（即项目的排列方向）。

```
.box{
	flex-direction:row | row-reverse | column | column-reverse
}
```

它可能有 4 个值

```
row(默认值):主轴为水平方向，起点在左端。
row-reverse:主轴为水平方向，起点在右端。
column:主轴为垂直方向，起点在上沿。
column-reverse:主轴为垂直方向，起点在下沿。
```

### 3.2 flex-wrap 属性

默认情况下，项目都排在一条一条线上（又称“轴线”）上。**flex-wrap**属性定义，如果一条轴线排不下，如何换行。

```
.box{
	flex-wrap: nowrap | wrap | wrap-reverse
}
```

它可能取三个值。

（1）**nowrap**（默认）：不换行。

（2）**wrap**:换行，第一行在上方。

（3）**wrap-reverse**:换行，第一行在下方。

### 3.3 flex-flow

**flex-flow**属性是**flex-direction**属性和**flex-wrap**属性的简写形式，默认值为**row nowrap **

```
.box{
	flex-flow:<flex-direction> || <flex-wrap>
}
```

### 3.4 justify-content 属性

**justify-content**属性定义了项目在主轴上的对齐方式。

```
.box{	justify-content: flex-start | flex-end | center | space-between | space-around;}
```

它可能取 5 个值，具体对齐方式与轴方向有关。下面假设主轴从左到右。

```
flex-start(默认值):左对齐flex-end:右对齐center:居中space-between：两端对齐，项目之间的间隔都相等。space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```

### 3.5 align-items 属性

**align-items**属性定义项目在交叉轴上如何对齐。
