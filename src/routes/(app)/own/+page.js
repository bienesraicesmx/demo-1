import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { getUserProps } from '$lib/firebase/firestore/properties';
import { auth , loading } from '$lib/store';



export const load = async () => {
    loading.on();
    const aut = get(auth);
    const user = browser && localStorage.getItem('auth');
    if(user) {
        const userInfo = JSON.parse(user);
        if(!aut.isAuth) auth.login({...userInfo});
    }
    try {
        const aut = get(auth);
        const docs = await getUserProps(aut.uid);
        loading.off();
        return {
            docs,
            done:true
        }
    } catch (error) {
        console.log(error)
    }
}