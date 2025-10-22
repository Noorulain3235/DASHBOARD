import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Blood Units",
      value: "50",
      meta: "Units available across all blood types",
      icon:(<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-plus-lg w-12 h-7  text-red-400" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>),
    },
    {
      title: "Blood Type Distribution",
      value: "A+: 12",
      meta: "Distribution of all blood types",
      icon: (<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-plus-lg w-12 h-7  text-red-400" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>),
    },
    {
      title: "Expiring Soon",
      value: "10",
      meta: "Units expiring within the next 7 days",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-exclamation-circle w-8 h-8 text-orange-300" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>),
    },
    {
      title: "Critical Levels",
      value: "2",
      meta: "Blood types with critically low inventory",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-exclamation-circle w-8 h-8 text-red-400" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>),
    },
  ];

  const bloodLevels = [
    { type: "A+", units: 12, color: "bg-green-500" },
    { type: "A-", units: 4, color: "bg-orange-400" },
    { type: "B+", units: 8, color: "bg-green-500" },
    { type: "B-", units: 2, color: "bg-red-500" },
    { type: "AB+", units: 3, color: "bg-orange-400" },
    { type: "AB-", units: 1, color: "bg-red-500" },
    { type: "O+", units: 15, color: "bg-green-500" },
    { type: "O-", units: 5, color: "bg-green-500" },
  ];

  const tableData = [
    {
      id: "BS-001",
      type: "A+",
      units: 12,
      collection: "2023-04-15",
      expiry: "2023-05-15",
      status: "Available",
      statusColor: "bg-green-500",
      location: "Refrigerator 1",
      donor: "John Smith",
    },
    {
      id: "BS-003",
      type: "B+",
      units: 8,
      collection: "2023-04-10",
      expiry: "2023-05-10",
      status: "Expiring Soon",
      statusColor: "bg-orange-400",
      location: "Refrigerator 1",
      donor: "Michael Brown",
    },
    {
      id: "BS-004",
      type: "AB+",
      units: 3,
      collection: "2023-04-12",
      expiry: "2023-05-12",
      status: "Expiring Soon",
      statusColor: "bg-orange-400",
      location: "Refrigerator 3",
      donor: "Sarah Davis",
    },
    {
      id: "BS-005",
      type: "A-",
      units: 4,
      collection: "2023-04-14",
      expiry: "2023-05-14",
      status: "Available",
      statusColor: "bg-green-500",
      location: "Refrigerator 2",
      donor: "Robert Wilson",
    },
    {
      id: "BS-006",
      type: "O+",
      units: 15,
      collection: "2023-04-13",
      expiry: "2023-05-13",
      status: "Available",
      statusColor: "bg-green-500",
      location: "Refrigerator 1",
      donor: "Jennifer Taylor",
    },
    {
      id: "BS-007",
      type: "B-",
      units: 2,
      collection: "2023-04-08",
      expiry: "2023-05-08",
      status: "Expiring Soon",
      statusColor: "bg-orange-400",
      location: "Refrigerator 3",
      donor: "David Martinez",
    },
    {
      id: "BS-008",
      type: "AB-",
      units: 1,
      collection: "2023-04-11",
      expiry: "2023-05-11",
      status: "Reserved",
      statusColor: "bg-gray-400",
      location: "Refrigerator 2",
      donor: "Lisa Anderson",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold">Blood Stock</h1>
      <p className="mt-3 mb-6">
        Manage and monitor blood inventory in the blood bank
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-4 rounded-xl shadow border flex flex-col"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-2xl">{item.title}</h2>
              <span className="text-xl">{item.icon}</span>
            </div>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
            <p className="text-sm mt-2">{item.meta}</p>
          </motion.div>
        ))}
      </div>

      {/* Blood Type Availability */}
      <div className="p-4 rounded-xl shadow border border-gray-500 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Blood Type Availability</h2>
        <p>Current inventory levels for each blood type</p>
        <div className="space-y-3">
          {bloodLevels.map((b, i) => (
            <div key={i} className="flex items-center mt-9 space-x-2">
              <span className="w-10 font-medium">{b.type}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div
                  className={`${b.color} h-3 rounded-full`}
                  style={{ width: `${b.units * 5}%` }}
                ></div>
              </div>
              <span className="w-12 text-sm">{b.units} units</span>
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow border border-gray-500">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-500">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Blood Type</th>
              <th className="p-3">Units</th>
              <th className="p-3">Collection Date</th>
              <th className="p-3">Expiry Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Location</th>
              <th className="p-3">Donor</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-gray-500">
                <td className="p-3 text-blue-400 font-medium">{row.id}</td>
                <td className="p-3">{row.type}</td>
                <td className="p-3">{row.units}</td>
                <td className="p-3">{row.collection}</td>
                <td className="p-3">{row.expiry}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-3">{row.location}</td>
                <td className="p-3">{row.donor}</td>
                <td className="p-3">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
