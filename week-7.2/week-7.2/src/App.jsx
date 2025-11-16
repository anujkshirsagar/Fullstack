import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { countAtom } from './store/atoms/count'
import { useRecoilState,useRecoilValue } from 'recoil'
//context api is used to teleport the componments input to any component without sending to child 
 //to get rid of pop drill we use context api
/*
function App(){
  const[count,setCount]=useState(0);
  return(
    <div>
       <CountContext.Provider value={count}>
       <Count setCount={setCount}/>
       
       </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
  return(
    <div>
      <CountRerender/>
      <Buttons setCount={setCount}/>
    </div>
  )
}
function CountRerender()
{
  const count=useContext(CountContext);
 return <div>
  {count}
 </div>
}
function Buttons({setCount}){
  const count=useContext(CountContext);
  return <div>
    <button onClick={()=>{
     setCount(count+1)
    }}>increase</button>
  
   <button onClick={()=>{
     setCount(count-1)
    }}>decrease</button>
  </div>
}
*/


//State management using recoil



function App(){

  return(
    <div>
       <recoilRoot>
          <Count/>
       </recoilRoot>
      
       
    </div>
  )
}
function Count({setCount}){
  return(
    <div>
      <CountRerender/>
      <Buttons />
    </div>
  )
}
function CountRerender()
{
  const count=useRecoilValue(countAtom);
 return <div>
  {count}
 </div>
}
function Buttons({setCount}){
  const[count,setCount]=useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
     setCount(count+1)
    }}>increase</button>
  
   <button onClick={()=>{
     setCount(count-1)
    }}>decrease</button>
  </div>
}


export default App
