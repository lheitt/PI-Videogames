import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        <div className="nav-bar-background">
            <div className="nav-bar">
                <Link to="/videogames">
                    <p>Pagina principal</p>
                </Link>
                <Link to="/videogame">
                    <p>Nuevo juego</p>
                </Link>
                <p>Juegos API</p>
                <p>Juegos agregados</p>
            </div>
        </div>
    )
};

export default NavBar;
