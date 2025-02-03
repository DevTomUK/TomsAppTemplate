import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Navbar() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  function handleLogOut() {
    setUser(null);
    navigate("/");
  }

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Link to={"/"} className="navbar-brand">
          Brand Logo
        </Link>
        <div className="navbar-links">
          {user ? (
            <ul>
              <Link to={"/"}>
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
