<script>
import { Paginator } from './paginator.js';
import { createEventDispatcher } from 'svelte';

export let res;
export let page = 1;

const dispatch = createEventDispatcher();

$: pager = new Paginator(res, 'posts');
$: pager.actual = page;

function fireChangePage(e) {
  const btn = e.target.closest('.btn');
  const id = +btn.dataset.page;

  e.preventDefault();
  if (pager.actual === id) {
    return;
  }
  pager.actual = id;
  dispatch('changePage', pager.actual);
}
</script>

<div class="btn-group my-4 mx-auto flex-wrap">
{#if pager.withControls }
<button class="btn" data-page="{pager.first}" on:click="{fireChangePage}">
  <span class="fa-solid fa-angles-left"></span>
</button>
<button class="btn" data-page="{pager.prev}" on:click="{fireChangePage}">
  <span class="fa-solid fa-angle-left"></span>
</button>
{/if}
{#each [...pager.items()] as page}
{#if pager.actual == page }
  <button class="btn btn-active" data-page="{page}" on:click="{fireChangePage}">
    {pager.normalize(page)}
  </button>
{:else}
  <button class="btn" data-page="{page}" on:click="{fireChangePage}">
    {pager.normalize(page)}
  </button>
{/if}
{/each}
{#if pager.withControls}
<button class="btn" data-page="{pager.next}" on:click="{fireChangePage}">
  <span class="fa-solid fa-angle-right"></span>
</button>
<button class="btn" data-page="{pager.last}" on:click="{fireChangePage}">
  <span class="fa-solid fa-angles-right"></span>
</button>
{/if}
</div>
