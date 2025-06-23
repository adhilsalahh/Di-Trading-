/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rounded: ['"Arial Rounded MT Bold"', 'Arial', 'sans-serif'],
      },
      animation: {
        'scroll-brands': 'scroll-brands 10s linear infinite',
      },
      keyframes: {
        'scroll-brands': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};