<script>
    import { MapStatic , MessageBox } from '$lib/components';
    import { getMessageAdvert } from '$lib/firebase/firestore/messages';
    import { auth } from '$lib/store';
    import { sinceDate } from '$lib/tools/dates';
    export let data;

    const { doc } = data;
    $: imgs = doc.images; 
    $: currentImage = 0;
    $: messages = null;
    
    const fetchMessages = async () => {
        messages = await getMessageAdvert(doc.id);
        messages
        .map(msg => msg.date = sinceDate(msg.date.toDate()));
    }

    fetchMessages()
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
            <div class="card shadow-xl w-full p-3 mt-3 flex flex-row gap-2">
                {#each doc?.images as src, i}
                <img class="active-img w-20" id="{i}" src={src} alt="prop {i + 1} pic" on:click={showImg} on:keydown={showImg} /> 
                {/each}
            </div>
        </div>
        <div class="hidden md:flex">
            <MapStatic lat={doc?.lat}  lng={doc?.lon} />
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
    
    {#if !$auth.uid}
        <p class="text-2xl text-primary">Inicia sesión para contactar al vendedor</p>
    {:else if $auth.uid !== doc?.createdBy}
        <MessageBox advertid={ doc.id } />
        <div class="divider"></div>
    {/if}
    {#if messages?.length}
        <div class="mt-6">
            <h3 class="text-2xl text-primary">Mensajes</h3>
            <br>
            {#each messages as message}
            {#if message.user.avatar}
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src="{message.user.avatar}" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                {:else}
                <div class="mb-3">
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span class="text-xs">{message.user.username.split('')[0]}</span>
                        </div>
                    </div>
                    <span class="text-primary">{message.user.username}</span>
                </div>
            {/if}
            
            <p>{message.content}</p>
            <span class="text-xs text-primary">{message.date}</span>
            {#if $auth.uid === doc.createdBy}
            <div class="flex justify-end">
                <a href={null} class="link link-hover link-primary text-xs ">Responder</a>
            </div>
            {/if}
            {/each}
        </div>
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
        justify-content:space-around;
        flex-wrap:wrap;
    }
</style>