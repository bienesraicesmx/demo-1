<script>
    import { NavMenu , NavItem } from '$lib/components';
    export let mobile;
</script>

<NavMenu {mobile}>
    <NavItem label="Iniciar sesión" href="/signin" />
    <NavItem label="Registrarse" href="/signup" />
</NavMenu>