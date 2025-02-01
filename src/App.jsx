import React from "react";
import { Route, Routes } from "react-router-dom"; // Import React Router
import Navbar from "./components/Navbar"; // Import Navbar Component

// Simple Home, Login, and SignUp pages
const Home = () => <div>Welcome to the Home Page</div>;
const Login = () => <div>Login Page</div>;
const SignUp = () => <div>SignUp Page</div>;

const App = () => {
  return (
    <>
      {/* Navbar with Static Links */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </>
  );
};

export default App;
