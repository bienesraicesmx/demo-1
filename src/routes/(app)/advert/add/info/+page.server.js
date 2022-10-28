import { invalid } from '@sveltejs/kit';

export const actions = {
    default: async({request}) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const city = formData.get('city');
        const rooms = formData.get('rooms');
        const baths = formData.get('baths');
        const parks = formData.get('parks');
        const price = formData.get('price');
        const category = formData.get('category');
        const operation = formData.get('operation');
        
        if(!title) return invalid(400,{title,missing:true});
        if(!city) return invalid(400,{city,missing:true});

        return { title,city,rooms,baths,parks,price,category,operation }
    }
}