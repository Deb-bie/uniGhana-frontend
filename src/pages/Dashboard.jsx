import React from 'react'
import { useContext } from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
import "./style.css"
const url = "api/logout"

const Dashboard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  const { error, dispatch } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const success = await axios.post(url);
      if (success.status === 200) {
        navigate("/",);
      }
    } catch (err) {
      dispatch({ type: "LOGOUT_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div>
          <p className='error'>{error}</p>
            <h2>
              Welcome back {location.state.username}
            </h2>

            <span>What are your plans for today?</span>

            <div className='dashboard-button' onClick={handleLogout}>
              <button>Logout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
