import { writable } from 'svelte/store';

const init =  {
    launch:false,
    message:'',
    type:''
};

const notyfStore = () => {
    const { subscribe , update , set } = writable(init);

    return {
        subscribe,
        dispatch:(args) => update(s => (s = {...s,...args,launch:true})),
        reset: () => set(init)
    }
}

export const notyf = notyfStore();