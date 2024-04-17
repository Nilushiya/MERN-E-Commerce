import React from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
        <div className="loginSignupContainer">
            <h1>Sign Up</h1>
            <div className="inputFields">
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
            //   onChange={(e) => setLname(e.target.value)}
            />  
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            //   onChange={(e) => setEmail(e.target.value)}
            />
             <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            //   onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-primary">
                 Continue
            </button>
            <p className="login text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
        </div>
    </div>
  )
}

export default LoginSignup