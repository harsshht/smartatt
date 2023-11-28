// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/common/Navbar";
import Verification from "./components/dashboard/Verification";
import Profile from "./components/profile/Profile"; // Make sure this import is correct
import VerifyLocation from "./components/dashboard/VerifyLocation";
import VerifySelfie from "./components/dashboard/VerifySelfie";
import AttendanceDashboard from "./components/dashboard/AttendanceDashboard";
import Notifications from "./components/notification/Notifications";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Verification />
        <Notifications />
        <AttendanceDashboard />
        <Profile />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verify-location" element={<VerifyLocation />} />
          <Route path="/verify-selfie" element={<VerifySelfie />} />
          <Route
            path="/attendance-dashboard"
            element={<AttendanceDashboard />}
          />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
