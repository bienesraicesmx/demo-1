<script>
    import { auth } from '$lib/store'
    import { AvatarPicker } from '$lib/components';

    let labels = {
        seller:'vendedor',
        user:'usuario',
        adm:'administrador',
        dev:'desarrollador'
    }
</script>

<div class="flex justify-around align-center">
    <div class="flex align-center">
        <h2 class="card-title text-3xl text-primary">
            {$auth.username} 
            <div class="badge badge-primary text-white mb-0">
                {labels[$auth.profile]}
            </div>
        </h2>
    </div>
    <AvatarPicker/>
</div>