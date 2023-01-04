<script>
    import { goto } from '$app/navigation';
    import { deleteProp } from '$lib/firebase/firestore/properties';
    import { notyf } from '$lib/store';

    export let title;
    export let id;

    let close;

    $: isSubmitting = false;
    
    const handleDelete = async () => {
        try {
            isSubmitting = true;
            const {success,message} = await deleteProp(id);
            if(success) notyf.dispatch({type:'success',message});
            isSubmitting = false;
        } catch (error) {
            alert(error);
        }
    }
</script>

<label for="modal-{id}" class="btn btn-ghost text-error btn-xs">quitar</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="modal-{id}" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
        <h3 class="text-lg font-bold">¿Desea eliminar {title}?</h3>
        <p class="py-4">El cambio será irreversible</p>
        
        <div class="modal-action">
            {#if isSubmitting}
            <p class="text-error">Eliminando</p>
            {:else}
            <label for="my-modal-{id}" on:click={handleDelete} on:keydown={handleDelete} class="btn btn-error btn-sm text-white">Eliminar</label>
            <label for="modal-{id}" bind:this={close} class="btn btn-sm text-white btn-primary">Cancelar</label>
            {/if}
        </div>
    </div>
</div>