import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setcurrState]=useState("sign up")
  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" name="" id="" placeholder='your name' required />}
          
          <input type="email" placeholder='email' required />
          <input type="password" placeholder='password' required />
        </div>
        <button>{currState=="Sign up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By countinuing i agree terma and conditions</p>
        </div>
        {currState==="Login" ?<p>Create a new Account? <span onClick={()=>setcurrState("Sign up")}>Click Here</span></p>:<p>Already Have an account? <span onClick={()=>setcurrState("Login")}>Login Here</span></p>}
        
      </form>
    </div>
  )
}

export default LoginPopup
