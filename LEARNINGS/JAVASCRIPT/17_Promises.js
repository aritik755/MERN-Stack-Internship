// //create promise
// const p1 = new Promise(function(resolve, reject){
//   console.log('Lets study promise.')
//   setTimeout(function(){
//     console.log('Promise Created.')
//     // resolve()
//     reject("Error 404: Page Not Found")
//   },3000)
// });

// //consume promise
// p1.then(() => {console.log('Promise Consumed')})
// .catch((data) => {
//   console.log(data)
// })

// // then is for resolve
// // catch is for reject

//create
const p1 = new Promise(function(resolve, reject){
  setTimeout(function() {
    // resolve({name: 'Ritik', age: 25})
    reject('Error: 404')
  }, 3000);
});

// consume (async and await)
// p1.then((data) => data.name)
// .then((res) => {console.log(res)})

// async function consumePromise() {
//   const resp = await p1;
//   console.log(resp);
// }

// consume(try and await)
async function consumePromise() {
  try {
    const resp = await p1;
    console.log(resp);
  } catch (error) {
    console.log(error);
    
  }
}

consumePromise()