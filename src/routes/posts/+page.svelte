<script>
import { base } from '$app/paths';
import { goto } from '$app/navigation';
import Pager from '$lib/components/Pager.svelte';
import Post from './Post.svelte';
import Errors from '$lib/components/Errors.svelte';

export let data;

let posts = [];
let pager = {};
let hasData = false;
let errors;

$: init(data);

function init(res) {
  hasData = false
  if (!res) {
    return;
  } else if (res.errors) {
    errors = res.errors;
    return
  }
  res = res.data
  const { posts: _posts } = res;
  posts = _posts.rows;
  pager = {
    length: _posts.length,
    pages: _posts.pages,
    page: _posts.page
  };
  hasData = _posts.length > 0
}

function changePage(e) {
  e.preventDefault()
  const page = e.detail;
  const url = new URL(location.href);
  const params = url.searchParams;
  params.set('page', page);
  goto(url);
}

</script>
<Errors {errors} />
<div class="flex flex-row flex-wrap my-4 mx-2 justify-center">
<section class="grow md:grow-0 md:w-9/12">
{#if hasData }
{#each posts as post}
  <Post {...post} />
 {/each}
  <div class="block text-center">
    <Pager {...pager} on:changePage="{changePage}"/>
  </div>
{:else}
<article class="p-4">
  <div class="alert alert-info shadow-lg my-8">
    <h3 class="text-xl">Sin resultados...</h3>
  </div>
  <a class="btn btn-secondary" href="{base}/posts/">Volver</a>

</article>
{/if}
</section>
</div>
