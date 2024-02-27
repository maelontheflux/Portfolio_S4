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
      "base": "1.375rem",//22px
      "lg": "1.625rem",//26px
      "xl": "4.375rem",//70px
      "2xl": "8.1875rem"//131px
    },
    fontFamily: {
      "uncut-sans": "Uncut Sans"
    },
    extend: {},
  },
  plugins: [],
}

