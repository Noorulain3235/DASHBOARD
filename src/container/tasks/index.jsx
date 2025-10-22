import { motion } from "framer-motion";
import { useState } from "react";

const tasks = [
    {
        id: 1,
        title: "Review patient records",
        priority: "High",
        description: "Go through the latest patient records and update the system",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle w-4 h-4 text-gray-400" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        </svg>),
        status: "Todo",
        due: "Sep 20, 2025",
        assigned: "Dr. Sarah Johnson",
    },
    {
        id: 2,
        title: "Order medical supplies",
        priority: "Medium",
        description: "Check inventory and place orders for depleted items",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clock w-4 h-4 text-blue-500" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>),
        status: "In Progress",
        due: "Sep 21, 2025",
        assigned: "Nurse Wilson",
    },
    {
        id: 3,
        title: "Schedule staff meeting",
        priority: "Low",
        description: "Arrange monthly staff meeting and prepare agenda",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-circle w-4 h-4 text-green-300" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
        </svg>),
        status: "Completed",
        due: "Sep 18, 2025",
        assigned: "Admin Staff",
    },
    {
        id: 4,
        title: "Update clinic protocols",
        priority: "High",
        description: "Review and update clinic protocols based on new guidelines",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle w-4 h-4 text-gray-400" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        </svg>),
        status: "Todo",
        due: "Sep 22, 2025",
        assigned: "Dr. Sarah Johnson",
    },
    {
        id: 5,
        title: "Prepare monthly report",
        priority: "High",
        description: "Compile statistics and prepare the monthly clinic performance report",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle w-4 h-4 text-gray-400" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        </svg>),
        status: "Todo",
        due: "Sep 23, 2025",
        assigned: "Dr. Sarah Johnson",
    },
    {
        id: 6,
        title: "Organize patient files",
        priority: "Low",
        description: "Sort and organize physical patient files in the storage room",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle w-4 h-4 text-gray-400" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        </svg>),
        status: "Todo",
        due: "Sep 24, 2025",
        assigned: "Admin Staff",
    },
    {
        id: 7,
        title: "Update software systems",
        priority: "Medium",
        description: "Install latest updates for the clinic management software",
          icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clock w-4 h-4 text-blue-500" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>),
        status: "In Progress",
        due: "Sep 21, 2025",
        assigned: "IT Support",
    },
];
const priorityColors = {
    High: "bg-red-500 text-white",
    Medium: "bg-orange-500 text-white",
    Low: "bg-white text-black border",
};

function EditIcon() {
    return (
        <motion.svg
            whileHover={{ scale: 1.2, rotate: 5 }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeWidth={2} d="M15.232 5.232l3.536 3.536M4 21h4l11-11-4-4L4 17v4z" />
        </motion.svg>
    );
}


function DeleteIcon() {
    return (
        <motion.svg
            whileHover={{ scale: 1.2, rotate: -5 }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
        </motion.svg>
    );
}

export default function TasksPage() {
    const [search, setSearch] = useState("");

    const filtered = tasks.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen w-full p-6 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold">Tasks</h1>
                <button className="px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-2">
                    + Add Task
                </button>
            </div>

            {/* Search + Filters */}
            <div className="flex flex-col md:flex-row gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded-lg text-sm w-full md:w-1/3"
                />
                <select className="border px-3 py-2 rounded-lg text-sm">
                    <option className="bg-gray-400">All Status</option>
                    <option className="bg-gray-400">To Do</option>
                    <option className="bg-gray-400">In Progress</option>
                    <option className="bg-gray-400">Completed</option>
                </select>
                <select className="border px-3 py-2 rounded-lg text-sm">
                    <option className="bg-gray-400">All Priorities</option>
                    <option className="bg-gray-400">High</option>
                    <option className="bg-gray-400">Medium</option>
                    <option className="bg-gray-400">Low</option>
                </select>
                <div className="flex gap-2">
                    <button className="px-3 py-2 border hover:border-gray-400 rounded-lg">▦</button>
                    <button className="px-3 py-2 border hover:border-gray-400  rounded-lg">☰</button>
                </div>
            </div>

            {/* Task List */}
            <div className="border px-4 py-2 rounded">
                <h2 className="text-2xl font-semibold mb-2">Task List</h2>
                <p className="text-sm mb-4">
                    Manage your tasks and track progress • {tasks.length} tasks
                </p>

                <div className="space-y-4">
                    {filtered.map((task) => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold mb-2">{task.title}</h3>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-xs font-medium 
                                            ${priorityColors[task.priority]}`}
                                    >
                                        {task.priority}
                                    </span>

                                </div>
                                <p className="text-sm mb-2">{task.description}</p>
                                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                                    <span>{task.icon}</span>
                                    <span>{task.status}</span>
                                    <span>Due: {task.due}</span>
                                    <span>Assigned to: {task.assigned}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="p-2 ">
                                    <EditIcon />
                                </button>
                                <button className="p-2 ">
                                    <DeleteIcon />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
