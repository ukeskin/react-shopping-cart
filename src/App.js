import React, { useState } from "react";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState([PAGE_PRODUCTS]);
  const [products] = useState([
    {
      name: "Headphones v2",
      cost: "$22.99",
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Headphones v1",
      cost: "$12.99",
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Headphones v1",
      cost: "$12.99",
      image:
        "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Headphones v1",
      cost: "$12.99",
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
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
                  {product.cost}
                </h1>
                <button
                  onClick={() => addCart(product)}
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

  const renderCart = () => (
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
                  {product.cost}
                </h1>
                <button
                  onClick={() => addCart(product)}
                  className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div>
      <header className="flex justify-between bg-red-400 p-4 text-white">
        <button onClick={() => navigateTo(PAGE_PRODUCTS)} className="">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
        <button onClick={() => navigateTo(PAGE_CART)} className="font-bold">
          <svg
            className="w-8 h-8"
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
          <span className="absolute top-2 right-3 bg-red-600 rounded-full p-0.5">
            {cart.length}
          </span>
        </button>
      </header>
      {page == PAGE_PRODUCTS && renderProducts()}
      {page == PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
