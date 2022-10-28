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