import { auth } from '$lib/firebase';

export const load = ({data}) => {
    
    return {
        info: JSON.stringify(auth.currentUser)
    }
}