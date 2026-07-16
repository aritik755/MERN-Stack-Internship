import React, { useContext } from "react";
import Display from "./Display";
import { context } from "../createContext";

function Main(){
  return ( 
    <>
      <p>Main:</p>
      <Display></Display>
    </>
    
  );
}

export default Main;