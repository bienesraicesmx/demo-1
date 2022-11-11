import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { getProp } from '$lib/firebase/firestore/properties';
import { loading , auth } from '$lib/store';

export const load = async ({params}) => {
    loading.on();
    const authStored = get(auth)
    const user = browser && localStorage.getItem('auth');
    if(user) {
        const userInfo = JSON.parse(user);
        if(!authStored.isAuth) auth.login({...userInfo});
    }
    const doc = await getProp(params.id);
    loading.off();
    return {
        doc:{...doc,id:params.id}
    }
    
}