import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, UserGroupIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, Bars3Icon, Squares2X2Icon, FunnelIcon, BellAlertIcon, Cog6ToothIcon, ArrowRightIcon, ArrowLeftIcon, BuildingOfficeIcon, UserPlusIcon, UsersIcon, ClockIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid'; // For profile icons

const staffData = [
  { id: 1, name: 'Dr. Sarah Johnson', role: 'Cardiologist', department: 'Medical', contact: 'sarah.j@clinic.com 555-0101', joined: 'May 2023', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf6e3792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww' },
  { id: 2, name: 'Dr. Michael Chen', role: 'Neurologist', department: 'Medical', contact: 'michael.c@clinic.com 555-0102', joined: 'Jun 2023', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww' },
  { id: 3, name: 'Emma Rodriguez', role: 'Head Nurse', department: 'Nursing', contact: 'emma.r@clinic.com 555-0103', joined: 'Feb 2023', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww' },
  { id: 4, name: 'Robert Davis', role: 'Lab Technician', department: 'Laboratory', contact: 'robert.d@clinic.com 555-0104', joined: 'Nov 2022', avatar: 'https://images.unsplash.com/photo-1547425260-76bc42b10230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHww' },
  { id: 5, name: 'Jennifer Kim', role: 'Pharmacist', department: 'Pharmacy', contact: 'jennifer.k@clinic.com 555-0105', joined: 'Mar 2023', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHww' },
  { id: 6, name: 'David Wilson', role: 'Radiologist', department: 'Radiology', contact: 'david.w@clinic.com 555-0106', joined: 'Sep 2022', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHww' },
  { id: 7, name: 'Maria Garcia', role: 'Receptionist', department: 'Administration', contact: 'maria.g@clinic.com 555-0107', joined: 'Jan 2023', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHww' },
  { id: 8, name: 'James Brown', role: 'Physical Therapist', department: 'Therapy', contact: 'james.b@clinic.com 555-0108', joined: 'Jul 2023', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d951ce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHww' },
  { id: 9, name: 'Emily White', role: 'Dietitian', department: 'Nutrition', contact: 'emily.w@clinic.com 555-0109', joined: 'Apr 2022', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHww' },
  { id: 10, name: 'John Doe', role: 'Surgeon', department: 'Medical', contact: 'john.d@clinic.com 555-0110', joined: 'Oct 2021', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGF2YXRhcnxlbnwwfHwwfHww' },
];

const StaffManagement = () => {
  const [view, setView] = useState('list'); // 'list' or 'grid'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(staffData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStaff = staffData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const DepartmentColor = ({ color, name }) => (
    <div className="flex items-center space-x-2">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }}></span>
      <span>{name}</span>
    </div>
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex flex-col items-center space-x-2">
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <p className=" mb-8">Manage clinic staff, roles, and permissions</p>
        </div>
        <div className="flex flex-col md:flex-row   items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 border px-4 py-2 md:mt-0 mt-2 rounded-md  transition-all"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add New Staff</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 border px-4 py-2 md:mt-0 mt-2 rounded-md  transition-all"
          >
            <UserGroupIcon className="h-5 w-5" />
            <span>Manage Roles</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 border px-4 py-2 rounded-md md:mt-0 mt-2 transition-all"
          >
            <span>More Options</span>
            <span className="ml-1">&#9660;</span> {/* Down arrow */}
          </motion.button>
        </div>
      </div>
      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Staff Directory */}
        <div className="lg:col-span-2">
          <div className=" border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Staff Directory</h2>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center w-full md:w-auto border rounded-md px-3 py-2 space-x-2">
                <MagnifyingGlassIcon className="h-5 w-5 " />
                <input type="text" placeholder="Search staff..." className="flex-grow outline-none" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1 rounded-md  transition-all"
                >
                  <AdjustmentsHorizontalIcon className="h-5 w-5" />
                </motion.button>
              </div>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView('list')}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md 
                    ${view === 'list' ? 'border ' : 'border'}`}
                >
                  <Bars3Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">List View</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView('grid')}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md
                     ${view === 'grid' ? 'border' : 'border'}`}
                >
                  <Squares2X2Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">Grid View</span>
                </motion.button>
              </div>
            </div>

            {view === 'list' ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Department</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-500">
                    {currentStaff.map((staff) => (
                      <motion.tr
                        key={staff.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: staff.id * 0.05 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img className="h-8 w-8 rounded-full object-cover mr-3" src={staff.avatar} alt={staff.name} />
                            <div className="text-sm font-medium ">{staff.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{staff.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{staff.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{staff.contact.split(' ')[0]} <br /> {staff.contact.split(' ')[1]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{staff.joined}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentStaff.map((staff) => (
                  <motion.div
                    key={staff.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: staff.id * 0.05 }}
                    className="border rounded-lg p-4 text-center flex flex-col items-center"
                  >
                    <img className="h-16 w-16 rounded-full mb-3" src={staff.avatar} alt={staff.name} />
                    <h3 className="font-semibold text-lg">{staff.name}</h3>
                    <p className=" text-sm">{staff.role}</p>
                    <p className=" text-xs">{staff.department}</p>
                    <p className=" text-xs mt-2">{staff.contact.split(' ')[0]}</p>
                    <p className=" text-xs">{staff.contact.split(' ')[1]}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <span className="text-sm">
                Showing {startIndex + 1}-{Math.min(endIndex, staffData.length)} of {staffData.length} staff members
              </span>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed  transition-all"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed  transition-all"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Overview & Quick Actions */}
        <div className="lg:col-span-1 flex flex-col space-y-8">
          {/* Staff Overview */}
          <div className=" border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Staff Overview</h2>
              <UserGroupIcon className="h-6 w-6 text-gray-500" />
            </div>
            <div className="text-5xl font-bold mb-4">63</div>
            <p className="text-sm text-gray-600 mb-4">Total Staff</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span>Active</span>
                </span>
                <span className="font-semibold">52 <span className="text-gray-500 text-sm">83%</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                  <span>On Leave</span>
                </span>
                <span className="font-semibold">8 <span className="text-gray-500 text-sm">13%</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  <span>Inactive</span>
                </span>
                <span className="font-semibold">3 <span className="text-gray-500 text-sm">4%</span></span>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className=" border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Departments</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <DepartmentColor color="blue" name="Medical" />
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <DepartmentColor color="green" name="Nursing" />
                <span className="font-semibold">18</span>
              </div>
              <div className="flex justify-between items-center">
                <DepartmentColor color="purple" name="Pharmacy" />
                <span className="font-semibold">4</span>
              </div>
              <div className="flex justify-between items-center">
                <DepartmentColor color="pink" name="Radiology" />
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <DepartmentColor color="orange" name="Therapy" />
                <span className="font-semibold">6</span>
              </div>
              <div className="flex justify-between items-center">
                <DepartmentColor color="teal" name="Support" />
                <span className="font-semibold">7</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 w-full justify-center border px-4 py-2 rounded-md hover:border-gray-500 transition-all"
            >
              <BuildingOfficeIcon className="h-5 w-5" />
              <span>Manage Departments</span>
            </motion.button>
          </div>

          {/* Quick Actions */}
          <div className=" border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 w-full border px-4 py-3 rounded-md hover:border-gray-500 transition-all"
              >
                <UserPlusIcon className="h-6 w-6" />
                <span className="font-medium">Add New Staff</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 w-full border px-4 py-3 rounded-md hover:border-gray-500 transition-all"
              >
                <UsersIcon className="h-6 w-6" />
                <span className="font-medium">Manage Roles</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 w-full border px-4 py-3 rounded-md hover:border-gray-500 transition-all"
              >
                <ClockIcon className="h-6 w-6" />
                <span className="font-medium">Attendance</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 w-full border px-4 py-3 rounded-md hover:border-gray-500 transition-all"
              >
                <DocumentArrowDownIcon className="h-6 w-6" />
                <span className="font-medium">Export Staff List</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;