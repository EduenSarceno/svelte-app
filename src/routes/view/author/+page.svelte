<script>
import Avatar from '$lib/components/Avatar.svelte';
import Errors from '$lib/components/Errors.svelte';
import { base } from '$app/paths';
export let data;

let author;
let posts;
let errors;

$: init(data);

function init(res) {
  if (!res) {
    return;
  } else if (res.errors) {
    errors = res.errors;
    return;
  }
  res = res.data;
  author = res.author;
  posts = res.posts;
}
</script>
<Errors {errors} />
{#if !!author}
<div class="flex flex-row flex-wrap justify-center w-full my-4">
<article class="grow md:grow-0 md:w-10/12 lg:w-7/12 xl:w-5/12">
<div class="card card-bordered card-normal bg-base-200">
  <figure>
  <Avatar name="{author.name}" />
  </figure>
  <h1 class="text-3xl text-center font-extrabold my-2">{author.name}</h1>
  <div class="card-body flex-col w-full place-items-center">
    <div class="divider text-sm">POSTS</div>
    <span class="text-sm">{posts.length} posts in this blog</span>
    <ul class="bg-300 w-full">
    {#each posts.rows as post, i}
    <li class="border-2 my-border rounded-md mt-1 bg-base-300">
    <span class="badge badge-sm badge-primary mr-2">#{i}</span>
    <a class="link link-hover" href="{base}/view/post/?id={post.id}">
      {post.title}
    </a>
    </li>
    {/each}
    </ul>
    {#if posts.length > 0}
    <div class="mt-2">
      <a class="btn btn-primary" href="{base}/posts/?author={author.id}">See more</a>
    </div>
    {/if}
  </div>
</div>
</article>
</div>
{/if}
<style>
.my-border {
  border-color: hsl(var(--b3) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
}
</style>
