<script>
import { page } from '$app/stores';
import { base } from '$app/paths';
</script>

<article class="flex flex-col p-4">
<div class="alert alert-error shadow-lg max-w-prose self-center text-center my-4">
  <span class="fa-solid fa-warning"></span>
  <span class="grow">{$page.status}: {$page.error.message}</span>
  {#if $page.routeId}
  <a class="btn btn-primary" href="{base}/{$page.routeId}">Volver</a>
  {/if}
</div>
</article>
