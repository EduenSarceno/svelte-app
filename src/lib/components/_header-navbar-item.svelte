<script>
import { onDestroy, onMount } from 'svelte';
import { page } from '$app/stores';

export let slug;
export let name;

let active;

const unsubscribe = page.subscribe(value => {
  const { pathname } = value.url;
  active = pathname == `/${slug}`;
});
onDestroy(unsubscribe);

</script>

<li>
{#if active}
  <a href="/{slug}" class="uppercase active">{name}</a>
{:else}
  <a href="/{slug}" class="uppercase">{name}</a>
{/if}
</li>
