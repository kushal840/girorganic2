import React, { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full gap-6">

        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src="\src\assets\girorganic_logo_720c40ba-489f-4b83-be6c-3551a56bb576 (1).avif"
              alt="GirOrganic Logo"                                                  
              className="h-14 w-14 rounded-full"
            />
          </Link>
          <span className="font-bold text-green-900 tracking-wide">
            GIRORGANIC
          </span>
        </div>

    
        <ul className="hidden md:flex flex-1 justify-center gap-8 text-md font-medium text-gray-800">
          <Link to="/categories"><li className="hover:text-green-700 c ursor-pointer">Shop by Category</li></Link>
          <Link to="/about"> <li className="hover:text-green-700 cursor-pointer">About</li></Link>
          <li className="hover:text-green-700 cursor-pointer">Ayurvedic Remedies</li>
          <li className="hover:text-green-700 cursor-pointer">Blog</li>
          <Link to="/contact"><li className="hover:text-green-700 cursor-pointer">Contact Us</li></Link>
        </ul>


        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2 w-60">
            <Search className="text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 w-full text-sm text-gray-700"
            />
          </div>


          <Link to="/login">
            <User className="text-gray-700 cursor-pointer hidden md:block" size={22} />
          </Link>



       <Link to="/HomePage"><ShoppingCart className="text-gray-700 cursor-pointer hidden md:block" size={22} /></Link> 


          <div className="hidden md:flex items-center gap-2 border rounded-md px-2 py-1 cursor-pointer">
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="IN Flag"
              className="w-5 h-4"
            />
            <span className="text-sm text-gray-700">INR</span>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden mt-3 space-y-4 text-gray-800 font-medium">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <Search className="text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 w-full text-sm text-gray-700"
            />
          </div>

          <ul className="space-y-2">
            <li className="hover:text-green-700 cursor-pointer">Shop by Category</li>
            <li className="hover:text-green-700 cursor-pointer">About</li>
            <li className="hover:text-green-700 cursor-pointer">Ayurvedic Remedies</li>
            <li className="hover:text-green-700 cursor-pointer">Blog</li>
            <li className="hover:text-green-700 cursor-pointer">Contact</li>
          </ul>

          <div className="flex items-center justify-between pt-3">
            <NavLink to="/login">
              <User className="text-gray-700 cursor-pointer" size={22} />
            </NavLink>

            <ShoppingCart className="text-gray-700 cursor-pointer" size={22} />
            <div className="flex items-center gap-2 border rounded-md px-2 py-1 cursor-pointer">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="IN Flag"
                className="w-5 h-4"
              />
              <span className="text-sm text-gray-700">INR</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
