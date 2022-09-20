const themes = require('daisyui/src/colors/themes');

module.exports = {
  'data-theme=site-theme': {
    ...themes['data-theme=dark'],
    'base-100': '#29354d',
    'base-200': '#232F43',
    'base-300': '#1C2535',
    'base-content': '#FFF',
    'neutral-content': '#FFF'
  }
};
