import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames, getGenres, getPlatforms } from '../../store/actions';
import "./LandingPage.css";

function LandingPage() {
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(getVideogames()); 
    }, [dispatch])

    return (
        <div className="landing-page">
            {   
                videogames.length === 0 ?
                <div className="loading">
                    <h1 className="loading-text">Loading...</h1>
                    <div className="spinner"></div> 
                </div> :
                <Link to="/videogames">
                    <button className="press-start">PRESS START</button> 
                </Link>  
            }
            
        </div>
    )
};

export default LandingPage;
