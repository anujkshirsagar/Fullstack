import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './component/buttons'
import { Render } from './component/buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <>
        <p>background color changed

        </p>
         
        <Button>
              
        </Button>
       

      </>
    
  )
}

export default App
