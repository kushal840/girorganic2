import React from "react";

export default function About() {
  return (
    <div
      className="flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/about-bg.webp')" }}
    >
    
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

     
      <div className="relative max-w-4xl bg-white/90 rounded-2xl shadow-lg p-10 z-10">
        <h1 className="text-4xl font-bold text-teal-800 mb-6 text-center">
          About Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold">Our Organic Store</span> 🌿.  
          We believe in delivering **healthy, natural and chemical-free** products 
          directly from the farm to your home. Our mission is to provide 
          fresh and authentic items that care for both **your health** 
          and **the environment**.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          From **A2 Gir Cow Milk & Ghee** to **Stone Ground Atta, Organic Pulses, 
          Natural Sweeteners and Cold-Pressed Oils**, each product is carefully 
          sourced and crafted with love ❤️. We follow **traditional methods** 
          that ensure purity, nutrition, and taste in every bite.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Join us in our journey towards a **healthier lifestyle** with products 
          that are truly farm-fresh, sustainable, and made with care.
        </p>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-teal-800 text-white font-bold rounded-xl hover:bg-teal-900 transition">
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
}
