import React from "react";

const Categoria = () => {
    return (
        <>
            <div className="relative w-full lg:max-w-sm mt-4">

                <span className="z-10 pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-3">
                    <i className="fas fa-angle-down ml-2"></i>
                </span>

                <select
                    className="w-full p-2.5 text-sm text-gray-500 bg-white border rounded-md py-1 shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                    <option defaultValue>Categorías</option>
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Residencia</option>
                </select>
            </div>
        </>
    );
}

export default Categoria;