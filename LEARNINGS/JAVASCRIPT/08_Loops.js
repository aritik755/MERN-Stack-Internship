// Types of Loops:-
// 1. For Loops
// 2. While Loops
// 3. Do-While Loops

// DRY - DONT REPEAT YOURSELF

// 1. For Loop
for(let i = 1; i <= 20; i++){
  console.log(i);
}

// i = 1; --> Initilization
// i <= 20 --> Condition
// i++ --> Updation/Increment (i = i + 1)

// ** for..of (Works in array)
const arr = ["Apple", "Mango", "Guava"];

for(let fruit of arr){
  console.log(fruit);
}

// **for..in (Works in object)

const car = {
  company: "Hyundai",
  model: "latest",
  registrationNumber: 112452,
  isAutomatic: false
}

for(let key in car){
  console.log(key, car[key]); // values of keys
}

// 2. While Loop
let i = 1;
while(i <= 10){
  console.log(i);
  i++;
}

// 3. Do-While Loop
let j = 1;
do{
  console.log(j);
  j++;
}while(j <= 10);