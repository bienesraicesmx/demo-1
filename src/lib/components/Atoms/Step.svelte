<script>
    export let label;
    export let index;
    export let current;
</script>

<li class="step text-white"
    class:step-primary={current === index}
    class:step-success={current > index }
>{label}</li>