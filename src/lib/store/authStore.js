import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let init = {
    isAuth:false,
    uid:'',
    profile:'default',
    premium:false,
    avatar:''
}

const authStore = () => {
    const { subscribe , update , set } = writable(init)

    return {
        subscribe,
        login:args => {
            update(store => (store = {...store,...args}))
        },
        add: arg => update(s => (s = {...s,...arg})),
        logout: () => set(init)
    }
}

export const auth = authStore();