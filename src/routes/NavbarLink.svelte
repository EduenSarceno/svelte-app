<script>
import { page } from '$app/stores';
import { base } from '$app/paths';

export let slug;
export let name;

$: href = slug ? `${base}/${slug}/` : `${base}/`;
$: active = $page.url.pathname === href;

</script>

<li>
  <a href="{href}" class="uppercase {active ? 'active' : ''}">{name}</a>
</li>
