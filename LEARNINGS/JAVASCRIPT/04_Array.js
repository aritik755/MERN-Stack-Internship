const arr = [true, 45, "Ritik"]; 

arr.push("Hari"); // Adding a element in the end of an array.
console.log(arr);

arr.pop(); // Removes the last element of the array.
console.log(arr); 

const poppedE1 = arr.pop(); // Track the poped element from the array.
console.log(poppedE1);

const length = arr.length; // Size of the array.
console.log(length);

// 0 based indexing.
// First Index = 0, Last Index = length-1 

arr1 = [true, 7, "Ravi"];
arr1.unshift(50); // Add this element at the 0th index of the arr1.
console.log(arr1);

const firstElement = arr1.shift(); // First Element of the arry. // array.shift(); remove the first element of the array.
console.log(firstElement);

console.log(arr1);

