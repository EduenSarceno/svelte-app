<script>
export let errors = [];
</script>
{#each errors as error, i}
<div class="alert alert-error shadow-lg max-w-prose self-center text-center my-4">
    <span class="fa-solid fa-warning"></span>
    <span class="grow">{error.message}</span>
</div>
{/each}
