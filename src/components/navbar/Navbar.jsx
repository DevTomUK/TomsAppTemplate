import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  return (
    <div className='navbar-container'>
      <div className="navbar-wrapper">
        <div className="navbar-brand">Brand Logo</div>
        <div className="navbar-links">
          {isUserLoggedIn 
          ?
            <ul>
              <Link to={'/'}>
                <li>Dashboard</li>
              </Link>      
            </ul>
          :
            <ul>
              <Link to={'/login'}>
                <li>Log In</li>
              </Link>
              <Link to={'/signup'}>
                <li>Sign Up</li>
              </Link>          
            </ul>
          }
        </div>
      </div>
    </div>
  )
}
