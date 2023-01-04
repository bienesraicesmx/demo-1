<script>
    import { Map , Marker } from '@beyonk/svelte-mapbox';
    import { env } from '$env/dynamic/public'
    export let zoom = 12;
    export let lng;
    export let lat;
    export let center;
    export let onPick;

    const token = env.PUBLIC_MAP_TOKEN
</script>

<div style="width:30rem;height:20rem;margin:auto;" class="card bg-base-100 shadow-xl">
    <Map accessToken={token} bind:center  bind:zoom
    on:click={onPick}
>
        <Marker draggable={true} bind:lat bind:lng />
    </Map>
</div>
