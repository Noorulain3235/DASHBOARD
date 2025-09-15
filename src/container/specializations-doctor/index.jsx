import React, { useState } from "react";
import { motion } from "framer-motion";

const Specializations = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const specializations = [
    {
      id: 1,
      name: "Cardiology",
      description: "Diagnosis and treatment of heart disorders",
      doctors: 5,
      department: "Internal Medicine",
      status: "Active",
    },
    {
      id: 2,
      name: "Neurology",
      description: "Diagnosis and treatment of disorders of the nervous system",
      doctors: 3,
      department: "Neuroscience",
      status: "Active",
    },
    {
      id: 3,
      name: "Pediatrics",
      description: "Medical care of infants, children, and adolescents",
      doctors: 7,
      department: "Child Health",
      status: "Active",
    },
    {
      id: 4,
      name: "Orthopedics",
      description: "Treatment of the musculoskeletal system",
      doctors: 4,
      department: "Surgery",
      status: "Active",
    },
      {
      id: 5,
      name: "Cardiology",
      description: "Diagnosis and treatment of heart disorders",
      doctors: 5,
      department: "Internal Medicine",
      status: "Active",
    },
    {
      id: 6,
      name: "Neurology",
      description: "Diagnosis and treatment of disorders of the nervous system",
      doctors: 3,
      department: "Neuroscience",
      status: "Active",
    },
    {
      id: 7,
      name: "Pediatrics",
      description: "Medical care of infants, children, and adolescents",
      doctors: 7,
      department: "Child Health",
      status: "Active",
    },
    {
      id: 8,
      name: "Orthopedics",
      description: "Treatment of the musculoskeletal system",
      doctors: 4,
      department: "Surgery",
      status: "Active",
    },
  ];

  const filtered = specializations.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        
        <div>
          <h1 className="text-3xl font-bold">Specializations</h1>
          <p className="opacity-70 mt-2">
            Manage medical specializations in your clinic.
          </p>
        </div>
      </div>

      {/* List Container */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border overflow-hidden"
      >
        {/* List Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-4 border-b">
          <div>
            <h2 className="text-xl font-semibold">Specializations List</h2>
            <p className="opacity-70 text-sm">
              View and manage all medical specializations.
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search specializations..."
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg border"
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
              <span>Add Specialization</span>
            </motion.button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left font-medium">Name</th>
                <th className="py-4 px-6 text-left font-medium">Description</th>
                <th className="py-4 px-6 text-left font-medium">Doctors</th>
                <th className="py-4 px-6 text-left font-medium">Department</th>
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
                  <td className="py-4 px-6 font-semibold">{item.name}</td>
                  <td className="py-4 px-6">{item.description}</td>
                  <td className="py-4 px-6">{item.doctors}</td>
                  <td className="py-4 px-6">{item.department}</td>
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
