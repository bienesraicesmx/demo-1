import { getProp } from '$lib/firebase/firestore/properties';
import { loading } from '$lib/store';

export const load = async ({params}) => {
    loading.on();
    const doc = await getProp(params.id);
    loading.off();
    return {
        doc:{...doc,id:params.id}
    }
    
}