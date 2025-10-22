import React from "react";
import { motion } from "framer-motion";

const IssuedBlood = () => {
  const stats = [
    {
      title: "Total Units Issued",
      value: "19",
      meta: "+14 from last month",
    },
    {
      title: "Issued This Month",
      value: "32",
      meta: "+3 compared to last month",
    },
    {
      title: "Emergency Issues",
      value: "2",
      meta: "Critical situations handled",
    },
    {
      title: "Cross-Matched Units",
      value: "13",
      meta: "Compatibility verified",
    },
  ];

  const issuesByBloodType = [
    { type: "A+", units: 2, color: "bg-red-400" },
    { type: "A-", units: 1, color: "bg-red-800" },
    { type: "AB+", units: 2, color: "bg-purple-400" },
    { type: "AB-", units: 1, color: "bg-purple-800" },
    { type: "B+", units: 3, color: "bg-blue-500" },
    { type: "B-", units: 1, color: "bg-blue-800" },
    { type: "O+", units: 8, color: "bg-green-500" },
    { type: "O-", units: 1, color: "bg-green-800" },
  ];

  const issuesByDepartment = [
    { dept: "External", units: 6, color: "bg-blue-500" },
    { dept: "Emergency", units: 5, color: "bg-green-500" },
    { dept: "Surgery", units: 2, color: "bg-yellow-500" },
    { dept: "Cardiology", units: 2, color: "bg-red-400" },
    { dept: "Internal Medicine", units: 1, color: "bg-purple-500" },
    { dept: "Obstetrics", units: 1, color: "bg-pink-400" },
    { dept: "Oncology", units: 1, color: "bg-indigo-500" },
    { dept: "Nephrology", units: 1, color: "bg-teal-500" },
  ];

  const tableData = [
    {
      id: "ISS-2023-001",
      recipient: "John Smith",
      patientId: "PT-10045",
      blood: "O+",
      units: "2",
      issueDate: "2023-04-15 09:30 AM",
      doctor: "Dr. Sarah Johnson",
      color: "bg-green-500",
    },
    {
      id: "ISS-2023-002",
      recipient: "Emily Davis",
      patientId: "PT-10089",
      blood: "A-",
      units: "1",
      issueDate: "2023-04-16 02:15 PM",
      doctor: "Dr. Michael Chen",
      color: "bg-red-800",
    },
    {
      id: "ISS-2023-003",
      recipient: "Robert Wilson",
      patientId: "PT-10124",
      blood: "B+",
      units: "3",
      issueDate: "2023-04-17 11:45 AM",
      doctor: "Dr. Lisa Patel",
      color: "bg-blue-500",
    },
    {
      id: "ISS-2023-004",
      recipient: "City Hospital",
      patientId: "EXT-0093",
      blood: "AB+",
      units: "2",
      issueDate: "2023-04-18 10:00 AM",
      doctor: "Dr. James Wilson",
      color: "bg-purple-500",
    },
    {
      id: "ISS-2023-006",
      recipient: "James Brown",
      patientId: "PT-10178",
      blood: "A+",
      units: "2",
      issueDate: "2023-04-20 08:45 AM",
      doctor: "Dr. Emily White",
      color: "bg-red-400",
    },
    {
      id: "ISS-2023-007",
      recipient: "Linda Martinez",
      patientId: "PT-10203",
      blood: "B-",
      units: "1",
      issueDate: "2023-04-21 01:30 PM",
      doctor: "Dr. Robert Lee",
      color: "bg-blue-800",
    },
    {
      id: "ISS-2023-008",
      recipient: "County Medical Center",
      patientId: "EXT-0045",
      blood: "O+",
      units: "4",
      issueDate: "2023-04-22 09:15 AM",
      doctor: "Dr. Thomas Brown",
      color: "bg-green-500",
    },
    {
      id: "ISS-2023-009",
      recipient: "William Taylor",
      patientId: "PT-10234",
      blood: "AB-",
      units: "2",
      issueDate: "2023-04-23 11:00 AM",
      doctor: "Dr. Jennifer Garcia",
      color: "bg-purple-800",
    },
    {
      id: "ISS-2023-010",
      recipient: "Sarah Johnson",
      patientId: "PT-10267",
      blood: "O+",
      units: "2",
      issueDate: "2023-04-24 02:45 PM",
      doctor: "Dr. Mark Wilson",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Issued Blood</h1>
          <p className="mt-2 text-sm">
            Manage issued blood units and track transfusions.
          </p>
        </div>
        <button className="mt-4 md:mt-0 px-4 py-2 border-gray-400 border rounded-lg">
          + Issue Blood
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 border rounded-xl shadow-sm"
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="text-2xl font-bold mt-2">{s.value}</p>
            <p className="text-sm mt-1">{s.meta}</p>
          </motion.div>
        ))}
      </div>

      {/* Issues by Blood Type & Department */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Blood Types */}
        <div className="p-4 border rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-8">Issues by Blood Type</h2>
          <div className="space-y-6">
            {issuesByBloodType.map((b, i) => (
              <div key={i} className="flex items-center space-x-3">
                <span className="w-10">{b.type}</span>
                <div className="flex-1 bg-gray-200 h-3 rounded-full">
                  <div
                    className={`${b.color} h-3 rounded-full`}
                    style={{ width: `${b.units * 10}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm">{b.units} units</span>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="p-4 sm:p-6 border rounded-xl shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Issues by Department</h2>
          <div className="space-y-4 sm:space-y-6">
            {issuesByDepartment.map((d, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0"
              >
                {/* Department Name */}
                <span className="w-full sm:w-32 text-sm sm:text-base font-medium text-gray-700">
                  {d.dept}
                </span>

                {/* Progress Bar */}
                <div className="flex-1 bg-gray-200 h-2 sm:h-3 md:h-4 rounded-full">
                  <div
                    className={`${d.color} h-2 sm:h-3 md:h-4 rounded-full transition-all duration-500`}
                    style={{ width: `${d.units * 10}%` }}
                  ></div>
                </div>

                {/* Units */}
                <span className="text-xs sm:text-sm md:text-base text-gray-600 text-right min-w-fit">
                  {d.units} units
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center mb-6">
        <input
          type="text"
          placeholder="Search issuances..."
          className="border px-3 py-2 rounded-lg text-sm w-full md:w-64"
        />
        <select className="border px-3 py-2 rounded-lg text-sm">
          <option className="bg-gray-400">All Blood Types</option>
          <option className="bg-gray-400">O+</option>
          <option className="bg-gray-400">O-</option>
          <option className="bg-gray-400" >AB+</option>
          <option className="bg-gray-400">AB-</option>
          <option className="bg-gray-400">A+</option>
          <option className="bg-gray-400">A-</option>
          <option className="bg-gray-400">B+</option>
          <option className="bg-gray-400">B-</option>
        </select>
        <select className="border px-3 py-2 rounded-lg text-sm">
          <option className="bg-gray-400">All Statuses</option>
          <option className="bg-gray-400">Eligible</option>
          <option className="bg-gray-400">Ineligible</option>
          <option className="bg-gray-400">New Donor</option>
        </select>

        <button className="px-3 py-2 border rounded-lg">Refresh</button>
        <button className="px-3 py-2 border rounded-lg">Export</button>
      </div>

      {/* Tabs */}
      <div className="flex md:flex-row flex-wrap gap-4 mb-4 ">
        <button className="pb-2  font-medium bg-gray-500 rounded-sm py-1 hover:bg-gray-400   px-3">
          All Issues
        </button>
        <button className="pb-2 bg-gray-500 rounded-sm py-1 hover:bg-gray-400  px-3">Patient</button>
        <button className="pb-2 bg-gray-500 rounded-sm py-1 hover:bg-gray-400  px-3">External</button>
        <button className="pb-2 bg-gray-500 rounded-sm py-1 hover:bg-gray-400  px-3">Emergency</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow border border-gray-600">
        <table className="w-full text-sm text-left">
          <thead className="border-b border-gray-500">
            <tr>
              <th className="p-3">Issue ID</th>
              <th className="p-3">Recipient</th>
              <th className="p-3">Blood Type</th>
              <th className="p-3">Issue Date</th>
              <th className="p-3">Requesting Doctor</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-gray-500">
                <td className="p-3">{row.id}</td>
                <td className="p-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    {row.recipient[0]}
                  </div>
                  <div>
                    <p className="font-medium">{row.recipient}</p>
                    <p className="text-xs text-gray-500">{row.patientId}</p>
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs ${row.color}`}
                  >
                    {row.blood}
                  </span>{" "}
                  {row.units} unit(s)
                </td>
                <td className="p-3">{row.issueDate}</td>
                <td className="p-3">{row.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-3 text-sm text-gray-500">
          Showing {tableData.length} of {tableData.length} issuances
        </div>
      </div>
    </div>
  );
};

export default IssuedBlood;
