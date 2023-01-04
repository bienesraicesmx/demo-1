<script>
    import { Timestamp } from 'firebase/firestore';
    import { createMessage } from '$lib/firebase/firestore/messages';
    import { getUser } from '$lib/firebase/firestore/users';
    import { auth } from '$lib/store';

    export let advertid = ''
    let message = '';
    $: loading = false;

    const handleClick = async () => {
        loading = true;
        const user = await getUser($auth.uid);
        const content = message;
        const date = Timestamp.now();
        await createMessage({user,content,date,advertid,readed:false,answered:false,reply:null});
        message = '';
        loading = false;
    }
</script>

<h3 class="text-2xl text-primary">Escribir al vendedor</h3>
<br>
<textarea 
    class="textarea textarea-bordered w-full" 
    id="message" 
    maxlength="150"
    bind:value={message}
    placeholder="Escriba aquí su mensaje..."
></textarea>
<br>
<button on:click={handleClick} class="btn btn-primary btn-sm text-white mt-2" disabled={loading}>Enviar</button>