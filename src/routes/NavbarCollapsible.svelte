<script>
import Navbar from './Navbar.svelte';
</script>

<div>
  <div class="dropdown dropdown-end block text-end">
    <label tabindex="0" class="btn btn-square btn-outline btn-neutral">
      <span class="fa-solid fa-bars"></span>
    </label>
    <div tabindex="0" class="dropdown-content">
      <Navbar />
    </div>
  </div>
</div>
