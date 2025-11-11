import {useCallback, useState,useMemo, useEffect} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

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

//memo
/*
function App() {
  const [count, setCount] = useState(0);

  const inputfunction = useCallback(() => {
    console.log("hi there");
  }, []);

  return (
    <div>
      <ButtonComponent inputfunction={inputfunction} />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputfunction }) => {
  console.log("child render");
  return (
    <div>
      <button onClick={inputfunction}>button clicked</button>
    </div>
  );
});

export default App;
*/

//Useeffect-when we give dependencies it runs again if we keep it empty it will run once 
//if suppose i have taken this example:
//useEffect(()=>
 /* {
    console.log("count runs":{count});

  },[count]); in this example whenever we give dependencies if the dependencie changes(count)it will run again
  */
 //it is used after render 

function App()
{
  const[exchangeData,setExchangeData]=useState({});
  const[bankData,setBankData]=useState({});
  const[updateData,setUpdateData]=useState({})
  console.log("hi there re-render");

  useEffect(function(){
    
      setBankData({
        returns:100
      });

  },[])
  useEffect(()=>{

    setExchangeData({
      returns:100
    });
  
},[])
useEffect(()=>{
setTimeout(()=>{
  setUpdateData({
    income:100
  });
},5000)
},[])
const cryptoReturns=useMemo(()=>{
 return bankData.returns+exchangeData.returns;
},[exchangeData,bankData]);

const incomeTax=(cryptoReturns+updateData.income)*0.3;
return(
  <div>
    hi there ,your income tax returns are{incomeTax}
    </div>
)
}
export default App;

//useMemo:
//useMemo it is used during rendering if the calculation is complex it doesnt run again and again it keeps the calculation in cache and whenever the 
//dependencies changes it renders otherwise doesnt
