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
