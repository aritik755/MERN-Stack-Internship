// Types of Functions:-
// 1. Function definition, declaration
// 2. Function Expression
// 3. Arrow Function


// 1
function sum1(a,b){ 
  console.log(a+b);
}
sum1(3,4);

// 2
const sum2 = function(a,b){
  console.log(a+b);
}
sum2(4,3);

// 3 
const sum3 = (a,b) =>{
  console.log(a+b);
}

sum3(4,3);