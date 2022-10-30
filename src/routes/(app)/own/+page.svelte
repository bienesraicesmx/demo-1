<script>
    import { PropsTable } from "$lib/components";
    import { loading } from '$lib/store';

    export let data;

    const { docs } = data;
</script>

{#if docs.length === 0}
<div class="content">
    <h3 class="text-center text-primary text-3xl mt-3">Sin publicaciones</h3>
</div>
{:else}
<PropsTable data={docs} />
{/if}

