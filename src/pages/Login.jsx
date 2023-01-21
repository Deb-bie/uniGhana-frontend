import React from 'react'
import {Link} from "react-router-dom"

import Image from "../assets/image.jpg"

import "./style.css"

const Login = () => {
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

                        <form>
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

                            <Link to="#" className='forgot'>forgot password &nbsp;</Link>

                            <div className='button-container'>
                                <button>Sign in</button>
                            </div>

                        </form>

                        <div className='account'>
                            New here? &nbsp;
                            <Link to="register">Create an Account</Link>
                        </div>







                    </div>

                </div>
























                    {/* <div className="login-container-extra">
                        <h1 className="heading">Log into your account</h1>

                        <form>
                            <label>Email</label>
                            <input
                                type="example@example.com"
                                placeholder="Email"
                                required
                            />

                            <label>Password</label>
                            <input
                                type="text"
                                placeholder="Password"
                                required
                            />

                            <button>
                                Login 
                            </button>

                            <div>
                                <Link to="#">Forgot password?</Link>

                                <span>
                                    Don't have an account? <Link to="register">Register</Link>
                                </span>
                            </div>
                            
                        </form>
                    </div> */}
            </div>
        </div>
    
    









































  )
}

export default Login



