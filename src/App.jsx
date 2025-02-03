import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useUser } from "./context/UserContext";
import './App.css'

import Navbar from "./components/navbar/Navbar";
import HomeRoute from "./routes/HomeRoute";
import SignUpRoute from "./routes/SignUpRoute";

const App = () => {
  const { loading } = useUser();

  if (loading) {
    return (
      <div className="splash-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/signup" element={<SignUpRoute />} />
      </Routes>
    </>
  );
};

export default App;
