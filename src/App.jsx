import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./component/login";
import Contact from "./component/contact";
import Categories from "./component/categories";
import About from "./component/about";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import CartPage from "./pages/cart";
import CartSidebar from "./pages/cart"
import ProductCart from "./pages/cart";
import ProductGrid from "./products/product";
import HomePage from "./pages/cart";

import './App.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar /><br/>


        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/HomePage" element={<HomePage/>} />
          

        </Routes>
   

      <Footer />
    </div>
  );
}
