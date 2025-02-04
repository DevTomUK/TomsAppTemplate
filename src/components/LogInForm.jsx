import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../api/auth";
import './authForm.css';

export default function LogInForm() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await logInUser(email, password);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-input-wrapper">
          <label htmlFor="emailInput">E-mail</label>
          <input
            id="emailInput"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="form-input-wrapper">
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="form-button-wrapper">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}
