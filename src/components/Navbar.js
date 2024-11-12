// import React, { useState } from 'react';
// import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ toggleDarkMode }) => { // Accept toggleDarkMode as a prop
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const navigate = useNavigate();

//   // Toggle dropdowns
//   const toggleNotificationDropdown = () => {
//     setIsNotificationOpen(!isNotificationOpen);
//     setIsProfileOpen(false);
//   };

//   const toggleProfileDropdown = () => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   // Click Handlers
//   const handleProfileClick = () => {
//     navigate('/profile');
//     setIsProfileOpen(false);
//   };

//   const handleSettingsClick = () => {
//     navigate('/settings');
//     setIsProfileOpen(false);
//   };

//   const handleLogoutClick = () => {
//     console.log('Logging out');
//     navigate('/'); // Redirect to login or home page
//   };

//   return (
//     <div className="flex items-center justify-between bg-pink-500 p-4 text-white shadow-md">
//       <div className="text-xl font-bold">SIET</div>
//       <div className="flex items-center space-x-4">
//         <button onClick={toggleDarkMode}>
//           {/* Toggle between dark and light mode icons */}
//         </button>

//         {/* Notification and Profile Icons */}
//         <div className="relative">
//           <button onClick={toggleNotificationDropdown}>
//             <BellIcon className="w-6 h-6" />
//             <span className="absolute -top-2 -right-2 bg-green-500 rounded-full text-xs px-1">3</span>
//           </button>
//           {isNotificationOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
//               <h4 className="text-gray-700 font-semibold mb-2">Notifications</h4>
//               <ul>
//                 <li className="py-1 border-b last:border-none">New meal added for Lunch</li>
//                 <li className="py-1 border-b last:border-none">Updated dinner timings</li>
//                 <li className="py-1">Breakfast menu changed</li>
//               </ul>
//             </div>
//           )}
//         </div>

//         <div className="relative">
//           <button onClick={toggleProfileDropdown}>
//             <UserCircleIcon className="w-8 h-8" />
//           </button>
//           {isProfileOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
//               <ul className="text-gray-700">
//                 <li onClick={handleProfileClick} className="py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
//                 <li onClick={handleSettingsClick} className="py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
//                 <li onClick={handleLogoutClick} className="py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ notificationCount, toggleDarkMode }) => { // Accept notificationCount and toggleDarkMode as props
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const navigate = useNavigate();

//   // Toggle dropdowns
//   const toggleNotificationDropdown = () => {
//     setIsNotificationOpen(!isNotificationOpen);
//     setIsProfileOpen(false);
//   };

//   const toggleProfileDropdown = () => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   // Click Handlers
//   const handleProfileClick = () => {
//     navigate('/profile');
//     setIsProfileOpen(false);
//   };

//   const handleSettingsClick = () => {
//     navigate('/settings');
//     setIsProfileOpen(false);
//   };

//   const handleLogoutClick = () => {
//     console.log('Logging out');
//     navigate('/'); // Redirect to login or home page
//   };

//   return (
//     <div className="flex items-center justify-between bg-pink-500 p-4 text-white shadow-md">
//       <div className="text-xl font-bold">SIET</div>
//       <div className="flex items-center space-x-4">
//         <button onClick={toggleDarkMode}>
//           {/* Toggle between dark and light mode icons (you can add icons here) */}
//         </button>

//         {/* Notification Icon */}
//         <div className="relative">
//           <button onClick={toggleNotificationDropdown}>
//             <BellIcon className="w-6 h-6" />
//             {notificationCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs px-1">{notificationCount}</span>
//             )}
//           </button>
//           {isNotificationOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
//               <h4 className="text-gray-700 font-semibold mb-2">Notifications</h4>
//               <ul>
//                 <li className="py-1 border-b last:border-none">New meal added for Lunch</li>
//                 <li className="py-1 border-b last:border-none">Updated dinner timings</li>
//                 <li className="py-1">Breakfast menu changed</li>
//                 {/* You can dynamically generate these notifications based on your application state */}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Profile Icon */}
//         <div className="relative">
//           <button onClick={toggleProfileDropdown}>
//             <UserCircleIcon className="w-8 h-8" />
//           </button>
//           {isProfileOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
//               <ul className="text-gray-700">
//                 <li onClick={handleProfileClick} className="py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
//                 <li onClick={handleSettingsClick} className="py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
//                 <li onClick={handleLogoutClick} className="py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ notificationCount, toggleDarkMode }) => { // Accept notificationCount and toggleDarkMode as props
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle dropdowns
  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsProfileOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Click Handlers
  const handleProfileClick = () => {
    navigate('/profile');
    setIsProfileOpen(false);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    setIsProfileOpen(false);
  };

  const handleLogoutClick = () => {
    console.log('Logging out');
    navigate('/'); // Redirect to login or home page
  };

  return (
    <div className="flex items-center justify-between bg-pink-500 p-4 text-white shadow-md">
      <div className="text-xl font-bold">SIET</div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode}>
          {/* Toggle between dark and light mode icons (you can add icons here) */}
        </button>

        {/* Notification Icon */}
        <div className="relative">
          <button onClick={toggleNotificationDropdown}>
            <BellIcon className="w-6 h-6" />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs px-1">{notificationCount}</span>
            )}
          </button>
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
              <h4 className="text-gray-700 font-semibold mb-2">Notifications</h4>
              <ul>
                <li className="py-1 border-b last:border-none">New meal added for Lunch</li>
                <li className="py-1 border-b last:border-none">Updated dinner timings</li>
                <li className="py-1">Breakfast menu changed</li>
                {/* You can dynamically generate these notifications based on your application state */}
              </ul>
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <button onClick={toggleProfileDropdown}>
            <UserCircleIcon className="w-8 h-8" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
              <ul className="text-gray-700">
                <li onClick={handleProfileClick} className="py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li onClick={handleSettingsClick} className="py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li onClick={handleLogoutClick} className="py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
