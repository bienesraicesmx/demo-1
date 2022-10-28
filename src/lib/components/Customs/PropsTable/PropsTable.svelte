<script>
    //EDITAR ESTE ARCHIVO
    export let data;

    $: root = false;
    $: list = data.map(el => ({check:false,...el}));
    
    const checkAll = () => list = list.map(el => ({...el,check:true}));
    const unCheckAll = () => list = list.map(el => ({...el,check:false}));

    const handleCheck = ({target}) => {
        list[target.id].check = !list[target.id].check
    };

    const rootCheck = () => {
        if(root) checkAll();
        if(!root) unCheckAll();
    }


    $: console.log(list);
</script>

<div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
            <th>
                <label>
                    <input type="checkbox" class="checkbox pr-check" bind:checked={root} on:change={rootCheck} />
                </label>
            </th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {#each list as doc, i}
            <tr>
                <th>
                    {list[i].check}
                    <label>
                        <input id="{i}" type="checkbox"
                            class="checkbox pr-check" bind:checked={list[i].check}   
                            on:input={handleCheck}  
                        />
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
                    <a href="/own/adverts/edit/{doc.id}" class="btn btn-ghost text-primary btn-xs">editar</a>
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