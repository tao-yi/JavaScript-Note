let message;
var message1;
console.log(typeof message); // undefined
console.log(typeof message1); //undefined
console.log(typeof undefinedVariable);

console.log(Boolean(message)); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(1)); //true
console.log(Boolean("helllo")); //true
console.log(Boolean("")); // 任何非空字符串都会被转换成 true
