import React from "react";
import Categoria from "../components/Categoria";
import Propiedad from "../components/Propiedad";

const Publicaciones = () => {
    return (
        <>

            <div className="p-2 flex">

                <div className="categoriasPropiedades border-r mx-4 p-2 w-48 flex flex-col">
                    <Categoria />
                    <Categoria />
                    <Categoria />

                    <label htmlFor="minmax-range" className="block mx-auto mb-2 text-sm font-medium text-blue-400 mt-6 mb-4">Rango de Precios</label>
                    <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <label htmlFor="minmax-range" className="block mx-auto mb-2 text-sm font-medium text-blue-400 mt-4 mb-4">45000 - 10000</label>
                    
                    <Categoria />
                    <Categoria />
                    <Categoria />
                </div>

                <div className="publicacionesPropiedades mx-auto flex flex-wrap p-2">
                {/* <h3 className="text-blue-400 text-xl font-medium p-4 mb-2">Publicaciones</h3> */}
                    <Propiedad />
                    <Propiedad />
                </div>

            </div>

        </>
    );
}

export default Publicaciones;