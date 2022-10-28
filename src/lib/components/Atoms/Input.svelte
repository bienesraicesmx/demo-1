<script>
    export let type = 'text';
    export let placeholder = 'Placeholder...';
    export let bordered = true;
    export let name;
    export let primary = false;
    export let secondary = false;
    export let accent = false;
    export let info = false;
    export let success = false;
    export let warning = false;
    export let error = false;
</script>

<input
    class="input w-full"
    class:input-bordered={bordered}
    class:input-primary={primary}
    class:input-secondary={secondary}
    class:input-accent={accent}
    class:input-info={info}
    class:input-success={success}
    class:input-warning={warning}
    class:input-error={error}
    {name}
    {type}
    {placeholder}
/>