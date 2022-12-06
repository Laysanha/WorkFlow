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
          900: '#5C73DB',
        }
      }
    },
  },
  plugins: [],
}
