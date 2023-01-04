import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth } from '$lib/store'

export const load = () => {
    const user = browser && localStorage.getItem('auth');
    $: browser && user && auth.login(JSON.parse(user));
    const appAuth = get(auth);
    if(appAuth.isAuth) browser && goto('/');
};