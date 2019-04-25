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

将所有信息都封装在构造函数中，而通过在构造函数中初始化原型，又保持了同时使用构造函数和原型的有点。

```js
function Animal(type, age, weight) {
  this.type = type;
  this.age = age;
  this.weight = weight;

  if (typeof this.eat !== "function") {
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
