import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StatCard = ({ title, value, meta, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex-1 p-4 rounded-2xl border shadow-sm"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="mt-1 text-2xl font-bold">{value}</div>
        {meta && <div className="mt-1 text-sm">{meta}</div>}
      </div>
      {icon && (
        <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg ring-1">
          {icon}
        </div>
      )}
    </div>
  </motion.div>
);

export default function AmbulanceDetails() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Maintenance", "Equipment", "Call Assignments"];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between flex-wrap gap-4"
      >
        <div className="flex">
            <h1 className="text-2xl font-bold">Ambulances / AMB-002</h1>
        <button className="rounded-full px-2 ml-3 bg-gray-300 hover:bg-gray-200">Available</button>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => alert("Schedule Maintenance clicked")}
            className="px-4 py-2 rounded-lg ring-1"
          >
            Schedule Maintenance
          </button>
          <button
            onClick={() => alert("Update Status clicked")}
            className="px-4 py-2 rounded-lg ring-1"
          >
            Update Status
          </button>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Status" value="Available" meta="Last updated: Today, 9:30 AM" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="22" height="22" fill="currentColor">
 
  <path d="M0 112c0-26.5 21.5-48 48-48H384c26.5 0 48 21.5 48 48v48h44.1c12.7 0 24.9 5.1 33.9 14.1l86 86c9 9 14.1 21.2 14.1 33.9V368c0 26.5-21.5 48-48 48H564c-6.6 35.3-37.6 64-76 64s-69.4-28.7-76-64H228c-6.6 35.3-37.6 64-76 64s-69.4-28.7-76-64H48c-26.5 0-48-21.5-48-48V112zM152 368a40 40 0 1 1-80 0 40 40 0 1 1 80 0zm336 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
 
  <rect x="280" y="200" width="40" height="120" fill="black"/>
  <rect x="240" y="240" width="120" height="40" fill="black"/>
</svg>
} />
        <StatCard title="Last Maintenance" value="2023-04-02" meta="Next: 2023-07-02" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-plus" viewBox="0 0 16 16">
  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>} />
        <StatCard title="Total Calls" value="42" meta="4 calls this month" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>} />
        <StatCard title="Current Driver" value="Sarah Wilson" meta="Assigned since: April 1, 2023" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>} />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ring-1 ${
              activeTab === tab ? "font-bold underline" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "Overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border p-6 space-y-6"
          >
            <h2 className="text-xl font-bold">Ambulance Overview</h2>
            <p>General information and specifications</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="font-semibold">General Information</h3>
                <div>ID: AMB-002</div>
                <div>Registration: ABC-5678</div>
                <div>Model: Mercedes Sprinter</div>
                <div>Year: 2022</div>
                <div>Type: Advanced Life Support</div>
                <div>Purchase Date: 2022-01-15</div>
                <div>Insurance Expiry: 2024-01-15</div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Technical Specifications</h3>
                <div>Fuel Type: Diesel</div>
                <div>Mileage: 12,450 km</div>
                <div>Capacity: 2 stretchers, 3 seated</div>
                <div>Current Location: East Wing</div>
                <div>Current Driver: Sarah Wilson</div>
                <div>Last Maintenance: 2023-04-02</div>
                <div>Next Maintenance: 2023-07-02</div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "Maintenance" && (
          <motion.div
            key="maintenance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border p-6"
          >
            <h2 className="text-xl font-bold">Maintenance Records</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>2023-04-02 - Oil change, brake check</li>
              <li>2023-01-15 - Tire replacement</li>
              <li>2022-10-10 - Engine diagnostics</li>
            </ul>
          </motion.div>
        )}

        {activeTab === "Equipment" && (
          <motion.div
            key="equipment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border p-6"
          >
            <h2 className="text-xl font-bold">Equipment List</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Defibrillator</li>
              <li>Oxygen Tank</li>
              <li>First Aid Kit</li>
              <li>Stretcher</li>
            </ul>
          </motion.div>
        )}

        {activeTab === "Call Assignments" && (
          <motion.div
            key="calls"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border p-6"
          >
            <h2 className="text-xl font-bold">Recent Call Assignments</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>2023-04-22 - Chest Pain - Assigned to Sarah Wilson</li>
              <li>2023-04-21 - Traffic Accident - Assigned to Michael Brown</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Usage Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Distance" value="12,450 km" meta="+450 km this month" />
        <StatCard title="Average Response Time" value="8.2 min" meta="-0.5 min from last month" />
        <StatCard title="Fuel Efficiency" value="9.8 L/100km" meta="Within normal range" />
      </div>
    </div>
  );
}
