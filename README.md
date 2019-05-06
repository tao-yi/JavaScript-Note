# JavaScript 面试准备

- [JavaScript 面试准备](#javascript-面试准备)
- [数据类型](#数据类型)
- [undefined vs null](#undefined-vs-null)
- [Number 类型](#number-类型)
- [NaN](#nan)
- [parseInt()](#parseint)
- [String](#string)
- [`toString()` vs `String()`](#tostring-vs-string)
- [`Object` 类型](#object-类型)
- [运算符](#运算符)
- [相等性](#相等性)
- [`for-in` vs `for-of`](#for-in-vs-for-of)
- [函数](#函数) - [函数的重载](#函数的重载)
- [变量作用域和内存问题](#变量作用域和内存问题)
- [执行环境以及作用域](#执行环境以及作用域)
- [没有块级作用域！](#没有块级作用域)

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

JS 中的 String 类型是 16 未的 Unicode 字符。字符串一旦创建，它们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值得字符串填充该变量。

##### `toString()` vs `String()`

数值，布尔值，对象和字符串值都有 `toString()` 方法，但 `null` 和 `undefined` 没有。

在不知道要转换的值是不是 `null` 或 `undefined` 的情况下，可以使用转型函数 `String()` 。它有如下规则：

- 如果值有 `toString()` 方法，调用该方法并返回结果。
- 如果值是 `null` 返回 `"null"`
- 如果值是 `undefined` 返回 `"undefined"`

#### `Object` 类型

Object 的每个实例都有下列属性和方法：

- `constructor()`
- `hasOwnProperty()`
- `isPrototypeOf()`
- `propertyIsEnumerable(propertyName)`
- `toLocaleString()`
- `toString()` 返回对象的字符串表示
- `valueOf()` 返回对象的字符串、数值或布尔值表示

#### 运算符

注意点：

```js
console.log(5 / 0); // infinity
console.log(Boolean(5 / 0)); // true

// 先计算数值运算，再拼接字符串
console.log(5 + 10 + "hello"); // "15hello"
console.log("hello" + 5 + 10); // "hello510"

console.log("hello" + (5 + 10)); // "hello15"

console.log(5 + null); // 5，因为null被转换成了 0
console.log(5 + undefined); // NaN
console.log(null + null); // null被转换成了 0
console.log(true + true); // true 被转换成了 1
console.log(false + 5); // false 被转换成了 0

console.log("Bridge" < "apple"); // true, B的字符编码为66，a的字符编码为97
console.log("23" < "3"); // true，2的编码是50，3的编码是51
```

#### 相等性

```js
console.log(null == undefined); // true
console.log("NaN" == NaN); // false，因为 NaN 与任何一个值都不相等，包括它自己
console.log(NaN == false); // false
console.log(NaN == NaN);

console.log(false == 0); // true
console.log(1 == true); // true
console.log(5 == true); // false
```

#### `for-in` vs `for-of`

```js
// for-in 用来枚举对象的属性，不要用来遍历数组
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
```

因为对象的属性没有顺序，因此通过 `for-in` 循环输出的属性名顺序是不可预测的。

> **不要用 for-in 去遍历数组，遍历得到的是索引，而不是具体的值。**

`for-of`在可迭代对象（包括`Array`,`Map`,`Set`,`String`,`TypedArray`对象等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。

```js
let iterable = [10, 20, 30];
for (let value of iterable) {
  console.log(value);
}

// output
// 10
// 20
// 30

for (let value in iterable) {
  console.log("value is " + value);
}

// output
// value is 0
// value is 1
// value is 2
```

迭代 `String`

```js
let str = "abcdefg";
for (let value of str) {
  console.log(value);
}
```

迭代 Map

```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
```

> for...in 语句以原始插入顺序迭代对象的可枚举属性。for...of 语句遍历可迭代对象定义要迭代的数据。

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

由上可以看出，`for...in` 遍历的包括原型对象上的属性，而 `for...of`只会遍历当前对象本身的属性。

---

### 函数

ECMAScript 中的函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。即使你定义的函数只接受两个参数，在调用时你可以不传参数，也可以传三个参数，解析器不会报错。原因是因为参数在内部是用一个数组表示的。

```js
function dynamicArgs() {
  console.log(arguments); //是一个对象或者伪数组 [Arguments] { '0': 1, '1': 2, '2': 3, '3': 'hello', '4': 'world' }
  // 无法用 for...in 进行遍历
  for (let arg of arguments) {
    console.log(arg);
  }
}

dynamicArgs(1, 2, 3, "hello", "world");
```

#### 函数的重载

```js
function overloaded() {
  if (arguments.length == 1) {
    console.log(arguments[0] + 10);
  } else if (arguments.length == 2) {
    console.log(arguments[0] + arguments[1]);
  } else {
    console.log("invalid parameters");
  }
}

overloaded(1);
overloaded(1, 2);
```

虽然算不上完美的重载，但是利用这个特性也弥补了 ECMAScript 的这一缺陷。通过检查传入函数中的类型和数量并作出不同的反应，可以模拟重载的效果。

### 变量作用域和内存问题

在将一个值赋给变量时，解析器必须确定这个值是基本类型值还是引用类型值。

> 在很多语言中，字符串以对象的形式来表示，因此被认为是引用类型的，JavaScript 放弃了这一传统。

#### 执行环境以及作用域

- 指向环境定义了变量或函数有权访问的其他数据。
- 每个执行环境都有一个与之关联的**变量对象**，环境中定义的所有变量和函数都保存在这个对象中。
- 全局执行环境是最外层的一个执行环境，在浏览器中是 window 对象，在 node 中是 global 对象。所有的全局变量和函数都是作为 window/global 的属性和方法创建的。
- 某个执行环境中的代码执行完毕后，保存在其中的所有变量和函数定义也随之销毁。
- **每个函数都有自己的执行环境，当函数被调用的时候，就会创建出一个函数执行环境**。

#### 没有块级作用域！

```js
if (true) {
  var color = "blue";
}
console.log(color); // "blue"

for (var i = 0; i < 10; i++) {
  doSomething(i);
}

console.log(i); // 10
```

if 语句中的变量声明会将变量添加到当前的执行环境中。

> 使用 var 声明的变量会自动被添加到最接近的执行环境中。

---
