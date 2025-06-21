/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rounded: ['"Arial Rounded MT Bold"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
