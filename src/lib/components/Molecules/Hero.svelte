<script>
    export let src = 'https://placeimg.com/1000/800/arch'
</script>

<div class="hero min-h-screen" style="background-image: url({src});">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <slot name="title"></slot>
            <p class="mb-5">
                <slot name="content"></slot>
            </p>
            <slot name="actions"></slot>
        </div>
    </div>
</div>