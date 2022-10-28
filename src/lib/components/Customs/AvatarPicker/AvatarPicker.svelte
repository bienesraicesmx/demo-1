<script>
    import { Avatar } from '$lib/components';
    import { auth } from '$lib/store';
    import { fileUpload } from '$lib/www/uploader';
    import placeholder from '$lib/assets/images/avatar-placeholder.jpg';
    
    let inputFile;    
    $: avatar = $auth.avatar;
    $: prev = '';
    const handleClick = e => inputFile.click();

    const fetchFile = async (avatar) => {
        let file = await fileUpload(avatar);
        await updateProfile(user,{photoURL:file});
    };

    const changeAvatar = () => {
        prev = avatar;
        avatar = '';
    };

    const cancelChange = () => {
        avatar = prev;
        prev = '';
    }
    
    const handleChange = e => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result
           fetchFile(avatar);
        };
    }

</script>

<input type="file" bind:this={inputFile} class="hidden" on:change={handleChange}>
{#if !avatar}
<div class="flex flex-col align-center gap-2">
    <div class="avatar m-auto"> 
        <div on:keydown={handleClick} on:click={handleClick} class="w-16 ring ring-primary  ring-offset-base-100 ring-offset-4 mt-2 ml-2 rounded-full">
            <img src={placeholder} alt="avatar"/>
        </div>
    </div>
    {#if  prev}
    <button class="link link-hover link-primary m-auto" on:click={cancelChange}>Cancelar</button>
    {/if}
</div>
{:else}
<div class="flex flex-col align-center gap-2">
    <div class="avatar m-auto">
        <Avatar src={avatar} />
    </div>
    <button class="link link-hover link-primary m-auto" on:click={changeAvatar}>Cambiar</button>
</div>
{/if}