/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        proyectColor: {
          yellow:"#FCCF58",
          yellowOpac: "#6F5308",
          blackOpac: "#232323",
        }
      }
    },
  },
  plugins: [],
}

