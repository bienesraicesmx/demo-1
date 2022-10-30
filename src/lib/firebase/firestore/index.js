import { db } from '$lib/firebase';
import { 
    doc,
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    setDoc,
    updateDoc,
    deleteDoc,
    GeoPoint,
    query,
    where,  
    Timestamp 
} from 'firebase/firestore';

export const GetDocs = async (colname) => {
    try {
        const querySnapshot = await getDocs(collection(db,colname));
        let docs = [];
        querySnapshot.forEach(doc => (docs = [...docs,{id:doc.id,...doc.data()}]));
        return docs;
    } catch (error) {
        throw error;
    }
};

export const GetDoc = async (id,colname) => {
    try {
        const docRef = doc(db,colname,id);
        const docSnap = await getDoc(docRef);
        if(!docSnap.exists()) return {success:false,message:'No existe el registro'};
        return docSnap.data();
    } catch (error) {
        throw error;
    }
};

export const GetDocByKey = async (colname,key,value) => {
    try {
        const Query = query(collection(db,colname), where(key, "==", value));
        const querySnapshot = await getDocs(Query);
        let docs = []
        querySnapshot.forEach(doc => (docs = [...docs,{id:doc.id,...doc.data()}]))
        return docs;
    } catch (error) {
        throw error;
    }
}

export const CreateDoc = async (args,colname) => {
    try {
        await addDoc(collection(db,colname),args);
        return {success:true,message:'Registrado exitosamente'}
    } catch (error) {
        throw error;
    }
};

export const SetDoc = async (colname,id,args) => {
    try {
        await setDoc(doc(db,colname,id), {...args});
        return {success:true,message:'Registrado exitosamente'}
    } catch (error) {
        throw error;
    }
};

export const UpdateDoc = async (colname,id,args) => {
    try {
        const docRef = doc(db,colname,id);
        await updateDoc(docRef,args);
        return {success:true,message:'Actualizado exitosamente'};
    } catch (error) {
        throw error;
    }
};

export const DeleteDoc = async (colname,id) => {
    try {
        await deleteDoc(doc(db,colname,id));
        return {success:true,message:'Eliminado exitosamente'};
    } catch (error) {
        throw error;
    }
};

export const createGeo = (lat,lon) => new GeoPoint(lat,lon);

export const currentTime = () => Timestamp.now();