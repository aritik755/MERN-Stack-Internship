console.log("Start"); // 1
 
setTimeout(() => { // 5 // Macro
  console.log("Timeout 1");
}, 0);
 
Promise.resolve().then(() => { // 3 // Micro
  console.log("Promise 1");
});
 
setTimeout(() => { // 6 // Macro
  console.log("Timeout 2");
}, 0);
 
Promise.resolve().then(() => { // 4 // Micro
  console.log("Promise 2");
});
 
console.log("End"); // 2