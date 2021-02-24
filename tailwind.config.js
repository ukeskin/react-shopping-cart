module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      "screen/2": "calc(100vh / 2)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
