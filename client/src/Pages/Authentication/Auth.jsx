import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Auth.css';
import Logo from '../../images/logo_new.png';
import { logIn, signUp } from '../../Actions/AuthAction';

const Auth = () => {
  const[isSignUp,setIsSignUp] =useState(true);
  const loading=useSelector((state)=>state.AuthReducer.loading)  
  console.log(loading);
  const dispatch=useDispatch();
  const[data,setData]=useState({firstname:"",middlename:"",lastname:"",username:"",password:"",confirmpass:""})
  const[confirmpass,setconfirmpass] = useState(true);

  const handleChange =(event) => {
   setData({...data,[event.target.name]:event.target.value})
  };


  const handleSubmit =(event) => {
    event.preventDefault();
    if(isSignUp)
    {
      data.password===data.confirmpass ? dispatch(signUp(data)) :setconfirmpass(false);
    }
    else{
      dispatch(logIn(data))
    }

  };

  const resetform= () => {
    setconfirmpass(true);
    setData({firstname:"",lastname:"",middlename:"",username:"",password:"",confirmpass:""});
  };
  return (
    <div className="Auth">
      {/*LEFT SIDE*/}
        <div className="auth-left">
          <img src={Logo} style={{width:'180px',height:'180px'}} alt='auth page left side' />
          <div className="webname">
            <h1>VibeMate</h1>
            <h5>Crafting Connections, Building Futures</h5>
          </div>
         </div>
         {/*RIGHT SIDE*/}
         <div className="auth-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign Up" :"Log In"}</h3>

       {isSignUp && (
          <div>
          <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname}/>
          <input type="text" placeholder='Middle Name' className='infoInput' name='middlename' onChange={handleChange} value={data.middlename}/>
          <input type='text' placeholder='Last Name' className='infoInput' name='lastname'  onChange={handleChange} value={data.lastname}/>
        </div>
       )}
      

        <div>
          <input type='text' placeholder="Username" className='infoInput' name='username'  onChange={handleChange} value={data.username}/>

        </div>
        <div>
          <input type='password' className='infoInput' name='password' placeholder='Enter your password'  onChange={handleChange} value={data.password}/>

          {isSignUp &&
              <input type='password' className='infoInput' name='confirmpass' placeholder='Confirm Password'  onChange={handleChange} value={data.confirmpass}/>
          }
        
        </div>
          <span style={{display:confirmpass? "none": "block",color:"red",fontSize:"13px",alignSelf:"flex-end",marginRight:"5px"}}>
            * Confirm Password is not same
          </span>
        <div>
        <span style={{fontSize: '13px',cursor:'pointer'}} onClick={() =>{setIsSignUp((prev)=>!prev);resetform()}}>
          {isSignUp ? "Already have an account! Login" : "Don't have an account yet? Sign Up"}
        </span>
        </div>
         <button className="button infoButton" type="submit" > 
         {loading? "Loading..." :isSignUp ? "Sign Up" : "Log In"}
         </button>
        
      </form>
    </div>
    </div>
  );
};


export default Auth