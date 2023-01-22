import React, {useState, useContext} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import Image from "../assets/image.jpg"
import "./style.css"
import { AuthContext } from '../context/AuthContext'

const url ="api/login"

const Login = () => {

    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const success = await axios.post(
            url,
            {
                email: email,
                password: password
            }
        );
        console.log(success)

        if (success.status === 200) {
            dispatch({ type: "LOGIN_SUCCESS", payload: success.data.username });
            navigate(
                "/dashboard",
                {
                    state: {
                        username: success.data.username
                    }
                }
            );
          }
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };


  return (
    <div className="login">
            <div className="login-container">
                <div className='image-container'>
                    <img src={Image} alt="login" style={{width: "100%", height: "100%"}} />
                </div>

                <div className='text-container'>
                    <div>
                        <h1 className='heading'>UniGhana</h1>

                        <div className='welcome'>
                            <h4 className='title'>Welcome back</h4>
                            <span>Login into your Account</span>
                        </div>

                        <form onSubmit={handleLogin}>
                            <p className='error'>{error}</p>

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

                            <div className='button-container'>
                                <button type='submit' disabled={loading}>
                                    {
                                        loading ? "Signing In" : "Sign In"
                                    }
                                </button>
                            </div>

                        </form>

                        <div className='account'>
                            New here? &nbsp;
                            <Link to="register">Create an Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login



