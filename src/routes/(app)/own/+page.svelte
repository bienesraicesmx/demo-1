<script>
    import { PropsTable } from "$lib/components";
    import { loading } from '$lib/store';

    export let data;

    const { docs } = data;
</script>

<PropsTable data={docs} />