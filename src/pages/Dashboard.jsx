import React from 'react'
import {Link} from "react-router-dom"

import Image from "../assets/image.jpg"

import "./style.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div>
            <h2>
                Welcome back Debbie
            </h2>

            <span>What are your plans for today?</span>

            <div className='dashboard-button'>
                <button>Logout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
