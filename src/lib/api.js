import config from './config.js';
import { error } from '@sveltejs/kit';

export const GROUP = {
  NONE: 0,
  AUTHOR: 1,
  CATEGORY: 2
};

export const ORDER = {
  ASC: 0,
  DESC: 1
};

export { apiFetch as fetch };
function apiFetch(graphQL) {
  const { API_BASE } = config;
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
