import { writable , derived } from 'svelte/store';

export const initial = {
    city:'',
    operation:'',
    category:'',
    min:null,
    max:null,
    rooms:null,
    baths:null,
    parks:null
};

const filterStore = () => {
    const { subscribe , update , set } = writable(initial);

    return {
        subscribe,
        add: args => update(s => (s = {...s,...args})),
        restoreVal: (key) => update(s => (s = {...s,[key]:initial[key]})),
        reset: () => set(initial)
    }
};

export const filters = filterStore();

export const isCleaned = derived(filters,$filters => JSON.stringify($filters) === JSON.stringify(initial))