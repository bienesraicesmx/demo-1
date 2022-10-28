<script>
    import { AccountHeader , Bio } from '$lib/components';
    //import {} from '$lib/firebase/firestore/users';

    export let data;
    export let form;

    $: console.log(data,form)
    const { bio } = data.doc;
    //const { photoURL } = data?.currentUser;
    //$: console.log(photoURL)
</script>

<div class="card bg-base-100 m-auto mt-6 shadow-xl mb-6">
    <div class="card-body">
        <AccountHeader />
        <div class="divider"></div>
        <h2 class="text-xl text-primary">Descripción</h2>
        <Bio currentBio={bio ? bio : ''} />
        <div class="divider"></div>
        <p>Almost done</p>
    </div>
</div>

<style>
    .card {
        width:min(30rem,100%)
    }
</style>