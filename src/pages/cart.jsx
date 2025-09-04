import React, { useState } from "react";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";

function CartSidebar() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([
    { id: 1, title: "Configurable Product", price: 52, qty: 1 },
    { id: 2, title: "Simple Product", price: 34, qty: 1 },
  ]);

  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(item.qty - 1, 1),
            }
          : item
      )
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 0;
  const tax =0 ;
  const total = subtotal + shipping + tax;

  return (
    <div className="relative">
      
      <ShoppingCart
        size={28}
        className="cursor-pointer text-gray-700"
        onClick={() => setOpen(true)}
      />


      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

   
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Order Summary</h2>
          <X className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>


        {cart.map((item) => (
          <div key={item.id} className="border-b pb-3 mb-3">
            <p className="font-semibold">{item.title}</p>
            <p className="text-gray-600">₹{item.price}</p>
            <div className="flex items-center gap-2 mt-2">
              <button
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => updateQty(item.id, "dec")}
              >
                <Minus size={14} />
              </button>
              <span>{item.qty}</span>
              <button
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => updateQty(item.id, "inc")}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        ))}

   
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Cart Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>₹{tax}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Order Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter discount code"
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <button className="w-full bg-gray-800 text-white py-2 rounded-lg">
            Apply Discount
          </button>
        </div>

       
        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;
