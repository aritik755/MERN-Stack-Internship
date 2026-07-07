// const arr = [1, 2, [3, 4]];
// const shallow = arr.slice();
// shallow[2].pop();
 
 
// console.log("Original:", arr);
// console.log("Shallow:", shallow);

const arr = [1, 2, [3, 4]];
const deep = structuredClone(arr);

deep[2].pop();

console.log("Original:", arr);
console.log("Deep:", deep);
 