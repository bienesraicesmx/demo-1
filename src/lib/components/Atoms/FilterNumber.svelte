<script>
    import { CloseIcon } from "..";
    export let value;
    export let name;
    export let placeholder;
    export let label;
    export let onChange;
    export let reset;
    export let ghost = false;
    const handleReset = () => reset(name);
</script>

<label for="" class="text-xs" class:text-primary={!ghost}>{label}</label>
{#if value === 0 || value === null}
<input
    bind:value 
    type="number" 
    min=0 
    {name} 
    {placeholder}
    class="input input-bordered input-xs w-full max-w-xs" 
    class:input-primary={!ghost}
    class:input-ghost={ghost}
    on:change={onChange}
/>
{:else}
<!--svelte-ignore a11y-click-events-have-key-events-->
<div class="badge badge-primary text-white gap-2" on:click={handleReset}>
    <CloseIcon/>
    {value}
</div>
{/if}