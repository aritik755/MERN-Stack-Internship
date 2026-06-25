foo();

function foo(){
  console.log("Hello");
}

foo();
// memory allocation: all var variable and function declare are moved to top of code.
// calling the function before declaration only works for function definition.
