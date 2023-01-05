import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Publicaciones from './pages/Publicaciones';
import Registro from './pages/Registro';
import PropiedadDetail from './components/PropiedadDetail';

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

    if (user) {
        return (
            <div className="w-80 mx-auto">
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
                        <Redirect exact from="/*" to="/firma" />
                    </Switch>
                </BrowserRouter>
                {/* <Footer /> */}
            </div>
        )
    } else
        return (
            <>
                <BrowserRouter>

                    <Navbar />

                    <Switch>

                        <Route exact path="/" component={Publicaciones} />

                        <Route exact path="/login" component={Login} />

                        <Route exact path="/registro" component={Registro} />

                        <Route exact path="/propiedad/:id" component={PropiedadDetail} />

                    </Switch>

                    <Footer />

                </BrowserRouter>
            </>
        )

}

export default App;
