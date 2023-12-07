/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: "#5D5C61",
      lBlue: "#2395AE",
      blue: "#557A95",
      brown: "#B1A296",
      gray: "#ADADAD",
      red: "#FF0000",
      white: "#F5F5F5",
      black: "#000",
    },
  },
  plugins: [],
};
