import React from 'react';
import LogInForm from '../components/LogInForm';

export default function LogInRoute() {
  return (
    <div className='center-form'>
      <div>
        <h1>Log In</h1>
        <h2>Already got an account?</h2>
      </div>
      
      <LogInForm />
    </div>
  );
}