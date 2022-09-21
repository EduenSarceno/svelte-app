<script>
import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
<header class="flex-none navbar bg-base-300 text-base-content">
<div class="flex-1">
  <a class="btn btn-ghost text-xl">Your logo</a>
</div>
<div class="flex-none">
  <a class="btn btn-ghost text-xl"><span class="fa-solid fa-bars"></span></a>
</div>
</header>
<div class="flex-1 flex flex-col">
<slot/>
</div>
</div>
