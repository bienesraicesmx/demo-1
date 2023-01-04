<script>
    import { NavMenu , NavItem } from '$lib/components';
    import { auth , notyf } from '$lib/store';
    import { SignOut } from '$lib/firebase/auth';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    export let mobile;

    const endSession = async () => {
        try {
            const { success , message } = await SignOut();
            if(success) auth.logout();
            notyf.dispatch({message,type:'success'})
            browser && localStorage.clear();
            goto('/');
        } catch (error) {
            alert(JSON.stringify(error));
        }
    }
</script>

<NavMenu {mobile}>
    <NavItem label="Mis propiedades" href="/own" />
    <!-- <NavItem label="Interacciones" href="/own/interactions" /> -->
    <NavItem label="Publicar" href="/advert/add/thumbnails" />
    <NavItem label="Cuenta" href="/account" />
    <NavItem label="Cerrar sesión" onClick={endSession} />  
</NavMenu>