<script>
    import { CarIcon , BathIcon , RoomIcon } from '$lib/components';
    export let id;
    export let src;
    export let title;
    export let description;
    export let rooms;
    export let baths;
    export let price;
    export let parks;
    export let city;
    export let category;
    export let operation;
</script>
<div class="card bg-base-100 shadow-xl">
    <figure class="w-full"><img class="w-full" style="height:12rem" src="{src}" alt="pic"/></figure>
    <div class="card-body">
        <span class="card-title text-primary">{title}</span>
        <div class="card-actions justify-start">
            <div class="badge badge-primary text-white">{category}</div>
            <div class="badge badge-primary text-white">{operation}</div>
        </div>
         
        <p class="desc">
            {description}
        </p>        
        <p>{city}</p>
        <div class="card-actions justify-end">
            <div class="badge badge-secondary text-white gap-2"><RoomIcon/> {rooms}</div> 
            <div class="badge badge-secondary text-white gap-2"><BathIcon/> {baths}</div>
            <div class="badge badge-secondary text-white gap-2"><CarIcon/> {parks}</div>
            <div class="badge badge-primary text-white badge-outline">Precio: {price}MXN</div>
        </div>
        <div class="card-actions justify-end">
        <a href="/advert/detail/{id}" class="btn btn-sm text-white btn-primary">Detalle</a>
      </div>
    </div>
</div>

<style>
    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .desc {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>