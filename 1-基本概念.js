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

console.log(String(undefined)); // 'undefined'
console.log(String(null)); // 'null'

console.log(5 / 0); // infinity
console.log(Boolean(5 / 0)); // true

console.log(5 + 10 + "hello"); // "15hello"
console.log("hello" + 5 + 10); // "hello510"
console.log("hello" + (5 + 10)); // "hello15"

console.log(5 + null); // 5，因为null被转换成了 0
console.log(5 + undefined); // NaN
console.log(null + null); // null被转换成了 0
console.log(true + true); // true 被转换成了 1
console.log(false + 5); // false 被转换成了 0

console.log("Bridge" < "apple"); // true, B的字符编码为66，a的字符编码为97
console.log("23" < "3"); // true，2的编码是50，3的编码是51

console.log(null == undefined); // true
console.log("NaN" == NaN); // false，因为 NaN 与任何一个值都不相等，包括它自己
console.log(NaN == false); // false
console.log(NaN == NaN);

console.log(false == 0); // true
console.log(1 == true); // true
console.log(5 == true); // false

const obj = {
	a: "value_a",
	b: "value_b"
};

// for-in 用来枚举对象的属性，不要用来遍历数组
for (let key in obj) {
	console.log(`${key}: ${obj[key]}`);
}

let iterable = [10, 20, 30];
for (let value of iterable) {
	value += 1;
	console.log(value);
}

let str = "abcdefg";
for (let value of str) {
	console.log(value);
}

let map = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of map) {
	console.log(entry);
}

// ========================================================================================
function dynamicArgs() {
	console.log(arguments);
	for (let arg of arguments) {
		console.log(arg);
	}
}

dynamicArgs(1, 2, 3, "hello", "world");

// ========================================================================================
// Overloading
function overloaded() {
	if (arguments.length == 1) {
		console.log(arguments[0] + 10);
	} else if (arguments.length == 2) {
		console.log(arguments[0] + arguments[1]);
	} else {
		console.log("invalid parameters");
	}
}

overloaded(1);
overloaded(1, 2);
