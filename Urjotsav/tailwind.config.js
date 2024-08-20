/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        Sankofa:["Sankofa Display","sans-serif"],
        Megrim:["Megrim","sans-serif"],
        Jost:["Jost","sans-serif"]
      }
    },

  },
  plugins: [],
}

