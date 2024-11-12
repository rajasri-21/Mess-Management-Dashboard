// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Mess Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="text-lg">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/meals" className="text-lg">Menu</Link>
          </li>
          <li className="mb-4">
            <Link to="/attendance" className="text-lg">Attendance</Link>
          </li>
          <li className="mb-4">
            <Link to="/transaction history" className="text-lg">TransactionHistory</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
