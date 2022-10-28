import { writable } from 'svelte/store';

let initial = {
    images:[],
    address:{},
    lat:0,
    lon:0,
    title:'',
    description:'',
    city:'',
    rooms:0,
    baths:0,
    parks:0,
    category:'',
    price:0,
    createdBy:'',
    createdAt:Date.now(),
    operation:''
}

const advertStore = () => {
    const { subscribe , update , set } = writable(initial);

    return {
        subscribe,
        add: args => update(store => (store = {...store,...args})),
        clean: key => update(s => (s = {...s,[store[key]]:initial[key]})),
        reset: () => set(initial)
    }
}

export const advert = advertStore();