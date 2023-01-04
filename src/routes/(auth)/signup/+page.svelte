<script>
    import { Stretch } from 'svelte-loading-spinners';
    import { browser } from '$app/environment';
    import { applyAction, enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import { FormControl , Input , CheckBox } from '$lib/components';
    import { auth , notyf} from '$lib/store';
    
    export let form;

    const successNotif = () => notyf.dispatch({type:'success',message:'Registrado exitosamente'});

    $: isSubmitting = false;

</script>


<a href="/" class="link link-hover link-primary mt-3 ml-3">Regresar al inicio</a>
<div class="center">
    <h2 class="text-3xl text-center text-primary"><b>Bienes </b>Raices</h2>
    <h3 class="text-center text-primary">Registro de usuario</h3>
    <div class="divider"></div>
</div>

<div class="card shadow-xl center p-4"> 
    <form method="POST" use:enhance={({form,data,action,cancel})=>{
        isSubmitting = true;
        return async ({result}) => {
            if(result.type === 'invalid') {
                await applyAction(result);
            }
            if(result.type === 'success'){
                const { user , profile , premium , username } = result.data;
                browser && localStorage.setItem('auth',JSON.stringify({uid:user,isAuth:true,profile,premium,username}));
                auth.login({uid:user,isAuth:true,profile,premium,username});
                successNotif();
                isSubmitting = false;
                goto('/');
            }
        }
    }}>
        <FormControl>
            <label class="text-primary" for="" slot="label">Usuario</label>
            <Input slot="field" name="username" type="text" placeholder="Nombre de usuario" error={form?.missing} />
            <p slot="feedback" class="text-error text-xs">
                {#if form?.missing}
                    Debe ingresar un nombre de usuario
                {/if}
            </p>
        </FormControl>
        <FormControl>
            <label class="text-primary" for="" slot="label">Correo electrónico</label>
            <Input slot="field" name="email" type="email" placeholder="ejemplo@mail.com" error={form?.missing} />
            <p slot="feedback" class="text-error text-xs">
                {#if form?.missing}
                    Debe ingresar una dirección de correo
                {/if}
                {#if form?.incorrect}
                    Formato de correo inválido
                {/if}
            </p>
        </FormControl> 
        <FormControl>
            <label class="text-primary" for="" slot="label">Contraseña</label>
            <Input slot="field" name="password" type="password" placeholder="Su contraseña aquí..." error={form?.missing} />
            <p slot="feedback" class="text-error text-xs">
                {#if form?.missing}
                    Debe ingresar una dirección de correo
                {/if}
                {#if form?.incorrect}
                    Formato de correo inválido
                {/if}
            </p>
        </FormControl>
        <FormControl>
            <CheckBox label="Quiero vender" name="profile" slot="field" primary={true} />
        </FormControl>
        {#if isSubmitting}
        <Stretch size="60" color="#80a4ed" />
        <p class="text-primary">Aguarde unos segundos</p>
        {:else}
        <button class="btn btn-primary mt-3 text-white" disabled={isSubmitting}>Registrarme</button>
        {/if}
    </form>
    <br>
    <div class="actions text-center">
        <div class="divider"></div>
        <a href="/signin" class="link link-hover link-primary">Ya tengo cuenta</a>
    </div>
</div>

<style>
    .center {
        width:30rem;
        margin:auto;
        margin-top:2em;
    }
</style>