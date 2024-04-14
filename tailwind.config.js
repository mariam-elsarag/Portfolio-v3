/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Black: "#060606",
        headingColor: "#142B43",
        Gray: "#A7A7A7",
        Blue: "#13B0F5",
        Pink: "#E70FAA ",
        lightBlack: "#222228",
        white: "#fafbf9",
        darkBlue: "#142B43",
        lightGold: "#DEC2BA",
      },
      boxShadow: {
        lightModeShadow: "0 0 10px rgba(0,0,0,0.1)",
        darkModeShadow: "0 0 6px rgba(255,255,255,.1)",
      },
      fontFamily: {
        primary: ["Poppins", " sans-serif"],
        navFont: ["DM Sans", " sans-serif"],
      },
    },
  },
  plugins: [],
};
