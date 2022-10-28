<script>
    import { auth } from '$lib/store';
    import { NavBar , NavMobileSlot , MenuIcon } from '$lib/components';
    import { NavBarBrand , UserMenu , SellerMenu , NavDefault } from './Menus';

    export let navbar;
    export let visible = false;
    const Bars = {
        default:NavDefault,
        seller:SellerMenu,
        user:UserMenu
    }
</script>

{#if visible}
<header bind:clientHeight={navbar}>
    <NavBar primary={true} >
        <NavMobileSlot slot="start">
            <MenuIcon slot="icon" />
            <svelte:component this={Bars[$auth.profile]} mobile={true} />
        </NavMobileSlot>
        <NavBarBrand  slot="brand"/>
        <div slot="end">
            <div class="hidden lg:flex">
                <svelte:component this={Bars[$auth.profile]} mobile={false} />
            </div>
        </div>
    </NavBar>
</header>
{/if}