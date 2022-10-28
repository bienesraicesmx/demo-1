<script>
    import { FilterIcon , AppContainer , Properties } from '$lib/components';
    
    export let data;

    const { docs } = data;

</script>

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

<style>
    .cards {
        display:grid;
        width:100%;
        padding:1em;
        grid-auto-rows: 28rem;
        grid-template-columns: repeat(auto-fill,minmax(18rem,1fr));
        gap:1em;
    }
</style>
