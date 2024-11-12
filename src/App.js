import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import MealsPage from './pages/MealsPage';
import AttendancePage from './pages/AttendancePage';
import TransactionHistory from './pages/TransactionHistory';
import Navbar from './components/Navbar'; // Keep Navbar here

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark/light mode

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle between dark and light mode
    const newTheme = !isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme); // Save the theme preference
    document.body.classList.toggle('dark', newTheme === 'dark'); // Apply the theme
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}> {/* Apply the dark class conditionally */}
        <Navbar toggleDarkMode={toggleDarkMode} /> {/* Render Navbar only here */}
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/transaction history" element={<TransactionHistory />} />
          </Routes>
        </DashboardLayout>
      </div>
    </Router>
  );
};

export default App;
