<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    import { auth , loading , notyf } from '$lib/store';
    import { getUserProps } from '$lib/firebase/firestore/properties';

    const comprove = async () => {
        try {
            if(!$auth.premium){
                const props = await getUserProps($auth.uid);
                if(props.length >= 1) {
                    notyf.dispatch({type:'error',message:'Para poder publicar otro anuncio debe crear una cuenta premium'});
                    goto('/');
                }
            }
        } catch (error) {
            
        }
    };

    onMount(async () => {
        browser && $auth.isAuth && await comprove();
    })
</script>

<div class="content">
    <div class="card shadow-xl p-4">
        <slot/>
    </div>
</div>

<style>
    .content {
        display:grid;
        place-content:center;
        height:100%;
        padding:2em;
    }

    .card {
        min-width: 32rem;
    }
</style>