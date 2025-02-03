import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { logOutUser } from "../../api/auth";

export default function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await logOutUser();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }
  

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Link to={"/"} className="navbar-brand">
          Brand
        </Link>
        <div className="navbar-links">
          {user ? (
            <ul>
              <Link to={"/dashboard"}>
                <li>Dashboard</li>
              </Link>
              <li onClick={handleLogOut}>Log Out</li>
            </ul>
          ) : (
            <ul>
              <Link to={"/login"}>
                <li>Log In</li>
              </Link>
              <Link to={"/signup"}>
                <li>Sign Up</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
