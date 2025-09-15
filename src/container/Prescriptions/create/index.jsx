import React from "react";
import { motion } from "framer-motion";

const AddAppointment = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-1">Create Prescription</h1>
        <p className="opacity-70">
         Create a new prescription for a patient.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-2 border rounded-xl p-6 space-y-6"
        >
          {/* Appointment Details */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Prescription Details</h2>
            <p className="opacity-70 text-sm">
             Enter the details for the new prescription.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Prescription Type</label>
                <select className="w-full border rounded-lg p-2 focus:outline-none">
                  <option className="bg-gray-600">Select Prescription type</option>
                  <option className="bg-gray-600">Standard</option>
                  <option className="bg-gray-600">Controlled Substance</option>
                  <option className="bg-gray-600">Electronic Only</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-lg p-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Time</label>
                <select className="w-full border rounded-lg p-2 focus:outline-none">
                  <option className="bg-gray-600">Select time slot</option>
                  <option className="bg-gray-600">09:00 AM</option>
                  <option className="bg-gray-600">11:00 AM</option>
                  <option className="bg-gray-600">02:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  value="30"
                  className="w-full border rounded-lg p-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Diagnosis</label>
                <textarea
                  rows="3"
                  placeholder="Enter the reason for the appointment"
                  className="w-full border rounded-lg p-2 focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Appointment Status */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Use Medication Template</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio"  name="status" defaultChecked />
                <span>Hypertension Standard</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="status" />
                <span>Diabetes Type 2</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="status" />
                <span>Antibiotic - Respiratory</span>
              </label>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Medications</h2>
            <textarea
              rows="3"
              placeholder="Enter any additional notes for staff"
              className="w-full border rounded-lg p-2 focus:outline-none"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 rounded-lg border">Cancel</button>
            <button className="px-4 py-2 rounded-lg border font-medium">
             Create Prescription
            </button>
          </div>
        </motion.div>

        {/* Right Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Select Patient */}
          <div className="border rounded-xl p-6 space-y-4">
             <h2 className="text-lg font-semibold">Patient Information</h2>
            <p className="opacity-70 text-sm">
            Select a patient for this prescription.
            </p>
            <h2 className="text-lg font-semibold">Select Patient</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                className="w-full border rounded-lg p-2 pl-9 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <button className="w-full px-4 py-2 rounded-lg border">
              Register New Patient
            </button>
          </div>

          {/* Select Doctor */}
          <div className="border rounded-xl p-6 space-y-4">
            <h2 className="text-lg  font-semibold">Select Doctor</h2>
            <select className="w-full border  rounded-lg p-2 focus:outline-none">
              <option className="bg-gray-600">Select a doctor</option>
              <option className="bg-gray-600">Dr. Sarah Johnson</option>
              <option className="bg-gray-600">Dr. Michael Chen</option>
              <option className="bg-gray-600">Dr. Lisa Patel</option>
            </select>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AddAppointment;
