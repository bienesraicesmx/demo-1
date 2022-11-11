<script>
    import { Timestamp } from 'firebase/firestore';
    import { auth } from '$lib/store';

    export let advertid = ''
    let message = '';
    
    const handleClick = () => {
        const user = $auth.uid;
        const content = message;
        const date = Timestamp.now();
        
        console.log({user,content,date,advertid});

        message = ''
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
<button on:click={handleClick} class="btn btn-primary btn-sm text-white mt-2">Enviar</button>