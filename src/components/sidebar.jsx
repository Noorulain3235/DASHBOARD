import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    {
      name: "Dashboard",
      to: "/dashboard",
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 
                   0l-.1.34a1.464 1.464 0 0 
                   1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 
                   1.987l.169.311c.446.82.023 1.841-.872 
                   2.105l-.34.1c-1.4.413-1.4 2.397 
                   0 2.81l.34.1a1.464 1.464 0 0 
                   1 .872 2.105l-.17.31c-.698 1.283.705 
                   2.686 1.987 1.987l.311-.169a1.464 
                   1.464 0 0 1 2.105.872l.1.34c.413 
                   1.4 2.397 1.4 2.81 0l.1-.34a1.464 
                   1.464 0 0 1 2.105-.872l.31.17c1.283.698 
                   2.686-.705 1.987-1.987l-.169-.311a1.464 
                   1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 
                   1.4-2.397 0-2.81l-.34-.1a1.464 
                   1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 
                   1.464 0 0 1-2.105-.872zM8 10.93a2.929 
                   2.929 0 1 1 0-5.86 2.929 
                   2.929 0 0 1 0 5.858z" />
        </svg>
      ),
    },
    {
      name: "Product",
      to: "/product",
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M8.21.5a1 1 0 0 0-.42 
                   0L1.5 2.05A1 1 0 0 0 .8 3v4c0 
                   .5.37.92.86 1l6.14 1.53V14l-2.2 
                   1.1c-.54.27-.54 1.02 0 
                   1.29l2.5 1.25c.27.13.58.13.85 
                   0l2.5-1.25c.54-.27.54-1.02 
                   0-1.29L8.2 14v-4.47L14.34 
                   8c.5-.08.86-.5.86-1V3c0-.46-.3-.86-.71-.95L8.21.5z" />
        </svg>
      ),
    },
    {
      name: "Customers",
      to: "/",
      active: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 
                   6-4 6 3 6 4-1 1-1 1H3zm5-6a3 
                   3 0 1 0 0-6 3 3 0 0 0 0 
                   6z" />
        </svg>
      ),
    },
    {
      name: "Income",
      to: "/income",
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 
                   0 16A8 8 0 0 0 8 
                   0zM4.5 8.5A.5.5 0 0 1 
                   5 8h6a.5.5 0 0 1 0 
                   1H5a.5.5 0 0 1-.5-.5z" />
        </svg>
      ),
    },
    {
      name: "Promote",
      to: "/promote",
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M0 0v16h16V0H0zm3 
                   7h10v2H3V7z" />
        </svg>
      ),
    },
    {
      name: "Help",
      to: "/help",
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M8 1a7 7 0 1 
                   0 0 14A7 7 0 0 0 8 
                   1zM7 10v2h2v-2H7zm1-6a2 
                   2 0 0 1 1.995 1.85L10 
                   6a1 1 0 0 1-2 0H7a2 2 
                   0 0 1 1-1.732V4z" />
        </svg>
      ),
    },
  ];

  // Hamburger menu component
  const HamburgerIcon = () => (
    <svg 
      className="w-6 h-6 cursor-pointer" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M4 6h16M4 12h16M4 18h16" 
      />
    </svg>
  );

  // Close icon for mobile menu
  const CloseIcon = () => (
    <svg 
      className="w-6 h-6 cursor-pointer" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      onClick={() => setMobileMenuOpen(false)}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>
  );

  // Mobile view
  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <div className="w-full bg-white shadow-md p-4 flex items-center justify-between fixed top-0 z-50">
          <div className="flex items-center gap-2">
            {menuItems[0].icon}
            <h3 className="text-xl font-serif font-semibold">
              Dashboard <span className="text-xs font-normal">v.01</span>
            </h3>
          </div>
          <HamburgerIcon />
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="w-full h-full bg-white flex flex-col">
              {/* Mobile Menu Header */}
              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-2">
                  {menuItems[0].icon}
                  <h3 className="text-xl font-serif font-semibold">
                    Dashboard <span className="text-xs font-normal">v.01</span>
                  </h3>
                </div>
                <CloseIcon />
              </div>

              {/* Mobile Menu Content */}
              <div className="flex flex-col justify-between h-full">
                <nav className="mt-4 space-y-1 px-4">
                  {menuItems.map((item, index) => (
                    <Link
                      to={item.to}
                      key={index}
                      style={{ color: item.active ? undefined : "#5a5c5a", textDecoration: "none" }}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg
                       transition-colors duration-300 
                       ${item.active ? "bg-purple-600 text-white" : "hover:bg-purple-400 hover:!text-white"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      {!item.active && <i className="bi-chevron-right text-sm"></i>}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Bottom Section */}
                <div className="px-4 mb-6">
                  {/* Upgrade Section */}
                  <div className="bg-gradient-to-r from-[#dc7af0] to-purple-600 rounded-2xl text-center p-4 mb-4">
                    <p className="text-white text-xs mb-2">
                      Upgrade to PRO to get access all Features!
                    </p>
                    <Link
                      to="/upgrade"
                      style={{ textDecoration: "none", color: "#5a5c5a" }}
                      className="block bg-white text-center py-2 text-sm rounded-full font-semibold hover:bg-gray-100 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Pro Now!
                    </Link>
                  </div>

                  {/* User Profile */}
                  <div className="flex shadow-md py-1 rounded items-center gap-3 px-2">
                    <img src="https://i.pravatar.cc/40" alt="user" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">Evano</span>
                      <span className="text-xs text-gray-500">Project Manager</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="ml-auto text-gray-500 text-sm" viewBox="0 0 16 16">
                      <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop view (original functionality)
  return (
    <div
      onClick={(e) => { e.stopPropagation(); setCollapsed(!collapsed); }}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      className={`${collapsed ? "w-20" : "w-64"} 
        fixed top-0 inset flex flex-col h-screen justify-between 
        bg-white shadow-md transition-all duration-300`}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className={`flex flex-row items-center px-6 py-4 gap-2 ${collapsed ? "opacity-0 hidden" : "opacity-100"} transition-opacity duration-300`}>
          {menuItems[0].icon}
          <h3 className="text-1xl font-serif font-semibold">
            Dashboard <span className="text-xs font-normal">v.01</span>
          </h3>
        </div>

        {/* Menu */}
        <nav className="mt-1 space-y-1">
          {menuItems.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              style={{ color: item.active ? undefined : "#5a5c5a", textDecoration: "none" }}
              className={`flex items-center ${collapsed ? 'justify-center px-2' : 'justify-between px-6'} py-2.5 rounded-lg mx-2
               transition-colors duration-300 
               ${item.active ? "bg-purple-600 text-white" : "hover:bg-purple-400 hover:!text-white"}
             not-visited:`}
            >
              <div className={`flex items-center ${collapsed ? '' : 'gap-3'}`}>
                {item.icon}
                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
              </div>
              {!item.active && !collapsed && <i className="bi-chevron-right text-sm"></i>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className={`px-4 mb-6 ${collapsed ? "opacity-0 hidden" : "opacity-100"} transition-opacity duration-300`}>
        {/* Upgrade Section */}
        <div className="bg-gradient-to-r from-[#dc7af0] to-purple-600 rounded-2xl text-center p-4 mb-4">
          <p className="text-white text-xs mb-2">
            Upgrade to PRO to get access all Features!
          </p>
          <Link
            to="/upgrade"
            style={{ textDecoration: "none", color: "#5a5c5a" }}
            className="block bg-white text-center py-2 text-sm rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get Pro Now!
          </Link>
        </div>

        {/* User Profile */}
        <div className="flex shadow-md py-1 rounded items-center gap-3 px-2">
          <img src="https://i.pravatar.cc/40" alt="user" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Evano</span>
            <span className="text-xs text-gray-500">Project Manager</span>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="ml-auto text-gray-500 text-sm" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
          </svg>
        </div>
      </div>
    </div>
  );
}