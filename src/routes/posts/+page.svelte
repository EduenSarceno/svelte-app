<script>
import Post from './Post.svelte';
export let data;

let posts = data && data.data && data.data.posts.rows || [];
</script>

{#if posts.length === 0}
No hay información... :(
{:else}
  {#each posts as post}
    <Post {...post} />
  {/each}
{/if}
