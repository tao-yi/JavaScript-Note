let F = function() {
  this.a = 1;
  this.b = 2;
};

let o = new F();
console.log(o);

// 在f函数的原型上定义属性
F.prototype.b = 3;
F.prototype.c = 4;
