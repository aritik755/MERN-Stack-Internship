function greeting() {
  console.log('Hello!');
}

setTimeout(greeting, 5000); // Calls Once

setInterval(greeting, 2000); // Calls infinte times after the given duration

function timeout(){
  console.log('SetTimeout');
}

function interval(){
  console.log('Interval');
}

setTimeout(timeout, 5000);

setInterval(interval, 2000);