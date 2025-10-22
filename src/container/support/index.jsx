import React, { useState } from "react";
import { motion } from "framer-motion";
import FAQ from "./faq";
import Ticket from "./tickets";

const SupportCenter = () => {
  const [activeTab, setActiveTab] = useState("New Ticket");

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">Support Center</h1>
        <p className=" mb-6">
          Get help with your clinic management system or submit a support ticket.
        </p>

        {/* Tabs */}
        <div className="flex border md:text-lg text-xs rounded-lg overflow-hidden mb-8">
          {["New Ticket", "My Tickets", "FAQ"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 text-center ${
                activeTab === tab ? "bg-gray-500 font-semibold" : "bg-inherit"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* New Ticket Form */}
        {activeTab === "New Ticket" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Submit a Support Ticket</h2>
            <p className="mb-6">
              Fill out the form below to create a new support ticket. Our team will
              respond as soon as possible.
            </p>

            <form className="space-y-4">
              {/* Issue + Category */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Brief description of the issue"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <select className="flex-1 px-4 py-2 border rounded-lg">
                  <option className="bg-gray-400">Select category</option>
                  <option  className="bg-gray-400">Technical</option>
                  <option  className="bg-gray-400">Billing</option>
                  <option  className="bg-gray-400">Account</option>
                  <option  className="bg-gray-400">Other</option>
                </select>
              </div>

              {/* Priority */}
              <select className="w-full px-4 py-2 border rounded-lg">
                <option  className="bg-gray-400">Select priority</option>
                <option  className="bg-gray-400">High</option>
                <option  className="bg-gray-400">Medium</option>
                <option  className="bg-gray-400">Low</option>
              </select>

              {/* Description */}
              <textarea
                placeholder="Please provide detailed information about your issue"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>

              {/* Attachments */}
              <div>
                <label className="block font-medium mb-1">Attachments (optional)</label>
                <input type="file" className="w-full mb-1 border py-2 px-2 rounded" />
                <p className=" text-sm mt-1">
                  You can upload screenshots or documents to help explain your issue
                  (max 5MB per file)
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 rounded-lg border"
                >
                  Submit Ticket
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Other Tabs Placeholder */}
        {activeTab === "My Tickets" && (
         <Ticket/>
        )}
        {activeTab === "FAQ" && (
         <FAQ />
        )}
      </div>
    </div>
  );
};

export default SupportCenter;
