import React from "react";
import { motion } from "framer-motion";
import Graphs from "./graphs"

export default function Dashboard() {
  return (
    <div className={`p-6 space-y-6 w-full`}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold ml-2 ">Dashboard</h1>
          <p className="text-sm opacity-80 ml-2 ">
            Welcome back, Dr. Johnson! Here's what's happening today.
          </p>
        </div>

        {/* Date + Export */}
        <div className="flex items-center gap-2 ">
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
      <div className="grid grid-cols-1 md:grid-cols-2 ml-2  lg:grid-cols-4 gap-6">
        {/* Revenue */}
        <div className="rounded-xl border p-5 shadow-sm">
          <div className=" items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-green-500"
              viewBox="0 0 16 16"
              fill="currentColor"
              whileHover={{ scale: 1.2 }}
            >
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
            </motion.svg>
            <h2 className="font-semibold">Total Revenue</h2>
          </div>
          <p className="text-sm text-green-500 mt-1">+20.1% from last month</p>
          <p className="text-2xl font-bold mt-2">$45,231.89</p>
        </div>

        {/* Appointments */}
        <div className="rounded-xl border p-5 shadow-sm">
          <div className=" items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-blue-500"
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
          <div className=" items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-yellow-500"
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
          <div className=" items-center gap-2">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-purple-500"
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
      <Graphs />

    </div>
  );
}
