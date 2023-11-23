/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#121212",
        lightDark: "#171717",
        shade: "#F8F8F8",
      },
      textColor: {
        disable: "#CECECE",
        primary1:"#0A0A0A",
      },
      colors: {
        primary: "#F72585",
        grey: "#8F92A1",
        greyText: "#595959",
        greyText2: "#505050",
        textBlack: "#010101",
        field: "rgba(255, 255, 255, 0.05)",
        lightWhite: "rgba(255, 255, 255, 0.6)",
        btnFrom: "rgba(255, 61, 0, 0.88)",
        btnTo: "rgba(228, 41, 130, 0.85)",
        cardFrom:"rgba(228, 41, 130, 0.35)",
        cardTo:"rgba(90, 24, 154, 0.35)",
        red:'#DE350B',
        green:"#00875A",
        blue:"#0052CC",
        sharpGreen:"#1EFF86",
        barColor:"#D9D9D9"
      },
      boxShadow: {
        form: "80px 120px 504px 0px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
