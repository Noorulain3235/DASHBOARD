import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // ✅ Toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* Header */}
      {/* <header className="w-full bg-black text-white p-2 flex justify-between items-center
      shadow-md shadow-gray-600 fixed top-0 left-0 z-50">
        <button onClick={toggleSidebar} className="p-2 bg-gray-800 text-white rounded">
          ☰
        </button>

        
        <Header toggleSidebar={toggleSidebar} />
      </header> */}

      <header
        className={`fixed top-0 left-0 z-50 light:bg-white dark:bg-black   p-2 flex justify-between 
          items-center shadow-md shadow-gray-400 
  transition-all duration-300`}
        style={{
          marginLeft: isSidebarOpen ? "256px" : "6px", // ✅ matches sidebar
          width: isSidebarOpen ? "calc(100% - 256px)" : "calc(100% - 6px)", // ✅ header width adjusts
        }}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 "
        >
          ☰
        </button>

        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </header>


      <div className="flex">
        {/* Sidebar */}
        <div className={`transition-all duration-300  ${isSidebarOpen ? "w-64" : "w-16"}`}>
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Section */}
        <motion.main
          animate={{ marginLeft: isSidebarOpen ? "256" : "64" }}
          className="flex-1 transition-all duration-300 pt-16 "
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
