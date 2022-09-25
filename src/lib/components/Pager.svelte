<script>
import { createEventDispatcher } from 'svelte';
import config from '$lib/config.js';

let { size } = config.paginator;
if (size % 2 == 0) {
  size++; // must be odd
}

export let pages;
export let page = 1;

$: prev = Math.max(1, page - 1);
$: next = Math.min(pages, page + 1);
$: needControls = pages > size;

let digits;
$: {
  let _digits = 0;
  for (let rest = pages; rest > 0; rest = ~~(rest / 10)) {
    _digits++;
  }
  digits = _digits;
}

let items;
$: items = genItems(page, pages);
function genItems(page, pages) {
  const seek = (size - 1) >>> 1;
  let min = Math.max(1, page - seek);
  let max = Math.min(pages, page + seek);

  let diff
  if ((diff = max - page) < seek) {
    // We are at the end of the pager, there's no more items at the end
    min -=  seek - diff
    if (min < 1) { min = 1 }
  } else if ((diff = page - min) < seek) {
    // We are at the start of the pager, there's no more items at the end
    max +=  seek - diff
    if (max > pages) { max = pages }
  }

  let _items = [];
  for (var i = min; i <= max; i++) {
    _items.push(i);
  }
  return _items;
}

function txt(p) {
  let s = p.toString();
  return s.padStart(digits, '0');
}

const dispatch = createEventDispatcher();
function fireChangePage(e) {
  e.preventDefault();
  const btn = e.target.closest('.btn');
  const id = +btn.dataset.page;
  if (page === id) {
    return;
  }
  page = id;
  dispatch('changePage', page);
}
</script>

<div class="btn-group my-4 mx-auto">
{#if needControls}
<button class="btn" data-page="1" on:click="{fireChangePage}">
  <span class="fa-solid fa-angles-left"></span>
</button>
<button class="btn hidden sm:inline-flex" data-page="{prev}" on:click="{fireChangePage}">
  <span class="fa-solid fa-angle-left"></span>
</button>
{/if}
{#each items as item (item)}
  <button class="btn {item === page ? 'btn-active': ''}" data-page="{item}" on:click="{fireChangePage}">
    {txt(item)}
  </button>
{/each}
{#if needControls}
<button class="btn hidden sm:inline-flex" data-page="{next}" on:click="{fireChangePage}">
  <span class="fa-solid fa-angle-right"></span>
</button>
<button class="btn" data-page="{pages}" on:click="{fireChangePage}">
  <span class="fa-solid fa-angles-right"></span>
</button>
{/if}
</div>
