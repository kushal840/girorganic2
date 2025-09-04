import React from 'react'

function header() {
  return (
    <header>
        <ul className="hidden md:flex flex-1 justify-center gap-8 text-md font-medium text-gray-800">
          <li className="hover:text-green-700 cursor-pointer">Shop by Category</li>
          <li className="hover:text-green-700 cursor-pointer">About</li>
          <li className="hover:text-green-700 cursor-pointer">Ayurvedic Remedies</li>
          <li className="hover:text-green-700 cursor-pointer">Blog</li>
          <li className="hover:text-green-700 cursor-pointer">Contact</li>
        </ul>
    </header>
  )
}

export default header