import { invalid } from '@sveltejs/kit';
import { SignUp } from '$lib/firebase/auth';
import { createUser } from '$lib/firebase/firestore/users';
import { errors } from '$lib/tools/fb.errors';

export const actions = {
    default: async ({request}) => {
        try {
            const formData = await request.formData();
            const username = await formData.get('username');
            const email = formData.get('email');
            const password = formData.get('password');
            let profile = formData.get('profile');
            profile = profile ? 'seller' : 'user';
            
            if(!username) return invalid(400,{email,missing:true})
            if(!email) return invalid(400,{email,missing:true})
            if(!password) return invalid(400,{password,missing:true})
            
            const req = await SignUp({email,password});
            const success = await createUser(req.uid,{username,profile,premium:false});
            return {
                success,
                user:req.uid,
                username,
                profile,
                premium:false
            }
        } catch (error) {
            const message = errors[error.code] || error.code
            return invalid(400,{
                error:true,
                message
            })
        }
    }
}