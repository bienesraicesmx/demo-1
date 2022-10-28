<script>
    export let label = '';
    export let name = '';
    export let primary = false;
</script>

<div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text" class:text-primary={primary}>{label}</span> 
        <input 
            class="checkbox" 
            class:checkbox-primary={primary}
            type="checkbox" {name} />
    </label>
</div>