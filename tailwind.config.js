/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontSize: {
      ssm: '0.4rem' // Small font for number of receipts bookmarked
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        header: '0.5em' // Special letter spacing for RecipeBox title
      },
    },
  },
  plugins: [],
}

