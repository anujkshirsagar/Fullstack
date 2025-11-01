import { Fragment, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App()
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



function Header({title})
  {
    return <div>
    
      {title}
    </div>
  }

export default App
