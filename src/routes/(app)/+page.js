import { browser }  from '$app/environment';
import { getProps } from '$lib/firebase/firestore/properties';
import { loading , auth } from '$lib/store';
import { get } from 'svelte/store';

export const load = async () => {
    loading.on();
    const authStored = get(auth)
    const user = browser && localStorage.getItem('auth');
    if(user) {
        const userInfo = JSON.parse(user);
        if(!authStored.isAuth) auth.login({...userInfo});
    }
    try {
        const docs = await getProps();
        loading.off()
        return {
            docs
        }
    } catch (error) {
        loading.off()
        alert(error);
    }
    
}