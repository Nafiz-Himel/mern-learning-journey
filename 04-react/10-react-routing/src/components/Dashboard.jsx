import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Dashboard Page

      <ul>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/slides">Slides</Link></li>
      </ul>

      <Outlet />
    </div>
  )
}

export default Dashboard