<script>
    import { Step } from "$lib/components";
    export let slide;
    export let steps;
    export let nextSlide;
    export let backward;
    export let titles;
    export let endSlides;
</script>


<div class="box">
    <div class="card bg-base-100 shadow-xl">
        <ul class="steps">
            {#each steps as _, i}
            <Step index={i} current={slide} label='{i}'/>
            {/each}
        </ul>
        <h2 class="text-3xl font-bold text-primary">{titles[slide]}</h2>
        <div class="divider"></div>
        <svelte:component this={steps[slide]} {nextSlide} {backward} {endSlides} />
    </div>
</div>

<style>
    .box {
        background-color: #f2f2f2;
        display:flex;
        align-items:center;
        flex-direction:column;
        flex-wrap:wrap;
        padding: 1em 0;
    }
    .card {
        min-height:30rem;
        max-width:44rem;
        padding:2em;
    }
</style>