<script>
import Avatar from '$lib/components/Avatar.svelte';
import { base } from '$app/paths';
export let data;

const { author } = data.data;
const { posts} = data.data;
</script>
<article class="block my-8 min-w-full lg:min-w-7/12">
<div class="card card-bordered card-normal bg-base-200">
  <figure>
  <Avatar name="{author.name}" />
  </figure>
  <div class="card-body flex-col w-full place-items-center">
    <span class="badge badge-sm badge-neutral">{author.id}</span>
    <div class="divider">POSTS</div>
    <span class="text-md">{posts.length} posts in this blog</span>
    <ul class="bg-300 w-full">
    {#each posts.rows as post}
    <a class="text-md link link-hover" href="{base}/view/post/?id={post.id}">
      <li>
        <span class="fa-solid fa-comment-dots badge badge-primary"></span>
        {post.title}
      </li>
    </a>
    {/each}
    </ul>
    {#if posts.pages > 1}
    <div class="mt-2">
      <a class="btn btn-primary" href="{base}/posts/?author={author.id}">See more</a>
    </div>
    {/if}
  </div>
</div>
</article>
