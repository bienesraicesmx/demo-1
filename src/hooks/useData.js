import {useState, useEffect} from 'react';
import axios from "axios";

const useData = () => {

    const [propiedades2, setPropiedades2] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/v1/properties/')
            .then((response) => {
                setPropiedades2(response.data.response)
                // console.log(propiedades)
            })
            .catch((error) => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        propiedades2
     );
}
 
export default useData;

// const propiedades = [
//     {
//         id: 1,
//         img: "https://fc-abogados.com/es/wp-content/uploads/2015/11/Imagen-para-post-2020-10-29T150842.451.jpg",
//         title: "house 1",
//         categorie: "casa",
//         description: "this is a house",
//         rooms: 2,
//         baño: 1,
//         estacionamiento: 1,
//         price: 20000
//     },
//     {
//         id: 2,
//         img: "https://fc-abogados.com/es/wp-content/uploads/2015/11/Imagen-para-post-2020-10-29T150842.451.jpg",
//         title: "house 2",
//         categorie: "apartamento",
//         description: "this is a house",
//         rooms: 2,
//         baño: 1,
//         estacionamiento: 1,
//         price: 30000
//     },
//     {
//         id: 3,
//         img: "https://fc-abogados.com/es/wp-content/uploads/2015/11/Imagen-para-post-2020-10-29T150842.451.jpg",
//         title: "house 3",
//         categorie: "Renta",
//         description: "this is a house",
//         rooms: 1,
//         baño: 5,
//         estacionamiento: 3,
//         price: 40000
//     }
// ];

// export default propiedades;