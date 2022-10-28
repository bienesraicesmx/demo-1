import { invalid } from '@sveltejs/kit';
import { SignIn } from '$lib/firebase/auth';
import { getUser } from '$lib/firebase/firestore/users';
import { errors } from '$lib/tools/fb.errors';

export const actions = {
    default: async ({request}) => {
        try {
            const formData = await request.formData();
            const email = formData.get('email');
            const password = formData.get('password');

            if(!email) return invalid(400,{email,missing:true})
            if(!password) return invalid(400,{password,missing:true})
            
            const req = await SignIn({email,password});
            let avatar = req.photoURL
            const { username , profile , premium } = await getUser(req.uid);
            return {
                success:true,
                user:req.uid,
                username,
                profile,
                premium,
                avatar
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