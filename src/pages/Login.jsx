import React, { useState } from 'react'

function Login() {
    let [loginFormData, setLoginFormData] = useState({email: '', password: ''})

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log(loginFormData);
    }

    let handleChange = ()=>{
        let {name, value} = e.target
        setLoginFormData(prev =>({
            ...prev, [name]: value
        }))
    }
  return (
    <div>
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Email address' 
        value={loginFormData.email} onChange={handleChange} />
        
        <input type="password" name='password' placeholder='password' 
        value={loginFormData.password} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Login
