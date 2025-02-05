import React from 'react';
import './accountDropdown.css';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';


export default function AccountDropdown({ handleLogOut, isOpen, user }) {
  // Set sizes as an object
  const avatarSize = { width: '40px', height: '40px' };

  return (
    <div className={`navbar-account-dropdown ${isOpen ? 'open' : ''}`}>
      <Avatar size={avatarSize} />
      <span>{user ? user.email : 'Loading...'}</span>
      <line />
      <ul>
        <li>
          <Link to={'/settings'}>
            <span>Account Settings</span>
          </Link>
        </li>
      </ul>
      
      <line />
      <button className='account-logout-button' onClick={handleLogOut}>Log Out</button>
    </div>
  );
  
}
