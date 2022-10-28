<script>
    import { Map , Marker } from '@beyonk/svelte-mapbox';
    export let zoom = 12;
    export let lng;
    export let lat;
    export let center;
    export let onPick;
</script>

<div style="width:30rem;height:20rem;margin:auto;" class="card bg-base-100 shadow-xl">
    <Map accessToken="pk.eyJ1IjoiYW5nZWxkZXN3ZWIiLCJhIjoiY2wzejBkYXFxMDEyZzNjcjI0cjM2Mmx0eiJ9.3AuWLavDC-_6ngXFPvGSCg" bind:center  bind:zoom
    on:click={onPick}
>
        <Marker draggable={true} bind:lat bind:lng />
    </Map>
</div>
