const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];
 
//output: 53000
// solve first by loop and then by array method
 
let sum = 0;
for(let key of products){
  sum += key.price;
}
console.log(sum);

const sumValue = products.reduce((sum,product)=>sum + product.price,0)
console.log(sumValue);

