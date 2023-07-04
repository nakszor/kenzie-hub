import "./App.css";
import React from "react";
import AppRouter from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
export default App;
