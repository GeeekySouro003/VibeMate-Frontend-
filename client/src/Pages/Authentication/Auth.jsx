import React, { useState } from 'react'
import './Auth.css';
import Logo from '../../images/logo_new.png';

const Auth = () => {
  const[isSignUp,setIsSignUp] =useState(false);
  return (
    <div className="Auth">
        <div className="auth-left">
          <img src={Logo} style={{width:'180px',height:'180px'}} alt='auth page left side' />
          <div className="webname">
            <h1>VibeMate</h1>
            <h5>Crafting Connections, Building Futures</h5>
          </div>
         </div>
         <SignUp/>
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
          <button className="btn infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="auth-right">
      <form className="infoForm authForm">
        <h3>{isSignUp ? "Sign Up" :"Log In"}</h3>

        <div>
          <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
          <input type='text' placeholder='Last Name' className='infoInput' name='lastname' />
        </div>

        <div>
          <input type='text' placeholder="Username" className='infoInput' name='username' />

        </div>
        <div>
          <input type='text' className='infoInput' name='password' placeholder='Enter your password' />
          <input type='text' className='infoInput' name='confirmpass' placeholder='Confirm Password' />
        </div>

        <div>
        <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
         <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Auth