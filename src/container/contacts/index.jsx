import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const contacts = [
    {
      id: 1,
      name: "Contact 1",
      email: "contact1@example.com",
      phone: "+1 (555) 100-1000",
      company: "Company 1",
      category: "Client",
      created: "Sep 19, 2025",
    },
    {
      id: 2,
      name: "Contact 2",
      email: "contact2@example.com",
      phone: "+1 (555) 101-1001",
      company: "Company 1",
      category: "Vendor",
      created: "Sep 18, 2025",
    },
    {
      id: 3,
      name: "Contact 3",
      email: "contact3@example.com",
      phone: "+1 (555) 102-1002",
      company: "Company 2",
      category: "Partner",
      created: "Sep 17, 2025",
    },
    {
      id: 4,
      name: "Contact 4",
      email: "contact4@example.com",
      phone: "+1 (555) 103-1003",
      company: "Company 1",
      category: "Employee",
      created: "Sep 16, 2025",
    },
    {
      id: 5,
      name: "Contact 5",
      email: "contact5@example.com",
      phone: "+1 (555) 104-1004",
      company: "Company 1",
      category: "Other",
      created: "Sep 15, 2025",
    },
    {
      id: 6,
      name: "Contact 6",
      email: "contact6@example.com",
      phone: "+1 (555) 105-1005",
      company: "Company 2",
      category: "Client",
      created: "Sep 14, 2025",
    },
    {
      id: 7,
      name: "Contact 7",
      email: "contact7@example.com",
      phone: "+1 (555) 106-1006",
      company: "Company 2",
      category: "Vendor",
      created: "Sep 13, 2025",
    },
    {
      id: 8,
      name: "Contact 8",
      email: "contact8@example.com",
      phone: "+1 (555) 107-1007",
      company: "Company 2",
      category: "Partner",
      created: "Sep 12, 2025",
    },
    {
      id: 9,
      name: "Contact 9",
      email: "contact9@example.com",
      phone: "+1 (555) 108-1008",
      company: "Company 2",
      category: "Employee",
      created: "Sep 11, 2025",
    },
    {
      id: 10,
      name: "Contact 10",
      email: "contact10@example.com",
      phone: "+1 (555) 109-1009",
      company: "Company 2",
      category: "Other",
      created: "Sep 10, 2025",
    },
  ];

  const categoryColors = {
    Client: "bg-blue-100 text-blue-700",
    Vendor: "bg-purple-100 text-purple-700",
    Partner: "bg-green-100 text-green-700",
    Employee: "bg-yellow-100 text-yellow-700",
    Other: "bg-gray-100 text-gray-700",
  };

  const filteredContacts = contacts.filter(
    (c) =>
      (c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter === "All Categories" || c.category === categoryFilter)
  );

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Contacts</h1>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border"
            >
              + Add Contact
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
              Export XLSX
            </motion.button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full lg:w-64"
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option className="bg-gray-400">All Categories</option>
            <option className="bg-gray-400">Client</option>
            <option className="bg-gray-400">Vendor</option>
            <option className="bg-gray-400">Partner</option>
            <option className="bg-gray-400">Employee</option>
            <option className="bg-gray-400">Other</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Phone</th>
                <th className="text-left py-3 px-4">Company</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Created</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((c) => (
                <motion.tr
                  key={c.id}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                  className="border-b"
                >
                  <td className="py-3 px-4">{c.name}</td>
                  <td className="py-3 px-4">{c.email}</td>
                  <td className="py-3 px-4">{c.phone}</td>
                  <td className="py-3 px-4">{c.company}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[c.category]}`}
                    >
                      {c.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">{c.created}</td>
                  <td className="py-3 px-4">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 rounded hover:bg-gray-200"
                    >
                      ⋮
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex  md:flex-row flex-col justify-between items-center mt-4 text-sm ">
          <span>Showing page 1 of 5</span>
          <div className="flex md:mt-0 mt-2 gap-2">
            <button className="px-3 py-1 border rounded">«</button>
            <button className="px-3 py-1 border rounded text-gray-400">
              1
            </button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
            <button className="px-3 py-1 border rounded">4</button>
            <button className="px-3 py-1 border rounded">5</button>
            <button className="px-3 py-1 border rounded">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsManagement;
