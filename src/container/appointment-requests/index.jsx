import React, { useState } from "react";
import { motion } from "framer-motion";

const PatientsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

const patients = [
  {
    id: 1,
    name: "John Smith",
    Age: "34 / Male",
    status: "Normal",
    LastVisit: "2023-06-15",
    Condition: "Check-up",
    Doctor: "Dr. Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Emma Davis",
    Age: "28 / Female",
    status: "High",
    LastVisit: "2023-07-20",
    Condition: "Consultation",
    Doctor: "Dr. Michael Chen",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Robert Brown",
    Age: "45 / Male",
    status: "Normal",
    LastVisit: "2023-08-05",
    Condition: "Check-up",
    Doctor: "Dr. Lisa Patel",
    avatar: "https://images.unsplash.com/photo-1594824804732-5b5d6b95b77f?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sophia Miller",
    Age: "52 / Female",
    status: "High",
    LastVisit: "2023-09-12",
    Condition: "Consultation",
    Doctor: "Dr. James Wilson",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "David Johnson",
    Age: "39 / Male",
    status: "Low",
    LastVisit: "2023-10-03",
    Condition: "Check-up",
    Doctor: "Dr. Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    Age: "30 / Female",
    status: "Low",
    LastVisit: "2023-10-20",
    Condition: "Check-up",
    Doctor: "Dr. David Kim",
    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "Daniel Lee",
    Age: "27 / Male",
    status: "Normal",
    LastVisit: "2023-11-01",
    Condition: "Check-up",
    Doctor: "Dr. James Wilson",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 8,
    name: "Isabella Taylor",
    Age: "41 / Female",
    status: "Normal",
    LastVisit: "2023-11-12",
    Condition: "Consultation",
    Doctor: "Dr. Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 9,
    name: "James Anderson",
    Age: "63 / Male",
    status: "High",
    LastVisit: "2023-11-25",
    Condition: "Check-up",
    Doctor: "Dr. Michael Chen",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 10,
    name: "Mia Thompson",
    Age: "22 / Female",
    status: "Normal",
    LastVisit: "2023-12-01",
    Condition: "Consultation",
    Doctor: "Dr. David Kim",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 11,
    name: "William Scott",
    Age: "55 / Male",
    status: "Normal",
    LastVisit: "2023-12-10",
    Condition: "Consultation",
    Doctor: "Dr. Lisa Patel",
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 12,
    name: "Charlotte White",
    Age: "37 / Female",
    status: "Normal",
    LastVisit: "2023-12-18",
    Condition: "Check-up",
    Doctor: "Dr. Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 13,
    name: "Benjamin Harris",
    Age: "49 / Male",
    status: "High",
    LastVisit: "2024-01-05",
    Condition: "Consultation",
    Doctor: "Dr. Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328f9f8a?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 14,
    name: "Amelia Clark",
    Age: "32 / Female",
    status: "Low",
    LastVisit: "2024-01-18",
    Condition: "Check-up",
    Doctor: "Dr. Michael Chen",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 15,
    name: "Henry Lewis",
    Age: "46 / Male",
    status: "High",
    LastVisit: "2024-02-01",
    Condition: "Check-up",
    Doctor: "Dr. James Wilson",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 16,
    name: "Grace Walker",
    Age: "29 / Female",
    status: "High",
    LastVisit: "2024-02-10",
    Condition: "Check-up",
    Doctor: "Dr. Lisa Patel",
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 17,
    name: "Ethan Young",
    Age: "36 / Male",
    status: "Normal",
    LastVisit: "2024-02-22",
    Condition: "Check-up",
    Doctor: "Dr. David Kim",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&crop=face",
  },
];


  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.Condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.Doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Appointment Requests</h1>
            <p className="opacity-70">
            Manage patient appointment requests.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:border-white/30 transition-colors"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ rotate: 90 }}
            >
              <path strokeWidth="2" d="M12 4v16m8-8H4" />
            </motion.svg>
            <span>Add Appointments</span>
          </motion.button>
        </div>

        {/* Patients List Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Section Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">Pending Appointment Requests</h2>
                <p className="opacity-70 text-sm">
                  Review and process incoming appointment requests.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                {/* Search */}
                <div className="relative">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                  </motion.svg>
                  <input
                    type="text"
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm focus:border-white/20 focus:outline-none transition-colors w-full sm:w-64"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="hidden lg:table-header-group">
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 font-medium opacity-70">Name</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Age/Gender</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Urgency</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Preferred Date</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Type</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Requested Doctor</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Actions</th>
                </tr>
              </thead>

              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hidden lg:table-row-group"
              >
                {filteredPatients.map((p) => (
                  <motion.tr
                    key={p.id}
                    variants={itemVariants}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.avatar}
                          alt={p.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{p.Age}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          p.status === "Active"
                            ? "bg-green-500/20 border border-green-500/30"
                            : "bg-orange-500/20 border border-orange-500/30"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">{p.LastVisit}</td>
                    <td className="py-4 px-6">{p.Condition}</td>
                    <td className="py-4 px-6">{p.Doctor}</td>
                    <td className="py-4 px-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 rounded hover:bg-white/10 transition-colors"
                      >
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <circle cx="5" cy="12" r="1.5" />
                          <circle cx="12" cy="12" r="1.5" />
                          <circle cx="19" cy="12" r="1.5" />
                        </motion.svg>
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>

            {/* Mobile Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:hidden space-y-4 p-4"
            >
              {filteredPatients.map((p) => (
                <motion.div
                  key={p.id}
                  variants={itemVariants}
                  className="border border-white/10 rounded-xl p-4 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{p.name}</h3>
                        <p className="text-sm opacity-70">{p.Age}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        p.status === "Active"
                          ? "bg-green-500/20 border border-green-500/30"
                          : "bg-orange-500/20 border border-orange-500/30"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="opacity-70">Condition:</span>
                      <span className="ml-2 font-medium">{p.Condition}</span>
                    </div>
                    <div>
                      <span className="opacity-70">Last Visit:</span>
                      <span className="ml-2 font-medium">{p.LastVisit}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 text-sm">
                    <span className="opacity-70">Doctor: </span>
                    {p.Doctor}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PatientsManagement;
