import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue ,RecoilRoot} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, notifications, totalNotificationcount, totalNotificationSelector } from './atoms'
function App(){
  return (
  <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  );
}
function MainApp() {
    //  const networknotificationCount=useRecoilValue(networkAtom);
    //  const jobsAtomcount=useRecoilValue(jobsAtom);
    //  const notificationAtomCount=useRecoilValue(notificationAtom);
    //  const messagingAtomCount=useRecoilValue(messagingAtom);
    //  const totalNotificationcount=useRecoilValue(totalNotificationSelector);
    const[networkCount,setNetworkCount]=useRecoilState(notifications)
    const totalNotificationcount=useRecoilValue(totalNotificationSelector);
    useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res=>{
        setNetworkCount(res.data)
      })
    })
  return (
    <>
     <button>Home</button>
     <button>My network ({networkCount.network>=100 ?"99+":networknotificationCount})</button>
     <button>Jobs ({networkCount.jobs})</button>
     <button>Messaging({networkCount.messaging})</button>
     <button>Notification({networkCount.notifications})</button>
     <button>Me({totalNotificationcount})</button>
    </>
  ) ; 
}

export default App;