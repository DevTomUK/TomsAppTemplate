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

  async function handleSubmit() {
    try {
      const user = await logInUser(email, password);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  
  return (
    <div>
      <label htmlFor="emailInput">E-mail</label>
      <input id="emailInput" type="email" value={email} onChange={handleChangeEmail} />
      <label htmlFor="passwordInput">Password</label>
      <input id="passwordInput" type="password" value={password} onChange={handleChangePassword} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
