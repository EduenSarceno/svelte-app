<script>
import { base } from '$app/paths';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { GROUP, ORDER } from '$lib/api.js';
import Pager from '$lib/components/Pager.svelte';
import Errors from '$lib/components/Errors.svelte';
import Options from './Options.svelte';
import Post from './Post.svelte';
import Group from './Group.svelte';

let url;
$: url = $page.url;

let res;
export { res as data };
$: init(res);

let data;
let pager;
let options;
let posts;
let groups;

function init() {
  data = res.data;
  options = {
    group: res.group,
    order: res.order,
  };
  pager = {
    page: res.page,
    pages: 1
  };
  if (data) {
    posts = data.posts;
    groups = data.groups;
  }
  if (data && posts) {
    pager.pages = posts.pages;
  }
}

function changePage(e) {
  changeParamAndGo('page', e.detail);
}

function onOrder(e) {
  changeParamAndGo('order', e.detail);
}

function onGroup(e) {
  changeParamAndGo('group', e.detail);
}

function onOld(e) {
  changeParamAndGo('old', e.detail);
}

function changeParamAndGo(param, value) {
  let url = makeURL(function(query){
    query.set(param, value);
  });
  goto(url, {
    noScroll: false
  });
}

function makeURL(cb) {
  let $url = new URL(url);
  let params = $url.searchParams;
  cb(params);
  return $url;
}

</script>
<div>
<pre>
</pre>
</div>
<!--Errors {errors} / -->
<div class="flex flex-row flex-wrap my-4 mx-2 justify-center">
<section class="grow md:grow-0 md:w-9/12">
  <div class="block text-right">
    <Options {...options} on:order={onOrder} on:group={onGroup} on:old={onOld} />
  </div>
{#if posts && !groups}
{#each posts.rows as post}
  <Post {...post} />
{/each}
{/if}
{#if groups}
<Group {groups}/>
{/if}
{#if posts || groups}
  <div class="block text-center">
    <Pager {...pager} on:change="{changePage}" />
  </div>
{:else}
<article class="p-4">
  <div class="alert alert-info shadow-lg my-8">
    <h3 class="text-xl">Sin resultados...</h3>
  </div>
  <a class="btn btn-primary" href="{base}/posts/">Volver</a>
</article>
{/if}
</section>
</div>
