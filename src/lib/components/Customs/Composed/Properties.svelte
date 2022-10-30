<script>
    import { HomeCard } from '$lib/components';
    import { filters , initial , isCleaned } from '$lib/store'

    export let data;

    $: filtered = data;

    const inputKeys = ['city','operation','category'];
    const numberKeys = ['baths','rooms','parks'];
    const rangeKeys = ['min','max'];
    const isInputKey = (key) => inputKeys.includes(key);
    const isNumberKey = (key) => numberKeys.includes(key);
    const isRangeKeys = (key) => rangeKeys.includes(key);

    const filterInput = (key,value) => filtered = filtered
    .filter(item => item[key].toLowerCase().includes(value.toLowerCase()))
    
    const filterNumber = (key,value) => filtered = filtered
    .filter(item => item[key] === parseInt(value));

    const filterRange = () => filtered = filtered
    .filter(doc => doc.price > $filters.min - 1 && doc.price < $filters.max + 1);

    $: keysToFilter = Object.entries($filters).filter(el => el[1] && !isRangeKeys(el[0]));

    $: if(keysToFilter.length === 0) filtered = data;
    
    $: if(keysToFilter.length > 0) {
        keysToFilter.map(arr => {
            let [key,val] = arr;
            if(isInputKey(key)) filterInput(key,val);
            if(isNumberKey(key)) filterNumber(key,val);
        });
    }
    $: if($filters.min || $filters.max) filterRange();
</script>

{#if filtered.length === 0}
    <div class="content">
        <h2 class="text-primary text-3xl">Sin resultados</h2>
        <div class="divider"></div>
        <span>Al parecer aún no contamos con resultados para tu búsqueda, por favor intenta con otra coincidencia</span>
    </div>
{:else}
    {#each filtered as prop}
        {#if prop?.id}
        <HomeCard 
            src={prop.images[0]} 
            title={prop.title} 
            description={prop.description}
            rooms={prop.rooms}
            baths={prop.baths}
            price={prop.price}
            parks={prop.parks}
            city={prop.city}
            category={prop.category}
            operation={prop.operation}
            id={prop.id}
        />
        {/if}
    {/each}
{/if}

