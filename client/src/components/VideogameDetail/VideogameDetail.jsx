import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearVideogameDetail, getVideogameDetail } from '../../actions';
import "./VideogameDetail.css";

function VideogameDetail() {
    let videogameDetail = useSelector((state) => state.videogameDetail);
    let { idVideogame } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogameDetail(idVideogame));
        return function cleanup() {
            dispatch(clearVideogameDetail())
        }
        // eslint-disable-next-line 
    }, [idVideogame]);

    let key = 1;
    let key2 = 100;

    return (
        <div>
            {
                videogameDetail ?
                <div>
                    <h2>{videogameDetail.name}</h2>
                    <img className="videogame-detail-image" src={videogameDetail.image} alt={videogameDetail.name + " Cover"}/>
                    <h4>Genero/s:</h4>
                    {
                        videogameDetail.genres.map((genre) => 
                            <span key={key++}>{genre.name + " | "}</span>
                        )
                    }
                    <p>{videogameDetail.description.replace(/<[^>]+>/g,"")}</p>
                    <p>Fecha de lanzamiento: {videogameDetail.released}</p>
                    <p>Rating: {videogameDetail.rating}</p>
                    <h4>Plataforma/s:</h4>
                    {
                        videogameDetail.platforms.map((platform) => 
                            <span key2={key2++}>{platform.platform ? platform.platform.name + " | " : platform + " | "}</span>
                        )
                    }
                </div>
                : <h1>Cargando...</h1>
            }
        </div>
    )
};

export default VideogameDetail;
