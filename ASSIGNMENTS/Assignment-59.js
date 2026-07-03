// const arr = [2,5,7,90,5];

// console.log(arr.indexOf(5));

const arr = [1,2,2,3,4,5,5];

const unique = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(unique);

const unique1 = [...new Set(arr)];

console.log(unique1);