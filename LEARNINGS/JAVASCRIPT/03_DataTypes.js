// Types of Datatypes:-
// 1. Primitive Datatype:- number,string,boolean,undefined,null,bigint,symbol.
      // number --> +ve, -ve, decimal(float)
      // string --> double quotes and single quotes and backticks.
      // boolean --> true and false 
      // undefined --> declared but not initialized(assigned by js)
      // null --> empty variable(let a = null;)
      // bigint --> when number limits exceed we use bigint("156n").
      // symbol -->

// 2. Non-Primitive Datatype:- array,object and function
      // array --> const array = [15,"Apple",False,true]; (type - object)
      // object --> const object = {name: "Ritik", age: 25};
      // function --> const greet = function(name) {
      //              return "Hello, " + name + "!";
      //             };    
      //             console.log(greet("Ritik")); // Outputs: Hello, Ritik!

const a = 15;
console.log(typeof(a)); // Determine the type of variable

let b = 156n;
console.log(typeof(b)); // bigint

const bool = true;
console.log(typeof(bool));

const id = "Ritik"; // Symbol
const id1 = Symbol(id);
const id2 = Symbol(id);
console.log(id2===id1);