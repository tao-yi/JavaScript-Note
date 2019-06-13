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

const arr1 = [1, 2, [3, 4, [5, 6, 7]]];
const arr2 = arr1.flat(1);
const arr3 = arr1.flat(2);
console.log(arr2); // [ 1, 2, 3, 4, [ 5, 6, 7 ] ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7 ]

const arr4 = [1, 2, , 4, 5, , 6];
const arr5 = arr4.flat();
console.log(arr5); // [ 1, 2, 4, 5, 6 ]

console.log("==================================");

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(reducer, 5));
// expected output: 15

// 计算数组中每个元素出现的次数
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, currentName) => {
  if (currentName in allNames) {
    allNames[currentName]++;
  } else {
    allNames[currentName] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);
