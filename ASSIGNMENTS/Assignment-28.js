// What will the following code output to the console when executed? Explain why.
 
console.log(greetUser("Sarah")); // Welcome, Sarah!
console.log(farewellUser("Sarah")); // TypeError: farewellUser is not a function
 
function greetUser(name) {
  return `Welcome, ${name}!`;
}
 
var farewellUser = function(name) { // farewellUser === undefined
  return `Goodbye, ${name}!`; 
};

