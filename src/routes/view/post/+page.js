import { match as isUUID } from '$lib/uuid.js';
import { error } from '@sveltejs/kit';

export const ssr = false;

export function load({ url })
{
  const id = url.searchParams.get('id');
  if (!isUUID(id)) {
    throw error(404, 'not a post');
  }
  return { id };
}
