import { GetDocs , GetDoc , SetDoc , UpdateDoc } from '$lib/firebase/firestore';

export const getUsers = async () => {
    try {
        const users = await GetDocs('users');
        return users;
    } catch (error) {
        throw error;
    }
};

export const getUser = async (uid) => {
    try {
        const user = await GetDoc(uid,'users');
        return user;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (uid,args) => {
    try {
        const { success } = await SetDoc('users',uid,args);
        return success;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (uid,args) => {
    try {
        const { success , message } = await UpdateDoc('users',uid,args);
        return { success , message };
    } catch (error) {
        throw error;
    }
}


