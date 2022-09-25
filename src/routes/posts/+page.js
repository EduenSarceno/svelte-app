export const ssr = false;
import { match as isUUID } from '$lib/uuid.js';
import * as api from '$lib/api.js';
import { error, redirect } from '@sveltejs/kit';
import query from './query.graphQL?raw';
import config from '$lib/config.js';

const GROUP = {
  NONE:   0,
  CAT:    1,
  AUTHOR: 2
};

export async function load({ url }) {
  const _url = new URL(url);
  const { searchParams: search } = _url;

  /* We have 1 search param
  *     ?author=uuid
  *  And 3 options (no exclusive)
  *     ?old=1
  *     ?page=number
  *     ?group=GROUP
  */
  const author  = search.get('author');
  if (author && !isUUID(author)) {
    throw error(404, 'not an author');
  }

  var old = search.get('old');
  if (old && isNaN((old = +old))) {
    old = 0;
  } else if (![0, 1].includes(old)) {
    old = 0;
  }

  var page = search.get('page');
  if (page && isNaN((page = +page))) {
    page = 1;
  } if (!page || page < 1) {
    page = 1;
  }

  var group = search.get('group');
  if (group && !(group in GROUP)) {
    group = GROUP.NONE;
  }

  //We must normalize the urls for SEO purpose
  search.set('page', page);
  if (old === 0) search.delete('old');
  if (group === 0) search.delete('group');
  let normURL = _url.toString();
  if (normURL !== url.toString()) {
    throw redirect('301', normURL.toString());
  }

  const options = Object.create(null);
  if (author) {
    options.where = {
      authorId: author
    };
  }
  // We're assuming that posts can be sorted by it's UUIDs
  options.order = [['id', old ? 'ASC' : 'DESC']];
  options.page = page;

  let data = await api.fetch({
    query,
    variables: { options },
    operationName: 'GetPosts'
  });
  populatePage(data.data, page);
  return data;
}

function populatePage(data, page) {
  data.posts.page = page
}
