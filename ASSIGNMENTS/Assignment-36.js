var a = 1;

function test(){
  console.log(a);
}

function test(){
  console.log("Second"); // This piece of code will replace the upper piece of code.
}

test();

/* Function declarations are hoisted completely, and if there are multiple function declarations 
with the same name in the same scope, the last one overrides the previous ones. */