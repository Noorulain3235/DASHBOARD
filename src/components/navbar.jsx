import React, { useState } from 'react';

export default function Navbar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with query:", query);
    alert(`You searched for: "${query}"`);
  };

  return (
    // Added hidden for small screens, flex for medium and larger
    <div className="hidden md:flex w-[80%] h-16 fixed top-0 left-64 bg-[#e4edf2] items-center justify-between
     px-6 z-10 shadow-md">
      <div className="items-center">
        <h3 className="text-xl font-serif font-semibold">Hello Evano</h3>
      </div>

      <form onSubmit={handleFormSubmit} className="w-full max-w-xs">
        <div className="relative">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 
                1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            id="search"
            name="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md
             leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 
             focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Search..."
            type="search"
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
