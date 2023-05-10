import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import products from "../utils/products";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header
        title={"Purchase Kitty Stickers!"}
        tagline={
          "Things are difficult. Brighten up your living space with some adorable Kitty Stickers."
        }
      />
      <ProductGrid products={products} />
      <Footer />
    </>
  );
}

export default HomePage;