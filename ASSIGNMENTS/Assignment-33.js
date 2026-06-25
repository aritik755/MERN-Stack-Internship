// lexical scope

var a = 1; // global variable

function foo(){
  console.log(a);
}

function bar(){
  var a = 2; // local variable
  foo();
}

bar();