import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../api/auth";

export default function LogInForm() {
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
      const user = await logInUser(formData.email, formData.password);
      if (user) {
        setUser(user);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
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
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}
