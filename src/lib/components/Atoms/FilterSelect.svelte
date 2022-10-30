<script>
    import { CloseIcon } from "..";

    export let options;
    export let name = '';
    export let value = "";
    export let onChange
    export let reset;
    export let label = 'filter';
    export let ghost = false;

    const handleReset = () => reset(name);
</script>

<li class="form-group w-full">
    {#if !value}
    <label for="" class="label p-0 pb-1 pt-2 text-primary" class:text-primary={!ghost}>
        <span class="label-text text-xs text-primary">{label}</span>
    </label>
    <select
        bind:value
        on:change={onChange} {name}         
        class="select select-bordered select-primary  select-xs w-full max-w-xs"
    >
        <option  disabled selected value="">Seleccione</option>
        {#each options as option}
            <option value={option.value}>{option.tag}</option>
        {/each}
    </select>
    {:else}
    <!--svelte-ignore a11y-click-events-have-key-events-->
    <div
        class="badge badge-primary m-2 text-white gap-2" on:click={handleReset}>
        <CloseIcon/>
        {value}
    </div>
    {/if}
</li>
