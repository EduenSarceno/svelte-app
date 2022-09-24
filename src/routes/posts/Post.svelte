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

<article tabinde="0" class="flex flex-row bg-base-300 text-base-content mx-4 mt-4 asis-full basis-11/12 rounded border border-neutral align-middle">
<div class="grow">
  <div class="avatar flex justify-center sm:float-left">
    <div class="rounded rounded-full w-[5rem] m-6 text-center select-none border-2 border-neutral text-neutral-content" style="background-color:{author.color}">
      <span class="text-3xl leading-[5rem]">{author.name.charAt(0)}</span>
    </div>
    </div>
  <div class="flex flex-row flex-wrap sm:flex-row m-4 sm:m-0">
    <a href="{base}/view/post/?id={id}" class="link link-hover basis-full sm:flex-auto">
    <h1 class="text-xl font-extrabold my-2">{title}</h1>
    </a>
    <div class="basis-full overflow-y-auto">{body}</div>
    <div class="my-2 text-sm basis-full text-right inline-flex gap-2 justify-start">
      <div class="tooltip" data-tip="Reactions">
      <span class="badge badge-neutral gap-2">
        <span class="fa-solid fa-thumbs-up text-neutral-content"></span>&nbsp;{reactions}
      </span>
      </div>
      <span>
       by:&nbsp;<a href="{base}/view/author/?id={id}" class="link"><em class="font-bold">{author.name}</em></a>
      </span>
    </div>

  <div class="text-left my-2 text-bg-300 sm:text-right">
    {#each categories as tag}
    <btn class="badge badge-lg badge-primary gap-2 mr-2">
      <span class="fa-solid fa-tag"></span>
      <a  href="{base}/posts/?cat={tag.id}" class="link link-hover text-base-content">{tag.name}</a>
    </btn>
    {/each}
  </div>

  </div>
</div>
</article>
