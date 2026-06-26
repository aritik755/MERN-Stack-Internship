// Write a function which accept two numbers operation and perform operation like:
// if add(2,3) it should print 5
// if multiply(3,4) it should print 12

function calculate(a, b, operation){
  return operation(a,b);
}

function add(a,b){
  return a + b;
}

function multiply(a,b){
  return a * b;
}

console.log(calculate(2, 3, add));
console.log(calculate(3, 4, multiply));
