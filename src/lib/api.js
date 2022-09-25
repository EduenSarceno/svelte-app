import config from './config.js';
import { error } from '@sveltejs/kit';

const { API_BASE } = config;

export { apiFetch as fetch };

function apiFetch(graphQL) {
  const req = fetch(API_BASE, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(graphQL)
  });

  const data = (async function getData() {
    let res = await req;
    if (res.status !== 200) {
      res = {
        errors: [{ message: 'API no disponible' }],
        data: null
      }
      return res;
    }
    return res.json();
  }());
  return data;
}
