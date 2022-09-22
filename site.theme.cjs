const themes = require('daisyui/src/colors/themes');

module.exports = {
  '[data-theme=theme-site]': {
    ...themes['[data-theme=dark]'],
    'base-100': '#29354d',
    'base-200': '#232F43',
    'base-300': '#1C2535',
    'primary': '#111318',
    'base-content': '#FFF',
    'neutral-content': '#FFF',
    'primary-content': '#FFF',
    'primary-focus': '#661AE6'
  }
};
