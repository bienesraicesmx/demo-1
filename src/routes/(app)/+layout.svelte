<script>
    import { NavBarApp , Footer } from '$lib/components';
    export let data; 
    $: console.log(data);
    let innerH;
    let embedH;
    let footer;
    let navbar;
    $: totalH = footer + embedH + navbar;
    $: screenDif = totalH - innerH;
</script>

<svelte:window bind:innerHeight={innerH} />

<div class="content" style="min-height:{innerH}px; position:{screenDif < 0 ? 'relative' : ''}">
    <NavBarApp bind:navbar visible={true} />
    <div class="embed" bind:clientHeight={embedH}>
        <slot/>
    </div>
    <div class="footer" style="position:{screenDif < 0 ? 'absolute' : ''};bottom:0" bind:clientHeight={footer}>
        <Footer/>
    </div>
</div>

<style>
    ::-webkit-scrollbar {
        width:1px;
    }
</style>