import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Profile from './Pages/Profile/Profile'
function App() {
 

  return (
    <>
    <div className="App">
      <div className="bg" style={{top:'-18%',right:'0'}}></div>
      <div className="bg" style={{top:'36%',left:'-8rem'}}></div>
    {/*  <Home/> */}
    <Profile/>
     </div>

    </>
  )
}

export default App
