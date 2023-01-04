<script>
    import Dropzone from "svelte-file-dropzone";
    export let handleFilesSelect;
</script>


<div style:max-width="40rem">
    <Dropzone
        on:drop={handleFilesSelect}
        accept={['image/*']}
        containerClasses="custom-dropzone"
    >
        <button>Click para seleccionar sus imágenes</button>
        <p>o</p>
        <p>Arrastre aquí</p>
    </Dropzone>
</div>
