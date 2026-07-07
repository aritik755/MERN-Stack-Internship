const data = { a: 1, b: { c: 2, d: [3, 4] } };
const copy = structuredClone(data);
copy.b.d.push(5);
 
console.log("Original:", data.b.d);
console.log("Copy:", copy.b.d);
 