const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./dist/index.html']
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, purgecss]
};
