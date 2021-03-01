import React, { useState } from "react";

export default function Cart({ cart, removeFromCart, clearCart }) {
  const getTotal = () => {
    return Math.round(cart.reduce((sum, { cost }) => sum + cost, 0));
  };

  return (
    <>
      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="w-full px-3 py-5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase"
        >
          Clear
        </button>
      )}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 w-full h-16 p-4">
        {cart.map((product, idx) => (
          <div className="py-6" key={idx}>
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                className="w-1/3  "
                style={{ backgroundImage: `url('${product.image}')` }}
              ></div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {product.name}
                </h1>
                <div className="flex item-center mt-2"></div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    ${product.cost}
                  </h1>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="fixed left-0 bottom-0 flex justify-center font-bold bg-gray-200 w-screen p-6 text-red-500">
          Total Cost: ${getTotal()}
        </div>
      </div>
    </>
  );
}
