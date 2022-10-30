<script>
    import { MapStatic , MessageBox } from '$lib/components';
    import { auth } from '$lib/store';
    
    export let data;

    const { doc } = data;

    $: imgs = doc.images; 
    $: currentImage = 0;

    const showImg = (e) => {
        currentImage = e.target.id;
    }
</script>

<div class="detail">
    <div class="header text-3xl w-full flex justify-around">
        <h1 class="text-primary font-bold text-center">{doc?.title}</h1>
        <span class="text-primary">{doc?.price}MXN</span>
    </div>
    <div class="divider"></div>
    <br>
    <div class="upper">
        <div class="image">
            <img class="shadow-xl w-full" src="{imgs[currentImage]}" alt="prop 1 pic">
            <div class="card shadow-xl w-full p-3 mt-3">
                {#each doc?.images as src, i}
                <img class="active-img w-20" id="{i}" src={src} alt="prop {i + 1} pic" on:click={showImg} on:keydown={showImg} /> 
                {/each}
            </div>
        </div>
        <div class="hidden md:flex">
            <MapStatic lat={doc?.center._lat}  lng={doc?.center._long} />
        </div>
    </div>
    <div class="divider"></div>
    <div class="mt-6">
        <h3 class="text-2xl text-primary">Descripción</h3>
        <p>{doc?.description}</p>
    </div>
    <div class="divider"></div>
    <div class="mt-6">
        <h3 class="text-2xl text-primary">Cuenta con</h3>
        <br>
        <ul>
            <li class="badge badge-primary text-white">Habitaciones {doc?.rooms}</li>
            <li class="badge badge-primary text-white">Baños {doc?.baths}</li>
            <li class="badge badge-primary text-white">Estacionamiento {doc?.parks} puestos</li>
        </ul>
    </div>
    <div class="divider"></div>
    
    {#if $auth.uid !== doc?.createdBy}
    <MessageBox />
    {/if}
</div>


<style>
    .detail {
        padding:1em;
    }
    .active-img {
        cursor:pointer;
    }
    .image {
        padding:2em;
        width:30rem;
        height:30rem;
    }
    .upper {
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
    }
</style>