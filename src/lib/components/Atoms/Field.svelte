<script>
    export let label = '';
    export let type = 'text';
    export let placeholder = 'Placeholder...';
    export let value = '';
    export let large = false;
    export let medium = false;
    export let small = false;
    export let tiny = false;

    const typed = (node) => node.type = type;
    
</script>

<div class="form-control">
    <label class="input-group input-group-sm">
        <span>{label}</span>
        <input 
            use:typed 
            {placeholder} 
            bind:value={value} 
            class="input input-bordered"
            class:input-lg={large}
            class:input-md={medium}
            class:input-sm={small}
            class:input-xs={tiny}
        />
    </label>
</div>