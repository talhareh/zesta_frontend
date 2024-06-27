/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray': '#0e1111',
        'icon-color':'#D7FE03'
      }
    },
  },
  plugins: [],
}

