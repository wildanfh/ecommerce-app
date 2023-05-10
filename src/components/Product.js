import React from "react";

function Product({ href, title, description, price, imgSrc }) {
  
  return (
    <a
      className="h-120 w-72 rounded shadow mx-auto border border-palette-lighter"
      href={href}
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="h-72 border-b-2 border-palette-lighter relative">
        <div
          style={{
            display: 'block',
            overflow: 'hidden',
            position: 'absolute',
            inset: 0,
            boxSizing: 'border-box',
            margin: 0,
          }}
        >
          <img
            alt="test-text"
            src={imgSrc}
            decoding="async"
            className="transform duration-500 ease-in-out hover:scale-110 w-full object-cover"
          />
        </div>
      </div>
      <div className="h-48 relative">
        <div className="font-primary text-rose-600 text-2xl pt-4 px-4 font-semibold">
          {title}
        </div>
        <div className="text-lg text-gray-600 p-4 font-primary font-light">
          {description}
        </div>
        <div className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-2 pt-2 bg-rose-200 rounded-tl-lg triangle">
          $ <span className="text-lg">{price}</span>
        </div>
      </div>
    </a>
  );
}

export default Product;
