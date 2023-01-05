import React from "react";
import Categoria from "../components/Categoria";
import Propiedad from "../components/Propiedad";

import useData from '../hooks/useData.js'

const Publicaciones = () => {

    const {propiedades2} = useData();

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
    
    return (
        <>

            <div className="p-2 flex flex-col md:flex-row">

                <div className="categoriasPropiedades mx-auto md:mx-4 p-2 w-80 flex flex-col md:border-r md:w-48">
                    <Categoria />
                    <Categoria />
                    <Categoria />

                    <label htmlFor="minmax-range" className="block mx-auto mb-2 text-sm font-medium text-blue-400 mt-6 mb-4">Rango de Precios</label>
                    <input id="minmax-range" type="range" min="0" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <label htmlFor="minmax-range" className="block mx-auto mb-2 text-sm font-medium text-blue-400 mt-4 mb-4">45000 - 10000</label>

                    <Categoria />
                    <Categoria />
                    <Categoria />
                </div>

                <div className="publicacionesPropiedades mx-auto mt-4 w-80 flex flex-col md:w-80 lg:w-full">
                    <h3 className="text-blue-400 text-xl mx-auto sm:mx-4 font-medium mb-2">Publicaciones</h3>
                    <div className="flex flex-wrap">
                        {propiedades?.map?.((item) => {
                            return <Propiedad key={item} item={item} />;
                        })}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Publicaciones;