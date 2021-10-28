import { React, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getVideogames } from "../../actions";
import Videogame from '../Videogame/Videogame';
import "./Videogames.css";

function Videogames() {
    let videogames = useSelector((state) => state.filteredVideogames);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogames())
        // eslint-disable-next-line 
    }, []);
    
    return (
        <div>
            <div className="videogames">
            {   
                videogames.length === 0 ?
                <h1>Cargando...</h1> :
                videogames.map((videogame) => {
                    return <Videogame 
                        key={videogame.id} 
                        id={videogame.id} 
                        name={videogame.name} 
                        image={videogame.image} 
                        genres={videogame.genres}
                    /> 
                }) 
            }
            </div>
            <Link to="/videogame">
                <button>Nuevo juego</button>
            </Link>
        </div>
    )
};

export default Videogames;
