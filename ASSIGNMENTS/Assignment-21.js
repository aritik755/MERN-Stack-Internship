const arr = [2, 4, 6, 8, 10];

let i = 0;
let sum = 0;
do{
  sum += arr[i];
  i++;
}while(i < arr.length);

console.log(sum);