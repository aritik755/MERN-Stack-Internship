let name = "Ritik";
name = 1;

// Function Definition or declaration
function student(){
  console.log("Hello from 20th June.")
}

console.log(name);

// Calling Function
student(); 

function student1(name){ // student(parameter)
  return "Hello, " + name + "!";
};

console.log(student1("Ritik"));


let name2 = "Ravi"
function student2(x){
  console.log(`My name is ${x}.`)
}
console.log(name2);
student2(name2);

function student3(x,y){
  console.log(`My name is ${x}.`)
  console.log(y);
}

console.log("Hello After Function.")
student3("Ramesh",12);
console.log("Hello After call.")