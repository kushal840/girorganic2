import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#FFF3D4] text-gray-900 py-10 px-6"
      style={{
        backgroundImage: "url(https://www.pngkit.com/png/detail/433-4336452_blue-header-design-png-header-and-footer-design.png)", // 👈 background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
     
        <div>
          <img src="\src\assets\girorganic_logo_720c40ba-489f-4b83-be6c-3551a56bb576 (1).avif" alt="Logo" className="w-16 mb-4" />
          <p className="mb-2">
           FF 66-77, near Akshar Paradise, Jalaram Nagar, Atladara, Vadodara, Gujarat 390012
          </p>
          <p className="mb-1">
            <strong>Email -</strong>{" "}
            <a href="mailto:info@girorganic.com" className="underline">
              info@girorganic.com
            </a>
          </p>
          <p className="mb-4">
            <strong>Phone -</strong>{" "}
            <a href="tel:+919088909453" className="underline">
              +91-9099909453
            </a>
          </p>

       
          <div className="flex space-x-4">
            <a href="#">
              <Facebook className="w-6 h-6 text-green-800 hover:text-black" />
            </a>
            <a href="#">
              <Instagram className="w-6 h-6 text-green-800 hover:text-black" />
            </a>
            <a href="#">
              <Youtube className="w-6 h-6 text-green-800 hover:text-black" />
            </a>
          </div>
        </div>

    
        <div>
          <h3 className="font-bold mb-3">Info</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Ayurvedic Remedies</a></li>
            <li><a href="#" className="hover:underline">Track Your Order</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Search</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Refund & Cancellations</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-bold mb-3">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">All Products</a></li>
            <li><a href="#" className="hover:underline">Organic Pulses</a></li>
            <li><a href="#" className="hover:underline">Peanut Butter</a></li>
            <li><a href="#" className="hover:underline">A2 Gir Cow Ghee</a></li>
            <li><a href="#" className="hover:underline">Healthy & Tasty Snacks</a></li>
            <li><a href="#" className="hover:underline">Wood Press Oil</a></li>
            <li><a href="#" className="hover:underline">Natural Sweetener</a></li>
            <li><a href="#" className="hover:underline">Value Saver - Combos</a></li>
            <li><a href="#" className="hover:underline">A2 Gir Cow Milk</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
