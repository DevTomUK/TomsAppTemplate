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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        
        {/* Email Input */}
        <div className="form-input-wrapper">
          <input
            id="emailInput"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "  // Enables floating label behavior
            required
          />
          <label htmlFor="emailInput">E-mail</label>
        </div>

        {/* Password Input */}
        <div className="form-input-wrapper">
          <input
            id="passwordInput"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="passwordInput">Password</label>
        </div>

        {/* Submit Button */}
        <div className="form-button-wrapper">
          <button type="submit">Sign Up</button>
        </div>

      </form>
    </div>
  );
}
