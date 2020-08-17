const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true
      }
    }
  ]
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, cssnano]
};
