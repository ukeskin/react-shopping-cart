import React, { useState } from "react";

export default function Products({ addToCart }) {
  const [products] = useState([
    {
      name: "Headphones v0",
      cost: 2.99,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Headphones v1",
      cost: 12.99,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Headphones v2",
      cost: 14.99,
      image:
        "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Headphones v3",
      cost: 16.99,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ]);

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-8 w-full h-16 p-4">
      {products.map((product, idx) => (
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
                  onClick={() => addToCart(product)}
                  className="px-3 py-2 bg-red-400 hover:bg-red-500 text-white text-xs font-bold uppercase rounded"
                >
                  Add to Card
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
