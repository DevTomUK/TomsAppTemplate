import React from "react";
import "./accountDropdown.css";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

export default function AccountDropdown({
  handleLogOut,
  isOpen,
  closeMenu,
  user,
}) {
  const avatarSize = { width: "40px", height: "40px" };

  return (
    <div className={`navbar-account-dropdown ${isOpen ? "open" : ""}`}>
      <Avatar size={avatarSize} />
      <span>{user ? user.email : "Loading..."}</span>
      <div className="line" />
      <ul>
        <li>
          <Link
            className="account-dropdown-link"
            to="/settings"
            onClick={closeMenu}
          >
            <FaGear className="account-dropdown-icon" />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link className="account-dropdown-link" to="/another">
            <FaGear className="account-dropdown-icon" />
            <span>Another Link</span>
          </Link>
        </li>
      </ul>

      <div className="line" />
      <button className="account-logout-button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}
