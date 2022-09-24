<script>
import {base} from '$app/paths';
export let data;
$: post = data.data.post;

function paragraphs(body) {
  return body.split(/\n|\r|\r\n/g);
}
</script>

<article class="prose md:prose-lg lg:prose-xl max-width my-8">
<h1>{post.title}</h1>
{#each paragraphs(post.body) as paragraph }
  <p>{paragraph}</p>
{/each}

<div class="no-prose">
  <div class="flex flex-row gap-2">
  {#each post.categories as cat}
    <button class="badge badge-neutral sm:badge-md md:badge-lg">
      <a class="link link-hover" href="{base}/posts/?cat={cat.id}">{cat.name}</a>
    </button>
  {/each}
  </div>
</div>
<p>
  Writted with <span class="fa-solid fa-heart"></span> by : <a href="{base}/view/author/?id={post.author.id}">{post.author.name}</a>
</p>
</article>
