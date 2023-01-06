import React, {useState, useEffect} from "react";
import Categoria from "../components/Categoria";
import Propiedad from "../components/Propiedad";

import axios from "axios";

// import useData from '../hooks/useFetchData.js'

const Publicaciones = () => {

    const [propiedades, setPropiedades] = useState({})

    const getPropertys = async () => {
        axios.get('http://127.0.0.1:5000/api/v1/properties/')
            .then((response) => {
                // console.log(response.data);
                setPropiedades(response.data.response);
                console.log(propiedades);
            })
            .catch((error) => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        getPropertys();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
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