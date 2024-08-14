/** @type {import('tailwindcss').Config} */
const Config = require('./src/renderer/src/config/env')
const colors = require('tailwindcss/colors')
const { theme } = Config
module.exports = {
  content: ["./src/renderer/src/index.html","./src/renderer/src/**/*.{html,jsx,tsx,ts,js}"],
  prefix: "tw-",
  theme: {
    colors: {
      ...colors,
      primary: theme.primaryColor
    },
    extend: {},
  },
  plugins: [],
}

