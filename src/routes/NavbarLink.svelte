<script>
import { page } from '$app/stores';
import { base } from '$app/paths';

export let slug;
export let name;

$: href = slug ? `${base}/${slug}/` : `${base}/`;
$: active = $page.url.pathname === href;

</script>

<li>
{#if active}
  <a href="{href}" class="uppercase active">{name}</a>
{:else}
  <a href="{href}" class="uppercase">{name}</a>
{/if}
</li>
