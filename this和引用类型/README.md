### this

this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈），函数的调用方式，传入的参数等信息。`this` 就是这个记录的一个属性，会在函数执行的过程中用到。

### 绑定规则

#### 1.默认绑定

最常用的函数调用类型，独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。

```js
function foo() {
  console.log(this.a);
}

var a = 2;
foo(); // this指向window，所以输出 2
```

声明在全局作用域中的变量就是全局对象的一个同名属性。当调用 `foo()` 时，`this.a` 被解析成了全局变量 `a` 。因为在本例中，函数调用时应用了 `this` 的默认绑定，因此 `this` 指向全局对象。

### 2.隐式绑定

另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些误导。

思考下面的代码：

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo();
```

无论是直接在 obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于 obj 对象。

然而，调用位置会使用 obj 上下文来引用函数，因此**你可以说函数被调用时 obj 对象拥有或者包含函数引用**。

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调用 `foo()` 时 `this` 被绑定到 obj，因此 `this.a` 和 `obj.a` 是一样的。

对象属性引用链中只有上一层或者说最后一层在调用位置中起作用。比如：

```js
function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo
};

var obj1 = {
  a: 2,
  obj2
};

obj1.obj2.foo();
```

#### 隐式丢失

一个最常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。

```js
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo
};

var bar = obj.foo; // 函数别名

var a = "opps, global";

bar(); // opps, global 全局对象
```

#### 回调函数丢失 this 绑定是非常常见的！

```js
function foo() {
  console.log(this.a); // node中会打印undefined
  // node中使用 console.log(a)
}

var obj = {
  a: 2,
  foo
};

var a = "oops, global"; // a 是全局对象的属性

setTimeout(obj.foo, 100); // "oops, global"
```

JavaScript 环境中内置的 `setTimeout()` 函数实现和下面的伪代码类似：

```js
function setTimeout(fn, delay) {
  // 等待 delay 毫秒
  fn(); // <-- 调用位置
}
```

除此之外，还有一种情况 `this` 的行为会出乎我们意料：调用回调函数的函数可能会修改 `this`。在一些流行的 JavaScript 库中事件处理器常会把回调函数的 `this` 强制绑定到出发时间的 DOM 元素上。

这在一些情况下可能很有有用，但有时也会让你们郁闷。**无论是哪种情况，this 的改变都是意想不到的，实际上你无法控制回调函数的执行方式**，因此就没有办法控制调用位置以得到期望的绑定。之后我们会介绍如何通过固定 this 来修复这个问题。

### 显式绑定

JavaScript 提供的绝大多数函数以及你自己创建的所有函数都可以使用 `call()` 和 `apply()` 方法。

```js
function foo(name) {
  console.log("printing", this.a, name);
}

var obj = {
  a: 2
};

// 第一个参数是绑定this的对象，其他参数是函数入参
foo.call(obj, "tao");
```

用过 `foo.call()` 我们可以在调用 `foo` 时强制把它的 `this` 绑定到 obj 上。

#### 硬绑定

ES5 提供了内置的方法 `Function.prototype.bind`， 它的用法如下：

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = foo.bind(obj);

var b = bar(3); // 2 3
```

`bind()` 会返回一个硬绑定的新函数，它会把你指定的参数设置为 `this` 的上下文并调用原始函数。

#### API 调用的上下文

第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供了一个可选的参数，通常被称为“上下文”(context)，其作用和 `bind()` 一样，确保你的回调函数使用指定的 `this`。

```js
function foo(el) {
  console.log(el, this.id);
}

var obj = {
  id: "awesome"
};

// 调用foo()时把this绑定到obj
[1, 2, 3].forEach(foo, obj);

// 1 'awesome'
// 2 'awesome'
// 3 'awesome'
```

这些函数实际上是通过 `call` 或者 `apply` 实现了显示绑定，这样你可以少写一些代码。

```js
function foo(b) {
  console.log(this.a, b);
}

const obj = { a: 3 };

foo.apply(obj, [5]);
```

> apply 第二个参数传数组，call 第二个参数传单个值。

#### new 绑定

在传统的面向类的语言中，“构造函数”是类中的一些特殊方法。在 JavaScript 中也有一个 `new` 操作符，使用方法看起来也和哪些面向类的语言一样，其实 JavaScript 中 new 的机制实际上和面向类的语言完全不同。

在 JavaScript 中，构造函数只是使用 new 操作符调用的普通函数而已。

所有函数都可以用 new 来调用。实际上并不存在所谓的构造函数，只有对于函数的构造调用。

使用 new 操作符调用函数时，会自动执行下面的操作。

1. 创建一个全新的对象
2. 这个新对象会被执行 `[[Prototype]]` 连接
3. 这个新对象会绑定到函数调用的 this
4. 如果函数没有返回其他对象，那么 `new` 表达式中的函数调用会自动返回这个新对象，。
