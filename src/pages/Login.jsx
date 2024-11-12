import React, { useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  console.log("login ok")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit =  (e) => {
    e.preventDefault()
    axios.post('http://localhost:3010/login' , { email, password})
    .then (result => {console.log(result)
      if(result.data === "Admin success")
    navigate('/Adminhome')
      else if(result.data === "user success")
        navigate('/home')})
    .catch(err => console.log(err))
    
 };
  return (
    
       <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        <form >
          <input
            type="email"
            placeholder="Email"
            value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleSubmit} type="submit">Login</button>
        </form>
        <div className="auth-footer">
          Don’t have an account? <a href="/register">Register here</a>
        </div>
      </div>
    </div>
  );
};
   
export default Login