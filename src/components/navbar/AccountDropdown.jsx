import React from 'react'
import './accountDropdown.css'

export default function AccountDropdown({ handleLogOut }) {
  return (
    <div className='navbar-account-dropdown'>
        <span onClick={handleLogOut}>Log Out</span>
    </div>
  )
}
