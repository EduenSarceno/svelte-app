<script>
import { safeBody, authorColor } from './posts.functions.js'
import { base } from '$app/paths';

export let title;
export let body;
export let author;
export let id;

$: body = safeBody(body)
$: author.color = authorColor(author)

</script>

<article tabinde="0" class="flex flex-row bg-base-200 m-4 basis-full basis-11/12 rounded border border-primary align-middle">
<div class="grow m-4">
  <div class="avatar float-left">
    <div class="rounded rounded-full w-[5rem] m-6 text-center select-none" style="background-color:{author.color}">
      <span class="text-3xl leading-[5rem]">{author.name.charAt(0)}</span>
    </div>
    </div>
  <div class="text-xl font-extrabold my-2">
    <a href="{base}/post/{id}" class="link link-hover">{title}</a>
  </div>
  <div class="text-base grow">{body}</div>
  <div class="text-right text-sm">
    by <a href="{base}/author/{author.id}" class="link">
      <em class="font-bold">{author.name}</em>
    </a>
  </div>
</div>
</article>
