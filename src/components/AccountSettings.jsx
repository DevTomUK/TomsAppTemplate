import React, { useState } from 'react';
import './accountSettings.css';

export default function AccountSettings() {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [timezone, setTimezone] = useState('America/New_York');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPassword = () => {
    alert('Password reset link sent to your email');
  };

  return (
    <div className='account-settings-container'>
        <div className="account-settings-wrapper">
            
            <div className="account-settings-row">
                <div className="account-settings-label-container">
                    <label htmlFor="first-name">First Name</label>
                </div>
                <div className="account-settings-input-container">
                    <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
            </div>

            <div className="account-settings-row">
                <div className="account-settings-label-container">
                    <label htmlFor="surname">Surname</label>
                </div>
                <div className="account-settings-input-container">
                    <input type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
            </div>

            <div className="account-settings-row">
                <div className="account-settings-label-container">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="account-settings-input-container">
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>

            <div className="account-settings-row">
                <div className="account-settings-label-container">
                    <label htmlFor="password">Password</label>
                </div>
                <div className="account-settings-input-container">
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="reset-password-button" onClick={handleResetPassword}>Reset Password</button>
                </div>
            </div>
        </div>
    </div>
  )
}
