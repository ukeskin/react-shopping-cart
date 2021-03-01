import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [page, setPage] = useState([PAGE_PRODUCTS]);
  const [cart, setCart] = useState([]);
  const removeFromCart = (productToremove) => {
    setCart(cart.filter((product) => product !== productToremove));
  };
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };
  const clearCart = () => {
    setCart([]);
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

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
      {page == PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page == PAGE_CART && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      )}
    </div>
  );
}

export default App;
