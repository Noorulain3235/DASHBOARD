import React from "react";
import { motion } from "framer-motion";
import Heathsummery from './heath-summery'

export default function Dashboard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const Card = ({ icon, title, main, subtitle, linkText, linkColor }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 p-5 rounded-xl border shadow-sm cursor-pointer hover:shadow-md transition"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className=" font-medium">{title}</h3>
        <div className="p-2 rounded-full border">{icon}</div>
      </div>

      {/* Main */}
      <p className="text-2xl font-bold  mb-1">{main}</p>
      <p className="text-sm mb-4">{subtitle}</p>

      {/* Link */}
      <button className={`text-sm font-medium flex items-center gap-1 ${linkColor}`}>
        {linkText}
        <motion.svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="inline-block"
          whileHover={{ x: 3 }}
        >
          <path d="M5 12l5-5-5-5" />
        </motion.svg>
      </button>
    </motion.div>
  );

  // Simple motion icons
  const CalendarIcon = (
    <motion.svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="14" height="14" rx="2" />
      <line x1="3" y1="9" x2="17" y2="9" />
    </motion.svg>
  );

  const PillIcon = (
   <motion.svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-5 h-5  text-green-500"
  fill="currentColor"
  viewBox="0 0 16 16"
>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
</motion.svg>

  );

  const FileIcon = (
    <motion.svg  className="w-5 h-5  text-purple-600" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </motion.svg>
  );

  const ClockIcon = (
    <motion.svg  className="w-5 h-5  text-red-500" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6v4l3 2" />
    </motion.svg>
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              Welcome back, Sarah
            </h1>
            <p>
              Your health dashboard - manage your care all in one place
            </p>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 rounded-md border ">
              Message Doctor
            </button>
            <button className="px-4 py-2 rounded-md border font-medium ">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card
            icon={CalendarIcon}
            title="Next Appointment"
            main="Tomorrow"
            subtitle="10:30 AM with Dr. Johnson"
            linkText="View details"
            linkColor="text-blue-600"
          />
          <Card
            icon={PillIcon}
            title="Medications"
            main="3 Active"
            subtitle="Next dose in 2 hours"
            linkText="View all medications"
            linkColor="text-green-600"
          />
          <Card
            icon={FileIcon}
            title="Test Results"
            main="2 New"
            subtitle="Blood work from 05/12"
            linkText="View results"
            linkColor="text-purple-600"
          />
          <Card
            icon={ClockIcon}
            title="Billing"
            main="$45.00"
            subtitle="Due in 15 days"
            linkText="Make payment"
            linkColor="text-red-600"
          />
        </div>
        <Heathsummery/>
      </div>
    </div>
  );
}
