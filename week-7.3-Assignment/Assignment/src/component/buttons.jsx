import {useState} from 'react'
export function Button(){
const[bgcolor,setbgcolor]=useState("white");
return(
    <div style={{background:bgcolor,height:"100vh",width:"100vw"}}>
        <button onClick={()=>{setbgcolor("red")}}style={{background:"red",color:"white"}}>Red</button>
        <button onClick={()=>{setbgcolor("blue")}}style={{background:"blue",color:"white"}}>Blue</button>
        <button onClick={()=>{setbgcolor("black")}}style={{background:"black",color:"white"}}>Black</button>
        <Render background={bgcolor} />
    </div>
)
}
export function Render({ background }) {
  if (background === "red") {
    return <p style={{ color: "white" }}>Color is red</p>;
  }
    if (background === "blue") {
    return <p style={{ color: "white" }}>Color is blue</p>;
  }
      if (background === "black") {
    return <p style={{ color: "white" }}>Color is black</p>;
  }


  return null; // return nothing for other colors
}
