import { Routes, Route } from "react-router-dom";
import React from "react";

import Register from "../pages/Register/register";
import LoginPage from "../pages/Login/login";
import Dashboard from "../pages/Dashboard/dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default AppRouter;
