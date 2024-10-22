/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "6xl": ["72px", "87px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        primary: "#E0F7FA",
        "button-color": "#9E1638",
        "text-color": "#6D6D6D",
        "background-alt": "#FFF3EA",
        "overlay-white": "rgba(224, 247, 250, 0.80)",
        "footer-color": "#00838F",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        banner: "url('assets/images/bg-slider-1-2')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
