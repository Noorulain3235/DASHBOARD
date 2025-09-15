import React from "react";
import { motion } from "framer-motion";

const AddDoctor = () => {
    return (
        <div className="min-h-screen p-6 items-center justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-6"
            >
                Add Doctor
            </motion.h2>
            <p className="mb-4">Add a new doctor to your clinic.</p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl p-8 border rounded-md"
            >
                {/* Form */}
                
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold mb-6"
                    >
                        Personal Information
                    </motion.h2>
                    <p className="mb-4">Enter the doctor's personal details.</p>
                
                <form className="grid grid-cols-1  md:grid-cols-2 gap-6">

                    {/* First Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Last Name */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Gender */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Gender</label>
                        <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2">
                            <option value="">Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </motion.div>

                    {/* DOB */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Date of Birth</label>
                        <input
                            type="date"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:col-span-2"
                    >
                        <label className="font-medium mb-1">Address</label>
                        <textarea
                            rows="2"
                            placeholder="Enter address"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* City */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">City</label>
                        <input
                            type="text"
                            placeholder="Enter city"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* State */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">State</label>
                        <input
                            type="text"
                            placeholder="Enter state"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Zip Code */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Zip Code</label>
                        <input
                            type="text"
                            placeholder="Enter zip code"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                      
                    </motion.div>
                      <div className="border  mt-2 border-t"></div>

                    {/* Contact Info Heading */}
                    <div className="md:col-span-2 mt-6">
                        <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
                    </div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="doctor@example.com"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Phone Number */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Phone Number</label>
                        <input
                            type="text"
                            placeholder="+123 456 7890"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Emergency Contact Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Emergency Contact Name</label>
                        <input
                            type="text"
                            placeholder="Enter emergency contact name"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Emergency Contact Number */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col"
                    >
                        <label className="font-medium mb-1">Emergency Contact Number</label>
                        <input
                            type="text"
                            placeholder="+123 000 9999"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>
                    

                    {/* Personal Photo Heading */}
                    <div className="md:col-span-2 mt-6">
                          <div className="border  mt-2 mb-3 border-t"></div>
                        <h3 className="text-xl font-semibold mb-2">Personal Photo</h3>
                    </div>

                    {/* Upload Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col md:col-span-2"
                    >
                        <input
                            type="file"
                            accept="image/*"
                            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="md:col-span-2 flex justify-end"
                    >
                         <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="px-6 py-3 mr-3 rounded-lg border font-semibold"
                        >
                            Cancle
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="px-6 py-3 rounded-lg border font-semibold"
                        >
                            Save Doctor
                        </motion.button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddDoctor;
