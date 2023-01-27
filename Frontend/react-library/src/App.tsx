import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage/HomePage";
import { Sidebar } from "./HomePage/Components/Sidebar";
import Navbar from "./NavbarAndFooter/Navbar";
import AnswerPage from "./AnswerPage/AnswerPage";
import { Answer } from "./AnswerPage/Components/Answer";
import UserPage from "./UserPage/UserPage";
import { DetailUser } from "./UserPage/Components/DetailUser";
import { AttendancePage } from "./AttendancePage/AttendancePage";
import GradePage from "./GradePage/GradePage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from "./Auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
  const customAuthHandler = () => {
    navigate('/login');
  }
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAUth: any, orginalUri: any) => {
    navigate(toRelativeUrl(orginalUri || "/", window.location.origin));
  };
  return (
    <div>
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
      <Navbar />
      
        <div className="main">
          <div className="menu">
            <Sidebar />
          </div>
          <div className="view">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/grade" element={<GradePage />} />
              <Route path="/answer" element={<AnswerPage />} />
              <Route path="/boards/:articleId" element={<Answer />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="/users/:userId" element={<DetailUser />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route
              path="/login"
              element={<LoginWidget config={oktaConfig} />}
            />
            <Route path="/login/callback" element={<LoginCallback />} />
            </Routes>
          </div>
        </div>
      </Security>
    </div>
  );
}

export default App;
