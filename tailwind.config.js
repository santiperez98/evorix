/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#111111',
        'aqua': '#00b8a9',
        'light': '#ffffff',
        'gray-light': '#f4f4f4',
      },
      fontFamily: {
        logo: ["'Exo 2'", "sans-serif"],       // para tu logo
        orbitron: ["Orbitron", "sans-serif"],  // para títulos / slogans
        sans: ["'Exo 2'", "sans-serif"],       // para párrafos (sobreescribe font-sans)
      },
    },
  },
  plugins: [],
};
