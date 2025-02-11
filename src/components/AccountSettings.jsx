import React, { useState } from 'react';
import './accountSettings.css';
import { removeUser } from '../api/auth';

export default function AccountSettings() {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Regular password field
  const [deletePassword, setDeletePassword] = useState(''); // Separate password for deletion
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

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

  const handleDelete = async () => {
    if (!deletePassword) {
      alert("Please enter your password to proceed.");
      return;
    }
    
    try {
      await removeUser(deletePassword);
      setShowConfirmDialog(false);
      setDeletePassword(''); // Clear password after deletion attempt
    } catch (error) {
      alert("Error deleting account: " + error.message);
    }
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
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button className="reset-password-button" onClick={handleResetPassword}>Reset Password</button>
          </div>
        </div>

        <div className="account-settings-row">
          <div className="account-settings-label-container">
            <label htmlFor="deleteUser">Delete User</label>
          </div>
          <div className="account-settings-input-container">
            <button onClick={() => setShowConfirmDialog(true)}>Delete User</button>
          </div>
        </div>
      </div>

      {showConfirmDialog && (
        <div className="confirmation-dialog-overlay">
          <div className="confirmation-dialog">
            <p>Enter your password to delete your account:</p>
            <input 
              type="password" 
              placeholder="Enter password"
              value={deletePassword} 
              onChange={(e) => setDeletePassword(e.target.value)}
            />
            <div className="confirmation-buttons">
              <button onClick={handleDelete} className="confirm-button">Yes, Delete</button>
              <button onClick={() => setShowConfirmDialog(false)} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
