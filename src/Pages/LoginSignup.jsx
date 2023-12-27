import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

function LoginSignup() {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address ' />
          <input type="password" placeholder='Password ' />
        </div>
        <Link to='/'>
        <button>Continue</button>
        </Link>
        <p className='loginSignup-login'>Already Have an account? <span>Login here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup