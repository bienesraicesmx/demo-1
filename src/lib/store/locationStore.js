import { writable } from 'svelte/store';

const centerStore = () => {
    const { subscribe , update } = writable([])

    return {
        subscribe,
        attach:(lat,lon) => update(s => (s = [lat,lon]))
    }
}

export const center = centerStore();