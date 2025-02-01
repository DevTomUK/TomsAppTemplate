import React, { useState } from "react";
import { Link } from "react-router-dom"; // For static links

const Navbar = () => {
  // State to simulate user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login/logout
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Brand: Link to home */}
        <div className="text-white text-xl font-bold">
          <Link to="/">MyApp</Link>
        </div>

        {/* Links on the right */}
        <div className="flex space-x-4">
          {/* Static Links */}
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:text-gray-300">
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLoginLogout}
              className="text-white hover:text-gray-300"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
