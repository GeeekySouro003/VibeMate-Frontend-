import { useState } from 'react'
import './App.css'
//import Home from './Pages/Home'
import Profile from './Pages/Profile/Profile'
//import Auth from './Pages/Authentication/Auth'
function App() {
 

  return (
    <>
    <div className="App">
      <div className="bg" style={{top:'-18%',right:'0'}}></div>
      <div className="bg" style={{top:'36%',left:'-8rem'}}></div>
    {/*  <Home/> */}
    <Profile/> 
   {/*<Auth/> */}
     </div>

    </>
  )
}

export default App
