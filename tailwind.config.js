/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "stars-gold": "#CC9F2C",
        "stars-black": "#000000",
        "stars-bg": "#FAFAFA",
        "stars-card-bg": "#F5F5F5",
        "stars-text": "#000000",
        "stars-secondary": "#666666",
        "desert-gold": {
          50: "#fefdf6",
          100: "#fdf9e8",
          200: "#fbf2c5",
          300: "#f8e797",
          400: "#f4d665",
          500: "#CC9F2C",
          600: "#b8912a",
          700: "#98762f",
          800: "#7c612c",
          900: "#664d24",
        },
      },
      fontFamily: {
        arabic: ["Tajawal", "Arial", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
