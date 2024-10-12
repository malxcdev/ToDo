/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins","sans-serif"]
      },
      backgroundColor:{
        primary: '#000'
      },
      colors:{
        primary: '#fff'
      }
    },
  },
  plugins: [],
}

