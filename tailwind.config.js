const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        serif: ["Inter", ...fontFamily.serif],
      },
      colors: {
        gray: colors.blueGray,
        green: colors.emerald,
        red: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
