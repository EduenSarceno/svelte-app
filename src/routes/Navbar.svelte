<script>
import config from '$lib/config.js';
import NavbarLink from './NavbarLink.svelte';

const { links } = config.navbar;
</script>

<ul tabindex="0" class="menu basis-full shadow bg-neutral rounded-box p-2 w-52">
  {#each links as link}
    <NavbarLink {...link} />
  {/each}
</ul>
