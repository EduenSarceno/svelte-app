<script>
import NavbarCollapsible from './NavbarCollapsible.svelte';
import Brand from './Brand.svelte';
</script>

<div class="bg-primary text-primary-content flex flex-row flex-end flex-wrap justify-between p-6 items-center">
  <div class="md:basis-3/12"><Brand /></div>
  <div class="md:grow md:basis-auto"><NavbarCollapsible /></div>
</div>
