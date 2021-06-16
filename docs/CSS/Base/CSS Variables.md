# CSS 变量

## 什么是 CSS 变量

css 变量也称为自定义属性

声明变量的时候，变量名前面要加两根连词线（--）

例：--my-property：value;

css 变量与自定义的 css 属性其实是一回事

## 声明变量

```css
:root {
  --my-property: #eee;
}

h1 {
  color: var(--my-property);
}
```

## 使用 css 变量的好处

## css 变量与 JS 进行交互

document.body.style.setProperty

getComputedStyle getProperty
