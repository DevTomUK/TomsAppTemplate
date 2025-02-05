import React from 'react';
import SignUpForm from '../components/SignUpForm';

export default function SignUpRoute() {
  return (
    <div className="center-form-container">
      <div className="reverse-headers">
        <span>Need an account?</span>
        <h1>Sign Up</h1>
      </div>
      <SignUpForm />
    </div>
  );
}
