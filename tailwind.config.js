/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{pug,js}"],
  theme: {
    extend: {
      spacing: {
        3.25: "0.813rem",
        3.75: "0.938rem",
        5.25: "1.3125rem",
        7.5: "1.875rem",
        8.75: "2.1875rem",
        11.25: "2.8125rem",
        15: "3.75rem",
        17.5: "4.375rem",
        22.75: "5.6875rem",
        25: "6.25rem",
        30: "7.5rem",
        31.25: "7.813rem",
        32.5: "8.125rem",
        42.5: "10.625rem",
      },
      fontFamily: {
        stolzl: "Stolzl",
        reformagrotesk: "ReformaGrotesk",
      },
      fontSize: {
        base: ["1rem", "140%"],
        lg: ["1.125rem", "140%"],
        "2xl-90": ["1.5rem", "90%"],
        "2xl": ["1.5rem", "1.75rem"],
        "4xl": ["2.25rem", "90%"],
        "5.25-5xl": ["3.375rem", "90%"],
        "8xl": ["6rem", "90%"],
        "9.75xl": ["8.75rem", "90%"],
        "14.75xl": ["13.75rem", "90%"],
      },
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
      blue: "#20609F",
      "green-dark": "#575B41",
      brown: "#5A3814",
    },
    screens: {
      // xl: "1200px",
      xl: "1440px",
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1920px",
        // lg: "1440px",
        xl: "1920px",
      },
      // sm: "100%",
      padding: {
        DEFAULT: "20px",
        lg: "100px",
        xl: "100px",
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 20px",
          marginRight: "auto",
          marginLeft: "auto",
          "@screen xl": {
            maxWidth: "1920px",
            padding: "0 40px",
          },
        },
        ".container-100": {
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "100%",
          padding: "0 20px",
          "@screen xl": {
            maxWidth: "1920px",
            padding: "0 100px",
          },
        },
        ".container-195": {
          maxWidth: "100%",
          padding: "0 20px",
          marginRight: "auto",
          marginLeft: "auto",
          "@screen xl": {
            maxWidth: "1920px",
            padding: "0 195px",
          },
        },
      });
    },
  ],
};
