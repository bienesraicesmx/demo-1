<script>
    import { Timestamp } from 'firebase/firestore';
    import { MapStatic , MessageBox } from '$lib/components';
    import { getUser } from '$lib/firebase/firestore/users';
    import { getMessageAdvert , updateMessage } from '$lib/firebase/firestore/messages';
    import { auth } from '$lib/store';
    import { sinceDate } from '$lib/tools/dates';
    export let data;

    const { doc } = data;
    $: imgs = doc.images; 
    $: currentImage = 0;
    $: messages = null;
    $: response = [];
    $: author = {}    
    const fetchMessages = async () => {
        author = await getUser(doc.createdBy);
        messages = await getMessageAdvert(doc.id);
        messages
        .map(msg => msg.date = sinceDate(msg.date.toDate()));
    }

    fetchMessages()
    const showImg = (e) => {
        currentImage = e.target.id;
    }

    const answer = (id) => {
        document.getElementById(`field-${id}`).classList.remove('hidden');
        document.getElementById(`trigger-${id}`).classList.add('hidden');
    }

    const handleResponse = (e) => {
        response = [...response,{[e.target.id]:e.target.value}]
    }

    const sendResponse = async (id) => {
        try {
            let entry = response.filter(el => Object.keys(el)[0] === id);
            const [_,value] = Object.entries(entry[0])[0];
            let {success} = await updateMessage(id,{reply:{content:value,date:Timestamp.now()}});
            console.log(success);
        } catch (error) {
            alert(JSON.stringify(error));
        }
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
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src="{message.user.avatar}" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{message.content}</div>
                        <div class="text-sm opacity-50">{message.date}</div>
                    </div>
                </div>
                {:else}
                <div class="flex items-center space-x-3">
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span class="text-xs">{message.user.username.split('')[0]}</span>
                        </div>
                    </div>
                    <div>
                        <div class="font-bold text-primary">{message.content}</div>
                        <div class="text-sm opacity-50">{message.date}</div>
                    </div>
                </div>
            {/if}
            <br>
                {#if $auth.uid === doc.createdBy && !message.reply}
                    {#if !message.reply}
                    <div id="field-{message.id}" class="w-full hidden">
                        <textarea id="{message.id}" class="textarea textarea-bordered w-full" on:change={handleResponse} placeholder="Respuesta..."></textarea>
                        <button class="btn btn-sm btn-primary text-white" on:click={() => sendResponse(message.id)}>Responder</button>
                    </div>
                    <div id="trigger-{message.id}" class="flex justify-end">
                        <a href={null} on:click|preventDefault={() => answer(message.id)} class="link link-hover link-primary text-xs ">Responder</a>
                    </div>
                    {/if}

                {/if}
                {#if message.reply}
                    {#if author.avatar}
                    <div class="ml-6 flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src="{message.user.avatar}" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div class="font-bold">{message.reply.content}</div>
                            <div class="text-sm opacity-50">{sinceDate(message.reply.date.toDate())}</div>
                        </div>
                    </div>
                    {:else}
                    <div class="ml-6 flex items-center space-x-3">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                                <span class="text-xs">{author.username.split('')[0]}</span>
                            </div>
                        </div>
                        <div>
                            <div class="font-bold text-primary">{message.reply.content}</div>
                            <div class="text-sm opacity-50">{sinceDate(message.reply.date.toDate())}</div>
                        </div>
                    </div>
                    {/if}
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