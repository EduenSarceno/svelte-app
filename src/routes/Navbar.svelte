<script>
import config from '$lib/config.js';
import NavbarLink from './NavbarLink.svelte';

const { links } = config.navbar;

export let vertical;
</script>

<ul class="menu {vertical ? 'p-4 overflow-y-auto w-80 bg-base-100' : 'menu-horizontal'}">
  {#each links as link}
    <NavbarLink {...link} />
  {/each}
</ul>
