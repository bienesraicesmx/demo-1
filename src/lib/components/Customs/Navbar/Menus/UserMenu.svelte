<script>
    import { NavMenu , NavItem } from '$lib/components';
    import { auth } from '$lib/store';
    import { SignOut } from '$lib/firebase/auth';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';

    export let mobile;

    const endSession = async () => {
        try {
            const { success , message } = await SignOut();
            if(success) auth.logout();
            browser && localStorage.clear();
            alert(message);
            goto('/');
        } catch (error) {
            alert(JSON.stringify(error));
        }
    }
</script>

<NavMenu {mobile}>
    <!-- <NavItem label="Interacciones" href="/own/interactions" /> -->
    <NavItem label="Cuenta" href="/account" />
    <NavItem label="Cerrar sesión" onClick={endSession} />  
</NavMenu>