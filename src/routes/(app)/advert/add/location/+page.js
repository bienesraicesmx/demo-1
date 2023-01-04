import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';
import { browser }  from '$app/environment';
import { goto } from '$app/navigation';
import { loading , auth ,advert , center } from '$lib/store';


const validProfiles = ['dev','seller'];
const isValidProfile = (prof) => validProfiles.includes(prof)


export const load = async () => {
    loading.on();
    const authStored = get(auth);
    const root = get(center);
    console.log('Center ',root);
    const user = browser && localStorage.getItem('auth');
    const userInfo = browser && JSON.parse(user);
    console.log(browser && localStorage.getItem('auth'))
    if(userInfo){
        if(userInfo.isAuth){
            if(!authStored.isAuth) auth.login({...userInfo});
            const adv = get(advert);
            if(adv.images.length <= 0) goto('/advert/add/thumbnails');
            const { profile } = browser && userInfo;
            if(!isValidProfile(profile)){
                loading.off();
                throw error(403,'Permisos insuficientes')
            }else{
                loading.off();
                return {
                    center
                }
            }
        }
    }
    if(browser && !user){
        console.log('No ha iniciado sesión')
        loading.off()
        throw error(401,'Debe iniciar sesión')
    }
}