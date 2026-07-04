function processNumbers(numbers, callback) {
  // const result = [];
  // for(let i = 0; i < numbers.length; i++){
  //   result.push(callback(numbers[i]));
  // }
  // return result;
  return numbers.map(callback);
}
 
 
function square(num) {
  return num * num;
}
 
 
function isEven(num) {
  return num % 2 === 0;
}
 
 
console.log(processNumbers([1, 2, 3, 4], square));
// [1,4,9,16]
 
 
console.log(processNumbers([1, 2, 3, 4], isEven));
// [false, true, false, true]
 
 