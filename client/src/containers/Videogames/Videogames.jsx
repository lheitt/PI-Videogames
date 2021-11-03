import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../store/actions";
import Videogame from '../../components/Videogame/Videogame';
import Pagination from '../../components/Pagination/Pagination';
import "./Videogames.css";

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
    const videogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <div>
            {   
                allVideogames.length === 0 ?
                <h1>Loading...</h1> :
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
