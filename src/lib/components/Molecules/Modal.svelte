<script>
    export let id;
    export let title;
    export let content;
    export let btnLabel;
</script>

<label for={id} class="btn modal-button">{btnLabel}</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" {id} class="modal-toggle" />
<div class="modal">
    <div class="modal-box relative">
        <label for={id} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">{title}</h3>
        <p class="py-4">{content}</p>
    </div>
</div>