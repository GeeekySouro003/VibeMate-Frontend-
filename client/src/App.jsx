import { useState } from 'react'
import './App.css'
import Home from './Pages/HomePg/Home.jsx'
import Profile from './Pages/Profile/Profile'
import Auth from './Pages/Authentication/Auth'
import { Route,Routes,Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function App() {
 const user=useSelector((state)=>state.AuthReducer.authData)

  return (
    <>
    <div className="App">
      <div className="bg" style={{top:'-18%',right:'0'}}></div>
      <div className="bg" style={{top:'36%',left:'-8rem'}}></div>
       <Routes> 
        <Route path="/" element={user?<Navigate to= "home" /> : <Navigate to= "auth" />}  />
        <Route path="/home" element={user? <Home/>:<Navigate to= '../auth' />} />
        <Route path="/auth"  element={user? <Navigate to="../home" /> : <Auth />} />
       </Routes> 
     </div>
  
    </>
  )
}

export default App
