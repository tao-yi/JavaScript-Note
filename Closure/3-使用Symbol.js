const Apple = (function() {
  let nameSymbol = Symbol("name");

  function Apple(name, type) {
    this[nameSymbol] = name;
    this.type = type;
  }

  // 动态原型模式
  Apple.prototype.getName = () => this[nameSymbol];
  Apple.prototype.setName = newName => (this[nameSymbol] = newName);
  return Apple;
})();

const a1 = new Apple("a", { a: 1, b: 2 });

console.log(a1.getName());
console.log(a1.setName("test"));
console.log(a1.getName());
