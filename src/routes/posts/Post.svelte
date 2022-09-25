<script>
import Avatar from '$lib/components/Avatar.svelte';
import { safeBody } from './functions.js'
import { base } from '$app/paths';

export let title;
export let body;
export let author;
export let id;
export let categories;
export let reactions;

</script>

<article tabindex="0" class="bg-base-300 text-base-content rounded border border-neutral mt-4">
  <div class="flex items-center justify-center sm:float-left">
    <Avatar name={author.name} />
  </div>
  <div class="flex flex-col mx-4">
    <a href="{base}/view/post/?id={id}" class="link link-hover basis-full sm:flex-auto">
    <h1 class="text-xl font-extrabold my-2">{title}</h1>
    </a>
    <div class="basis-full overflow-y-auto">{safeBody(body)}</div>
    <div class="my-2 text-sm basis-full text-right inline-flex gap-2 justify-between md:justify-start">
      <div class="tooltip" data-tip="Reactions">
      <span class="badge badge-primary gap-2">
        <span class="fa-solid fa-thumbs-up"></span>&nbsp;{reactions}
      </span>
      </div>
      <p>
       by:&nbsp;<a href="{base}/view/author/?id={author.id}" class="link"><span class="font-bold">{author.name}</span></a>
      </p>
    </div>

  <div class="text-left my-2 text-bg-300 sm:text-right">
    {#each categories as tag}
    <span class="badge badge-lg badge-ghost gap-2 mr-2">
      <span class="fa-solid fa-tag"></span>
      {tag.name}
    </span>
    {/each}
  </div>

  </div>
</article>
