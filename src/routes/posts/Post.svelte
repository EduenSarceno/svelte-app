<script>
import { safeBody, authorColor } from './functions.js'
import { base } from '$app/paths';

export let title;
export let body;
export let author;
export let id;
export let categories;
export let reactions;

$: body = safeBody(body)
$: author.color = authorColor(author)

</script>

<article tabinde="0" class="flex flex-row bg-base-300 text-base-content rounded border border-neutral align-middle mt-4">
<div class="grow">
  <div class="avatar flex justify-center sm:float-left">
    <div class="rounded rounded-full w-[5rem] m-4 text-center select-none border-2 border-neutral text-neutral-content" style="background-color:{author.color}">
      <span class="text-3xl leading-[5rem]">{author.name.charAt(0)}</span>
    </div>
    </div>
  <div class="flex flex-row flex-wrap sm:flex-row mx-4">
    <a href="{base}/view/post/?id={id}" class="link link-hover basis-full sm:flex-auto">
    <h1 class="text-xl font-extrabold my-2">{title}</h1>
    </a>
    <div class="basis-full overflow-y-auto">{body}</div>
    <div class="my-2 text-sm basis-full text-right inline-flex gap-2 justify-between md:justify-start">
      <div class="tooltip" data-tip="Reactions">
      <span class="badge badge-primary gap-2">
        <span class="fa-solid fa-thumbs-up"></span>&nbsp;{reactions}
      </span>
      </div>
      <p>
       by:&nbsp;<a href="{base}/view/author/?id={id}" class="link"><span class="font-bold">{author.name}</span></a>
      </p>
    </div>

  <div class="text-left my-2 text-bg-300 sm:text-right">
    {#each categories as tag}
    <btn class="badge badge-lg badge-ghost gap-2 mr-2">
      <span class="fa-solid fa-tag"></span>
      <a href="{base}/posts/?cat={tag.id}" class="link link-hover">{tag.name}</a>
    </btn>
    {/each}
  </div>

  </div>
</div>
</article>
