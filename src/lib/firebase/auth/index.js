import { auth } from '$lib/firebase';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';

export const SignIn = async ({email,password}) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const { user } = userCredential;
        return user;
    } catch (error) {
        throw error;        
    }
};

export const SignUp = async ({email,password}) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const { user } = userCredential;
        return user;
    } catch (error) {
        throw error;
    }
};

export const SendEmail = async (user) => {
    try {
        await sendEmailVerification(user);
        return {success:true,message:'Correo enviado exitosamente'}
    } catch (error) {
        throw error;        
    }
}

export const SignOut = async () => {
    try {
        await signOut(auth);
        return {success:true,message:'Sesión finalizada con éxito'}
    } catch (error) {
        throw error;
    }
};

export const PasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth,email);
        return {success:true,message:'Correo de reestablecimiento enviado'};
    } catch (error) {
        throw error;
    }
};
