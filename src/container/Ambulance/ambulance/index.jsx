import React, { useState } from "react";
import { motion } from "framer-motion";

const calls = [
  { id: "AC001", date: "2023-04-22 08:30 AM", patient: "John Doe", phone: "+1 (555) 123-4567", location: "123 Main St, Anytown", reason: "Chest Pain", status: "Completed", ambulance: "AMB-01" },
  { id: "AC002", date: "2023-04-22 09:45 AM", patient: "Jane Smith", phone: "+1 (555) 987-6543", location: "456 Oak Ave, Somewh...", reason: "Traffic Accident", status: "In Progress", ambulance: "AMB-02" },
  { id: "AC003", date: "2023-04-22 11:15 AM", patient: "Emily Johnson", phone: "+1 (555) 456-7890", location: "789 Pine Rd, Elsewhere", reason: "Difficulty Breathing", status: "Pending", ambulance: "AMB-03" },
  { id: "AC004", date: "2023-04-21 02:30 PM", patient: "David Brown", phone: "+1 (555) 234-5678", location: "321 Elm St, Nowhere", reason: "Fall Injury", status: "Completed", ambulance: "AMB-04" },
  { id: "AC005", date: "2023-04-21 05:00 PM", patient: "Lisa Garcia", phone: "+1 (555) 876-5432", location: "654 Maple Dr, Anytown", reason: "Stroke Symptoms", status: "Completed", ambulance: "AMB-05" },
  { id: "AC006", date: "2023-04-22 08:30 AM", patient: "John Doe", phone: "+1 (555) 123-4567", location: "123 Main St, Anytown", reason: "Chest Pain", status: "Completed", ambulance: "AMB-01" },
  { id: "AC007", date: "2023-04-22 09:45 AM", patient: "Jane Smith", phone: "+1 (555) 987-6543", location: "456 Oak Ave, Somewh...", reason: "Traffic Accident", status: "In Progress", ambulance: "AMB-02" },
  { id: "AC008", date: "2023-04-22 11:15 AM", patient: "Emily Johnson", phone: "+1 (555) 456-7890", location: "789 Pine Rd, Elsewhere", reason: "Difficulty Breathing", status: "Pending", ambulance: "AMB-03" },
  { id: "AC009", date: "2023-04-21 02:30 PM", patient: "David Brown", phone: "+1 (555) 234-5678", location: "321 Elm St, Nowhere", reason: "Fall Injury", status: "Completed", ambulance: "AMB-04" },
  { id: "AC0011", date: "2023-04-21 05:00 PM", patient: "Lisa Garcia", phone: "+1 (555) 876-5432", location: "654 Maple Dr, Anytown", reason: "Stroke Symptoms", status: "Completed", ambulance: "AMB-05" }
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
            <h1 className="text-3xl font-bold">Ambulance Call List</h1>
            <p className="mt-1 text-sm">Manage and track all ambulance calls and dispatches</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg ring-1 font-medium">+
              <span className="whitespace-nowrap">New Ambulance Call</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Calls" value="127" meta="+5.2% from last month" 
         icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16"><path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>} />
        <StatCard title="Active Calls" value="3" meta="2 pending, 1 in progress"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>} />
        <StatCard title="Average Response Time" value="8.5 min" meta="-1.2 min from last month" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} />
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
              {["All", "Pending", "In Progress", "Completed"].map((status) => (
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
