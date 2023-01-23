/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      colors: {
        yellow: "#fdda00",
        green: "#0eff86",
        red: "#ff0708",

        white: "#fff",
        black: "#000",
      },
    },
    fontFamily: {
      "akzidenz-grotesk": ["akzidenz-grotesk", "sans-serif"],
      "studio-feixen-sans-variable": [
        "Studio Feixen Sans Variable",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
