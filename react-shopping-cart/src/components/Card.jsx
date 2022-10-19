import React from "react";

const Card = ({ product, handleAddToCart }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={product.imgUrl}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>
        <div className="flex justify-between items-center">
          <p className="mt-1">₹ {product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
