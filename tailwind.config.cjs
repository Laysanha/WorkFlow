/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleBlue: {
          900: '#4763E4',
          800: '#5C73DB',
          200: '#C0CCFF',
          100: '#D2DAFF',
        }
      }
    },
  },
  plugins: [],
}
