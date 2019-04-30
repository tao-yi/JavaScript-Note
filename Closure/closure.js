function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

const User = (function() {
  // 一个私有属性
  let _password;

  // 一个私有方法
  function isValidPassword(newPwd) {
    return newPwd.match(/^[a-zA-Z0-9]{5,10}$/);
  }

  return function(username, password, balance) {
    // 公有属性
    this.username = username;
    this.balance = balance;
    // 私有属性
    _password = password;
    // 公有方法
    this.getInfo = () =>
      `{username: ${this.username}, balance: ${
        this.balance
      }, password: ${_password}}`;
    this.setPassword = newPwd => {
      if (!isValidPassword(newPwd)) throw new Error("invalid password");
      _password = newPwd;
      return true;
    };
    this.getUserName = () => this.username;
    this.getPassword = () => _password;
  };
})();

const u1 = new User("taoyi", "123456", 1000);
console.log(u1.getInfo());
console.log(u1.getUserName());
console.log(u1.getPassword());
console.log(u1.setPassword("54321"));
console.log(u1.getPassword());
