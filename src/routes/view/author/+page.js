import { match as isUUID } from '$lib/uuid.js';
import { error } from '@sveltejs/kit';
import * as api from '$lib/api.js';
import query from './query.graphQL?raw';

export const ssr = false;

export function load({ url, fetch})
{
  const id = url.searchParams.get('id');
  if (!isUUID(id)) {
    return {
      errors: [{
        message: 'id is not a valid UUID'
      }]
    }
  }

  let ret = api.fetch({
    query,
    variables: { id },
    operationName: 'GetAuthor'
  }, fetch);
  return ret;
}
