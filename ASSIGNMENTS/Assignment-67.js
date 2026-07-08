// 1. Data Types

var studentName = "Avinash";   // string

let age = 21;                  // number

const enrolled = true;         // boolean

let subjects = ["JS", "DOM", "Async"]; // object

let profile = { name: studentName, age, enrolled, subjects }; // object
 
// 2. Hoisting

console.log(x); // undefined

var x = 10;
 
try {

  console.log(y); // Error

  let y = 20;

} catch (err) {

  console.log("Error with let:", err.message);

}
 
// 3. Array Methods

let upperSubjects = subjects.map(s => s.toUpperCase()); 

let filteredSubjects = subjects.filter(s => s.length > 3);

let totalChars = subjects.reduce((acc, s) => acc + s.length, 0);
 
console.log("Upper:", upperSubjects); // [ 'JS', 'DOM', 'ASYNC' ]

console.log("Filtered:", filteredSubjects); // ['Async']

console.log("Total chars:", totalChars); // 10
 
// 4. Async Programming

function fetchGradesCallback(callback) { 

  setTimeout(() => callback([85, 90, 78]), 2000);

}
 
function fetchGradesPromise() {

  return new Promise(resolve => {

    setTimeout(() => resolve([85, 90, 78]), 2000);

  });

}
 
async function fetchGradesAsync() {

  let grades = await fetchGradesPromise();

  console.log("Async/Await Grades:", grades);

}
 
// Usage

fetchGradesCallback(grades => console.log("Callback Grades:", grades)); // Callback Grades: [85,98,78]

fetchGradesPromise().then(grades => console.log("Promise Grades:", grades)); // Promise Grades: [85,90,78]

fetchGradesAsync(); // Async/Await Grades: [85, 90, 78]

 