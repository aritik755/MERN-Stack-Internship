const person = {
  name: "John",
  age: 25,
  city: "New York"
};
 
// Destructure name into studentName 

let{name: studentName, age} = person;
console.log(studentName);
console.log(age);
