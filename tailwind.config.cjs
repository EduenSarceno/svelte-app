const daisyUI = require('daisyui')
const siteTheme = require('./site.theme.cjs')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui']
    }
  },
  plugins: [ daisyUI ],
  daisyui: {
    themes: [ siteTheme ]
  }
};
