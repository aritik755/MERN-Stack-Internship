var a = 1;

function test(){
  console.log(a); // undefined
  if(false){
    var a = 2;
  }
  console.log(a);
}

test();