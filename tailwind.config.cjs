const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [forms, typography],
};

module.exports = config;
