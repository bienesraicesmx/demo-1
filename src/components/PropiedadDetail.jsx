import React from "react";
import { useParams } from "react-router-dom";

export const PropiedadDetail = () => {

    const propiedades = [
        {
            id: 1,
            img: "https://fc-abogados.com/es/wp-content/uploads/2015/11/Imagen-para-post-2020-10-29T150842.451.jpg",
            title: "house 1",
            categorie: "casa",
            description: "this is a house",
            rooms: 2,
            baño: 1,
            estacionamiento: 1,
            price: 20000
        },
        {
            id: 2,
            img: "https://fc-abogados.com/es/wp-content/uploads/2015/11/Imagen-para-post-2020-10-29T150842.451.jpg",
            title: "house 2",
            categorie: "apartamento",
            description: "this is a house",
            rooms: 2,
            baño: 1,
            estacionamiento: 1,
            price: 30000
        },
        {
            id: 3,
            img: "https://fc-abogados.com/es/wp-content/uploads/2015/11/Imagen-para-post-2020-10-29T150842.451.jpg",
            title: "house 3",
            categorie: "Renta",
            description: "this is a house",
            rooms: 1,
            baño: 5,
            estacionamiento: 3,
            price: 40000
        }
    ];

    const {id} = useParams();

    const propiedad = propiedades.find(propiedad=> propiedad.id);

    console.log(propiedad);

    return (
        <>
            <div className="flex flex-col mx-auto">
               <h1>Detalles de la propiedad</h1>

                <h2>{id}</h2>
            </div>
        </>
    );
}

export default PropiedadDetail;