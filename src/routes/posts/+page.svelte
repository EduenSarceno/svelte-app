<script>
import { base } from '$app/paths';
import Pager from '$lib/components/Pager.svelte';
import Post from './Post.svelte';

export let data;
$: res = data.data;

function changePage(ev) {
  const page = ev.detail;
  console.log('changedPaged:' + page)
}
</script>

{#if res}
{#each res.posts.rows as post}
  <Post {...post} />
{/each}
  <Pager {res} on:changePage="{changePage}"/>
{:else}
<article class="p-4">
  <div class="alert alert-info shadow-lg">
  <span>Sin resultados...</span>
  </div>
</article>
{/if}
