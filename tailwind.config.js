/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15110E",
        cream: "#F8F1E7",
        paper: "#FFFDF9",
        brick: "#8F241C",
        "brick-dark": "#671813",
        amber: "#D49A3A",
        "amber-light": "#E9C878",
        olive: "#4E5B45"
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(31, 20, 14, .10)",
        card: "0 14px 36px rgba(31, 20, 14, .08)"
      }
    }
  },
  plugins: []
};