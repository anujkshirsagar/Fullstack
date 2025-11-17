 import { useContext } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
 import { CountContext } from './assets/CountContext'
 import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
 import { countAtom } from './store/atoms/count'

//context api is used to teleport the componments input to any component without sending to child 
 //to get rid of p drill we use context api
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


function App() {
  
   return (
     <div>
       <RecoilRoot>
         <Count/>
         </RecoilRoot>
     </div>
   )
 }

function Count (){
  console.log("re-render")
  return (<div>
    
    <CountRenderer/>
     <Buttons/>
  
   </div>)
 }

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return (<div>
    {count}
  </div>)
}

 function Buttons(){
   console.log(" button render")
   const setCount = useSetRecoilState(countAtom); //this gives us a setter function to update 
   // useSetRecoil state  gives us setCount which updates the default atom value more less 
     return (<div>
     <button onClick={()=>{
       setCount(count => count+1) // you will have to create a new value as count is not passed  
     }}>Increment</button>
     <button onClick={()=>{
      setCount(count=> count - 1 )
    }}> Decrement</button>
    </div>)
}


export default App
