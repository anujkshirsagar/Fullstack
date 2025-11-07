import { useState,useMemo} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
//useMemo =it helps to skip the part which we dont want to run every time
/*
function App() {
  const [counter,setcounter]=useState(0);
  const[inputValue,setInputValue]=useState(1);

  let count =useMemo(()=>{
    let count=0;
    console.log("anuj");
  for(let i=0;i<=inputValue;i++)
  {
    count=count +1
  
  }
  return count;
},[inputValue]);


return (
<div>
<input onChange={function(e){
  setInputValue(e.target.value);
}}placeholder={"find sum from 1 to n"}></input>
<br/>
sum from 1 to{inputValue} is {count}
<br/>
<button onClick={()=>{
  setcounter(counter+1);

}}>Counter({counter})</button>
</div>
     
    
  )
}
  */

//useCallback 
export default App
