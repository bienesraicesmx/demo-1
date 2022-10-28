import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { getUser } from '$lib/firebase/firestore/users';
import { auth , loading } from '$lib/store';

export const load = async () => {
    loading.on();
    const authStored = get(auth)
    const user = browser && localStorage.getItem('auth');
    if(user) {
        const userInfo = JSON.parse(user);
        if(!authStored.isAuth) auth.login({...userInfo});
    }
    const aut = get(auth)
    try {
        const doc = browser && await getUser(aut.uid);
        loading.off()
        return {
            doc
        }
    } catch (error) {
        alert(error);
    }
    
}