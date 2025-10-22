import React from "react";
import { motion } from "framer-motion";

const AddBloodUnit = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Add Blood Unit</h1>
          <p className="mt-1 text-sm">
            Add a new blood unit to the blood bank inventory
          </p>
        </div>
        <button className="px-4 py-2 border rounded-lg">Cancel</button>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 sm:p-6 border rounded-xl shadow-sm"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Blood Unit Information
        </h2>
        <p className="text-xs sm:text-sm mb-6">
          Enter the details of the new blood unit to be added to the inventory.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Anonymous Donor */}
          <div className="flex items-center space-x-2 col-span-1 md:col-span-2">
            <input type="checkbox" id="anonymous" className="w-4 h-4" />
            <label htmlFor="anonymous" className="text-sm">
              Anonymous Donor
            </label>
          </div>

          {/* Donor ID */}
          <div>
            <label className="block text-sm font-medium mb-1">Donor ID</label>
            <input
              type="text"
              placeholder="Enter donor ID"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
            <p className="text-xs mt-1">Enter the unique ID of the donor.</p>
          </div>

          {/* Collection Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Collection Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Donor Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Donor Name</label>
            <input
              type="text"
              placeholder="Enter donor name"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Expiry Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
            <p className="text-xs mt-1">
              Typically 35–42 days after collection for whole blood.
            </p>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium mb-1">Blood Group</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>Select blood group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          {/* Source Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Source Type</label>
            <select className="w-full border rounded-lg px-3 py-2 text-sm">
              <option>Select source type</option>
              <option>Donation</option>
              <option>Apheresis</option>
              <option>Replacement</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Quantity (units)
            </label>
            <input
              type="number"
              defaultValue={1}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
            <p className="text-xs mt-1">Standard unit is 450ml of whole blood.</p>
          </div>

          {/* Collection Location */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Collection Location
            </label>
            <input
              type="text"
              placeholder="Enter collection location"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Screening Complete */}
          <div className="flex items-start space-x-2 col-span-1">
            <input type="checkbox" id="screening" className="w-4 h-4 mt-1" />
            <label htmlFor="screening" className="text-sm">
              Screening Complete
              <p className="text-xs">
                Blood has been screened for infectious diseases.
              </p>
            </label>
          </div>

          {/* Processing Complete */}
          <div className="flex items-start space-x-2 col-span-1">
            <input type="checkbox" id="processing" className="w-4 h-4 mt-1" />
            <label htmlFor="processing" className="text-sm">
              Processing Complete
              <p className="text-xs">
                Blood has been processed and is ready for storage.
              </p>
            </label>
          </div>

          {/* Additional Notes */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Additional Notes
            </label>
            <textarea
              placeholder="Enter any additional information about this blood unit"
              className="w-full border rounded-lg px-3 py-2 text-sm h-24"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 border rounded-lg shadow-sm"
            >
              Add Blood Unit
            </button>
          </div>
        </form>
      </motion.div>

    </div>
  );
};

export default AddBloodUnit;
