<script>
    //EDITAR ESTE ARCHIVO
    export let data;
</script>

<div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
            <th>
                <label>
                    <input type="checkbox" class="checkbox" />
                </label>
            </th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {#each data as doc}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                </th>
                <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src="{doc.images[0]}" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div class="font-bold text-primary">{doc.title}</div>
                            <div class="text-sm opacity-50">{doc.city}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {doc.category} - {doc.operation}
                    <br>
                    <span class="badge badge-primary text-white badge-sm">{doc.price}</span>
                </td>
                <td>{doc.createdAt}</td>
                <th>
                    <button class="btn btn-ghost text-primary btn-xs">editar</button>
                </th>
            </tr>
            {/each}
        </tbody>
        <!-- foot -->
        <tfoot>

        </tfoot>      
    </table>
</div>

<style>
    table {
        z-index:0;
    }
</style>