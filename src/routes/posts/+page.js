export const ssr = false;
import { match as isUUID } from '$lib/uuid.js';
import * as api from '$lib/api.js';
import { error, redirect } from '@sveltejs/kit';
import getPosts from './getPosts.graphQL?raw';
import getGrouped from './getGrouped.graphQL?raw';
import config from '$lib/config.js';

const {
  limits: {
    posts: LIMIT_POST,
    group: LIMIT_GROUP
  }
} = config.api;
const {
  GROUP,
  ORDER
} = api;

export async function load({ url }) {
  const { author, old, page, group, order} = normalizeOrRedirectURL(url);

  const options = Object.create(null);
  // We're assuming that posts can be sorted by it's UUIDs
  options.order = [['id', old ? 'ASC' : 'DESC']];
  options.page = page;

  options.limit = LIMIT_POST;
  if (group) {
    options.limit = LIMIT_GROUP
  }

  if (author) {
    options.where = {
      authorId: author
    };
  }

  let req = {}
  req.variables = { options }
  req.query = getPosts
  req.operationName = 'GetPosts'
  if (group) {
    req.query = getGrouped
    req.operationName = 'GetGroupedPosts'
  }

  let data = await api.fetch(req);
  if (group) {
    // First we need to map and sort the data before passing the data to the
    // svelte component (or we are fuck)
    applyGroupLogic(data, group, order);
  }
  Object.assign(data, {page, old, order, group});
  return data;
}

function normalizeOrRedirectURL(url) {
  const _url = new URL(url);
  const { searchParams: search } = _url;

  /* We have 1 search param
  *     ?author=uuid
  *  And 4 options (no exclusive)
  *     ?old=1
  *     ?page=number
  *     ?group=GROUP
  *     ?order=ORDER (only if group is present)
  */
  const author  = search.get('author');
  if (!(author === null  || isUUID(author))) {
    throw error(404, 'not an author');
  }

  var old = search.get('old');
  if (old === null || isNaN((old = +old))) {
    old = 0;
  } else if (![0, 1].includes(old)) {
    old = 0;
  }

  var page = search.get('page');
  if (page === null || isNaN((page = +page))) {
    page = 1;
  } if (page < 1) {
    page = 1;
  }

  var group = search.get('group');
  if (!(group === null || inEnum(GROUP, (group = +group)))) {
    group = GROUP.NONE;
  } else if (group === null) {
    group = GROUP.NONE;
  }

  var order = search.get('order');
  if (!(order === null || inEnum(ORDER, (order = +order)))) {
    order = ORDER.ASC;
  } else if (order === null) {
    order = ORDER.ASC;
  }

  //We must normalize the urls for SEO purpose
  search.set('page', page);
  search.set('old', old);
  search.set('group', group);
  search.set('order', order)
  if (old === 0) {
    search.delete('old');
  }
  if (group === 0) {
    search.delete('group');
    search.delete('order');
  }

  if (_url.toString() !== url.toString()) {
    // it's better a temporal redirection
    throw redirect('302', _url);
  }
  return { author, old, page, group, order };
}

function applyGroupLogic(response, group, order) {
  const sortByName = (a, b) => !!order ? (b.name < a.name) : (b.name > a.namme);
  let rows, data = response.data;
  if (data && group == GROUP.CATEGORY) {
    let posts = data.posts;
    let categories = {};
    for(let post of posts.rows) {
      for (let cat of post.categories) {
        let { id, name } = cat;
        if (id in categories) {
          categories[id].posts.push(post)
        } else {
          categories[id] = { id, name, posts: [post] };
        }
      }
    }
    rows = Object.values(categories).sort(sortByName);
  } else if (data && group === GROUP.AUTHOR) {
    let posts = data.posts;
    let authors = {};
    for (let post of posts.rows) {
      let author = post.author;
      let { id, name } = author;
      if (id in authors) {
        authors[id].posts.push(post)
      } else {
        authors[id] = {id, name, posts: [post] };
      }
    }
    rows = Object.values(authors).sort(sortByName);
  }
  // Once here we can group one level more
  let groups = {};
  for (let row of rows) {
    let { name } = row;
    name = name.toUpperCase();
    let group = name[0];
    if (group in groups) {
      groups[group].rows.push(row);
    } else {
      groups[group] = {name: group, rows: [row]}
    }
  }
  data.groups = Object.values(groups).sort(sortByName);
}

function inEnum(obj, value) {
  return Object.values(obj).includes(value);
}
