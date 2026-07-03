// const arr = [2,4,6,8,10];

// for(let i = arr.length; i >= 0; i--){
//   console.log(arr[i]);
// }

const arr = [2, 4, 6, 8, 10];
 
let left = 0;
let right = arr.length - 1;
 
while (left < right) {
 
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
 
  left++;
  right--;
}
 
console.log(arr);
 