import { GetDocs, GetDocByKey , GetDoc , DeleteDoc } from '../firestore';

export const getProps = async () => {
    try {
        const props = await GetDocs('properties');
        return props;
    } catch (error) {
        throw error;
    }
}

export const getUserProps = async (uid) => {
    try {
        const props = await GetDocByKey('properties','createdBy',uid);
        return props;
    } catch (error) {
        throw error;
    }
};

export const getProp = async (id) => {
    try {
        const doc = await GetDoc(id,'properties');
        return doc
    } catch (error) {
        throw error;
    }
}

export const deleteProp = async (id) => {
    try {
        const { success , message } = await DeleteDoc('properties',id);
        return {success,message};
    } catch (error) {
        throw error;
    }
}