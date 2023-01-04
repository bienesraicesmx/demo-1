<script>
    export let label;
    export let onClick = null;
    export let href = null;
</script>

{#if href}
<a {href}>
    {label}
</a>
{:else if onClick}
<a href={null} on:click|preventDefault={onClick} >
    {label}
</a>
{/if}