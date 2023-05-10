import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";

function EcommerceApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default EcommerceApp;
