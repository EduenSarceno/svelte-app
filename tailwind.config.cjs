const daisyUI = require('daisyui')
const typography = require('@tailwindcss/typography')
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
  plugins: [ daisyUI, typography ],
  daisyui: {
    themes: [ siteTheme ]
  }
};
