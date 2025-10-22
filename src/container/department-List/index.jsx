import { useState } from "react";
import { motion } from "framer-motion";

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

export default function InvoiceDashboard() {
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All Departments");

    const Invoices = [
        {
            id: "DEP-001",
            name: "Cardiology",
            head: "Dr. Sarah Johnson",
            staff: 25,
            services: "Heart Checkups, ECG, Surgery",
            status: "Active",
        },
        {
            id: "DEP-002",
            name: "Neurology",
            head: "Dr. Michael Brown",
            staff: 18,
            services: "Brain MRI, Stroke Treatment",
            status: "Active",
        },
        {
            id: "DEP-003",
            name: "Dermatology",
            head: "Dr. Emily Davis",
            staff: 12,
            services: "Skin Treatments, Cosmetic Care",
            status: "Inactive",
        },
    ];

    // ✅ Fake categories just for dropdown
    const categories = ["All Departments", "Cardiology", "Radiology", "Orthopedics", "Pediatrics", "Neurology", "Laboratory"];

    // ✅ Apply filters (fixed to match your data)
    const filtered = Invoices.filter(
        (inv) =>
            (categoryFilter === "All Departments" ? true : inv.name.includes(categoryFilter)) &&
            (inv.name.toLowerCase().includes(search.toLowerCase()) ||
                inv.head.toLowerCase().includes(search.toLowerCase()) ||
                inv.id.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="min-h-screen w-full p-4 md:p-8">
            {/* Header */}
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Departments</h1>
                    <p className="mt-2">Manage your clinic's departments and staff assignments</p>
                </div>
                <button className="px-4 py-2 rounded-lg border mt-3 md:mt-0 border-gray-500 text-sm">
                    + Add Department
                </button>
            </div>

            {/* ✅ Stats Boxes (from your original MedicineList) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                    {
                        title: "Total Departments",
                        value: "12",
                        meta: "+2 from last month",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-buildings text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                            </svg>
                        ),
                    },
                    {
                        title: "Total Staff",
                        value: "48",
                        meta: "+5 from last month",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                        ),
                    },
                    {
                        title: "Services Offered",
                        value: "86",
                        meta: "+12 from last month",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-currency-dollar text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                            </svg>
                        ),
                    },
                    {
                        title: "Most Popular",
                        value: "General Checkup",
                        meta: "248 appointments this month",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-calendar-event text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                            </svg>
                        ),
                    },
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border rounded-xl shadow-sm flex flex-col"
                    >
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                            <span>{card.icon}</span>
                        </div>
                        <p className="text-xl md:text-3xl font-bold">{card.value}</p>
                        <span className="text-sm text-gray-400 mt-3">{card.meta}</span>
                    </motion.div>
                ))}
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded-lg text-sm w-full md:w-1/3"
                />
                <div className="flex gap-3">
                    {/* Department Filter */}
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="border px-3 py-2 rounded-lg text-sm"
                    >
                        {categories.map((cat, i) => (
                            <option key={i} value={cat} className="bg-gray-400">
                                {cat}
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
                            <th className="p-3">Department Name</th>
                            <th className="p-3">Head of Department</th>
                            <th className="p-3">Staff Count</th>
                            <th className="p-3">Services</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center p-4">
                                    No Department found.
                                </td>
                            </tr>
                        ) : (
                            filtered.map((inv) => (
                                <motion.tr
                                    key={inv.id}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-b border-gray-500"
                                >
                                    <td className="p-3">{inv.name}</td>
                                    <td className="p-3">{inv.head}</td>
                                    <td className="p-3">{inv.staff}</td>
                                    <td className="p-3">{inv.services}</td>
                                    <td className="p-3">{inv.status}</td>
                                    <td className="p-3">
                                        <button className="p-1 rounded hover:bg-gray-200">
                                            <MoreDots />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
