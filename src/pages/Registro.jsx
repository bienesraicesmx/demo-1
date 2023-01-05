import React, { useState } from "react";
import axios from "axios";

const Registro = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const registerSesion = async (params) => {
        await axios
            .post('http://127.0.0.1:5000/api/v1/users', params,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    return (

        <>
            <div className="flex items-center justify-center py-2 md:py-24 bg-gray-100">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <div className="flex justify-center py-4">
                        <img src="https://flowbite.com/docs/images/logo.svg" width="100px" height="auto" className="mr-3 sm:h-12" alt="Flowbite Logo" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">Registro</h3>

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
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Confirm</label>
                            <input
                                onChange={e => setUserPassword(e.target.value)}
                                type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>

                        <button
                            onClick={() => {
                                registerSesion({ email: userEmail, password: userPassword })
                            }}
                            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Registro;