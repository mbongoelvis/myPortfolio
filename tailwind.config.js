/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#10172a",
        secondary: "#0b1121",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow1": "bounce 2.4s linear infinite",
        "bounce-slow2": "bounce 2.5s linear infinite",
        "bounce-slow3": "bounce 2.6s linear infinite",
        "bounce-slow4": "bounce 2.7s linear infinite",
      },
    },
  },
  plugins: [],
};

