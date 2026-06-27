let obj = {
  name: "Avi",
  age: 25,
  isGender: true
}

let{name: intialName, isGender: gender} = obj; // Object Destructuring

console.log(intialName);
console.log(gender);