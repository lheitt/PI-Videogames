import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames, getGenres, getPlatforms } from '../../store/actions';
import "./LandingPage.css";

function LandingPage() {
    const videogames = useSelector((state) => state.videogames);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(getVideogames());
        // eslint-disable-next-line 
    }, [])

    return (
        <div className="landing-page">
            {   
                videogames.length === 0 ?
                <h1 className="loading-text">Loading...</h1> :
                <Link to="/videogames">
                    <button className="press-start">PRESS START</button> 
                </Link>  
            }
            
        </div>
    )
};

export default LandingPage;
