const { Content } = require("@angular/compiler/src/render3/r3_ast");

module.exports = {
  purge: ["./src/**/*.{ts,tsx}", "./src/**/*.js", "./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "visited"],
    opacity: ["responsive", "hover", "focus", "disabled"],
    borderWidth: ["responsive", "first", "hover", "focus"],
    margin: ["responsive", "hover"],
    extend: {},
  },
  plugins: [],
};
