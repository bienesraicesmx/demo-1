<script>
    import relativeTime from 'dayjs/plugin/relativeTime';
    import updateLocale from 'dayjs/plugin/updateLocale';
    import dayjs from 'dayjs';
    import 'dayjs/locale/es-mx';
    dayjs.extend(updateLocale);
    dayjs.updateLocale('es-mx', {
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: 'algunos segundos',
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        }
    })
    dayjs.extend(relativeTime);
    dayjs.locale('es-mx');
    export let data;

    data.map(el => {
        let ts = el.createdAt.toDate();
        let date = dayjs(ts).fromNow()
        el.since = date;
    });
</script>

<div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Publicado</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {#each data as doc, i}
            <tr>
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
                <td class="text-primary">{doc.since}</td>
                <th>
                    <a href="/own/adverts/edit/{doc.id}" class="btn btn-ghost text-primary btn-xs">editar</a>
                </th>
                <th>
                    <a href="/own/adverts/edit/{doc.id}" class="btn btn-ghost text-error btn-xs">quitar</a>
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