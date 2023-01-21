import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

import Image from "../assets/image.jpg"

import "./style.css"

const url ="http://localhost:5000/api/register"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false)


  const navigate = useNavigate()



  const handleRegister = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await axios.post(
        url,
        {
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        }
      ).((res) => )
    } catch (error) {
      if (error.response) {
       setError(error.response.data.msg) 
      }
    }
  } 


  return (
    <div className="register">
      <div className="register-container">
        <div className='image-container'>
          <img src={Image} alt="login" style={{width: "100%", height: "100%"}} />
        </div>

        <div className='text-container'>
          <div>
            <h1 className='register-heading'>UniGhana</h1>
            <div className='welcome'>
              <h4 className='title'>Welcome to UniGhana</h4>
              <span>Create an Account</span>
            </div>

            <form onSubmit={handleRegister} >
              <p>{error}</p>

              <label>Username</label>
              <input 
                type="text"
                required
                placeholder='eg. Debbie'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label>Email</label>
              <input 
                type="email"
                required
                placeholder='uni@unighana.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <input 
                type="password"
                required
                placeholder='*********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label>Confirm Password</label>
              <input 
                type="password"
                required
                placeholder='*********'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div className='button-container'>
                <button type='submit'>Register</button>
              </div>
            </form>

            <div className='account'>
              Already have an Account? &nbsp;
              <Link to="/">Login into your</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register



