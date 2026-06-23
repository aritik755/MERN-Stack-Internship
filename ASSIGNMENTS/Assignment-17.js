// Write a function sum that accepts any number of argumnets using the rest operator and returns their sum.

function sum(...args){
  let sum = 0;
  for(let i = 0; i < args.length; i++){
    sum = sum + args[i];
  }
  console.log(`Sum of the given arguments is: ${sum}`);
}

sum(1, 2, 3); // 6
sum(10, 20, 30, 40); // 100