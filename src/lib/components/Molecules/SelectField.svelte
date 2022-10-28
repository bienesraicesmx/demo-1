<script>
    export let label = '';
    export let defaultOpt = 'Seleccione';
    export let value = null;
    export let options = ['Option 1','Option 2'];
</script>

<div class="form-control">
    <label class="input-group input-group-sm">
        <span>{label}</span>
        <select bind:value class="select select-bordered select-sm">
            <option disabled selected value={null}>{defaultOpt}</option>
            {#each options as option}
                <option value="{option.value || option}">{option}</option>
            {/each}
        </select>
    </label>
</div>