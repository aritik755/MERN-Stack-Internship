import { useEffect, useState } from "react";

function App(){
  const [num, setNum] = useState("");
  const [text, setText] = useState("");

  function checkNumber(){
    if (num === "") {
      setText("");
      return;
    }
    if(num % 2 === 0) {
      setText("Even");
    }
    else{
      setText("Odd");;
    }
  }
  
  return (
    <div>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} /> <br /> <br />
      <p>{text}</p>
      <button onClick={checkNumber}>Check Number</button>
    </div>
  );
}

export default App;