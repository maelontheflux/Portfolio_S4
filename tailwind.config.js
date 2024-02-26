/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "secondary-white": "#edeae6",
      "main-black": "#141414",
      "dynamic-gray": "#333333"
    },
    fontSize: {
      "base": "1.375rem",
      "lg": "3.5rem",
      "xl": "5rem",
      "2xl": "8.1875rem"
    },
    fontFamily: {
      "uncut-sans": "Uncut Sans"
    },
    extend: {},
  },
  plugins: [],
}

