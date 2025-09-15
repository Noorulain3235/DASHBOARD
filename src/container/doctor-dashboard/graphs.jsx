import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("schedule");

  const tabs = ["schedule", "patients", "tasks", "stats"];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

const TabButton = ({ tab, label }) => (
  <button
    onClick={() => setActiveTab(tab)}
    className={`px-4 py-2 font-medium transition-all 
      ${activeTab === tab ? "bg-gray-500" : "bg-gray-400"} 
      first:rounded-l-md last:rounded-r-md`}
  >
    {label}
  </button>
);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex  mb-6">
          <TabButton tab="schedule" label="Schedule" />
          <TabButton tab="patients" label="Patients" />
          <TabButton tab="tasks" label="Tasks" />
          <TabButton tab="stats" label="Stats" />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "schedule" && (
            <motion.div
              key="schedule"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Left: Today’s Schedule */}
              <div className="p-4 rounded-xl border">
                <h2 className="text-2xl font-semibold  mb-2">
                  Today’s Schedule
                </h2>
                <p className=" mb-4">
                  You have 12 appointments scheduled for today
                </p>

                {/* Example appointments */}
                {[
                  { name: "Emma Thompson", time: "09:00 AM · 30 min", type: "Check-up" },
                  { name: "Michael Chen", time: "10:15 AM · 45 min", type: "Follow-up" },
                  { name: "Sophia Rodriguez", time: "11:30 AM · 60 min", type: "Consultation" },
                  { name: "James Wilson", time: "01:45 PM · 30 min", type: "Urgent" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg border mb-3 hover:bg-gray-400"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm">{item.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-cyan-500 border">
                        {item.type}
                      </span>
                      <button className="px-3 py-1 text-sm border rounded-md">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Upcoming Appointments */}
              <div className="p-4 rounded-xl border">
                <h2 className="text-2xl font-semibold  mb-2">
                  Upcoming Appointments
                </h2>
                <p className="mb-4">
                  Your upcoming appointments for the week
                </p>

                {[
                  { name: "John Doe", date: "Fri, Apr 25 · 09:00 AM", tags: ["confirmed", "Follow-up"] },
                  { name: "Jane Smith", date: "Fri, Apr 25 · 10:30 AM", tags: ["pending", "New Patient"] },
                  { name: "Robert Johnson", date: "Sat, Apr 26 · 02:00 PM", tags: ["confirmed"] }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border mb-3 hover:bg-gray-400"
                  >
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm ">{item.date}</p>
                    <div className="flex gap-2 mt-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "patients" && (
            <motion.div
              key="patients"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="p-6 rounded-xl border"
            >
              <h2 className="text-2xl font-semibold mb-2">Patients</h2>
              <p>Patient records will appear here.</p>
            </motion.div>
          )}

          {activeTab === "tasks" && (
            <motion.div
              key="tasks"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="p-6 rounded-xl border"
            >
              <h2 className="text-2xl font-semibold mb-2">Tasks</h2>
              <p>Pending tasks will appear here.</p>
            </motion.div>
          )}

          {activeTab === "stats" && (
            <motion.div
              key="stats"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="p-6 rounded-xl border"
            >
              <h2 className="text-2xl font-semibold  mb-2">Stats</h2>
              <p>Analytics and reports will appear here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
