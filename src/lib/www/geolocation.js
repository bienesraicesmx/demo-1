const baseURL = 'https://nominatim.openstreetmap.org/'

export const fetchLocation = async ({lat,lon}) => {
    try {
        const response = await fetch(`${baseURL}reverse?format=jsonv2&lat=${lat}76&lon=${lon}`);
        const data = await response.json();
        return data;
    }catch(error){
        throw error;
    }
}

export const fetchCityCoords = async (city) => {
    try {
        const response = await fetch(`${baseURL}search?format=jsonv2&city=${city}&country=Venezuela}`,
        {
            method:'POST',
            mode:'cors',
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Content-type':'application/json'
            }
        });
        const data = await response.json();
        return data;
    }catch(error){
        throw error;
    }
}