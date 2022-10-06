/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {
      fontFamily: {
        neue: ["Bebas Neue", "sans-serif"],
        kaushan: ["Kaushan Script", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
