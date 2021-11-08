import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../store/actions";
import Videogame from '../../components/Videogame/Videogame';
import Pagination from '../../components/Pagination/Pagination';
import "./Videogames.css";
import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/SearchBar/SearchBar';

function Videogames() {
    document.title = "Home - Videogames";
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.renderedVideogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage] = useState(15)
    useEffect(() => {
        if(allVideogames.length === 0) {
            dispatch(getVideogames());
        }
        // eslint-disable-next-line 
    }, []);

    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const videogames = Array.isArray(allVideogames) ? allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame) : undefined;

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <div className="videogames-background">
            <SearchBar />
            <Sort />
            <Filter />
            {   
                allVideogames[0] === "No games" ?
                <h1 className="videogames-loading">There is no games with that filter &#128579;</h1> :
                allVideogames.text === "There is no game with that name" ? 
                <h1 className="videogames-loading">There is no game with that name &#129488;</h1> :
                allVideogames.length === 0 ?
                <div className="videogames-loading">
                    <h1 className="videogames-loading">Loading...</h1>
                    <div className="spinner"></div>
                </div> :
                <div>
                    <div className="videogames">
                        {
                            videogames.map((videogame) => {
                                return <Videogame 
                                    key={videogame.id} 
                                    id={videogame.id} 
                                    name={videogame.name} 
                                    image={videogame.image} 
                                    genres={videogame.genres}
                                    rating={videogame.rating}
                                /> 
                            })
                        }
                    </div> 
                    <div>
                        {
                            allVideogames.length > 15 ?
                            <Pagination 
                                videogamesPerPage={videogamesPerPage} 
                                totalVideogames={allVideogames.length} 
                                paginate={paginate}
                                currentPage={currentPage}
                            /> :
                            <h1 style={{display: "none"}}> </h1>
                        }
                        
                    </div>

                </div>
            }
        </div>
    )
};

export default Videogames;
