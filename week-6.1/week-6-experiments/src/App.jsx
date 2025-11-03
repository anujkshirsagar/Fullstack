import { Fragment, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/*function App()
{
  const[title,setTitle]=useState("my name is anuj");
function updateTitle()
{
  const anuj=50;
  setTitle("my name is"+anuj);
}

  return(
    <Fragment>
      <button onClick={updateTitle}>update the title</button>
      <Header title={title}></Header>
      <Header title="anuj"></Header>
    </Fragment>
  )
}
function Anuj()
{
 const[head,setTitle]=usestate("anuj is bad boy");
 function updatehead()
 {
  setHead("anuj is good boy");
 }
 return(
  <div>
   <button onClick={updatehead}>update the head</button>
   <header title={head}></header>
  </div>
 )
}



function Header({title})
  {
    return <div>
  
    {title}
    </div>
  }*/
  //todo in react
  /*
    function App()
  {
  const[todos,setTodos]=useState([{
    id:1,
    title:"go to gym",
    description:"go to gym today"
  },{
     id:2,
    title:"eat food",
    description:"eat today"
  },
{
   id:3,
    title:"go to class",
    description:"go to class today"
}])
function addtodo(){
  setTodos([...todos,{
    id:4,
    title:math.random(),
    description:math.random()
  }])
}
return(
  <div>
    <button onClick={addtodo}>add a todo</button>
     {todos.map(todo => <Todo key={(todo.id)} title={todo.title} description={todo.description}/>)}
  </div>
)
  }
  function Todo({title,description}){
    return(
    <div>
    <h1>{title}</h1> 
    <h1>{description}</h1>
    </div>
    )
  }*/
 //Cardwrapper
 /*
 function App(){
  return (<div>
  <CardWrapper innerComponent={<TextComponent/>}/>
 </div>)
 }
 function TextComponent()
 {
  return(<div>
    hi there
  </div>)
 }
 function CardWrapper({innerComponent})
 {
  return(<div style ={{border:"2px solid black"}}>
    {innerComponent} 
  </div>)
 }*/
//Wrapper one more example
function App(){
  return(
  <div>
    <Card>
      hi there
    </Card>
    <Card>
    <div>
      hell from second card
    </div>
    </Card>
  </div>
  )
}
function Card({children})
{
return(<div style={{
  border:"1px solid black",
  padding:10,
  margin:10
}}>
  {children}
</div>)
}
export default App
