<script>
import { createEventDispatcher } from 'svelte';
import { GROUP } from '$lib/api.js';

const fireEvent = new createEventDispatcher();
const groups = ['none', 'author', 'category'];
const iconOld = ['sort-up', 'sort-down'];
const iconSort = ['arrow-up-z-a', 'arrow-up-a-z'];

export let group = 0;
export let order = 0;
export let old = 0;

$: fireEvent('group', group);
$: fireEvent('order', order);
$: fireEvent('old', old);

function toggleOrder() {
  order = +!order;
}

function toggleOld() {
  old = +!old;
}

</script>
<div class="inline-flex">
<div>
<button tabindex="0" class="btn m-1" on:click="{toggleOld}">
  <span class="fa-solid fa-{iconOld[old]}"></span>
</button>
</div>
{#if group !== GROUP.NONE}
<div>
<button tabindex="0" class="btn m-1" on:click="{toggleOrder}">
  <span class="fa-solid fa-{iconSort[order]}"></span>
</button>
</div>
{/if}
<div class="dropdown dropdown-end">
<label tabindex="0" class="btn m-1">
  <span class="fa-solid fa-gear"></span>
</label>
<ul tabindex="0" class="dropdown-content menu bg-neutral p-2 w-40 shadow rounded-box">
<p class="text-md text-center">Group by:</p>
{#each groups as g, i}
<li>
  <label class="label cursor-pointer">
   <input type="radio" class="checkbox" bind:group="{group}" name="group" value="{i}" />
   <span class="grow text-md capitalize text-left">{g}</span>
  </label>
</li>
{/each}
</ul>
</div>
</div>
