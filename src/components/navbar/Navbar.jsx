import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { logOutUser } from "../../api/auth";
import AccountDropdown from "./AccountDropdown";

export default function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)

  async function handleLogOut() {
    try {
      await logOutUser();
      setIsAccountDropdownOpen(false)
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }

  function handleAccountDropdownClick() {
    setIsAccountDropdownOpen(curr => !curr)
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
              <li>
                <Link to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li>|</li>
              <li onClick={handleAccountDropdownClick}>
                Account
              </li>
              

            </ul>
          ) : (
            <ul>
              <li>
                <Link to={"/login"}>
                  Log In
                </Link>
              </li>
              <li>
                <Link to={"/signup"}>
                  Sign Up
                </Link>
              </li>
            </ul>
          )}{isAccountDropdownOpen && <AccountDropdown handleLogOut={handleLogOut} />}
        </div>
      </div>
    </div>
  );
}
