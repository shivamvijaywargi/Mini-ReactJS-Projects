import React, { useState } from "react";

const Navbar = ({ shoppingCart }) => {
  const [slidingMenu, setSlidingMenu] = useState(false);

  console.log(shoppingCart.length);

  return (
    <div>
      <div className="container mx-auto px-5 pt-3">
        <div className="flex justify-between items-center">
          <a href="#">Home</a>
          <div className="relative">
            <button onClick={() => setSlidingMenu(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            {shoppingCart.length > 0 && (
              <div className="absolute right-0 bottom-5">
                {shoppingCart.length}
              </div>
            )}
          </div>
        </div>
      </div>

      {slidingMenu && (
        <aside>
          <div className="h-screen w-64 absolute right-0 top-0 bg-blue-200 z-10 p-4 pt-8">
            {shoppingCart.map((item) => (
              <div className="flex mt-4" key={item.id}>
                <img src={item.imgUrl} alt={item.name} className="w-24" />
                <div className="ml-2">
                  <h2 className="text-lg">{item.name}</h2>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="mt-3">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="top-4 right-4 absolute z-20"
            onClick={() => setSlidingMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
