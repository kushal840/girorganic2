import React from "react";
import { FaBox, FaCheese, FaGlassWhiskey, FaBreadSlice, FaTags } from "react-icons/fa";
import { GiPeanut, GiOlive, GiHoneyJar, GiPickle, GiHerbsBundle, GiGrain } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

const categories = [
  { name: "All Products", icon: <FaBox /> },
  { name: "A2 Gir Cow Ghee", icon: <FaCheese /> },
  { name: "A2 Gir Cow Milk", icon: <FaGlassWhiskey /> },
  { name: "Stone Ground Atta", icon: <FaBreadSlice /> },
  { name: "Value Saver - Combos", icon: <FaTags /> },
  { name: "Stone Ground Peanut butter", icon: <GiPeanut /> },
  { name: "Wood Press Oils", icon: <GiOlive /> },
  { name: "Natural Sweetener", icon: <GiHoneyJar /> },
  { name: "Stone Ground Spices", icon: <GiHerbsBundle /> },
  { name: "Organic Pulses", icon: <GiGrain /> },
  { name: "Healthy & Tasty Snacks", icon: <MdFastfood /> },
  { name: "Honey", icon: <GiHoneyJar /> },
  { name: "Pickle", icon: <GiPickle /> },
];

export default function Categories() {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="text-teal-700 text-3xl">{cat.icon}</div>
            <span className="text-lg font-medium text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
