import React, { useState } from "react";

import gheeImg from "../assets/logo.png";
import wood from "../assets/wood Oil.png";
import atta from "../assets/Multigrain-Atta.png";
import raw from "../assets/Raw Jaggery.jpg";

const products = [
  {
    id: 1,
    title: "Pure & Organic A2 Gir Cow Ghee",
    img: gheeImg,
    options: [
      { label: "250 ml", price: 450 },
      { label: "500 ml", price: 839 },
    ],
    oldPrice: 900,
    saving: 61,
    coins: 2517,
    rating: 2694,
  },
  {
    id: 2,
    title: "Wood Pressed Groundnut Oil",
    img: wood,
    options: [
      { label: "500 ml PET Bottle", price: 265 },
      { label: "1 Litre", price: 500 },
    ],
    oldPrice: 400,
    saving: 135,
    coins: 795,
    rating: 448,
  },
  {
    id: 3,
    title: "Sharbati Wheat Atta",
    img: atta,
    options: [
      { label: "5 kg", price: 670 },
      { label: "10 kg", price: 1200 },
    ],
    oldPrice: 700,
    saving: 30,
    coins: 2010,
    rating: 156,
  },
  {
    id: 4,
    title: "Raw Jaggery",
    img: raw,
    options: [
      { label: "1 kg", price: 220 },
      { label: "2 kg", price: 400 },
    ],
    oldPrice: 250,
    saving: 30,
    coins: 500,
    rating: 98,
  },
];

function ProductGrid() {
  const [selectedOptions, setSelectedOptions] = useState(
    products.map((p) => p.options[0]) 
  );

  const handleChange = (productIndex, optionIndex) => {
    const newSelections = [...selectedOptions];
    newSelections[productIndex] = products[productIndex].options[optionIndex];
    setSelectedOptions(newSelections);
  };

  return (
    <div className="min-h-screen p-8 bg-cover bg-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, productIndex) => {
          const selected = selectedOptions[productIndex];
          return (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col"
            >
              <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-md w-fit">
                Best Seller
              </span>

              <img
                src={p.img}
                alt={p.title}
                className="rounded-lg mt-3 h-48 object-cover"
              />

              <p className="text-yellow-600 text-sm mt-2">
                Earn {p.coins} Coins on this product
              </p>

              <h3 className="font-semibold mt-2">{p.title}</h3>

              <div className="flex text-yellow-500 mt-1">
                {"★".repeat(5)}{" "}
                <span className="ml-2 text-gray-600">{p.rating}</span>
              </div>

              <p className="text-green-600 text-sm mt-1">
                Your savings: Rs. {p.saving}
              </p>

             
              <select
                className="border rounded-md p-2 mt-2"
                onChange={(e) =>
                  handleChange(productIndex, e.target.selectedIndex)
                }
              >
                {p.options.map((opt, i) => (
                  <option key={i}>{opt.label}</option>
                ))}
              </select>

           
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold">Rs. {selected.price}.00</span>
                <span className="line-through text-gray-500 text-sm">
                  Rs. {p.oldPrice}.00
                </span>
              </div>

              <button className="mt-3 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
