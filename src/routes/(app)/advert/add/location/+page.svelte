<script>
    import { Stretch } from 'svelte-loading-spinners';
    import { MapInput } from '$lib/components';
    import { fetchLocation } from '$lib/www/geolocation';
    import { advert , center } from '$lib/store';

    let keys = {
        'city':'Ciudad',
        'locality':'Localidad',
        'municipality':'Parroquia',
        'county':'Municipio',
        'postcode':'Código postal',
        'road':'Calle'
    }
    $: data = { address:null};
    $: loading = false;
    $: zoom = 10;
    $: lat = $center[0];
    $: lng = $center[1]; 
    $: mapCenter = [lng,lat];
    const onPick  = async (e) => {
        if(e.detail.lat){
            lat = e.detail.lat;
            lng = e.detail.lng;
            loading = true;
            data = await fetchLocation({lat,lon:lng})
            loading = false;
            advert.add({lat,lon:lng,address:data.address})
        }
    }
</script>
<h2 class="text-primary text-2xl font-bold text-center">
    Selecciona su ubicación en el mapa
</h2>
<br>
<MapInput {onPick}{zoom}{lat}{lng} center={mapCenter}  />
{#if loading}
    <div style="width:100%;display:grid;place-content:center;margin-top:2em;">
        <Stretch size="60" color="#80a4ed" />
    </div>
    {:else}
    {#if data.address}
    <br>
    <h2 class="text-xl mt-4 text-primary">Detalle</h2>
    <div class="divider"></div>
    <div class="mt-2">
        {#each Object.entries(data.address) as obj}
            {#if keys[obj[0]]}
                <h3 class="text-xs text-primary">
                    *{keys[obj[0]]}    
                </h3>
                <span class="text-xs">-{obj[1]}</span>
            {/if}
        {/each}
        <br>
        <a href="/advert/add/preview" class="btn btn-success text-white btn-sm mt-4" >Siguiente</a>
    </div>
    {/if}
    <div>
        <br>
        <a href="/advert/add/thumbnails" class="btn btn-primary text-white btn-sm mt-4" >Regresar</a>
    </div>
{/if}