import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSubmissionForm from './components/UserSubmissionForm'; // User Submission Form
import AdminLogin from './components/AdminLogin'; // Admin Login
import AdminDashboard from './components/AdminDashboard'; // Admin Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSubmissionForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
