let a = 5;

function test(){
  console.log(a);
  let a = 10;
}

test();
/* Key point: let and const are hoisted but remain in the Temporal Dead Zone until their declaration is executed,
so they cannot be accessed before initialization. */ 