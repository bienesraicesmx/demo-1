<script>
    export let mobile = false;
</script>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul style:z-index={"3"} 
    tabindex="0" 
    class:menu-horizontal={!mobile}
    class:menu-compact={mobile}
    class="menu {mobile ? 'dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52':'p-0'}"
>
    <slot></slot>
</ul>