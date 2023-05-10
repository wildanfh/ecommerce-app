import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";

function EcommerceApp() {
  useEffect(() => { AOS.init(); }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default EcommerceApp;
