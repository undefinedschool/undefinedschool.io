const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
  preset: 'default'
});
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./dist/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    cssnano,
    purgecss
    //...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
};
