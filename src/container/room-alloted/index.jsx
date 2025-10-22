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
        id: "AL001",
        name: "John Doe",
        category: "101 Private",
        stock: "Cardiology",
        status: "2023-09-01",
        doc: "Admitted",
        lastUpdated: "Dr. Smith",
    },
    {
        id: "AL002",
        name: "Jane Smith",
        category: "102 Private",
        stock: "Neurology",
        status: "2023-09-03",
        doc: "Admitted",
        lastUpdated: "Dr. Johnson",
    },
    {
        id: "AL003",
        name: "Michael Brown",
        category: "201 Semiprivate",
        stock: "Orthopedics",
        status: "2023-09-05",
        doc: "Discharged",
        lastUpdated: "Dr. Lee",
    },
    {
        id: "AL004",
        name: "Emily Davis",
        category: "202 Genral",
        stock: "Pediatrics",
        status: "2023-09-07",
        doc: "Admitted",
        lastUpdated: "Dr. Taylor",
    },
    {
        id: "AL005",
        name: "Robert Wilson",
        category: "301 Private",
        stock: "General Surgery",
        status: "2023-09-09",
        doc: "Pending",
        lastUpdated: "Dr. Brown",
    },
    {
        id: "AL006",
        name: "Sophia Martinez",
        category: "302 ICU",
        stock: "ICU",
        status: "2023-09-10",
        doc: "Admitted",
        lastUpdated: "Dr. Clark",
    },
    {
        id: "AL007",
        name: "William Anderson",
        category: "401 Genral",
        stock: "Cardiology",
        status: "2023-09-12",
        doc: "Discharged",
        lastUpdated: "Dr. Smith",
    },
    {
        id: "AL008",
        name: "Olivia Thomas",
        category: "402 ICU",
        stock: "Dermatology",
        status: "2023-09-13",
        doc: "Admitted",
        lastUpdated: "Dr. Adams",
    },
    {
        id: "AL009",
        name: "James Taylor",
        category: "501 Private",
        stock: "ICU",
        status: "2023-09-15",
        doc: "Admitted",
        lastUpdated: "Dr. Scott",
    },
    {
        id: "AL010",
        name: "Emma White",
        category: "502 Semi-Private",
        stock: "Gynecology",
        status: "2023-09-16",
        doc: "Pending",
        lastUpdated: "Dr. Davis",
    },
];


    const categories = ["All Type", "Private", "Semi-Private", "General","ICU"];

    const filtered = inventoryItems.filter(
        (item) =>
            (categoryFilter === "All Categories" ? true : item.category === categoryFilter) &&
            (item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="min-h-screen w-full p-4 md:p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Alloted Rooms</h1>
                    
                </div>
                <button className="px-4 py-2 rounded-lg border border-gray-500 text-sm">
                    + New Allotment
                </button>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                    {
                        title: "Total Rooms",
                        value: "120"
                       
                        
                    },
                    {
                        title: "Occupied",
                        value: "78"
                      
                    },
                    {
                        title: "Occupancy Rate",
                        value: "65%"
                      
                    },
                    {
                        title: "Available",
                        value: "42"
                       
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
                    placeholder="Search by patient,room..."
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
                            <th className="p-3">Allotment ID</th>
                            <th className="p-3">Patient</th>
                            <th className="p-3">Room</th>
                            <th className="p-3">Department</th>
                            <th className="p-3">Allotment Date</th>
                            <th className="p-3">Status</th>
                             <th className="p-3">Doctor</th>
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
                                     <td className="p-3">{item.doc}</td>
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