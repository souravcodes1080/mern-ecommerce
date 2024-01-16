import React from 'react'
import "./navbar.css"
import navlogo from "../../assets/logo.png"
import navProfile from "../../assets/nav-profile.svg"
function Navbar() {
  return (
    <>
    <div className="navbar">
    <div className="navlogo-wrapper">
        <img src={navlogo} alt="nav_logo" className='nav-logo' />
        <div className="right-logo">
        <h1>SHOPEE</h1>
        <p>Admin Panel</p>
        </div>
    </div>
        <img src={navProfile} alt="nav_profile" className='nav-profile'/>
    </div>
    </>
  )
}

export default Navbar