<script>
    import { auth } from '$lib/store';
    import { NavBar , NavMobileSlot , MenuIcon , BellRingIcon } from '$lib/components';
    import { getMessages } from '$lib/firebase/firestore/messages';
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
        <!-- <p slot="center">
            <span class="text-sm">
                <BellRingIcon size={26}/>
            </span>
        </p>         -->
        <div slot="end">
            <div class="hidden lg:flex">
                <svelte:component this={Bars[$auth.profile]} mobile={false} />
            </div>
        </div>
    </NavBar>
</header>
{/if}