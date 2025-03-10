import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useUser } from "./context/UserContext";
import './App.css'

import Navbar from "./components/navbar/Navbar";
import HomeRoute from "./routes/HomeRoute";
import SignUpRoute from "./routes/SignUpRoute";
import LogInRoute from "./routes/LogInRoute";
import DashboardRoute from './routes/DashboardRoute';
import PageNotFound from "./routes/PageNotFound";
import Footer from "./components/footer/Footer";
import SettingsRoute from "./routes/SettingsRoute";

const App = () => {

  const { loading, user } = useUser();

  if (loading) {
    return (
      <div className="splash-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log(user)

  return (
    <div className="app-container">
      <Navbar />
      <main className="route-main">
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <LogInRoute />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpRoute />} />
          <Route path="/dashboard" element={user ? <DashboardRoute /> : <Navigate to="/" />} />
          <Route path="/settings" element={user ? <SettingsRoute /> : <Navigate to={"/"} />} /> 
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
  
  
};

export default App;
