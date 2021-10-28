import React from 'react';
import { Link } from 'react-router-dom';
import "./Videogame.css";

function Videogame({id, name, image, genres}) {
    let key = 1;
    return (
        <div className="videogame-card">
            <Link to={`videogames/${id}`}>
                <h3>{name}</h3>
                <img className="videogame-image" src={image} alt={name + " Cover"}/>
            </Link>
                <div className="videogame-genres">
                    {
                        genres.map((genre) => 
                            <h6 key={key++}>{" " + genre.name}</h6>
                        )
                    }
                </div>
        </div>
    )
}

export default Videogame;
