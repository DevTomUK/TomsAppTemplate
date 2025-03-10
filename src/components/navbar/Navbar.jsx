import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { logOutUser } from "../../api/auth";
import AccountDropdown from "./AccountDropdown";
import AccountIcon from "./AccountIcon"; // Importing the AccountIcon component

import "./navbar.css";

export default function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for detecting outside clicks

  async function handleLogOut() {
    try {
      await logOutUser();
      setIsAccountDropdownOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }

  function handleAccountDropdownClick() {
    setIsAccountDropdownOpen((curr) => !curr);
  }

  function handleCloseDropdown() {
    setIsAccountDropdownOpen(false)
  }

  // Function to close dropdown when clicking outside
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsAccountDropdownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Link to={"/"} className="navbar-brand">
          Brand
        </Link>
        <div className="navbar-links" ref={dropdownRef}>
          {user ? (
            <ul className="navbar-links-list">
              <li>
                <Link to={"/dashboard"} className="link-text">
                  Dashboard
                </Link>
              </li>
              <li>|</li>
              <li onClick={handleAccountDropdownClick}>
                <AccountIcon selected={isAccountDropdownOpen} />
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to={"/login"} className="link-text">
                  Log In
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to={"/signup"} className="link-text">
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
            <AccountDropdown
              handleLogOut={handleLogOut}
              isOpen={isAccountDropdownOpen}
              closeMenu={handleCloseDropdown}
              user={user}
            />
        </div>
      </div>
    </div>
  );
}
