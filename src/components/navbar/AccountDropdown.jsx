import React from 'react'
import './accountDropdown.css'
import Avatar from './Avatar'

export default function AccountDropdown({ handleLogOut }) {
  // Set sizes as an object
  const avatarSize = { width: '40px', height: '40px' };

  return (
    <div className='navbar-account-dropdown' onClick={handleLogOut}>
        {/* Pass sizes as an object */}
        <Avatar size={avatarSize}/>      
      <button>Log Out</button>
    </div>
  )
}
