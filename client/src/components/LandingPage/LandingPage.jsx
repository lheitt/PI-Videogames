import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";

function LandingPage() {
    return (
        <div>
            <Link to="/videogames">
                <button>Ingresar</button> 
            </Link> 
        </div>
    )
};

export default LandingPage;
