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

const User = function(username, password, balance) {
  let _username = username;
  let _password = password;
  function isValidPassword(newPwd) {
    return newPwd.match(/^[a-zA-Z0-9]{5,10}$/);
  }
  return {
    getInfo: () => `{username: ${_username}, password: ${_password}}`,
    setPassword: newPwd => {
      if (!isValidPassword(newPwd)) throw new Error("invalid password");
      _password = newPwd;
      return true;
    },
    getUserName: () => _username,
    getPassword: () => _password
  };
};

const u1 = new User("taoyi", "123456");
console.log(u1.getInfo());
console.log(u1.getUserName());
console.log(u1.getPassword());
console.log(u1.setPassword("54321"));
console.log(u1.getPassword());
