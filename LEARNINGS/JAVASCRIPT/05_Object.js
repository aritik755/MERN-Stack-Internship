const Student = {
  name: "Ritik",
  age: 19,
  isMale: true
}

console.log("name", Student.name); // Student.name for calling student name from the object.
console.log(`name ${Student.name}`)
console.log(`My name is ${Student.name} and I am ${Student['age']} years old.`)

let key = "age";

console.log(Student.key); // undefined 
console.log(Student[key]);

console.log(typeof Student);
