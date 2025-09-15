import React, { useState } from "react";
import { motion } from "framer-motion";

const calls = [
  { id: "AC001", date: "2023-04-22 08:30 AM", patient: "John Doe", phone: "+1 (555) 123-4567", location: "123 Main St, Anytown", reason: "Chest Pain", status: "On Call", ambulance: "AMB-01" },
  { id: "AC002", date: "2023-04-22 09:45 AM", patient: "Jane Smith", phone: "+1 (555) 987-6543", location: "456 Oak Ave, Somewh...", reason: "Traffic Accident", status: "Avilable", ambulance: "AMB-02" },
  { id: "AC003", date: "2023-04-22 11:15 AM", patient: "Emily Johnson", phone: "+1 (555) 456-7890", location: "789 Pine Rd, Elsewhere", reason: "Difficulty Breathing", status: "On Call", ambulance: "AMB-03" },
  { id: "AC004", date: "2023-04-21 02:30 PM", patient: "David Brown", phone: "+1 (555) 234-5678", location: "321 Elm St, Nowhere", reason: "Fall Injury", status: "Maintenance", ambulance: "AMB-04" },
  { id: "AC005", date: "2023-04-21 05:00 PM", patient: "Lisa Garcia", phone: "+1 (555) 876-5432", location: "654 Maple Dr, Anytown", reason: "Stroke Symptoms", status: "Maintenance", ambulance: "AMB-05" },
  { id: "AC006", date: "2023-04-22 08:30 AM", patient: "John Doe", phone: "+1 (555) 123-4567", location: "123 Main St, Anytown", reason: "Chest Pain", status: "Avilable", ambulance: "AMB-01" },
  { id: "AC007", date: "2023-04-22 09:45 AM", patient: "Jane Smith", phone: "+1 (555) 987-6543", location: "456 Oak Ave, Somewh...", reason: "Traffic Accident", status: "Avilable", ambulance: "AMB-02" },
  { id: "AC008", date: "2023-04-22 11:15 AM", patient: "Emily Johnson", phone: "+1 (555) 456-7890", location: "789 Pine Rd, Elsewhere", reason: "Difficulty Breathing", status: "On Call", ambulance: "AMB-03" },
  { id: "AC009", date: "2023-04-21 02:30 PM", patient: "David Brown", phone: "+1 (555) 234-5678", location: "321 Elm St, Nowhere", reason: "Fall Injury", status: "Maintenance", ambulance: "AMB-04" },
  { id: "AC0011", date: "2023-04-21 05:00 PM", patient: "Lisa Garcia", phone: "+1 (555) 876-5432", location: "654 Maple Dr, Anytown", reason: "Stroke Symptoms", status: "Maintenance", ambulance: "AMB-05" }
];

const StatCard = ({ title, value, meta, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="flex-1 p-4 rounded-2xl border shadow-sm"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-lg font-semibold leading-tight">{title}</div>
        <div className="mt-2 text-3xl font-bold">{value}</div>
        {meta ? <div className="mt-1 text-sm">{meta}</div> : null}
      </div>
      <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg ring-1">{icon}</div>
    </div>
  </motion.div>
);

export default function AmbulanceCallList() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // 🔹 Filter calls
  const filteredCalls = calls.filter((c) => {
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    const matchesSearch =
      c.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // 🔹 Pagination
  const totalPages = Math.ceil(filteredCalls.length / rowsPerPage);
  const paginatedCalls = filteredCalls.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="max-w-[1100px] mx-auto p-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Ambulance List</h1>
            <p className="mt-1 text-sm">Manage and track all ambulances in the fleet</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg ring-1 font-medium">+
              <span className="whitespace-nowrap">Add New Ambulance </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Ambulances " value="7" meta="+1 from last month" 
         icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16"><path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>} />
        <StatCard title="Available Ambulances" value="4" meta="2 on call, 1 in maintenance"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16">
  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276"/>
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z"/>
</svg>} />
        <StatCard title="Maintenance Due" value="2" meta="Next scheduled: May 20, 2023" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
  <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61"/>
  <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>} />
      </div>

      {/* Calls section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="rounded-2xl border p-4">
        <div className="flex items-center justify-between mb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                placeholder="Search calls..."
                className="px-4 py-2 rounded-lg w-64 ring-1 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              {["All", "Available", "On Call", "Maintenance"].map((status) => (
                <button
                  key={status}
                  onClick={() => { setStatusFilter(status); setPage(1); }}
                  className={`px-3 py-2 rounded-lg ring-1 ${statusFilter === status ? "font-bold" : ""}`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select className="px-3 py-2 rounded-lg ring-1">
              <option className="bg-gray-400">All Statuses</option>
              <option className="bg-gray-400">Pending</option>
              <option className="bg-gray-400">In Progress</option>
            </select>
            <select className="px-3 py-2 rounded-lg ring-1">
              <option className="bg-gray-400">Today</option>
              <option className="bg-gray-400">Yesterday</option>
              <option className="bg-gray-400">This Week</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-3">Call ID</th>
                <th className="px-4 py-3">Date & Time</th>
                <th className="px-4 py-3">Patient</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Reason</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Ambulance</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {paginatedCalls.map((c) => (
                <motion.tr key={c.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
                  <td className="px-4 py-3 font-medium">{c.id}</td>
                  <td className="px-4 py-3 text-sm">{c.date}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{c.patient}</div>
                    <div className="text-xs">{c.phone}</div>
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate">{c.location}</td>
                  <td className="px-4 py-3">{c.reason}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full ring-1 text-sm">{c.status}</span>
                  </td>
                  <td className="px-4 py-3 text-sm">{c.ambulance}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            className="px-3 py-2 rounded-lg ring-1"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <div className="px-3 py-2 rounded-lg ring-1">{page}</div>
          <button
            className="px-3 py-2 rounded-lg ring-1"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
}
