import React, { useState } from "react";
import Navbar from "./Navbar";
function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      name: "Headphones v2",
      cost: "$22.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61zWgdR8tzL._AC_SL1400_.jpg",
    },
    {
      name: "Headphones v1",
      cost: "$12.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71v-GfltDgL._AC_SL1500_.jpg",
    },
    {
      name: "Headphones v1",
      cost: "$12.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71v-GfltDgL._AC_SL1500_.jpg",
    },
    {
      name: "Headphones v1",
      cost: "$12.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71v-GfltDgL._AC_SL1500_.jpg",
    },
  ]);
  const addCart = (product) => {
    setCart([...cart, product]);
  };
  //console.log(cart);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-center justify-start h-full p-4 font-bold w-full">
          <h3 className="">Products</h3>
          <button>
            <svg
              className="w-6 ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="absolute top-1 bg-red-200 font-bold text-sm rounded-full px-1">
              {" "}
              {cart.length}
            </p>
          </button>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-16 h-16">
          {products.map((product) => (
            <div className="bg-red flex flex-center flex-col border-t-2 p-4">
              <img className="h-1/2" src={product.image} />
              <div className="flex text-white bg-gray-200 p-4 justify-between mt-8">
                <h3 className="font-bold text-center text-gray-800">
                  {product.name}
                </h3>
                <h4 className="font-bold text-center text-gray-800 bg-yellow-200 rounded-md p-0.5">
                  {product.cost}
                </h4>
              </div>
              <button
                className="bg-red-500 font-bold text-white w-full p-4"
                onClick={() => addCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
