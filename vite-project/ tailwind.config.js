const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
