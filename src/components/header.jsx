import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Apply theme to body
  useEffect(() => {
    document.body.className = darkMode ? "bg-black text-white" : "bg-white text-black";
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between px-4 py-3 
    relative z-50">
      {/* Right - Icons */}
      <div className="flex items-center space-x-6">
        {/* Sun / Moon Icon */}
        {darkMode ? (
          <motion.svg
            onClick={() => setDarkMode(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sun */}
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
            <line x1="12" y1="2" x2="12" y2="6" strokeWidth="2" />
            <line x1="12" y1="18" x2="12" y2="22" strokeWidth="2" />
            <line x1="2" y1="12" x2="6" y2="12" strokeWidth="2" />
            <line x1="18" y1="12" x2="22" y2="12" strokeWidth="2" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" strokeWidth="2" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" strokeWidth="2" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" strokeWidth="2" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" strokeWidth="2" />
          </motion.svg>
        ) : (
          <motion.svg
            onClick={() => setDarkMode(true)}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Moon */}
            <path
              strokeWidth="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </motion.svg>
        )}

        {/* Bell Icon */}
        <motion.svg
          onClick={() => {
            setIsNotificationOpen(!isNotificationOpen);
            setIsProfileOpen(false);
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 
              0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 
              11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 
              0 11-6 0v-1m6 0H9"
          />
        </motion.svg>
        <span className="absolute right-[42px] top-3 block w-2 h-2 bg-red-500 rounded-full"></span>

        {/* Profile Circle */}
        <div
          onClick={() => {
            setIsProfileOpen(!isProfileOpen);
            setIsNotificationOpen(false);
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-sm font-bold cursor-pointer"
        >
          SJ
        </div>
      </div>

      {/* Notification Sidebar */}
      <AnimatePresence>
        {isNotificationOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg p-4 z-50"
          >
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <ul className="space-y-2">
              <li className="p-2 bg-gray-700 rounded">New message from Admin</li>
              <li className="p-2 bg-gray-700 rounded">System update available</li>
              <li className="p-2 bg-gray-700 rounded">Meeting at 3:00 PM</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Sidebar */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg p-4 z-50"
          >
            <h2 className="text-lg font-bold mb-4">Profile</h2>
            <ul className="space-y-3">
              <li className="p-2 bg-gray-700 rounded cursor-pointer">Profile</li>
              <li className="p-2 bg-gray-700 rounded cursor-pointer">Chat</li>
              <li className="p-2 bg-gray-700 rounded cursor-pointer">Support</li>
              <li className="p-2 bg-gray-700 rounded cursor-pointer">Logout</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
