import { writable } from 'svelte/store';

const loadingStore = () => {
    const { subscribe , set } = writable(false)

    return {
        subscribe,
        on:() => set(true),
        off:() => set(false)
    }
}

export const loading = loadingStore();