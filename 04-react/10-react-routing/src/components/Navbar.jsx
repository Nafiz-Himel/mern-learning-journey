import React from 'react'
import './Navbar.css'
import { Link , NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>
                Home
            </NavLink>
            {/* <a href="/">Home</a> */}
        </li>
        <li>
            <Link to="/about">About</Link>
            {/* <a href="/dashboard">Dashboard</a> */}
        </li>
        <li>
            {/* <a href="/about">About</a> */}
            <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
