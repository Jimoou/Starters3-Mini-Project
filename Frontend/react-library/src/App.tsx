import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage/HomePage";
import { Sidebar } from "./HomePage/Sidebar/Sidebar";
import Navbar from "./NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="menu">
          <Sidebar />
        </div>
        <div className="view">
          <HomePage />
        </div>
      </div>
      {/* <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes> */}
    </div>
  );
}

export default App;
