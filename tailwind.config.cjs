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
          700: '#6C84F0',

        }
      }
    },
  },
  plugins: [],
}
