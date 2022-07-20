/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          800: "#171717",
          900: "#080808",
        },
      },
    },
  },
  plugins: [],
};
