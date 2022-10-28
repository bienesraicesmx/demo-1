<script>
    import { Map , Marker } from '@beyonk/svelte-mapbox';

    $: zoom = 16;
    export let lng = -66.8691885;
    export let lat = 10.4880104;
    export let width = 20;
    export let height = 30;
    $: center = [lng,lat];


</script>

<div 
    style:width={`${width}rem`}
    style:height={`${height}rem`}
    style="margin:auto;" class="card bg-base-100 shadow-xl">
    <Map accessToken="pk.eyJ1IjoiYW5nZWxkZXN3ZWIiLCJhIjoiY2wzejBkYXFxMDEyZzNjcjI0cjM2Mmx0eiJ9.3AuWLavDC-_6ngXFPvGSCg" bind:center  bind:zoom
    >
        <Marker bind:lat bind:lng />
    </Map>
</div>