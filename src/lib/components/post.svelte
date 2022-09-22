<script>
import { safeBody, authorColor } from './posts.functions.js'

export let title;
export let body;
export let author;

$: body = safeBody(body)
$: color = authorColor(author)

</script>

<div class="flex flex-row bg-base-200 m-6 rounded border border-primary align-middle">
<div class="grow m-4">
  <div class="avatar float-left">
    <div class="rounded rounded-full w-[5rem] m-6 text-center select-none" style="background-color:{color}">
      <span class="text-3xl leading-[5rem]">{author.name.charAt(0)}</span>
    </div>
    </div>
  <div class="text-xl font-extrabold my-2">{title}</div>
  <div class="text-base grow">{body}</div>
  <div>
    <p class="text-sm float-right">by <span class="font-bold">{author.name}</span></p>
  </div>
</div>
</div>
