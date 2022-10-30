<script>
    import { Timestamp } from 'firebase/firestore';
    import { Stretch } from 'svelte-loading-spinners';
    import { goto } from '$app/navigation';
    import { advert , auth , notyf } from '$lib/store';
    import { fileUpload } from '$lib/www/uploader';
    import { createProp } from '$lib/firebase/firestore/properties';

    $: isSubmitting = false;
    const endSlides = async () => {
        try {
            isSubmitting = true;
            const data = $advert;
            data.images = await Promise
            .all($advert.images.map(async img => await fileUpload(img)));
            data.createdAt = Timestamp.now();
            data.createdBy = $auth.uid;
            data.price = parseInt($advert.price);
            const {success,message} = await createProp(data);
            if(success){ 
                notyf.dispatch({type:'success',message});
                goto('/')
            }
            isSubmitting = false;
        } catch (error) {
            alert(JSON.stringify(error));
        }
    }
</script>

<h2 class="text-xl">{$advert.title}</h2><span>{$advert.price}mxn</span>
<div class="divider"></div>
<p>Ciudad {$advert.city}</p>
<p>{$advert.description}</p>
<br>
<div class="grid1">
    <div class="stack">
        {#each $advert.images as img}
            <img style="width:100px;height:100px" src={img} alt="pic 1" class="rounded" />
        {/each}  
    </div>
    <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Imágenes</div>
          <div class="stat-value">{$advert.images.length}</div>
          <div class="stat-desc">Total de imágenes cargadas</div>
        </div>    
    </div>  
</div>
<br>
<div class="grid1">
    <div class="badge badge-outline">habitaciones {$advert.rooms}</div>
    <div class="badge badge-outline">baños {$advert.baths}</div>
    <div class="badge badge-outline">estacionamiento {$advert.parks}</div>
</div>
<br>
<p>Tipo de propiedad <small class="badge">{$advert.category}</small></p>
<p>Tipo de operación <small class="badge">{$advert.operation}</small></p>

{#if !isSubmitting}
<div>
    <button class="btn btn-success text-white btn-sm mt-4" on:click={endSlides}>Finalizar</button>
</div>
<div>
    <a class="btn btn-error text-white btn-sm mt-4" href="/advert/add/location">Regresar</a>
</div>
{:else}
<Stretch size="60" color="#80a4ed" />
{/if}

<style>
    .grid1 {
        display:flex;
        justify-content: space-around;
        gap:1em;
    }
</style>