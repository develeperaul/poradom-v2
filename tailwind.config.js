/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        5.25: "1.3125rem",
        7.5: "1.875rem",
        8.75: "2.1875rem",
        11.25: "2.8125rem",
        17.5: "4.375rem",
        22.75: "5.6875rem",
        42.5: "10.625rem",
        25: "6.25rem"
      },
      fontFamily: {
        stolzl: "Stolzl",
        reformagrotesk: "ReformaGrotesk",  
      },
      fontSize: {
        '8xl': ['6rem', '90%'],
        '9.75xl': ["8.75rem", "7.875rem"]
      }
    },
    colors: {
      white: "#ffffff",
      yellow: "#F7941D",
      title: "#231F20",
      dark: "#3F3F3F",
      background: "#292929",
      gray: "#98999D",
      red: "#A61C20",
      bordeaux: "#6B0A10",
    },
    screens: {
        xl: "1200px",
      },
    container: {
        DEFAULT: "1920px",
        center: true,
        screens: {
          DEFAULT: "100%",
          xl: "1920px",
        },
        // sm: "100%",
        padding: {
          DEFAULT: "20px",
          xl: "100px",
        },
      },  
  },
   
  plugins: [],
}
