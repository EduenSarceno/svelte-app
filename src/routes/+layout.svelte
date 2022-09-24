<script>
import '../app.css';
import config from '$lib/config.js';
import Navbar from './Navbar.svelte';
const { brand } = config;
</script>
<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <span class="fa-solid fa-bars"></span>
        </label>
      </div>
      <div class="flex-1 px-2 mx-2 text-xl">{brand}</div>
      <div class="flex-none hidden lg:block">
        <Navbar />
      </div>
    </div>
    <div class="flex flex-row flex-wrap grow mx-4 justify-center">
      <!-- wrapper -->
      <slot />
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <Navbar vertical/>
  </div>
</div>
