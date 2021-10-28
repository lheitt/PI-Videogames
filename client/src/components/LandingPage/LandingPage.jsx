import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";

function LandingPage() {
    return (
        <div className="landing-page">
            <Link to="/videogames">
                <button className="press-start">PRESS START</button> 
            </Link> 
        </div>
    )
};

export default LandingPage;
