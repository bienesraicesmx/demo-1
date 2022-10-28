<script>
    import { FilterSelect , FilterNumber , Range } from '$lib/components';
    import { filters } from '$lib/store';

    export let cities;
    export let rmin;
    export let rmax;
    export let step;

    $: category = $filters.category;
    $: city = $filters.city;
    $: operation = $filters.operation;
    $: rooms = $filters.rooms || null;
    $: baths = $filters.baths || null;
    $: parks = $filters.parks || null;

    let categoryOptions = [
        {value:'casa',tag:'Casa'},
        {value:'apto',tag:'Apartamento'},
        {value:'land',tag:'Terreno'},
        {value:'local',tag:'Local'}
    ]

    let operOptions = [
        {value:'Alquiler',tag:'Alquiler'},
        {value:'Venta',tag:'Venta'}
    ];

    let citiesOptions = [...cities];

    const handleFilter = (e) => filters.add({[e.target.name]:e.target.value});
    
    const handleRange = e => {
        console.log({'min':e.detail.values[0],'max':e.detail.values[1]})
        filters.add({'min':e.detail.values[0],'max':e.detail.values[1]})
    }

    const reset = (key) => filters.restoreVal(key);
    

    const clean = () => filters.reset();
</script>

<ul class="p-1 flex  flex-col justify-start h-full" >
    <FilterSelect
        label='Categoría'
        name='category'
        options={categoryOptions}
        onChange={handleFilter} 
        reset={reset}
        bind:value={category}
    />
    <FilterSelect
        label='Ciudad'
        name='city'
        options={citiesOptions}
        onChange={handleFilter} 
        reset={reset}
        bind:value={city}
    />
    <FilterSelect
        label='Tipo de operación'
        name='operation'
        options={operOptions}
        onChange={handleFilter} 
        reset={reset}
        bind:value={operation}
    />
    <div class="mt-3">
        <Range min={rmin} max={rmax} onChange={handleRange} {step} label="Rango de precio" />
    </div>
    <div class="mt-3">
        <FilterNumber 

            label="Cant. Habitaciones"
            placeholder="Habitaciones"
            name="rooms"
            value={rooms}
            reset={reset}
            onChange={handleFilter} 
        />
    </div>
    <div class="mt-3">
        <FilterNumber 

            label="Cant. Baños"
            placeholder="Baños"

            name="baths"
            value={baths}
            reset={reset}
            onChange={handleFilter} 
        />
    </div>
    <div class="mt-3">
        <FilterNumber 

            label="Ptos. Estacionamiento"
            placeholder="Estacionamiento"
            name="parks"
            value={parks}
            reset={reset}
            onChange={handleFilter} 
        />
    </div>
    <button class="btn btn-xs btn-ghost text-primary mt-3">limpiar</button>
</ul>