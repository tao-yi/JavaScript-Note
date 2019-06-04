/**
 * falsy值：
 * 1. false
 * 2. 0
 * 3. ""
 * 4. null
 * 5. undefined
 * 6. NaN
 *
 * 其他所有值都是真值。
 */

console.log(Boolean([])); // true
console.log(Boolean(0)); // false
console.log(Boolean[NaN]); // undefined
console.log(NaN == NaN); // NaN 不等于任何值

console.log(NaN > 5); // false
console.log(NaN < 5); // false
console.log("a" > 0); // false 不会报错
console.log("你好" < 0); // false 不会报错
console.log([] > 0); // false 不会报错
console.log(undefined > 0); // false
console.log(null > 0); // false
console.log({ a: 5 } > 0); // false

console.log(true > 0); // true
console.log(true == 0); // false
console.log(true < 0); // false
console.log(false < 0); // false

console.log(true > false); // true

console.log(true > "a"); // false
console.log(false > "a"); // false
console.log(true > NaN); // false

const a = [];
console.log(a[3]); // undefined 不会报错

// 5种基本类型
const str = "a";
const number = 1;
const bool = true;
const _null = null;
const _undefined = undefined;

// 1种复杂类型
const obj = {};

// truthy value
console.log(Boolean("a"));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean([0]));
console.log(Boolean({}));

// falsy value
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(5 / 0)); // Inifinity is truthy
console.log(typeof Infinity); // number
console.log(Boolean(Infinity)); // true
console.log(typeof NaN); // number

console.log(0 * Infinity); // NaN
console.log(0 / Infinity); // 0
console.log(Infinity / 0); // Infinity
console.log(Infinity / -1); // -Infinity
console.log(1 + 2 + "20"); // 320
console.log("20" + 1 + 2); // 2012
