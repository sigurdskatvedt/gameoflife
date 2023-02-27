/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("../../packages/config/tailwind.config"),
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
}
