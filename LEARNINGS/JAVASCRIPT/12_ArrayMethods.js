// Array Methods: Map, filter and reduce 
// These methods do not make changes in main array it make copy array and update.

// filter gives array
const arr= [2,5,7,9,10];

const filteredArray = arr.filter(num => num%2 === 0);
console.log(filteredArray);
console.log(arr);

// map gives array
const arr1 = [1,2,4,10]; 

const mapedArr = arr1.map(num => num+5);
console.log(mapedArr);

// reduce one single computed value
const accumulatedSum = arr1.reduce((sum,num)=>sum+num,0)
console.log(accumulatedSum);