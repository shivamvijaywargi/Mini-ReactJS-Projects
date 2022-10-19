import React from "react";
import products from "../productData";
import Card from "./Card";

const Cards = ({ handleAddToCart }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Card */}
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
