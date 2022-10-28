<script>
    import { Dropzone , ImagesPreview } from '$lib/components';
    import { advert , auth , notyf } from '$lib/store';

    $: images = [];
    $: availableSpace = 5 - images.length;
    let files = {accepted:[],rejected:[]}
    
    const readImages =  (file) => {
        const reader = new FileReader();
        reader.addEventListener("load",() => {
            images = cleanArr([...images,reader.result])
            advert.add({images});
        });
        reader.readAsDataURL(file);
    };
    
    const cleanArr = (arr) => {
        let clean = new Set(arr.map(item => JSON.stringify(item)));
        let cleaned = [...clean].map(item => JSON.parse(item));
        return cleaned;
    }

    const handleFilesSelect = (e) => {
        const { acceptedFiles, fileRejections } = e.detail;
        if(!$auth.premium && acceptedFiles.length > 1 ){
            notyf.dispatch({type:'error',message:'Debe ser premium para agregar mas de una imagen'});
            return;
        }
        if($auth.premium && acceptedFiles > availableSpace){
            notyf.dispatch({type:'error',message:'Solo puede subir hasta 5 imágenes'});
            return;
        }
        acceptedFiles.map(img => readImages(img));
        let toInsert = cleanArr([...acceptedFiles,...files.accepted]);
        files.accepted = [...toInsert];
        files.rejected = [...files.rejected, ...fileRejections]; 
    }

    const handleRemoveFile = (e, index) => {
        files.accepted.splice(index, 1);
        images.splice(index,1);
        files.accepted = [...files.accepted];
        images = [...images];
        advert.add(images);
    }

    const handleRemoveAll = () => {
        files.accepted = [];
        images=[];
        advert.clean('images')
    }
</script>

{#if $auth.premium || images.length === 0}
<Dropzone {handleFilesSelect} />
{:else if $auth.premium && images.length < 5}
<Dropzone {handleFilesSelect} />
{/if}
<ImagesPreview {handleRemoveAll} {handleRemoveFile} files={files.accepted} {images} />
{#if files.accepted.length > 0}
    <div>
        <a class="btn btn-success text-white btn-sm mt-1" href="/advert/add/location">Siguiente</a>
    </div>
{/if}