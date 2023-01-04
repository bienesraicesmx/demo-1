<script>
    import '../app.postcss';
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
    import { RingLoader } from 'svelte-loading-spinners';
    import { loading , notyf } from '$lib/store';

    const notifications = {
        success:(message) => notifier.success(message,3000),
        error:(message) => notifier.danger(message),
        info:(message) => notifier.info(message)
    };

    $: if($notyf.launch) {
        notifications[$notyf.type]($notyf.message);
        notyf.reset();    
    }
</script>

{#if $loading}
    <div class="loading">
        <RingLoader size="60" color="#80a4ed" />
    </div>
{:else}
    <NotificationDisplay />
    <div class="main">
        <slot/>
    </div>
{/if}

<style>    
    .main {
        min-height: 100vh;
    }
    .loading {
        height:100vh;
        width:100vw;
        display:grid;
        place-content:center;
    }

    .main::-webkit-scrollbar {
        width: 8px;
    }

    .main::-webkit-scrollbar-track {
        background: #094785;
        border-radius: 12px;
    }
    
    .main::-webkit-scrollbar-thumb {
        background: #bbd0ff;
        border-radius: 12px;
    }
</style>