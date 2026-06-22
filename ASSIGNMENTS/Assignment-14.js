// const person = { name: "Amit", age: 25 };
// const details = { city: "Delhi", age: 30 };
// Using the spread operator, create a new object that merges both objects, but ensures that the age from details overwrites the age in person.
// (What will the final object look like?)


const person = { name: "Amit", age: 25 };
const details = { city: "Delhi", age: 30 };

const clubObject = {...person, ...details}

console.log(clubObject);