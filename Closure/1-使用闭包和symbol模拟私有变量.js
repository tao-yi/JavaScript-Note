const MyObject = (function() {
  // private variable
  let _privateVar;

  // private method
  function privateMethod() {
    console.log("privateMethod is called");
  }

  return class MyObject {
    constructor(publicVar, privateVar) {
      this.publicVar = publicVar;
      _privateVar = privateVar;
    }

    // public methtod
    setPrivateVar(newVal) {
      _privateVar = newVal;
    }

    getPrivateVar() {
      return _privateVar;
    }

    publicMethod() {
      privateMethod();
      return privateMethod;
    }
  };
})();

const obj1 = new MyObject(1, { a: 1, b: 2 });
const obj2 = new MyObject(2, { a: 2, b: 4 });

// 注意了，这种方法obj1和obj2的私有变量指向同一个值
console.log("obj1 private variable", obj1.getPrivateVar());
console.log("obj2 private variable", obj2.getPrivateVar());

console.log(obj1); // MyObject { publicVar: 1 }
obj1.setPrivateVar(4); // 修改私有变量为4
console.log(obj1.getPrivateVar()); // 4
console.log(obj2.getPrivateVar()); // 也变成了 4

obj1.publicMethod();

// obj1._privateVar; // 无法访问私有变量
// obj1.privateMethod(); // 无法访问私有方法

// 两个对象的公共函数指向同一个地址
console.log(obj1.publicMethod === obj2.publicMethod);

// 两个对象的私有属性指向同一个地址
console.log(obj1.getPrivateVar() === obj2.getPrivateVar());

// 两个对象的私有函数指向同一个地址
console.log(obj1.publicMethod() === obj1.publicMethod());
