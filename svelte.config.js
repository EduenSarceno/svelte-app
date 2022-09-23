import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    trailingSlash: 'always',
    paths: {
      /**
       * Modificar al subir al servidor
       * Ej: {
       *  base '/svelte-app',
       *  assets: 'https://eduensarceno.github.io/svelte-app'
       * }
       */
    }
  },
  preprocess: [
    preprocess({ postcss: true })
  ]
};

export default config;
