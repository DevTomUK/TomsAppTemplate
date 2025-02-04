import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../api/auth";

export default function LogInRoute() {
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
    e.preventDefault();  // Prevent the default form submission behavior
    try {
      const user = await logInUser(email, password);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailInput">E-mail</label>
        <input
          id="emailInput"
          type="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <input
          id="passwordInput"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
