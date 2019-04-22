const colors = ["red", "blue"];
console.log(colors.push("green")); // 3
console.log(colors); // ["red", "blue", "green"]

console.log(colors.pop()); // "green"

console.log(colors.shift()); // "red"

console.log(colors); // "blue"

console.log(colors.unshift("grey")); // 2

console.log(colors); // ["grey", "blue"]

const numbers = [0, 1, 5, 10, 15];

numbers.sort();
console.log(numbers); // [ 0, 1, 10, 15, 5 ] 因为默认按照字符串编码来进行排序

// 从小到大排序
function compare(value1, value2) {
	if (value1 > value2) {
		return 1; // 1表示放后面
	} else if (value1 === value2) {
		return 0;
	} else {
		return -1;
	}
}

numbers.sort(compare);

console.log(numbers);
