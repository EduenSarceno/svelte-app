<script>
import { GROUP } from '$lib/api.js';
import { base } from '$app/paths';

export let groups;
</script>

<article tabindex="0" class="flex flex-col">
{#each groups as g}
<div class="divider">{g.name}</div>
{#each g.rows as row}
<div class="bg-base-300 rounded border border-neutral mt-4 p-4">
  <h1 class="text-lg border-b-2 my-border">{row.name}</h1>
  {#each row.posts as post, i}
  <div class="flex flex-col md:flex-row justify-between mt-2 gap-2">
    <a href="{base}/view/post/?id={post.id}" class="link link-hover grow">
      <h2 class="text-xl">
        <span class="badge badge-primary mr-2">#{i + 1}</span>
        {post.title}
      </h2>
    </a>
    <span class="mr-4">by:
      <a href="{base}/view/author/?id={post.author.id}" class="link mr-4">{post.author.name}</a>
    </span>
    <div class="inline-flex flex-row gap-2">
    {#each post.categories as category}
      <span class="badge badge-md">{category.name}</span>
    {/each}
    </div>
  </div>
  {/each}
</div>
{/each}
{/each}
</article>
<style>
.my-border {
  border-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
</style>
