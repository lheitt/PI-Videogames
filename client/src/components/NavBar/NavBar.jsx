import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        <div className="nav-bar-background">
            <div className="nav-bar">
                <Link to="/videogames">
                    <p className="nav-bar-link">Home</p>
                </Link>
                <Link to="/videogame">
                    <p className="nav-bar-link">Add game</p>
                </Link>
                <Link to="/about">
                    <p className="nav-bar-link">About</p>
                </Link>
            </div>
        </div>
    )
};

export default NavBar;
