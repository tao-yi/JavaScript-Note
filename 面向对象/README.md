```java
public class Employee{
  public String name = '';
  public String dept = 'general';
}

public class Manager extends Employee {
   public Employee[] reports = new Employee[0];
}

public class WorkerBee extends Employee {
   public String[] projects = new String[0];
}

public class SalesPerson extends WorkerBee {
   public String dept = "sales";
   public double quota = 100.0;
}

public class Engineer extends WorkerBee {
   public String dept = "engineering";
   public String machine = "";
}
```

```js
function Employee() {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
  WorkerBee.call(this);
  this.dept = "engineering";
  this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);
```

### 属性类型

ECMAScript 中有两种属性：数据属性和访问器属性。

#### 1. 数据属性

- `[[Configurable]]`: 表示能否通过 `delete` 删除属性，默认为 `true`
- `[[Enumerable]]`: 表示能否通过 `for-in` 进行遍历，默认为`true`
- `[[Writable]]`: 表示能否修改属性的值。默认为 `true`
- `[[Value]]`: 表示这个属性的数据值，默认为 `undefined`

要修改属性默认的特性，必须使用 `Object.defineProperty()` 方法。

#### 2. 访问器属性

访问器属性不包含数据值，它们包含一对 `get` 和 `set` 函数。在读取访问器属性时会调用 `get` 函数，写入会调用 `set` 函数。访问器属性有以下 4 个特性：

- `[[Configurable]]` 表示能否通过 `delete` 删除
- `[[Enumerable]]` 表示能否进行 `for-in` 遍历
- `[[Get]]` 读取时调用 默认为 `undefined`
- `[[Set]]` 写入是调用 默认为 `undefined`

```js
const book = {
  _year: 2004,
  edition: 1
};

Object.defineProperty(book, "year", {
  get: function() {
    return this._year + " year";
  },
  set: function(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
    }
  }
});
```

---

### 创建对象的方式

#### 1. 工厂模式

#### 2. 构造函数模式

构造函数的问题：每个方法都要在每个实例上重新创建一遍。

#### 3. 原型模式

使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。

注意：`for-in` 会遍历对象本身的属性，和它的原型对象中的属性。

#### 4. 组合使用构造函数模式和原型模式

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["James", "Court"];
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name);
  }
};
```

#### 5. 动态原型模式 ⭐️

将所有信息都封装在构造函数中，而通过在构造函数中初始化原型，又保持了同时使用构造函数和原型的优点。

```js
function Animal(type, age, weight) {
  this.type = type;
  this.age = age;
  this.weight = weight;

  if (typeof this.greet !== "function") {
    Animal.prototype.greet = function() {
      console.log(this.type);
    };
  }
}

const a1 = new Animal("dog", 5, 1.9);
const a2 = new Animal("dog", 5, 1.9);

a1.greet();
console.log(a1.greet === a2.greet); // true
```

### 原型链和继承 ✨

JavaScript 本身不提供一个 `class` 实现，在 (ES2015/ES6 中引入了 `class` 关键字，但那只是语法糖，JavaScript 仍然是基于原型的) 。

当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（object）都有一个私有属性（`__proto__`）指向它的构造函数的原型对象 **prototype**。该原型对象也有一个自己的原型对象（`__proto__`），层层向上直到一个对象的原型对象为 `null`。根据定义，`null`没有原型，并作为这个原型链中的最后一个环节。

几乎所有 JavaScript 中的对象都是位于原型链顶端的 `Object`的实例。

> JavaScript objects are dynamic "bags" of properties. JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the property of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

在 JavaScript 中，functions are able to have properties。所有的 Function 对象都有一个特殊的属性 `prototype`。

### 不同方式创建对象的原型链

```js
var o = { a: 1 };
// 0 ---> Object.prototype ---> null

var b = ["yo", "whadup", "?"];
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// f ---> Function.prototype ---> Object.prototype ---> null
```

### ES5 新特性 `Object.create()`

ECMAScript2015 引入了一个新方法 `Object.create()`。调用这个方法会以第一个参数为原型创建一个新对象。

```js
var a = { a: 1 };
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var b = Object.create(null);
// b ---> null
```

### class 关键字

ECMAScript2015 引入了一个新的关键字 `class`

```js
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  get area() {
    return this.height * this.width;
  }

  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

const square = new Square(2);

console.log(square.area);
square.sideLength = 5;
console.log(square.area);
```

### Performance 性能

The lookup time for properties that are high up on the prototype chain can have a negative impact on the performance, and this may be significant in the code where performance is critical. 尝试访问不存在的属性会导致搜寻整个原型链。

当遍历对象属性的时候，原型链上所有可枚举的属性都会被遍历。`hasOwnProperty()` 函数可以检查属性是否属于对象本身而不是在原型链上。

```js
console.log(g.hasOwnProperty("vertices"));
```
