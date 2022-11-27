/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      maxPhone: { raw: "(max-width: 700px)" },
      maxSmallPhone: { raw: "(max-width: 400px)" },
      sm: "480px",
      "1sm": "650px",
      md: "768px",
      lg: "976px",
      "1lg": "1024px",
      "2lg": "1124px",
      "3lg": "1280px",
      xl: "1440px",
      "1xl": "1540px",
    },
    fontSize: {
      xxs: ".5rem", //8px
      xs: ".75rem", //12px
      tiny: ".875rem", //14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      "2xl": "1.5rem", //24px
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      white: "white",
      yellow: "yellow",
      red: "red",
      blue: "blue",
      green: "#9BC368",
      warning: "#A52C38",
      "user-screen": "#FF9619",
      "primary-one": "#EB5A3C",
      "primary-two": "#FFB65E",
      "primary-three": "#6E1946",
      "primary-four": "#0F2837",
      "main-text": "#0F2837",
      "sub-text": "#829098",
      "tip-text": "#9BC368",
    },
    backgroundColor: {
      transparent: "transparent",
      white: "white",
      blue: "blue",
      green: "#9BC368",
      warning: "#A52C38",
      "user-screen": "#FF9619",
      "primary-one": "#EB5A3C",
      "primary-two": "#FFB65E",
      "primary-three": "#6E1946",
      "primary-four": "#0F2837",
      "input-background": "#F4F8F8",
      "table-line": "#ECEFEF",
      "table-line-two": "#FAFBFB",
      "btn-gray": "rgba(14,40,55,5%)",
      "modal-bg": "rgba(14,40,55,50%)",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    borderColor: {
      transparent: "transparent",
      warning: "#A52C38",
      green: "#9BC368",
      blue: "blue",
      color: "#CFD4D7",
      orange: "#FF9619",
      "devider-color": "rgb(207 212 215 /0.3)",
      "input-color": "#3F535F",
    },
    borderWidth: {
      1: "1px",
    },
    extend: {
     
      boxShadow: {
        "orange-shadow": "0 0 40px 0px rgba(235, 90, 60, 0.1)",
        purple: "0 0 32px 8px rgba(110, 25, 70, 0.1)",
        dark: "0 0 40px 0px rgba(14, 40, 55, 0.10)",
        "dark-2": "0 0 34px 0px rgba(14, 40, 55, 0.10)",
        "dark-3": "0 0 40px -5px rgb(14, 40, 55, 0.15)",
        "dark-4": "0 14.5px 16px 0px rgb(15, 40, 55, 0.20)",
        "dark-5": "0 0 32px 0px rgba(0, 0, 0, 0.10)",
        "dark-6": "2px 0 8px 0px rgba(14, 40, 55, 0.15)",
        "dark-7": "0px 4px 40px 0px rgba(15, 40, 55, 0.1)",
        "table-head-dark": "0 0 8px 0px rgba(14, 40, 55, 0.1)",
        "table-line-hovered-one": "0px 0 7px 4px rgba(235, 90, 60, 0.25)",
        "table-line-hovered-two": "0px 0 7px 4px rgba(255, 182, 94, 0.25)",
        "table-line-hovered-three": "0px 0 7px 4px rgba(110, 25, 70, 0.25)",
        "table-line-hovered-four": "0px 0 7px 4px rgba(15, 40, 55, 0.25)",
      },
      dropShadow: {
        hlel: "0px 0px 30px rgba(236, 232, 233, 0.48)",
        iron: [
          "0 8px 6px rgba(121,109,109,0.35)",
          "0 0px 30px rgba(236,232,233,0.48)",
        ],
        silver: [
          "0 4px 61px rgba(171,255,240,0.33)",
          "0 0 20px rgba(142,222,239,0.4)",
        ],
        silver2: [
          "0 4px 40px rgba(171,255,240,0.1)",
          "0 0 20px rgba(142,222,239,0.3)",
        ],
        gold: [
          "0 -4px 40px rgba(255,191,171,0.20)",
          "0 0px 8px rgba(239,177,142,1)",
        ],
      },
    },
  },
  plugins: [],
};
