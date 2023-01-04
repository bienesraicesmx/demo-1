<script>
    export let handleRemoveFile;
    export let handleRemoveAll;
    export let files;
    export let images;
</script>

<div style="margin: 5px; margin-top: 1em;">
    {#if files.length > 0}
        <button class="btn btn-primary text-white btn-sm" on:click={handleRemoveAll}>Quitar todo</button>
    {/if}
    <div class="previews mt-2 mb-2">
        {#each files as _ , i}
            <div class="card bg-primary shadow-xl p-2">
                <div class="avatar">
                    <div class="w-24 rounded">
                        <img src="{images[i]}" alt="preview" />
                    </div>
                </div>
                <br>
                <button class="btn btn-xs btn-secondary text-white" on:click={e => handleRemoveFile(e, i)}>Quitar</button>
            </div>
        {/each}
    </div>
</div>

<style>
    .previews {
        display:flex;
        gap:1em;
        flex-wrap: wrap;
    }
</style>