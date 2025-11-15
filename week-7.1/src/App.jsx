import { Suspense, useContext, useState } from 'react'
import {lazy} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import { CountContext } from './components/context';
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() =>  import('./components/Landing'))

//routing
/*function App() {
  return (
  <div>
  
      <BrowserRouter>
      <Appbar/>
        <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
            <Route path="/Landing" element={<Suspense fallback={"loading"}><Landing/></Suspense>}/>
       </Routes>
       </BrowserRouter>
    </div>
      )
  }
    
function Appbar(){
  const navigate=useNavigate();


    return    <div>
     <div>
      <button onClick={()=>{
        navigate("/Landing");
      }}>Landing page</button>
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button>
     </div>
   </div>
    
}
*/
//prop dilling
/*
function App(){
  const[count,setCount]=useState(0);
  return(
    <div>
       <Count count={count}/>
       <Buttons count={count} setCount={setCount}/>
    </div>
  )
}
function Count({count}){
  return(
    <div>
      {count}
      
    </div>
  )
}
function Buttons({count,setCount}){
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
//context Api
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


export default App
