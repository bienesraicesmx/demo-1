<script>
    import { Stretch } from 'svelte-loading-spinners';
    import { enhance , applyAction } from '$app/forms';
    import { goto } from '$app/navigation';
    import { FormControl , Input , Button } from '$lib/components';
    import { advert , center } from '$lib/store';
    export let form;

    $: isSubmitting = false;

    $: console.log('Form ',form)
</script>
<h2 class="text-primary text-2xl font-bold text-center">
    Completa el siguiente formulario
</h2>
<form use:enhance={({form,data,action,cancel}) => {
    isSubmitting = true;
    return async ({result}) => {
        if(result.type === 'invalid') {
            isSubmitting = false;
            await applyAction(result);
        }
        if(result.type === 'success'){
            const { data } = result;
            center.attach(parseFloat(data.lat),parseFloat(data.lon))
            Object.entries(data).map(en => advert.add({[en[0]]:en[1]}));
            isSubmitting = false;
            goto('/advert/add/location');
        }
    }
}}>
    <FormControl>
        <Input slot="field" name="title" type="text" placeholder="Título del anuncio" error={form?.missing} />
        <p slot="feedback" class="text-error text-xs">
            {#if form?.missing}
                Debe ingresar algún título para su publicación
            {/if}
        </p>
    </FormControl>
    <FormControl>
        <Input slot="field" type="text" placeholder="Ciudad" name="city" error={form?.missing} />
        <p slot="feedback" class="text-error text-xs">
            {#if form?.missing}
                Indique la ciudad donde se ubica el inmueble
            {/if}
            {#if form?.wrong}
                Nombre de ciudad equivocado
            {/if}
        </p>
    </FormControl>
    <FormControl>
        <textarea slot="field" class="textarea textarea-bordered" name="description" placeholder="Descripción "></textarea>
    </FormControl>
    <FormControl>
        <Input slot="field" type="number" placeholder="N° de habitaciones" name="rooms" />
    </FormControl>
    <FormControl>
        <Input slot="field" type="number" placeholder="N° de baños" name="baths" />
    </FormControl>
    <FormControl>
        <Input slot="field" type="number" placeholder="Puestos de estacionamiento" name="parks" />
    </FormControl>
    <FormControl>
        <Input slot="field" type="number" placeholder="Precio de venta" name="price" />
    </FormControl>
    <FormControl>
            <select name="category" class="select select-bordered w-full max-w-xs" slot="field" >
            <option disabled selected value={null}>Categoría</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Habitación</option>
            <option>Local</option>
            <option>Terreno</option>    
        </select>
    </FormControl>
    <FormControl>
        <select name="operation" class="select select-bordered w-full max-w-xs" slot="field">
            <option disabled selected value={null}>Operación</option>
            <option>Alquiler</option>
            <option>Venta</option>
        </select>
    </FormControl>
    {#if !isSubmitting}
        <Button success={true} small={true} disabled={isSubmitting} >
            <p class="text-white">Guardar</p>
        </Button>
    {:else}
        <div style="width:100%;display:grid;place-content:center;margin-top:2em;">
            <Stretch size="60" color="#80a4ed" />
        </div>
    {/if}
</form>
<div>
    <br>
    <a href="/advert/add/thumbnails" class="btn btn-primary text-white btn-sm mt-4" >Regresar</a>
</div> 