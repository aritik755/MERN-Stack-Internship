const arr = [1, 2, [3, 4]];
const shallow = arr.slice();
shallow[2].push(5);
 
console.log("Original:", arr);
console.log("Shallow:", shallow);
