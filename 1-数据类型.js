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

console.log(0.1 + 0.2); //0.30000000000000004

console.log(NaN == NaN); // false

console.log(isNaN(NaN)); // true
console.log(isNaN("blue")); // true
console.log(isNaN(true)); // false可以转换成数字1
console.log(isNaN(false)); // false可以转换成数字0
console.log(Number(false)); // 0
console.log(isNaN("")); // false，可以转换成数字0
console.log(Number("")); // 0
console.log(Number("10000")); // 10000
console.log(Number("000010")); // 10

// parseInt()
console.log(parseInt("-123hello")); // -123
console.log(parseInt(10.123)); // 10
console.log(parseInt("")); // NaN
console.log(parseFloat("-012.123测试")); // -12.123

console.log(parseInt(10, 2)); // 2
