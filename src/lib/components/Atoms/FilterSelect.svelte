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

<li class="form-group p-1 w-full">
    {#if !value}
    <label for="" class="text-xs" class:text-primary={!ghost}>{label}</label>
    <select
        on:change={onChange} {name} 
        class:select-ghost={ghost}
        class:select-primary={!ghost}
        class:text-primary={!ghost}
        class:text-white={ghost}
        class="select select-bordered  select-xs w-full max-w-xs"
    >
        <option class:text-white={ghost} disabled selected value="">Seleccione</option>
        {#each options as option}
            <option class:text-white={ghost} value={option.value}>{option.tag}</option>
        {/each}
    </select>
    {:else}
    <!--svelte-ignore a11y-click-events-have-key-events-->
    <div
        class:badge-outline={ghost}
        class:badge-primary={!ghost} 
        class="badge text-white gap-2" on:click={handleReset}>
        <CloseIcon/>
        {value}
    </div>
    {/if}
</li>
