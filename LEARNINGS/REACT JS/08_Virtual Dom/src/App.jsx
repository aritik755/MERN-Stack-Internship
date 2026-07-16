import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { context } from "./createContext";

// Virtual Dom , reconciliation, diffing

function App(){
  const [count, setCount] = useState(0);
  return (
    <context.Provider value={count}>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </context.Provider>
  );
}

export default App;