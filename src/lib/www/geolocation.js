export const fetchLocation = async ({lat,lon}) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}76&lon=${lon}`);
        const data = await response.json();
        return data;
    }catch(error){
        throw error;
    }
}