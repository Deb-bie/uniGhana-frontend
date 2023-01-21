import React from 'react'
import {Link} from "react-router-dom"

import Image from "../assets/image.jpg"

import "./style.css"

const Register = () => {
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

            <form>
              <label>Username</label>
              <input 
                type="text"
                required
                placeholder='eg. Debbie'
              />

              <label>Email</label>
              <input 
                type="email"
                required
                placeholder='uni@unighana.com'
              />

              <label>Password</label>
              <input 
                type="password"
                required
                placeholder='*********'
              />

              <label>Confirm Password</label>
              <input 
                type="password"
                required
                placeholder='*********'
              />

              <div className='button-container'>
                <button>Register</button>
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



