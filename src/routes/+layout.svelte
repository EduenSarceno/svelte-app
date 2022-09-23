<script>
import '../app.css';
import Header from './Header.svelte';
</script>
<div class="flex flex-col min-h-screen">
  <Header/>
<section class="flex flex-wrap justify-center flex-grow overflow-y">
  <slot />
</section>
</div>
