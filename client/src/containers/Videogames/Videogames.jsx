import { React, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../store/actions";
import Videogame from '../../components/Videogame/Videogame';
import "./Videogames.css";

function Videogames() {
    document.title = "Home - Videogames";
    const allVideogames = useSelector((state) => state.renderedVideogames);
    const dispatch = useDispatch();
    useEffect(() => {
        if(allVideogames.length === 0) {
            dispatch(getVideogames());
        }
        // eslint-disable-next-line 
    }, []);

    const videogames = allVideogames.slice(0,15);
    
    return (
        <div>
            <div className="videogames">
            {   
                allVideogames.length === 0 ?
                <h1>Loading...</h1> :
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
