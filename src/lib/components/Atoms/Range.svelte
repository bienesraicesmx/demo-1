<script>
    import RangeSlider from 'svelte-range-slider-pips'
    
    export let min;
    export let max;
    export let step;
    export let label;
    export let onChange;

    $: vmin = min;
    $: vmax = max;
    $: values = [vmin,vmax];
    $: if(values[0] >= values[1]) values[0] = values[1];
    $: if(values[1] <= values[0]) values[1] = values[0];
</script>

<li class="form-group p-1 w-full">
    <label for="" class="text-xs text-primary">{label}</label>
</li>
<RangeSlider bind:values {min} {max} {step} on:change={onChange} float  />
<li class="form-group p-1 w-full">
    <p class="text-xs text-primary" >Entre {vmin} - {vmax}</p>
</li>
