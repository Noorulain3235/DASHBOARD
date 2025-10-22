import React from "react";
import { motion } from "framer-motion";

const Invoices = () => {
  const invoices = [
    {
      id: "INV-007",
      patient: "David Miller",
      patientId: "P78901",
      date: "2024-04-20",
      due: "2024-05-20",
      amount: 180,
      balance: 180,
      status: "Unpaid",
      insurance: "Not Submitted",
    },
    {
      id: "INV-005",
      patient: "Michael Johnson",
      patientId: "P56789",
      date: "2024-04-18",
      due: "2024-05-18",
      amount: 450,
      balance: 450,
      status: "Unpaid",
      insurance: "Submitted",
    },
    {
      id: "INV-002",
      patient: "Emily Davis",
      patientId: "P67890",
      date: "2024-04-16",
      due: "2024-05-16",
      amount: 320,
      balance: 320,
      status: "Unpaid",
      insurance: "Pending",
    },
    {
      id: "INV-001",
      patient: "John Smith",
      patientId: "P12345",
      date: "2024-04-15",
      due: "2024-05-15",
      amount: 250,
      balance: 50,
      status: "Partially Paid",
      insurance: "Approved",
    },
    {
      id: "INV-006",
      patient: "Sarah Thompson",
      patientId: "P67890",
      date: "2024-04-12",
      due: "2024-05-12",
      amount: 300,
      balance: 0,
      status: "Paid",
      insurance: "Approved",
    },
    {
      id: "INV-003",
      patient: "Robert Wilson",
      patientId: "P34567",
      date: "2024-04-10",
      due: "2024-05-10",
      amount: 175,
      balance: 0,
      status: "Paid",
      insurance: "Approved",
    },
    {
      id: "INV-004",
      patient: "Jessica Brown",
      patientId: "P45678",
      date: "2024-04-05",
      due: "2024-05-05",
      amount: 520,
      balance: 0,
      status: "Paid",
      insurance: "Approved",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Unpaid":
        return "bg-red-100 text-red-700";
      case "Partially Paid":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getInsuranceStyle = (insurance) => {
    switch (insurance) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Submitted":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-purple-100 text-purple-700";
      case "Not Submitted":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex md:flex-row flex-col justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Invoices</h1>
          <p className="text-sm py-2">Manage billing and invoices for your patients.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-2 md:px-4 md:text-lg text-sm py-2 border rounded-lg">Payments</button>
          <button className="px-2 md:px-4 md:text-lg text-sm py-2 border rounded-lg">Insurance Claims</button>
          <button className="px-2 md:px-4 md:text-lg text-sm py-2 border rounded-lg">+ Create Invoice</button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
        <div className="flex md:flex-row flex-wrap gap-2">
          <button className="px-4 py-2 border rounded-lg">All Invoices</button>
          <button className="px-4 py-2 border rounded-lg">Unpaid</button>
          <button className="px-4 py-2 border rounded-lg">Paid</button>
          <button className="px-4 py-2 border rounded-lg">Partially Paid</button>
        </div>
        <div className="flex md:flex-row flex-col gap-2">
          <input
            type="text"
            placeholder="Search invoices..."
            className="px-3 py-2 border rounded-lg text-sm"
          />
          <button className="px-3 py-2 border rounded-lg">Filter</button>
          <button className="px-3 py-2 border rounded-lg">Export</button>
        </div>
      </div>

      {/* Invoice Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-x-auto border rounded-xl"
      >
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Invoice #</th>
              <th className="px-4 py-2 text-left">Patient</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Balance</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Insurance</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, i) => (
              <motion.tr
                key={invoice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b"
              >
                <td className="px-4 py-3">{invoice.id}</td>
                <td className="px-4 py-3">
                  <div className="font-medium">{invoice.patient}</div>
                  <div className="text-xs">{invoice.patientId}</div>
                </td>
                <td className="px-4 py-3">
                  {invoice.date}
                  <div className="text-xs">Due: {invoice.due}</div>
                </td>
                <td className="px-4 py-3">${invoice.amount}</td>
                <td className="px-4 py-3">${invoice.balance}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getStatusStyle(
                      invoice.status
                    )}`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getInsuranceStyle(
                      invoice.insurance
                    )}`}
                  >
                    {invoice.insurance}
                  </span>
                </td>
                <td className="px-4 py-3">...</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-4 border rounded-lg shadow-sm"
        >
          <h3 className="text-2xl font-bold">Total Outstanding</h3>
          <p className="text-xl font-bold">$1030.00</p>
          <p className="text-xs">From 4 invoices</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-4 border rounded-lg shadow-sm"
        >
          <h3 className="text-2xl font-bold">Paid This Month</h3>
          <p className="text-xl font-bold  mt-3">$1,245.00</p>
          <p className="text-xs  mt-3">+12% from last month</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-4 border rounded-lg shadow-sm"
        >
          <h3 className="text-2xl font-bold">Overdue Invoices</h3>
          <p className="text-xl font-bold  mt-3">4</p>
          <p className="text-xs  mt-3">Total: $980.00</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-4 border rounded-lg shadow-sm"
        >
          <h3 className="text-2xl font-bold">Insurance Claims</h3>
          <p className="text-xl font-bold mt-3">5</p>
          <p className="text-xs  mt-3">Pending: $1,640.00</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Invoices;
