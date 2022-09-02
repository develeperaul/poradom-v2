module.exports = {
  plugins: [
    "postcss-import",
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    ,
    require("autoprefixer"),
  ],
};
