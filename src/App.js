import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Login from './pages/Login';
import Publicaciones from './pages/Publicaciones';

const App = () => {
    return (

        <>
            <Navbar />

            <Publicaciones />

            <Footer />

        </>
    );
}

export default App;
