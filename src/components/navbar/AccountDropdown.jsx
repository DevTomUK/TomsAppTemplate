import React from 'react';
import './accountDropdown.css';
import Avatar from './Avatar';

export default function AccountDropdown({ handleLogOut, isOpen }) {
  // Set sizes as an object
  const avatarSize = { width: '40px', height: '40px' };

  return (
    <div className={`navbar-account-dropdown ${isOpen ? 'open' : ''}`}>
      {/* Pass sizes as an object */}
      <Avatar size={avatarSize}/>      
      <button className='account-logout-button' onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
