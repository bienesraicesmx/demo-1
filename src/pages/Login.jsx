import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({setCookie}) => {

    let history = useHistory();

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const loginSesion = async (params) => {
        await axios
            .post('http://127.0.0.1:5000/api/v1/login/', params,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
            .then(function (response) {
                setCookie("jwt", response.data.jwt, 1);
                console.log(response);
                history.push('/publicaciones');
                // redirección a página principal
                // tomar jwt para insertarlo en cookie (duración 24 horas)
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    // function GetURLParameter(sParam){
    //     var sPageURL = window.location.search.substring(1);
    //     var sURLVariables = sPageURL.split('&');
    //     for (var i = 0; i < sURLVariables.length; i++) 
    //     {
    //         var sParameterName = sURLVariables[i].split('=');
    //         if (sParameterName[0] === sParam) 
    //         {
    //             return sParameterName[1];
    //         }
    //     }
    // }

    return (

        <>
            <div className="flex items-center justify-center py-2 md:py-24 bg-gray-100">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <div className="flex justify-center py-4">
                        <img src="https://flowbite.com/docs/images/logo.svg" width="100px" height="auto" className="mr-3 sm:h-12" alt="Flowbite Logo" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">Iniciar Sesión</h3>

                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input
                                onChange={e => setUserEmail(e.target.value)}
                                type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <span className="text-xs tracking-wide text-red-600">Email field is required </span>
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input
                                onChange={e => setUserPassword(e.target.value)}
                                type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button
                                onClick={() => {
                                    loginSesion({ email: userEmail, password: userPassword })
                                }}
                                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                Login
                            </button>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                    <Link to="/registro">
                        <p className="text-sm text-center text-blue-600 hover:underline mt-4">¿Aún no tienes una cuenta? Registrate</p>
                    </Link>
                </div>
            </div>
        </>

    );
}

export default Login;