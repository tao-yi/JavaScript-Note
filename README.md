### JavaScript 面试准备

#### 数据类型

6 种简单数据类型 `Undefined`, `Null`, `String`, `Number`, `Boolean`, `Symbol`。一种复杂数据类型 `Object`。Object 本质上是由一组无序的 key-value pair 组成。

#### undefined vs null

在使用 `var` 或者 `let` 声明变量但未对其加以初始化时，这个变量就是 `undefined`。

```js
var message;
console.log(message === undefined);
```

> 对未初始化和未声明的变量执行 `typeof` 操作符都返回了 `undefined` 的值。
