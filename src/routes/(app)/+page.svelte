<script>
    import { FilterIcon , AppContainer , Properties } from '$lib/components';
    
    export let data;

    const { docs } = data;

</script>

{#if docs.length === 0}
<div class="not">
    <h2 class="text-primary text-3xl">No hay publicaciones activas</h2>
</div>
{:else}
<AppContainer {docs} >
    <div class="p-3">
        <label for="my-drawer-2" class="btn btn-primary btn-ghost text-primary font-bold text-sm drawer-button lg:hidden gap-2">
            <FilterIcon/>
            Filtrar
            </label>
            <h3 class="text-primary text-center font-bold text-3xl">Publicaciones</h3>
        <div class="divider"></div>
    </div>
    <div class="cards">
        <Properties data={docs} />
    </div> 
</AppContainer>
{/if}

<style>
    .not {
        height:100%;
        display:grid;
        place-content:center;
    }
    .cards {
        display:grid;
        width:100%;
        padding:1em;
        grid-auto-rows: 28rem;
        grid-template-columns: repeat(auto-fill,minmax(18rem,1fr));
        gap:1em;
    }
</style>
