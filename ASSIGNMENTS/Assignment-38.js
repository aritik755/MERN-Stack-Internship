function calculate(a, b, operation){
  operation(a,b);
}

const sum = function(x,y){
  console.log(x + y);
};

calculate(10, 20, sum);