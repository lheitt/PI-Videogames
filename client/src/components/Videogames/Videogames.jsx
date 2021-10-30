import { React, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../actions";
import Videogame from '../Videogame/Videogame';
import "./Videogames.css";

function Videogames() {
    document.title = "Página principal";
    const videogames = useSelector((state) => state.renderedVideogames);
    const dispatch = useDispatch();
    useEffect(() => {
        if(videogames.length === 0) {
            dispatch(getVideogames())
        }
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
        </div>
    )
};

export default Videogames;
