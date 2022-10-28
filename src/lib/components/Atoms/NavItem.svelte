<script>
    import Link from "./Link.svelte";
    export let href = null;
    export let onClick = null;
    export let label;
</script>

{#if href}
<li>
    <Link {href} {label} />
</li>
{:else if onClick}
<li>
    <Link {onClick} {label} />
</li>
{/if}