import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jTXBga6d2vJuqnea5MGlBj6IxrWQjUH7fYEIPbUtRQ&s" alt="Logo" className="h-8 md:h-10 md:ml-10" />
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href=" " className="font-bold text-black">Individuals</a>
        <a href=" " className="font-bold text-black">Teams</a>
        <a href=" " className="font-bold text-black">Enterprise</a>
        <a href=" " className="font-bold text-black"><select><option>Product</option></select></a>
        <a href=" " className="font-bold text-black">Pricing</a>
        <a href=" " className="font-bold text-black"><select><option>Resources</option></select></a>
      </div>
      
      
      <div className="flex items-center">

        <a href=" " className="font-bold text-lg text-black mr-2 md:mr-4 hidden md:block">Log In</a>
        
        
        <button className="bg-blue-800 text-white px-3 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm hidden md:block md:mr-10">Get Started</button>
      </div>

    
      <div className="flex md:hidden">
        <button className="text-black" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800">
          <ul className="text-white text-center">
            <li><a href=" " className="text-bold block py-2">Individual</a></li>
            <li><a href=" " className="text-bold block py-2">Teams</a></li>
            <li><a href=" " className="text-bold block py-2">Enterprise</a></li>
            <li><select  className="text-bold text-white bg-gray-800 border border-none text-center pl-4 rounded p-1 w-full"><option>Products</option>
            <option>option2</option></select></li>
            <li><a href=" " className="text-boldblock py-2">Pricing</a></li>
            <li> <select  className="text=bold text-white bg-gray-800 border border-none text-center pl-5 rounded p-1 w-full"><option>Resources</option>
            <option>option2</option></select></li>
            {/* Login and Button - visible on mobile */}
            <li><a href=" " className="text-bold block py-2">Log In</a></li>
            <li className="pb-2"><button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">Get Started</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;