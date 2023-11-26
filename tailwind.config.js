/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
  ],
};
