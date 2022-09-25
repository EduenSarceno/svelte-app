<script>
import { base } from '$app/paths';
import { goto } from '$app/navigation';
import Pager from '$lib/components/Pager.svelte';
import Post from './Post.svelte';

export let data;

let posts = [];
let pager = {};
let hasData = false;

$: init(data.data);

function init(res) {
  if (!res) {
    hasData = false;
    return
  }
  const { posts: postPage } = res;
  posts = postPage.rows;
  pager = {
    length: postPage.length,
    pages: postPage.pages,
    page: postPage.page
  };
  hasData = postPage.length > 0
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
