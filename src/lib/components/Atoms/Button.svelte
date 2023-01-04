<script>
    export let primary = false;
    export let secondary = false;
    export let outline = false;
    export let info = false;
    export let success = false;
    export let disabled = false;
    export let small = false;
    export let onClick;
</script>

<button class="btn"
    class:btn-primary={primary}
    class:btn-secondary={secondary}
    class:outline={outline}
    class:btn-info={info}
    class:btn-success={success}
    class:btn-sm={small}
    { disabled }
    on:click={onClick}
>
<slot>Button</slot>
</button>