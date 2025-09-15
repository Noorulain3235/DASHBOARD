import React, { useState } from "react";
import { motion } from "framer-motion";

const DoctorsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      status: "Active",
      patients: 120,
      experience: "8 years",
      email: "sarah.johnson@medixpro.com",
      phone: "+1 (555) 123-4567",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      status: "Active",
      patients: 85,
      experience: "12 years",
      email: "michael.chen@medixpro.com",
      phone: "+1 (555) 234-5678",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Dr. Lisa Patel",
      specialty: "Pediatrics",
      status: "Inactive",
      patients: 150,
      experience: "10 years",
      email: "lisa.patel@medixpro.com",
      phone: "+1 (555) 345-6789",
      avatar:
        "https://images.unsplash.com/photo-1594824804732-5b5d6b95b77f?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      status: "Active",
      patients: 95,
      experience: "15 years",
      email: "james.wilson@medixpro.com",
      phone: "+1 (555) 456-7890",
      avatar:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      status: "Active",
      patients: 75,
      experience: "6 years",
      email: "emily.rodriguez@medixpro.com",
      phone: "+1 (555) 567-8901",
      avatar:
        "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Dr. David Kim",
      specialty: "Psychiatry",
      status: "Active",
      patients: 110,
      experience: "9 years",
      email: "david.kim@medixpro.com",
      phone: "+1 (555) 678-9012",
      avatar:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Doctors</h1>
            <p className="opacity-70">
              Manage your medical staff and their information.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:border-white/30 transition-colors"
          >
            {/* Plus Icon */}
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
            <span>Add Doctor</span>
          </motion.button>
        </div>

        {/* Doctors List Section */}
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
                <h2 className="text-xl font-semibold mb-1">Doctors List</h2>
                <p className="opacity-70 text-sm">
                  A list of all doctors in your clinic with their details.
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
                    placeholder="Search doctors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm focus:border-white/20 focus:outline-none transition-colors w-full sm:w-64"
                  />
                </div>

                {/* Filter + Download */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeWidth="2" d="M4 6h16M6 12h12m-8 6h4" />
                    </motion.svg>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                      />
                    </motion.svg>
                  </motion.button>
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
                  <th className="text-left py-4 px-6 font-medium opacity-70">Specialty</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Status</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Patients</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Experience</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Contact</th>
                  <th className="text-left py-4 px-6 font-medium opacity-70">Actions</th>
                </tr>
              </thead>

              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hidden lg:table-row-group"
              >
                {filteredDoctors.map((doctor) => (
                  <motion.tr
                    key={doctor.id}
                    variants={itemVariants}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={doctor.avatar}
                          alt={doctor.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium">{doctor.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{doctor.specialty}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          doctor.status === "Active"
                            ? "bg-green-500/20 border border-green-500/30"
                            : "bg-orange-500/20 border border-orange-500/30"
                        }`}
                      >
                        {doctor.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">{doctor.patients}</td>
                    <td className="py-4 px-6">{doctor.experience}</td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="text-sm">{doctor.email}</div>
                        <div className="text-sm opacity-70">{doctor.phone}</div>
                      </div>
                    </td>
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
              {filteredDoctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  variants={itemVariants}
                  className="border border-white/10 rounded-xl p-4 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={doctor.avatar}
                        alt={doctor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{doctor.name}</h3>
                        <p className="text-sm opacity-70">{doctor.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          doctor.status === "Active"
                            ? "bg-green-500/20 border border-green-500/30"
                            : "bg-orange-500/20 border border-orange-500/30"
                        }`}
                      >
                        {doctor.status}
                      </span>
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
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="opacity-70">Patients:</span>
                      <span className="ml-2 font-medium">{doctor.patients}</span>
                    </div>
                    <div>
                      <span className="opacity-70">Experience:</span>
                      <span className="ml-2 font-medium">{doctor.experience}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 space-y-1 text-sm">
                    <div>{doctor.email}</div>
                    <div className="opacity-70">{doctor.phone}</div>
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

export default DoctorsManagement;
