module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#bfb8b8" },
        black: { 900: "#000000" },
        red: { 700: "#cb3727" },
        white: { A700_01: "#fdfdfd", A700: "#ffffff" },
        yellow: { 50: "#fffaea" },
        deep_orange: { 400: "#f58634" },
      },
      fontFamily: { criteriacf: "Criteria CF", inter: "Inter", plain: "Plain" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
