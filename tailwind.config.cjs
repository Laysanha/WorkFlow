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
          700: '#5C73DB',
        }
      }
    },
  },
  plugins: [],
}
