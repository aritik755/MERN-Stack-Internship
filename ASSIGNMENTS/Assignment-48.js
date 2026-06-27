const person = {
  name: "Sam",
  age: 30
};

// Write a function that accepts the object and prints:
// "Sam is 30 years old."

function printsObject(obj){
  console.log(`${obj.name} is ${obj.age} years old.`);
}

printsObject(person);