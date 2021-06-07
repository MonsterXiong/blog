# position

指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。

## 定位类型

- 定位元素（positioned element）是其计算后位置属性为 relative，absolute，fixed 或 sticky 的一个元素（换句话说，除 static 以外的任何东西）。

- 相对定位元素（relatively positioned element）是计算后位置属性为 relative 的元素。

- 绝对定位元素（absolutely positioned element）是计算后位置属性为 absoluted 或 fixed 的元素。

- 粘性定位元素（stickily positioned element）是计算后位置属性为为 sticky 的元素。

  大多数情况下，height 和 width 被设定为 auto 的绝对定位元素，按其内容大小调整尺寸。但是，被绝对定位的元素可以通过指定 top 和 bottom，保留 height 未指定（即 auto），来填充可用的垂直空间。他们同样可以通过指定 left 和 right 并将 width 指定为 auto 来填充可用的水平空间。

  绝对定位元素填充可用空间。

- 如果 top 和 bottom 都被指定（）
