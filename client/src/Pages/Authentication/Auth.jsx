import React from 'react'
import './Auth.css';
import Logo from '../../images/logo.jpg';

const Auth = () => {
  return (
    <div className="Auth">
        <div className="auth-left">
          <img src={Logo} style={{width:'55px'}} alt='auth page left side' />
          <div className="webname">
            <h1>VibeMate</h1>
            <h5>Crafting Connections, Building Futures</h5>
          </div>
         </div>
         <h1>Form</h1>
    </div>
  )
}

export default Auth