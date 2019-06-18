### 类型

简单基本类型：null, undefined, string, number, boolean, object

简单基本类型本身并不是对象。null 有时会被当做一种对象类型，但是这其实只是语言本身的一个 bug。

> 原理是这样的，不同对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型，null 的二进制表示全是 0，自然前三位也是-，所以执行 typeof 时会返回 "object"。

实际上，**null 本身是基本类型**。

函数就是对象的一个子类型（从技术角度来说就是“可调用的对象”）。JavaScript 中的函数是“一等公民”，因为它们本质上和普通的对象一样（只是可以调用）。

### 内置对象

JavaScript 中还有一些对象子类型，通常被称为内置对象。有些内置对象的名字看起来和简单基础类型一样，不过实际上它们的关系更复杂。

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

这些内置对象从表现形式上来说很像其他语言中的类型（type）或者类（class）。

但是在 JavaScript 中，它们实际上只是一些内置函数。

### 复制对象

看起来应该有一个内置的 `copy()` 方法，是吧？实际上事情比你想象的更复杂，因为我们无法选择一个默认的复制算法。

举例来说，思考一下这个对象：

```js
function anotherFunction() {}

var anotherObject = {
  c: true
};

var anotherArray = [];

var myObject = {
  a: 2,
  b: anotherObject,
  c: anotherArray,
  d: anotherFunction
};

// anotherArray.push(anotherObject, myObject);

var deepCopy = JSON.parse(JSON.stringify(myObject));
console.log(myObject.b === deepCopy.b); // false
console.log(myObject.c === deepCopy.c); // false
console.log(myObject.d === deepCopy.d); // false

var shallowCopy = Object.assign({}, myObject);
console.log(myObject.b === shallowCopy.b); // true
console.log(myObject.c === shallowCopy.c); // true
console.log(myObject.d === shallowCopy.d); // true
```

对于 JSON 安全的对象来说，有一种巧妙地复制方法：`JSON.parse(JSON.stringify(targetObject))`

相比深复制，浅复制非常简单易懂并且问题要少得多。ES6 定义了 Object.assign()方法来实现浅复制。

> Object.assign()方法的第一个参数是目标对象，之后还可以跟一个或多个源对象。它会遍历一个或多个源对象的所有可枚举的自有键，并把它们复制到目标对象。

### 属性描述符

在 ES5 之前，JavaScript 语言本身并没有提供可以直接检测属性特性的方法，比如判断属性是否是只读。

但是从 ES5 开始，所有的属性都具备了属性描述符。

思考下面的代码：

```js
var myObject = {
  a: 2
};

Object.getOwnPropertyDescriptor(myObject, "a");
// { value: 2, writable: true, enumerable: true, configurable: true }
```

在创建普通属性时属性描述符会使用默认值，我们也可以使用 `Object.defineProperty()` 来添加一个新属性或者修改一个已有属性并对特性进行设置。

```js
var myObject = {};

Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true, // 可否修改
  configurable: true, // 可否使用defineProperty来修改属性描述符
  enumerable: true // 可否可枚举，是否会出现在for...in枚举中
});

console.log(myObject.a);
```

### getter 和 setter

```js
var myObj = {
  get a() {
    return 2;
  }
};

console.log(myObj.a);
myObj.a = 3; // 无法修改
console.log(myObj.a); // 2
```

```js
var myObject = {
  // 给 a 定义一个 getter
  get a() {
    return 2;
  }
};

Object.defineProperty(
  myObject, // 目标对象
  "b", // 属性名
  {
    // 给b设置一个getter
    get: function() {
      return this.a * 2;
    },
    // 确保b会出现在对象的属性列表中
    enumerable: true
  }
);

console.log(myObject.a); // 2
console.log(myObject.b); // 4
```

### 遍历

for...in 循环可以用来遍历对象的可枚举属性列表（包括 Prototype 链）。但是如何遍历属性的值呢？

使用 `for...in` 遍历对象是无法直接获取属性值，因为它实际上遍历的是对象中的所有可枚举属性，你需要手动获取属性值。

```js
var obj = {
  a: 1,
  b: 2
};

for (var v in obj) {
  console.log(v);
}

// a
// b
```

如何直接遍历值而不是数组下标呢？ES6 增加了一种用来遍历数组的 `for...of` 循环语法：

```js
var myArray = [1, 2, 3];
for (var v of myArray) {
  console.log(v);
}

// 1
// 2
// 3
```

`for...of` 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的 `next()` 方法来遍历所有返回值。

数组有内置的 `@@iterator`，因此 `for...of` 可以直接应用在数组上。我们使用内置的 `@@iterator` 来手动遍历数组：

```js
var myArr = [1, 2, 3];

var it = myArr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
```
