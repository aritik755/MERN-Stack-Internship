import { useEffect, useState } from "react";

function App(){
  // const [count,setCount] = useState(0);
  // function increment(){
  //   setCount(count + 1);
  // }
  // function decrement(){
  //   if(count > 0){
  //     setCount(count - 1);
  //   }
  // }
  // function reset(){
  //   setCount(0);
  // }
  // return (
  //   <>
  //   <div className="main">
  //     <p>{count}</p>
  //     <div style={{display: "flex"}}>
  //       <button onClick={increment}>Increment</button>
  //       <button onClick={decrement}>Decrement</button>
  //       <button onClick={reset}>Reset</button>
  //     </div>
  //   </div>
  //   </>
  // );

//   const [value, setValue] = useState("text");
//   const [btn, setBtn] = useState("Hide Password");

//   function changeType(){
//     if(btn === "Hide Password"){
//       setBtn("Show Password");
//       setValue("password");
//     }else{
//       setBtn("Hide Password");
//       setValue("text");
//     }
//   }

//   return (
//     <div className="main">
//       <input type={value} />
//       <button onClick={changeType}>{btn}</button>
//     </div>
//   );

  const [users,setUsers] = useState([]);
  const [count,setCount] = useState(30);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await res.json();
      setUsers(data);
      console.log(data);

    }

    fetchData();
  },[count])

  return(
    <div className="main">
      <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))}/>
      {
        users.map(u => {
          <img src={u.avatar_url} alt="" key={u.id} height={"100px"} />   
        })
      }
    </div>
  );

}

export default App;