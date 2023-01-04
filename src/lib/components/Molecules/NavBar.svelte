<script>
    export let primary = false;
    export let padded = false;
</script>

<div 
    class="navbar w-full"
    class:bg-primary={primary}
    class:text-white={primary} 
    class:bg-base-100={!primary}
    class:rounded={padded}
>
    <div class="navbar-start">
        <slot name="start"></slot>
        <slot name="brand"></slot>
    </div>
    <div class="navbar-center hidden lg:flex">
        <slot name="center"></slot>
    </div>
    <div class="navbar-end">
        <slot name="end"></slot>
    </div>
</div>
