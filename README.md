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

```js
var floagNum1 = 1; // 小数点后没有数值，解析为1
var floatNum2 = 10.0; // 整数，解析为10
```

浮点数的最高精度是 17 位小数，但在进行算数计算时其精度远远不如整数。例如：0.1 + 0.2 的结果不是 0.3 而是 0.30000000000000004

```js
// 永远不要测试某个特定的浮点数值
if (a + b == 0.3) {
	console.log("yes");
}
```

##### NaN

`NaN` 是一个特殊的数值。用来标识一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。在其他编程语言中，任何数值除以非数值都会导致错误，从而停止代码执行。但在 ECMAScript 中会返回`NaN`。

- 首先，任何设置 NaN 的操作都会返回 NaN。
- NaN 与任何值都不相等，包括它本身。

```js
console.log(NaN == NaN); // false
```

针对 NaN 的这两个特点，ECMAScript 定义了 `isNaN()` 这个函数帮我们判断一个数是否不是数值。`isNaN()` 会尝试将一个值转换为数值，并返回 true 或 false。

```js
console.log(isNaN(NaN)); // true
console.log(isNaN("blue")); // true
console.log(isNaN(true)); // false可以转换成数字1
console.log(isNaN(false)); // false可以转换成数字0
console.log(isNaN("")); // false，可以转换成数字0
console.log(Number("")); // 0
```

##### parseInt()

由于 `Number()` 函数在转换字符串时比较复杂而且不够合理，因此在处理整数的时候更常用的是 `parseInt()` 函数。 `parseInt()` 函数在转换字符串时，更多的是看起是否符合数值模式。它会忽略字符串前面的空格，直至找到第一个非空格字符。

**如果第一个字符不是数字字符或者负号，就会直接返回 `NaN`**。如果第一个字符是数字字符，`parseInt()` 会继续解析第二个字符，直到解析完所有的后续字符或者遇到一个非数字字符为止。

```js
console.log(parseInt("-123hello")); // -123
console.log(parseInt(10.123)); // 10
console.log(parseInt("")); // NaN
console.log(parseFloat("-012.123测试")); // -12.123
```

可以提供第二个参数，代表转换的基数(Base)

```js
console.log(parseInt(10, 2)); // 10 => 二进制中的 2
```

##### String

JS 中的 String 类型是 16 未的 Unicode 字符。
