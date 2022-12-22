module.exports = {
  content: [
    "../../node_modules/flowbite-react/**/*.js",
    "../../packages/ui/components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("../../node_modules/flowbite/plugin.js")],
  theme: {
    extend: {},
  },
};
