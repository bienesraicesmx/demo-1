import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PropiedadDetail.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// import propiedades from "../hooks/useFetchData";

export const PropiedadDetail = () => {

    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    const [propiedades, setPropiedades] = useState({})
    const [propiedad, setPropiedad] = useState({});
    const { id } = useParams();

    const getPropertys = async () => {
        axios.get('http://127.0.0.1:5000/api/v1/properties/')
            .then((response) => {
                // console.log(response.data);
                setPropiedades(response.data.response);
                console.log(propiedades);
                setPropiedad(propiedades.find(propiedad => propiedad._id === id))
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

    console.log(propiedad);

    return (
        <>
            <div className="flex w-full flex-col mx-auto p-8">

                <div className="flex justify-between items-center border-b-2 mt-4 py-4 mb-4">
                    <h2 className="text-xl px-4">Titulo de prueba</h2>
                    <h2 className="text-xl px-4">Precio: 2000$</h2>
                </div>

                <div className="flex md:flex-row flex-col justify-between items-center border-b-2 p-2">

                    <div className="w-80 py-2">

                        <Slide>
                            <div className="each-slide-effect">
                                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                                    <span className->Slide 1</span>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                                    <span>Slide 2</span>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                                    <span>Slide 3</span>
                                </div>
                            </div>
                        </Slide>

                    </div>

                    <div className=" w-80 py-48">
                    </div>
                </div>

                <div className="flex flex-col justify-start border-b-2 mt-4 py-4 mb-4">
                    <h2 className="text-xl px-4 text-blue-400">Descripcion</h2>
                    <h2 className="text-sm px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo iure praesentium molestiae! Autem inventore eos illum doloremque exercitationem id optio in libero cum ex, modi nisi earum dolore ullam.</h2>
                </div>

                <div className="flex flex-col justify-start border-b-2 py-4 mb-4">
                    <h2 className="text-xl px-4 text-blue-400">Cuenta con</h2>
                    <div className="w-48 flex flex-row items-center justify-between mt-2">
                        <span className="mx-auto flex px-2 py-1 bg-blue-400 w-14 rounded-full">
                            <i className="fas fa-bed text-gray-100"></i>
                            <p className="font-medium text-gray-100 text-xs px-2">3</p>
                        </span>
                        <span className="mx-auto ml-1 flex px-2 py-1 bg-blue-400 w-14 rounded-full">
                            <i className="fas fa-bath text-gray-100"></i>
                            <p className="font-medium text-gray-100 text-xs px-2">4</p>
                        </span>
                        <span className="mx-auto ml-1 flex px-2 py-1 bg-blue-400 w-14 rounded-full">
                            <i className="fas fa-car text-gray-100"></i>
                            <p className="font-medium text-gray-100 text-xs px-2">1</p>
                        </span>
                    </div>
                </div>

                <form action="" className="w-full p-4">
                    <label className="block mb-2">
                        <span className="text-blue-400 text-xl">Agregar Comentario</span>
                        <textarea className="block w-full mt-1 rounded border-2 p-2" rows="3"></textarea>
                    </label>
                    <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Enviar</button>
                </form>

            </div>
        </>
    );
}

export default PropiedadDetail;