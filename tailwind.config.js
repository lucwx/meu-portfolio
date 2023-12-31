/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/components/*.vue",
    "./src/views/*.vue",
    "./*.html",
    "./src/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        shark: "#100f0f",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
