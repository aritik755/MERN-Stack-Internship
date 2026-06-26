// Callbacks:

// a function which is passes as a argument to another function so that it can be called at a later stage of time.

function greeting(){
  console.log("Hello");
}

function details(welcome){
  console.log("first");
  welcome();
}

details(greeting);