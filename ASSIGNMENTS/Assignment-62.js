function placeOrder(cb) {
  console.log('Wating for payemnt....');
  
  setTimeout(function(){
    console.log('Order Placed.')
    cb();
  },3000)
}

function foodPrepare(cb) {
  console.log('Preparing Food....');

  setTimeout(function(){
    console.log('Food Prepared.')
    cb()
  },3000)
}

function pickUpDelivery(cb) {
  console.log('Pick Up person is on the way to restaurant....')
  setTimeout(() => {
    console.log('Pick Up person picked up the order.');
    cb()
  },3000)
}

function orderDelivered() {
  console.log("Order is on the way....");

  setTimeout(function(){
    console.log('Order Delivered.')
  },3000)
}

placeOrder(() => {
  foodPrepare(() => {
    pickUpDelivery(() => {
      orderDelivered();
    });
  });
});