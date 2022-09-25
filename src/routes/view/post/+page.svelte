<script>
import {base} from '$app/paths';
import Errors from '$lib/components/Errors.svelte';

export let data;

let content;
let post;
let errors;

$: init(data.data);

function init(res) {
  if (!res) {
    return
  } else if (res.errors) {
    errors = res.errors;
    return
  }
  post = res.post;
  content = post.body.split(/\n|\r|\r\n/g);
  console.log(content);
}
</script>

<Errors {errors}/>
{#if !!post }
<div class="flex flex-col">
<article class="my-4 mx-4 prose self-center max-width md:prose-lg md:mx-0 md:my-8 lg:prose-xl">
<h1>{post.title}</h1>
{#each content as paragraph }
  <p>{paragraph}</p>
{/each}

<div class="no-prose">
  <div class="flex flex-row gap-2">
  {#each post.categories as cat}
    <span class="badge badge-neutral badge-lg">{cat.name}</span>
  {/each}
  </div>
</div>
<p>
  Writted with <span class="fa-solid fa-heart"></span> by : <a href="{base}/view/author/?id={post.author.id}">{post.author.name}</a>
</p>
</article>
</div>
{/if}
