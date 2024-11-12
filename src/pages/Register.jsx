import React, { useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  console.log("reg is ok")
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate()

    const handleSubmit =  (e) => {
      if (userType == "Admin" && secretKey != "101113") {
        e.preventDefault();
        alert("Invalid Admin");
      } else {
     e.preventDefault()
     axios.post('http://localhost:3010/register' , {username, email, password,userType })
     .then (result => {console.log(result)
     navigate('/login')})
     .catch(err => console.log(err))}
     
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Register</h2>
        <form >
        <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <button onClick={handleSubmit} type="submit">Register</button>
        </form>
        <div className="auth-footer">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
};
  

export default Register