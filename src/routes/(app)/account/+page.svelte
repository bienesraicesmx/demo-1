<script>
    import { AccountHeader , Bio } from '$lib/components';
    import { auth } from '$lib/store';

    export let data;
    export let form;

    $: console.log(data,form)
    const { bio } = data.doc;
    //const { photoURL } = data?.currentUser;
    //$: console.log(photoURL)
</script>

<div class="card bg-base-100 m-auto mt-6 shadow-xl mb-6">
    <div class="card-body">
        <!-- Header -->
        <AccountHeader />
        <div class="divider"></div>
        <!-- Description:Bio -->
        <h2 class="text-xl text-primary">Descripción</h2>
        <Bio currentBio={bio ? bio : ''} />
        <div class="divider"></div>
        <!-- Password -->
        <h2 class="text-xl text-primary">Cambiar contraseña</h2>
        <a href="/pass-recovery" class="link link-hover" >Cambiar</a>
        <div class="divider"></div>
        <!-- Premium -->
        {#if $auth.premium}
        <div class="badge badge-primary text-white">Usuario premium</div>
        {:else}
        <h2 class="text-xl text-primary">Hacer premium</h2>
        <a href="https://telegram.com" target="blank" class="link link-hover" >Ir ahora</a>
        <span class="text-xs text-info">Este enlace te dirigirá a un chat de telegram donde podrás solicitar tu cuenta premium</span>
        {/if}
    </div>
</div>

<style>
    .card {
        width:min(30rem,100%)
    }
</style>