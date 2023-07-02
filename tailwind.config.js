/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/main.js",
    "./js/data.json",
    "./index.html",
    "./crew.html",
    "./destination.html",
    "./technology.html",
  ],
  theme: {
    fontFamily: {
      condensed: '"Barlow Condensed", sans-serif',
      bellefair: "Bellefair, serif",
      barlow: "Barlow, sans-serif",
    },
    extend: {
      screens: {
        lg: "1440px",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        showFromTop: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rotate: "rotate 2s infinite ease-in-out",
        showFromTop: "showFromTop 1.5s",
      },
    },
  },
  plugins: [],
};
