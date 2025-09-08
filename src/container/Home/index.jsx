import React from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className={`p-6 space-y-6 w-full `}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm opacity-80">
            Welcome back, Dr. Johnson! Here's what's happening today.
          </p>
        </div>

        {/* Date + Export */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-opacity-10
           transition">
            {/* Calendar Icon */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
                strokeWidth="2"
              />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
            </motion.svg>
            Sep 08, 2025 - Sep 08, 2025
          </button>
          <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-opacity-10 transition">
            {/* Download Icon */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ y: 2 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeWidth="2" d="M12 5v14m7-7H5" />
            </motion.svg>
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue */}
        <div className="rounded-xl border p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ scale: 1.2 }}
            >
              <path
                strokeWidth="2"
                d="M12 8c-4 0-4 8 0 8s4-8 0-8zm0-6v2m0 16v2m8-10h2M2 12h2"
              />
            </motion.svg>
            <h2 className="font-semibold">Total Revenue</h2>
          </div>
          <p className="text-sm text-green-500 mt-1">+20.1% from last month</p>
          <p className="text-2xl font-bold mt-2">$45,231.89</p>
        </div>

        {/* Appointments */}
        <div className="rounded-xl border p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ rotate: -15 }}
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                ry="2"
                strokeWidth="2"
              />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="4" y1="10" x2="20" y2="10" strokeWidth="2" />
            </motion.svg>
            <h2 className="font-semibold">Appointments</h2>
          </div>
          <p className="text-sm text-blue-500 mt-1">+10.1% from last month</p>
          <p className="text-2xl font-bold mt-2">+2,350</p>
        </div>

        {/* Patients */}
        <div className="rounded-xl border p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ scale: 1.2 }}
            >
              <circle cx="12" cy="7" r="4" strokeWidth="2" />
              <path strokeWidth="2" d="M6 21v-2a6 6 0 0112 0v2" />
            </motion.svg>
            <h2 className="font-semibold">Patients</h2>
          </div>
          <p className="text-sm text-yellow-500 mt-1">+19% from last month</p>
          <p className="text-2xl font-bold mt-2">+12,234</p>
        </div>

        {/* Staff */}
        <div className="rounded-xl border p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ scale: 1.2 }}
            >
              <circle cx="9" cy="7" r="4" strokeWidth="2" />
              <circle cx="17" cy="7" r="4" strokeWidth="2" />
              <path strokeWidth="2" d="M2 21v-2a6 6 0 0112 0v2" />
              <path strokeWidth="2" d="M12 21v-2a6 6 0 0110 0v2" />
            </motion.svg>
            <h2 className="font-semibold">Staff</h2>
          </div>
          <p className="text-sm text-purple-500 mt-1">+4 new this month</p>
          <p className="text-2xl font-bold mt-2">+573</p>
        </div>
      </div>
    </div>
  );
}
