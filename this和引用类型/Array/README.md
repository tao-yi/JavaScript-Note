### 数组

数组的每一项可以保存任意类型的数据。

```js
const colors = new Array();
const colors = new Array(20);
const colors = new Array("blue"); // 创建一个包含元素 'blue' 的数组
```

#### 检测数组`isArray()`

ECMAScript5 新增了一个方法 `Array.isArray()` 方法用来确定一个值是不是数组。

#### 栈方法

LIFO: Last In First Out

- `push()` 添加到数组末尾，并返回修改后的数组长度
- `pop()` 移除数组最后一个元素，并返回这个元素

#### 队列方法

FIFO: First In First Out

- `push()` 添加到数组末尾，并返回修改后的数组长度
- `shift()` 移除数组中的第一个元素，并返回它
- `unshift(firstElement)` 将一个元素添加到数组的头部，并返回数组长度

#### 排序

```js
const numbers = [0, 1, 5, 10, 15];

numbers.sort();
console.log(numbers); // [ 0, 1, 10, 15, 5 ] 因为默认按照字符串编码来进行排序
```

`sort()` 方法会根据测试字符串的结果改变原来的顺序，"10" 位于 "5" 的前面。不过，它可以接受一个比较函数作为参数，以便我们自定义排序的规则。

```js
// 从小到大排序
function compare(value1, value2) {
  if (value1 > value2) {
    return 1; // 1 表示value1 放在 value2 的后面
  } else {
    return -1; // -1 表示value1 放在 value2 的前面
  }
}

numbers.sort(compare);

console.log(numbers);
```

#### flat

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```js
const arr1 = [1, 2, [3, 4, [5, 6, 7]]];
const arr2 = arr1.flat(1);
const arr3 = arr1.flat(2);
console.log(arr2); // [ 1, 2, 3, 4, [ 5, 6, 7 ] ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7 ]
```

`flat()` 方法会移除数组中的空项:

```js
const arr4 = [1, 2, , 4, 5, , 6];
const arr5 = arr4.flat();
console.log(arr5); // [ 1, 2, 4, 5, 6 ]
```

#### every

`every()` 方法测试数组的所有元素是否都通过了指定函数的测试。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
```

#### reduce

`reduce()` 方法对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。

reducer 函数接收 4 个参数:

- Accumulator (acc) (累计器)
- Current Value (cur) (当前值)
- Current Index (idx) (当前索引)
- Source Array (src) (源数组)

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // 5 是initialValue
// expected output: 15
```

> 回调函数第一次执行时，accumulator 和 currentValue 的取值有两种情况：如果调用 `reduce()`时提供了 initialValue，accumulator 取值为 initialValue，currentValue 取数组中的第一个值；如果没有提供 initialValue，那么 accumulator 取数组中的第一个值，currentValue 取数组中的第二个值。

```js
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.x;
}, initialValue);

console.log(sum); // logs 6
```

#### some

`some()` 方法测试是否至少有一个元素通过由提供的函数实现的测试。

```js
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
```

---

### 迭代方法

ECMAScript5 中定义了 5 个迭代方法。

- `every` 对数组的每一项运行给定函数，如果每一项都返回 true，则返回 true
- `filter` 对数组的每一项运行给定函数，返回该函数返回 true 的元素组成的数组
- `forEach` 对每一项运行给定函数，没有返回值。
- `map` 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
- `some`对数组中的每一项运行给定的函数，如果该函数对任一项返回 true，则返回 true

### 归并方法

ECMAScript5 中还新增了 2 个归并数组的方法： `reduce()` 和 `reduceRight()` 。这两个方法会迭代数组的所有项，然后构建一个最终返回的值。

- `reduce` 从数组的第一项开始，逐个遍历到最后
- `reduceRight`从数组的最后一项开始，向前遍历到第一项

```js
const arr = [1, 10, 5, 25, 35, 5, 7];

// 第一次执行回调函数时，prev是1，cur是10
// 第二次执行回调函数时，prev是11,cur是5
const sum = arr.reduce((prev, cur, index, array) => {
  return prev + cur;
});

console.log(sum);
```
