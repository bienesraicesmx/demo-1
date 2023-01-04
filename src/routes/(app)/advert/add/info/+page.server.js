import { get } from 'svelte/store';
import { invalid } from '@sveltejs/kit';
import { advert , center } from '$lib/store';
import { fetchCityCoords } from '$lib/www/geolocation'

export const actions = {
    
    default: async({request}) => {
        const adv = get(advert)
        const formData = await request.formData();
        const title = formData.get('title');
        const city = formData.get('city');
        const description = formData.get('description');
        const rooms = formData.get('rooms');
        const baths = formData.get('baths');
        const parks = formData.get('parks');
        const price = formData.get('price');
        const category = formData.get('category');
        const operation = formData.get('operation');
        
        const coords =  await fetchCityCoords(city);

        if(!coords.length) return invalid(400,{city,wrong:true})

        const {lat,lon} = coords[0];

        if(!title) return invalid(400,{title,missing:true});
        if(!city && !adv.city) return invalid(400,{city,missing:true});

        return { title,city,description,rooms,baths,parks,price,category,operation,lat,lon }
    }
}