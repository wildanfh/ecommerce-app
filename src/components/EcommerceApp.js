import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

function EcommerceApp() {
  useEffect(() => { AOS.init(); }, []);
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default EcommerceApp;
