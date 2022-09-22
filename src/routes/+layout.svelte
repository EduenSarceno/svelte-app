<script>
import '../app.css';
import Header from '$lib/components/header.svelte';
</script>
<div class="flex flex-col min-h-screen">
  <Header/>
<div class="flex-grow overflow-y">
  <slot />
</div>
</div>
