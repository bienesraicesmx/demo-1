<script>
    import { updateUser , getUser } from '$lib/firebase/firestore/users';
    import { Stretch } from 'svelte-loading-spinners';
    import { auth , notyf } from '$lib/store';
    

    export let currentBio = '';
    $: bio = '';
    $: rb = '';
    $: added = false;
    $: loading = false;
    const addBio = async () => {
        try {
            loading = true;
            let { success , message } = await updateUser($auth.uid,{bio});
            if(!success) return alert('No se pudo actualizar, intente luego.')//centerBox.error('No se pudo actualizar intente nuevamente más tarde');
            added = true;
            currentBio = bio;
            notyf.dispatch({type:'success',message});
            loading = false;  
        } catch (error) {
            console.log(error);
            return alert(JSON.stringify(error));//centerBox.error('Algo salió mal')
        }
    };

    const updateBio = () => {
        rb = currentBio;
        currentBio = '';
        added = false;
    };

    const cancelUpdate = () => {
        currentBio = rb;
        added = true;
    }
</script>

{#if loading}
    <Stretch size="60" color="#80a4ed" />
    <p class="text-primary">Aguarde unos segundos</p>
{:else}
    {#if !added && !currentBio}
        <div class="form-control">
            <label class="label" for="">
                <span class="label-text">Agrega una descripción para tu perfil</span>
            </label> 
            <textarea bind:value={bio} class="textarea textarea-bordered h-24" placeholder="Descripción"></textarea>
        </div>
        {#if bio}
            <div>
                <button on:click={addBio} class="btn btn-primary text-white btn-sm">Guardar</button>
            </div>
        {/if}
        {#if rb}
            <button class="link link-primary link-hover" on:click={cancelUpdate}>Cancelar</button>
        {/if}
    {:else}
        <p>{currentBio}</p>
        <button class="link link-primary link-hover" on:click={updateBio}>Editar</button>
    {/if}
{/if}