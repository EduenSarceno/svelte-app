<script>
import { onDestroy, onMount } from 'svelte';
import { page } from '$app/stores';
import { base } from '$app/paths';

export let slug;
export let name;

let active ;
const unsubscribe = page.subscribe(value => {
  const { pathname } = value.url;
  const href = `${base}/${slug}`
  active = pathname === href;
});
onDestroy(unsubscribe);

</script>

<li>
{#if active}
  <a href="{base}/{slug}" class="uppercase active">{name}</a>
{:else}
  <a href="{base}/{slug}" class="uppercase">{name}</a>
{/if}
</li>
