import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import HomeRoute from "./routes/HomeRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
      </>
  );
};

export default App;
