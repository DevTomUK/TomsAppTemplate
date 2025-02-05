import React from 'react';
import LogInForm from '../components/LogInForm';
import '../components/authForm.css'

export default function LogInRoute() {
  return (
    <div className='center-form-container'>
      <div className='reverse-headers'>
        <span>Already got an account?</span>
        <h1>Log In</h1>
      </div>
      
      <LogInForm />
    </div>
  );
}