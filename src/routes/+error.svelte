<script>
    import { page } from '$app/stores';
</script>
  
<div class="error-container">
    <h1 class="text-3xl font-bold text-primary">{$page.status}: {$page.error.message}</h1>
    <div class="divider"></div>
    <a class="btn btn-primary text-white" href="/" >Inicio</a>
</div>

<style>
    .error-container {
        display:grid;
        place-content: center;
        width: 100vw;
        height:100vh;
        overflow: hidden;
    }
</style>/