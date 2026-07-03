console.log("A"); // Synchronus Code First Priority
 
setTimeout(() => { // Web Apis -> task queue
  console.log("B");
}, 0);
 
console.log("E"); // Synchronus Code First Priority
 
setTimeout(() => { // Web Apis -> task queue
  console.log("F");
}, 0);
 
Promise.resolve().then(() => { // Web Apis -> task queue // Micro Task (More priority then pomise ones)
  console.log("G");
});
 
console.log("H");// Synchronus Code First Priority
 
// Asyncshronus task -> micro > macro