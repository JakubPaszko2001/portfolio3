/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#323234",
        light: "#F6F6F6",
      },
    },
    fontFamily: {
      main: ["Old Standard TT"],
      second: ["Poiret One"],
    },
  },
  plugins: [],
};
