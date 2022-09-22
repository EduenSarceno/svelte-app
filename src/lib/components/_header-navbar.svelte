<script>
import config from '$lib/config/all.js';
import Link from './_header-navbar-item.svelte';
const { links } = config.header.navbar;
</script>

<ul tabindex="0" class="menu basis-full shadow bg-neutral rounded-box p-2 w-52">
  {#each links as link}
    <Link {...link} />
  {/each}
</ul>
