import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage/HomePage";
import { Sidebar } from "./HomePage/Components/Sidebar";
import Navbar from "./NavbarAndFooter/Navbar";
import AnswerPage from "./AnswerPage/AnswerPage";
import { Answer } from "./AnswerPage/Components/Answer";
import UserPage from "./UserPage/UserPage";
import { DetailUser } from "./UserPage/Components/DetailUser";
import { AttendancePage } from "./AttendancePage/AttendancePage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="menu">
          <Sidebar />
        </div>
        <div className="view">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/answer" element={<AnswerPage />} />
            <Route path="/boards/:articleId" element={<Answer />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/users/:userId" element={<DetailUser />} />
            <Route path="/attendance" element={<AttendancePage />} />
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;
