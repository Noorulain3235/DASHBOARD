import { motion } from "framer-motion";
import { useState } from "react";

const medicines = [
  { id: "MED001", name: "Amoxicillin 500mg", generic: "Amoxicillin", category: "Antibiotics", stock: 1250, expiry: "2025-06-15", status: "In Stock" },
  { id: "MED002", name: "Paracetamol 500mg", generic: "Acetaminophen", category: "Analgesics", stock: 3500, expiry: "2025-08-22", status: "In Stock" },
  { id: "MED004", name: "Lisinopril 10mg", generic: "Lisinopril", category: "Antihypertensives", stock: 120, expiry: "2024-09-30", status: "Low Stock" },
  { id: "MED005", name: "Morphine 15mg", generic: "Morphine Sulfate", category: "Analgesics", stock: 75, expiry: "2024-11-05", status: "Low Stock" },
  { id: "MED006", name: "Cetirizine 10mg", generic: "Cetirizine HCl", category: "Antihistamines", stock: 0, expiry: "2025-03-18", status: "Out of Stock" },
  { id: "MED007", name: "Atorvastatin 20mg", generic: "Atorvastatin Calcium", category: "Statins", stock: 450, expiry: "2025-01-25", status: "In Stock" },
  { id: "MED008", name: "Diazepam 5mg", generic: "Diazepam", category: "Anxiolytics", stock: 60, expiry: "2024-10-12", status: "Low Stock" },
  { id: "MED009", name: "Ibuprofen 400mg", generic: "Ibuprofen", category: "NSAIDs", stock: 2800, expiry: "2025-05-20", status: "In Stock" },
  { id: "MED010", name: "Omeprazole 20mg", generic: "Omeprazole", category: "Proton Pump Inhibitors", stock: 920, expiry: "2025-02-28", status: "In Stock" },
];

const statusColors = {
  "In Stock": "bg-green-600",
  "Low Stock": "bg-yellow-600",
  "Out of Stock": "bg-red-600",
};

// Animated 3-dot icon using Framer Motion
function MoreDots() {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="inline-block"
    >
      {[5, 12, 19].map((cy, i) => (
        <motion.circle
          key={i}
          cx="12"
          cy={cy}
          r="2"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.3, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.svg>
  );
}

export default function MedicineList() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Get unique categories for dropdown
  const categories = ["All Medicines ", ...new Set(medicines.map((m) => m.category))];
  const statuses = ["All Stock", "In Stock", "Low Stock", "Out of Stock"];

  // Apply filters
  const filteredMedicines = medicines.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "All" ? true : m.status === statusFilter;
    const matchCategory =
      categoryFilter === "All" ? true : m.category === categoryFilter;
    return matchSearch && matchStatus && matchCategory;
  });

  return (
    <div className="min-h-screen w-full  p-4 md:p-8">
      {/* Header */}
      <div className="flex md:flex-row flex-col justify-between items-center mb-6">
        <div>
            <h1 className="text-3xl font-bold">Medicine List</h1>
            <p className="mt-2">Manage and view all medicines in the pharmacy inventory</p>
        </div>
        <button className="px-4 py-2 rounded-lg border border-gray-500 md:mt-0 mt-3 text-sm">
          + Add New Medicine
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
         {
  title: "Total Medicines",
  value: "1,248",
  meta: "+24 added this month",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-capsule text-gray-500 w-7 h-7"
      viewBox="0 0 16 16"
    >
      <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
    </svg>
  ),
},

          { title: "Low Stock Items", value: "42", meta: "Need reordering soon", icon:(
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-exclamation-circle w-8 h-8 text-orange-200" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>
          ), 
          },
          { title: "Expiring Soon", value: "18", meta: "Within next 30 days", icon:(
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-exclamation-circle w-8 h-8 text-red-400" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>
          ),  },
          { title: "Categories", value: "36", meta: "Medicine categories", icon:(
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-box-seam w-8 h-8 text-gray-500" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg>
          ), },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-4 border rounded-xl shadow-sm flex flex-col"
          >
            <div className="flex justify-between">
                <h2 className="text-sm mb-2">{card.title}</h2>
            <span>{card.icon}</span>
            </div>
            <p className="text-xl  md:text-3xl font-bold">{card.value}</p>
            <span className="text-sm text-gray-400 mt-3">{card.meta}</span>
          </motion.div>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search medicines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-lg text-sm w-full md:w-1/3"
        />
        <div className="flex md:flex-row flex-col gap-3">
          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat} className="bg-gray-400" >
                {cat}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm"
          >
            {statuses.map((st, i) => (
              <option key={i} value={st}  className="bg-gray-400" >
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-500 rounded-sm mt-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-left border-b border-gray-500">
              <th className="p-3">ID</th>
              <th className="p-3">Medicine Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Expiry Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((m) => (
              <motion.tr
                key={m.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-500"
              >
                <td className="p-3">{m.id}</td>
                <td className="p-3">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-gray-400">{m.generic}</div>
                </td>
                <td className="p-3">{m.category}</td>
                <td className="p-3">{m.stock} units</td>
                <td className="p-3">{m.expiry}</td>
                <td className="p-3">
                  <span
                    className={`px-4  py-1 rounded-full text-xs text-white ${statusColors[m.status]}`}
                  >
                    {m.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="p-1 rounded hover:bg-gray-200">
                    <MoreDots />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
