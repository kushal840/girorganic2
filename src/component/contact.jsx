import React from "react";

export default function Contact() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/contact-bg.webp')" }} 
    >
     


      <div className="relative w-full max-w-2xl bg-white/90 rounded-2xl shadow-lg p-10 z-10">
        <h1 className="text-4xl font-bold text-teal-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 mb-8">
          We’d love to hear from you! Fill out the form below and we’ll get back
          to you soon.
        </p>

        <form className="space-y-5">
        
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

     
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

      
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

  
          <button
            type="submit"
            className="w-full bg-teal-800 text-white font-bold py-3 rounded-lg hover:bg-teal-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
