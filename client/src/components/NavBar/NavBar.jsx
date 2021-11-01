import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        <div className="nav-bar-background">
            <div className="nav-bar">
                <Link to="/videogames">
                    <p>Home</p>
                </Link>
                <Link to="/videogame">
                    <p>Add game</p>
                </Link>
                <Link to="/about">
                    <p>About</p>
                </Link>
            </div>
        </div>
    )
};

export default NavBar;
