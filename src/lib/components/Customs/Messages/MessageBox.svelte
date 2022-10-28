<script>
    let message = ''

    const handleClick = () => {
        console.log(message)
    }
</script>

<h3 class="text-2xl text-primary">Escribir al vendedor</h3>
<br>
<textarea 
    class="textarea textarea-bordered w-full" 
    id="message" 
    maxlength="150"
    bind:value={message}
    placeholder="Escriba aquí su mensaje..."
></textarea>
<br>
<button on:click={handleClick} class="btn btn-primary btn-sm text-white mt-2">Enviar</button>