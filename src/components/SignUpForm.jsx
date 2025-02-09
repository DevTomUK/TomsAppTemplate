import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/auth";
import './authForm.css';

export default function SignUpForm() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const allRequirementsMet = Object.values(passwordValidations).every(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password") {
      const updatedValidations = {
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
        specialChar: /[!"£$%^&*()_\-+=:;@'<,>.?/~#\[\]{}]/.test(value),
      };
      setPasswordValidations(updatedValidations);
    }
    
    if (name === "confirmPassword") {
      setPasswordsMatch(value === formData.password);
    }
  };

  const handleBlur = () => {
    if (allRequirementsMet) {
      setPasswordFocused(false);
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (formData.confirmPassword.length > 0) {
      setConfirmPasswordTouched(true);
    }
    setPasswordsMatch(formData.confirmPassword === formData.password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allRequirementsMet || !passwordsMatch) {
      alert("Please ensure your password meets all requirements and matches.");
      return;
    }
    try {
      const user = await createUser(formData.email, formData.password);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-input-wrapper">
          <input
            id="emailInput"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="emailInput">E-mail</label>
        </div>
        <div className="form-input-wrapper">
          <input
            id="passwordInput"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setPasswordFocused(true)}
            onBlur={handleBlur}
            placeholder=" "
            required
          />
          <label htmlFor="passwordInput">Password</label>
        </div>

        <div className={`password-requirements-container ${passwordFocused ? "open" : ""}`}>
          <ul className="password-requirements">
            <li className="password-requirements-title">Password must contain at least:</li>
            <li className={passwordValidations.length ? "valid" : "invalid"}>
              {passwordValidations.length ? "✅" : "❌"} 8 characters
            </li>
            <li className={passwordValidations.uppercase ? "valid" : "invalid"}>
              {passwordValidations.uppercase ? "✅" : "❌"} 1 uppercase letter
            </li>
            <li className={passwordValidations.number ? "valid" : "invalid"}>
              {passwordValidations.number ? "✅" : "❌"} 1 number
            </li>
            <li className={passwordValidations.specialChar ? "valid" : "invalid"}>
              {passwordValidations.specialChar ? "✅" : "❌"} 1 special character
            </li>
          </ul>
        </div>

        <div className="form-input-wrapper">
          <input
            id="confirmPasswordInput"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleConfirmPasswordBlur}
            placeholder=" "
            required
          />
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
        </div>

        {confirmPasswordTouched && !passwordsMatch && (
          <div className="password-requirements open">
            <span className="invalid">
              ❌ Passwords must match
            </span>
          </div>
        )}

        <div className="form-button-wrapper">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
