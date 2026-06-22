// Types of Operators:-
// 1. Airthmetic Operators:- +,-,/,*,%,**(power)
// 2. Relational Operators:- >=, <=
// 3. Comparision Operator:- ==(loose equality), ===(strict equality)

// 1. Airthmetic Operators
console.log(5+3);
console.log(5-3); 
console.log(5/3); // float output
console.log(5*3); 
console.log(5%3); // Remainder
console.log(5**3); // 5^3

// 2. Relational Operators
console.log(5>=5); // true
console.log(5>5); // false
console.log(5>3); // true

// 3. Comparision Operators
console.log(5==5); // Checks Only Value
console.log(Number("125")); // Conversion string in number.
console.log(5=="51"); // false
console.log(5==="51"); // false 
console.log(0===false) // (=== does not compare different data types it automatically gives false.)

console.log("5"+"5") // TypeCohesion // 55 // string
console.log(typeof("5"+"5")) 

let ans = 5 + "5";
// concatenation
let y = 125 + 325
// addition
console.log(ans);
console.log(125 + "125"); // 125 is converted into string
console.log(true + "10"); // true is converted into string.

// Spread(...) Operator:-

const fruits = ["Apple","Mangoes"]
const color = ["Red", "Blue", "Green"];
console.log(...fruits) // Seperate Elements from the array. // Spread Operator
console.log([...fruits]) // Again formation of array.
console.log([...fruits, ...color]) // Club elements of two arrays in single array. // concatenation
console.log(fruits.concat(color)) // Club elements of two arrays in single array. // concatenation



