import { invalid } from '@sveltejs/kit';
import { PasswordReset } from '$lib/firebase/auth';
import { errors } from '$lib/tools/fb.errors';

export const actions = {
    default: async ({request}) => {
        try {
            const formData = await request.formData();
            const email = formData.get('email');

            if(!email) return invalid(400,{email,missing:true});
            
            await PasswordReset(email);
            return { success:true }
        } catch (error) {
            const message = errors[error.code] || error.code
            return invalid(400,{
                error:true,
                message
            })
        }
    }
}