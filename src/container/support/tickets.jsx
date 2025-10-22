import React, { useState } from "react";
import { motion } from "framer-motion";

const Specializations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tickets = [
    {
      id: "TCK-1001",
      date: "2025-09-20",
      subject: "Login issue on mobile app",
      priority: "High",
      status: "Open",
    },
    {
      id: "TCK-1002",
      date: "2025-09-18",
      subject: "Prescription not generated",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: "TCK-1003",
      date: "2025-09-15",
      subject: "Payment failed during checkout",
      priority: "High",
      status: "Resolved",
    },
    {
      id: "TCK-1004",
      date: "2025-09-10",
      subject: "Unable to book appointment",
      priority: "Low",
      status: "Closed",
    },
        {
      id: "TCK-1005",
      date: "2025-09-20",
      subject: "Login issue on mobile app",
      priority: "High",
      status: "Open",
    },
    {
      id: "TCK-1006",
      date: "2025-09-18",
      subject: "Prescription not generated",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: "TCK-1007",
      date: "2025-09-15",
      subject: "Payment failed during checkout",
      priority: "High",
      status: "Resolved",
    },
    {
      id: "TCK-1008",
      date: "2025-09-10",
      subject: "Unable to book appointment",
      priority: "Low",
      status: "Closed",
    },
  ];

  const filtered = tickets.filter(
    (item) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen md:p-6 py-6 max-w-6xl mx-auto">
      {/* List Container */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border overflow-hidden"
      >
        {/* List Header */}
        <div className="flex flex-col justify-between items-start p-5 gap-4 border-b">
          <div>
            <h2 className="text-xl font-semibold">My Support Tickets</h2>
            <p className="opacity-70 text-sm">
              View and manage your support tickets
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border w-full md:w-72 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Add Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 w-56 rounded-lg border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Create Ticket</span>
            </motion.button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left font-medium">Ticket ID</th>
                <th className="py-4 px-6 text-left font-medium">Date</th>
                <th className="py-4 px-6 text-left font-medium">Subject</th>
                <th className="py-4 px-6 text-left font-medium">Priority</th>
                <th className="py-4 px-6 text-left font-medium">Status</th>
                <th className="py-4 px-6 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  className="border-b last:border-0 hover:bg-black/5 transition"
                >
                  <td className="py-4 px-6 font-semibold">{item.id}</td>
                  <td className="py-4 px-6">{item.date}</td>
                  <td className="py-4 px-6">{item.subject}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.priority === "High"
                          ? "bg-red-100 text-red-600"
                          : item.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full border text-xs font-medium">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="p-1 rounded border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle cx="5" cy="12" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="19" cy="12" r="1.5" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Specializations;
