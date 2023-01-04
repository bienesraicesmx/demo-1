import { browser }  from '$app/environment';
import { error } from '@sveltejs/kit';
import { loading , auth } from '$lib/store';
import { get } from 'svelte/store';

const validProfiles = ['dev','seller'];
const isValidProfile = (prof) => validProfiles.includes(prof)


export const load = async () => {
    loading.on();
    const authStored = get(auth)
    const user = browser && localStorage.getItem('auth');
    const userInfo = browser && JSON.parse(user);
    console.log(browser && localStorage.getItem('auth'))
    if(userInfo){
        if(userInfo.isAuth){
            if(!authStored.isAuth) auth.login({...userInfo});
            const { profile } = browser && userInfo;
            if(!isValidProfile(profile)){
                loading.off();
                throw error(403,'Permisos insuficientes')
            }else{
                loading.off();
            }
        }
    }
    if(browser && !user){
        console.log('No ha iniciado sesión')
        loading.off()
        throw error(401,'Debe iniciar sesión')
    }
}