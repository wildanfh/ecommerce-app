import React from "react";
import { useParams } from "react-router-dom";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductPage({ product }) {
  const router = useParams();

  // Render loading spinner while data is being fetched
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { title, description, price, imgSrc } = product;

  return (
    <>
      <Navbar />
      <div className="container shadow max-w-5xl mx-auto my-8 p-5 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full md:h-full" data-aos="fade-right" data-aos-duration="1000" >
            <img
              src={`/img/${imgSrc}`}
              alt={title}
              style={{
                layout: "fill",
              objectFit: "contain"
              }}
              className="transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center" data-aos-duration="1000" data-aos="fade-left">
            <h1 className="text-3xl text-rose-600 font-bold mb-4">{title}</h1>
            <p className="text-lg mb-4">{description}</p>
            <p className="text-lg font-bold mb-4 w-min mb-4 bg-rose-200 px-6 py-1 rounded-tr-md rounded-br-md triangle">${price}</p>
            <button className="bg-rose-500 text-white py-2 px-4 rounded flex justify-center items-center duration-300 hover:bg-rose-700">
            <HiOutlineShoppingCart className="w-8 h-5 mr-1" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
