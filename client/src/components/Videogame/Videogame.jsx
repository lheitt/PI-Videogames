import React from 'react';
import { Link } from 'react-router-dom';
import "./Videogame.css";

function Videogame({id, name, image, genres}) {
    let key = 1;
    return (
        <div className="videogame-card">
            <Link to={`videogames/${id}`}>
                <h4 className="videogame-title">{name}</h4>
                <img className="videogame-cover" src={image} alt={name + " Cover"}/>
            </Link>
                <div className="videogame-genres">
                    {
                        genres.map((genre) => 
                            <h6 style={{margin: "auto"}} key={key++}>{genre.name + " | "}</h6>
                        )
                    }
                </div>
        </div>
    )
}

export default Videogame;
