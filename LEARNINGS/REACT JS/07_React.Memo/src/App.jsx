// import { useState } from "react";
// import React from "react";

// const Sum = React.memo(() => { // Using React.memo Sum will be called only once as its needed.
//   let sum = 0;
//   for(let i = 0; i <= 1000; i++){
//     sum += i;
//   }
//   console.log("Sum is called");
//   return (
//     <>
//       Sum : {sum}
//     </>
//   )
// })

// function App(){
//   const [count, setCount] = useState(0);
//   console.log("App is called")
//   return (
//     <>
//       <h1>Counter : {count}</h1>
//       <button onClick={() => {setCount(count+1)}}>Increment</button>
//       <br />
//       <Sum />
//     </>
//   )
// }

// export default App;


// React.memo : it is used to memozie(call only once in the code) for component level.
// useCallback: It is used to memoize at function level.
// useMemo: It is used to memoize at value level.


// Assignment:- (Practise Question)
import { useState,useMemo } from "react";
 
function App() {
  const [num, setNum] = useState(5);
  const [theme, setTheme] = useState(false);
 
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
  }, [num]);
 
  return (
    <div style={{ background: theme ? "black" : "white", color: theme ? "white" : "black" }}>
      <h1>Factorial of {num} is {factorial}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
    </div>
  );
}
 
export default App