import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'
function App(){
  return (<RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}
function MainApp() {
     const networknotificationCount=useRecoilValue(networkAtom)
     const jobsAtomcount=useRecoilValue(jobsAtom)
     const notificationAtomCount=useRecoilValue(notificationAtom)
     const messagingAtomCount=useRecoilValue(messagingAtom)
     

  return (
    <>
     <button>Home</button>
     <button>My network ({networknotificationCount >=100 ?"99+":networknotificationCount})</button>
     <button>Jobs ({jobsAtomcount})</button>
     <button>Messaging({messagingAtomCount})</button>
     <button>Notification({notificationAtomCount})</button>
    </>
  ) ; 
}

export default App
