import { CreateDoc , GetDocs, GetDocByKey , GetDoc , DeleteDoc, UpdateDoc } from '../firestore';

export const createMessage = async (args) => {
    try {
        console.log(args)
        const { success , message } = await CreateDoc(args,'messages');
        return { success , message }
    } catch (error) {
        throw error;
    }
};

export const getMessages = async () => {
    try {
        const docs = await GetDocs('messages');
        return docs;
    } catch (error) {
        throw error;
    }
};

export const getMessageAdvert = async (advertid) => {
    try {
        const docs = await GetDocByKey('messages','advertid',advertid);
        return docs;
    } catch (error) {
        throw error;
    }
}

export const updateMessage = async (id,args) => {
    console.log(id,args)
    try {
        const { success , message } = await UpdateDoc('messages',id,args);
        return {success,message}
    } catch (error) {
        throw error;
    }
}

