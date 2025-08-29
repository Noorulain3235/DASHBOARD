// src/App.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Tablet",
    description: "Here's a description of this wonderful product",
    price: 299,
    image: "/p8.jpg",
    className: "object-fit",
  },
  {
    id: 2,
    name: "Camera",
    description: "Here's a description of this wonderful product",
    price: 245,
    image: "/p1.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Here's a description of this wonderful product",
    price: 247,
    image: "/p2.jpg",
  },
  {
    id: 4,
    name: "Watch",
    description: "Here's a description of this wonderful product",
    price: 270,
    image: "/p4.jpg",
  },
  {
    id: 5,
    name: "Watch",
    description: "Binary Matrix Blue LED Digital Watch Mens Classic Creative Fashion Black Plated Wrist Watches",
    price: 280,
    image: "/p9.jpg",
  },
  {
    id: 6,
    name: "Ear Buds",
    description: "Here's a description of this wonderful product",
    price: 300,
    image: "/p5.jpg",
  },
];

const App = () => {
  return (
     <div className="p-4 md:p-8 bg-[#e4edf2] top-0 inset w-full md:w-[80%] md:ml-62 ">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 gap-6 max-w-6xl w-full ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden relative hover:shadow-lg transition-shadow
             duration-300"
          >
            

            {/* Image */}
            <img
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-sm md:text-base font-serif text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-sm  font-serif md:text-base">${product.price}</span>
                <button className="bg-purple-400 text-gray-700 text-sm px-4 py-1 rounded-lg
                 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                  EDIT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
