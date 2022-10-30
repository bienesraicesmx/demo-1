<script>
    import { page } from '$app/stores';
    import { Hero } from '$lib/components';
</script>
  

<Hero>
    <h1 class="text-3xl font-bold text-primary" slot="title">{$page.status}</h1>
    <p slot="content">{$page.error.message}</p>
    <div slot="actions">
        <a class="btn btn-primary text-white" href="/" >Inicio</a>
    </div>
</Hero>
