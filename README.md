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

**注意：Undefined 和 Null 是唯二的只有一个值得数据类型。**

虽然 Boolean 类型的字面值只有两个，但 ECMAScript 中所有类型的值都有与这两个 Boolean 值等价的值。要将一个值转换为对应的 Boolean 值，可以调用`Boolean()` 函数。

```js
var message = 'hello
```

- 任何非空字符串都会被转换成 false
- 任何非 0 数字值都会被转换成 true， 0 和 `NaN` 会被转换成 false

> if 语句会自动执行相应的 Boolean 转换

#### Number 类型

由于保存浮点数值需要的内存空间是保存整数值的两倍，因此 ECMAScript 会不失时机地将浮点数职转换为整数。
