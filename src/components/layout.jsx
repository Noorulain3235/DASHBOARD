import React from "react";
import Sidebar from "./sidebar"; // adjust path if needed
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-row mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="mx-auto transition-all duration-300 relative">
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
