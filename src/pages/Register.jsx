import React, {useState, useContext} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import { AuthContext } from '../context/AuthContext'
import Image from "../assets/image.jpg"
import "./style.css"

const Register = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const success = await axios.post(
        "api/register",
        {
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        }
      )

      if(success.status === 200){
        dispatch({ type: "REGISTER_SUCCESS", payload: success.data.username });
        navigate(
          "/dashboard",
          {
            state: {
              username: username
            }
          }
        );
      }
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
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

              <p className='error'>{error}</p>

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
                <button type='submit' disabled={loading}>
                  {
                    loading ? "Registering" : "Register"
                  }
                  </button>
              </div>
            </form>

            <div className='account'>
              Already have an Account? &nbsp;
              <Link to="/">Login into your Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register



