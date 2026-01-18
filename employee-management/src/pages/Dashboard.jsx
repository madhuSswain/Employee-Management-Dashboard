import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
     localStorage.removeItem("isLoggedIn");
     navigate("/login");
  }

  return (
    <div>
      <h1>dashboard</h1>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard