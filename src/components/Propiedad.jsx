import React from "react";

const Propiedad = () => {
    return (
        <>
            <div className="w-80 m-2 rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://fc-abogados.com/es/wp-content/uploads/2015/11/Imagen-para-post-2020-10-29T150842.451.jpg" alt="Sunset in the mountains" />
                <div className="px-4 py-4">
                    <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
                    <div className="flex items-start">
                        <span className="bg-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 mb-2">Casa</span>
                        <span className="bg-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 mb-2">Venta</span>
                        <span className="bg-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 mb-2">Renta</span>
                    </div>
                    <p className="text-gray-700 w-64 p-1 text-base">
                        Esta es una priopiedad reformada en la ciudad de México DF.
                    </p>
                    <div className="w-48 flex flex-row items-center justify-between mt-2">
                        <span className="mx-auto flex px-2 py-1 bg-blue-400 w-14 rounded-full">
                            <i className="fas fa-bed text-gray-100"></i>
                            <p className="font-medium text-gray-100 text-xs px-2">2</p>
                        </span>
                        <span className="mx-auto ml-1 flex px-2 py-1 bg-blue-400 w-14 rounded-full">
                            <i className="fas fa-bath text-gray-100"></i>
                            <p className="font-medium text-gray-100 text-xs px-2">1</p>
                        </span>
                        <span className="mx-auto ml-1 flex px-2 py-1 bg-blue-400 w-14 rounded-full">
                            <i className="fas fa-car text-gray-100"></i>
                            <p className="font-medium text-gray-100 text-xs px-2">1</p>
                        </span>
                        <span className="mx-auto flex px-2 mx-1 py-1 bg-blue-400 w-32 rounded-full">
                            <p className="font-medium text-gray-100 text-sm font-bold px-1">Precio:</p>
                            <p className="font-medium text-gray-100 text-sm">20000$</p>
                        </span>
                    </div>

                    <div className="mx-auto flex items-center mt-2">
                        <button className="mx-auto w-80 flex px-2 py-1 bg-green-400 rounded-full">
                            <p className="mx-auto font-medium text-gray-100 text-sm font-bold px-2">Ver Propiedad</p>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Propiedad;