import { match as isUUID } from '$lib/uuid.js';
import * as api from '$lib/api.js';
import query from './query.graphQL?raw';

export const ssr = false;

export function load({ url })
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
    operationName: 'GetPost'
  });
  return ret;
}
