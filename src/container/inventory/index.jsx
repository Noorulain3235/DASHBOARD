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
    const [categoryFilter, setCategoryFilter] = useState("All Categories");

    const inventoryItems = [
        {
            id: "INV001",
            name: "Disposable Gloves (Box)",
            category: "Medical Supplies",
            stock: "45 / 20",
            status: "In Stock",
            lastUpdated: "2023-04-15",
        },
        {
            id: "INV002",
            name: "Ibuprofen 200mg",
            category: "Medications",
            stock: "12 / 15",
            status: "Low Stock",
            lastUpdated: "2023-04-14",
        },
        {
            id: "INV003",
            name: "Blood Pressure Monitor",
            category: "Equipment",
            stock: "5 / 3",
            status: "In Stock",
            lastUpdated: "2023-04-10",
        },
        {
            id: "INV004",
            name: "Surgical Masks (Box)",
            category: "Medical Supplies",
            stock: "0 / 10",
            status: "Out of Stock",
            lastUpdated: "2023-04-17",
        },
        {
            id: "INV006",
            name: "Syringes 5ml",
            category: "Medical Supplies",
            stock: "120 / 50",
            status: "In Stock",
            lastUpdated: "2023-04-11",
        },
        {
            id: "INV007",
            name: "Examination Table Paper",
            category: "Medical Supplies",
            stock: "3 / 5",
            status: "Low Stock",
            lastUpdated: "2023-04-09",
        },
        {
            id: "INV008",
            name: "Digital Thermometer",
            category: "Equipment",
            stock: "15 / 5",
            status: "In Stock",
            lastUpdated: "2023-04-08",
        },
        {
            id: "INV009",
            name: "Alcohol Swabs (Box)",
            category: "Medical Supplies",
            stock: "25 / 20",
            status: "On Order",
            lastUpdated: "2023-04-07",
        },
        {
            id: "INV010",
            name: "Paracetamol 500mg",
            category: "Medications",
            stock: "60 / 30",
            status: "In Stock",
            lastUpdated: "2023-04-06",
        },
        {
            id: "INV011",
            name: "Stethoscope",
            category: "Equipment",
            stock: "8 / 5",
            status: "In Stock",
            lastUpdated: "2023-04-05",
        },
        {
            id: "INV012",
            name: "Bandages (Pack)",
            category: "Medical Supplies",
            stock: "35 / 20",
            status: "In Stock",
            lastUpdated: "2023-04-04",
        },
    ];

    const categories = ["All Categories", "Medications", "Medical Supplies", "Equipment"];

    const filtered = inventoryItems.filter(
        (item) =>
            (categoryFilter === "All Categories" ? true : item.category === categoryFilter) &&
            (item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="min-h-screen w-full p-4 md:p-8">
            {/* Header */}
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Inventory Management</h1>
                    <p className="mt-2">Manage your clinic's inventory, supplies, and equipment</p>
                </div>
                <button className="px-4 py-2 rounded-lg border md:mt-0 mt-3 border-gray-500 text-sm">
                    + Add Item
                </button>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                    {
                        title: "Total Items",
                        value: "1,284",
                        meta: "+24 items added this month",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-seam text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M8.186 1.113v12.016a.5.5 0 0 1-.951.05l-.478-.654L4.35 6.425a.5.5 0 0 1-.9.083L.367 11.23a.5.5 0 0 1-.223-.623l1.52-2.825a.5.5 0 0 1 .45-.272l2.365.17a.5.5 0 0 1 .494.512l-.083.51a.5.5 0 0 1-.498.448l-1.92.115L2.83 10.59a.5.5 0 0 1-.416.711.5.5 0 0 1-.61-.397.5.5 0 0 1 .184-.442l1.625-1.18a.5.5 0 0 1 .632.753l-1.35 1.05a.5.5 0 0 1-.362.834.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 1 0v1.944a.5.5 0 0 1-.247.43L4.542 12H8a.5.5 0 0 1 .186-.413L10.32 9.47l-.083-.51a.5.5 0 0 1 .498-.448l2.365-.17a.5.5 0 0 1 .45.272l1.52 2.825a.5.5 0 0 1-.223.623L12.51 15a.5.5 0 0 1-.5.5h-4.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5zm.5 1.5a.5.5 0 0 1-.186.413L6 4.979v6.521a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-6.52l1.625-1.18a.5.5 0 0 1 .632.753L2.83 10.59a.5.5 0 0 1-.416.711.5.5 0 0 1-.61-.397.5.5 0 0 1 .184-.442l1.625-1.18a.5.5 0 0 1 .632.753L4.542 12H12.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-4.5a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5zm.5 1.5a.5.5 0 0 1-.186.413L10 4.979v6.521a.5.5 0 0 1-.5.5H7.5a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5zm.5 1.5a.5.5 0 0 1-.186.413L13 4.979v6.521a.5.5 0 0 1-.5.5h-4.5a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        ),
                    },
                    {
                        title: "Low Stock Items",
                        value: "42",
                        meta: "View alerts",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-exclamation-triangle-fill text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.023 1.772.887 1.772h13.916c.864 0 1.34-1.022.886-1.772zM8 5.925a.5.5 0 0 1 .5-.5h-1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4zM8 12.5a.5.5 0 0 1 .5-.5h-1a.5.5 0 0 1 .5.5z" />
                            </svg>
                        ),
                    },
                    {
                        title: "Value of Inventory",
                        value: "$124,750",
                        meta: "+12.5% from last month",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart4 text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M0 2a1 1 0 0 1 1-1h1.48L3.295 0h9.41L14.516 1H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm14 0h-1.484L11.705 1h-7.41L2.516 2H1zm-13 1h14v11H1zm6.5 1a.5.5 0 0 1 .5.5v4.293L10.354 7.646a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7 8.793V4.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        ),
                    },
                    {
                        title: "Active Suppliers",
                        value: "38",
                        meta: "View all suppliers",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-truck-flatbed text-gray-500 w-7 h-7" viewBox="0 0 16 16">
                                <path d="M11.5 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M16 8.948a2 2 0 0 1-2 2h-1.5a.5.5 0 0 0-.5.5v.725L12 14.5h-.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5H0a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H-1v-2a2 2 0 0 1 2-2h1.5a.5.5 0 0 0 .5-.5v-.725L4 1.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V2a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 2 2zM1 12v-1h.5a.5.5 0 0 1 .5.5v.5zm11.5 0v-1h.5a.5.5 0 0 1 .5.5v.5z" />
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
                    placeholder="Search inventory..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded-lg text-sm w-full md:w-1/3"
                />
                <div className="flex gap-3">
                    {/* Category Filter */}
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="border px-3 py-2 rounded-lg text-sm"
                    >
                        {categories.map((cat, i) => (
                            <option key={i} value={cat}>
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
                            <th className="p-3">Item ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Stock Level</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Last Updated</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center p-4">
                                    No items found.
                                </td>
                            </tr>
                        ) : (
                            filtered.map((item) => (
                                <motion.tr
                                    key={item.id}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-b border-gray-500"
                                >
                                    <td className="p-3">{item.id}</td>
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.category}</td>
                                    <td className="p-3">{item.stock}</td>
                                    <td className="p-3">{item.status}</td>
                                    <td className="p-3">{item.lastUpdated}</td>
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