import React, { useState } from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {

    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        name:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const login = async() =>{
      let responseData;
      await fetch('http://localhost:4000/user/login',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
   }).then((res) => res.json()).then((data)=>responseData=data)

   if(responseData.success){
    localStorage.setItem('auth-token',responseData.token)
    window.location.replace("/");
   }
   else{
    alert(responseData.error)
   }
    }
    const sign_up = async() =>{
      console.log("okay");
        let responseData;
        await fetch('http://localhost:4000/user/registration',{
        method: 'POST',
        headers:{
          Accept:'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
     }).then((res) => res.json()).then((data)=>responseData=data)

     if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/");
     }
     else{
      alert(responseData.error)
     }
    }

  return (
    <div className='LoginSignup'>
        <div className="loginSignupContainer">
            <h1>{state}</h1>
            <div className="inputFields">
            {state==="Sign-up"
            ?<input
              type="text"
              name='name'
              value={formData.name}
              className="form-control"
              placeholder="Your name"
               onChange={changeHandler} 
            />  
            :<></>}
            <input
              type="email"
              name='email'
              value={formData.email}
              className="form-control"
              placeholder="Enter email"
              onChange={changeHandler} 
            />
             <input
              type="password"
              name='password'
              value={formData.password}
              className="form-control"
              placeholder="Enter password"
              onChange={changeHandler} 
            />
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => {state ==="Sign-up"?sign_up():login()}}>
                 Continue
            </button>
            {state === "Sign-up"?<p className="login text-right">
              Already registered <span onClick={() =>{setState("Login")}}>login</span>
            </p>:<p className="login text-right">
              Create an Account <span onClick={() =>{setState("Sign-up")}}>click here</span>
            </p>}
        </div>
    </div>
  )
}

export default LoginSignup