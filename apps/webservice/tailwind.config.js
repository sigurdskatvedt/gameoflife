/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require("../../packages/config/tailwind.config"),
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
}
