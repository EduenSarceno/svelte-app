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
    },
    minWidth: {
      '7/12': '58.3%',
      'full': '100%'
    }
  },
  plugins: [ daisyUI, typography ],
  daisyui: {
    themes: [ siteTheme ]
  }
};
