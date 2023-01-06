import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Publicaciones from './pages/Publicaciones';
import Registro from './pages/Registro';
import PropiedadDetail from './components/PropiedadDetail';
import axios from 'axios';

import routes from './routes/index'

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const App = () => {

    const [user, setUser] = useState(null);

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    const checkJwtValidate = async (params) => {
        axios.post('http://127.0.0.1:5000/api/v1/checkjwt/', params)
            .then((response) => {
                console.log(response.data);
                if (!response.data.error){
                    setUser(true);
                }
            })
            .catch((error) => {
                console.log(error)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        if (getCookie("jwt")) {
            checkJwtValidate({jwt:getCookie("jwt")});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (user) {
        return (
            
                <BrowserRouter>
                    {/* <NavBar setActivelogin={setActivelogin} /> */}
                    <Switch>
                        {routes.map((route, i) => {
                            return route.component ? (
                                <Route
                                    key={i}
                                    exact={true}
                                    path={route.path}
                                    render={(props) => <route.component {...props}
                                    // logout={logout}
                                    />}
                                />
                            ) : null;
                        })}
                        <Redirect exact from="/*" to="/publicaciones" />
                    </Switch>
                </BrowserRouter>
                
        )
    } else
        return (
            <>
                <BrowserRouter>

                    <Navbar />

                    <Switch>

                        {/* colocar default route que sea */}

                        <Route exact path="/" component={Publicaciones} />

                        <Route exact path="/login" >
                            <Login setCookie={setCookie} />
                        </Route>

                        <Route exact path="/registro" component={Registro} />

                        <Route exact path="/propiedad/:id" component={PropiedadDetail} />

                    </Switch>

                    <Footer />

                </BrowserRouter>
            </>
        )

}

export default App;
