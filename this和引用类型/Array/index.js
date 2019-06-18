const arr = [1, 10, 5, 25, 35, 5, 7];

arr.sort((value1, value2) => {
  if (value1 > value2) return 1;
  else return -1;
});

console.log(arr);

const sum = arr.reduce((prev, cur, index, array) => {
  return prev + cur;
});

console.log(sum);
