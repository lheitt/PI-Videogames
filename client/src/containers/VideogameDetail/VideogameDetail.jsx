import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { clearVideogameDetail, getVideogameDetail } from '../../store/actions';
import "./VideogameDetail.css";

function VideogameDetail() {
    const dispatch = useDispatch();
    const videogameDetail = useSelector((state) => state.videogameDetail);
    const { idVideogame } = useParams();
    useEffect(() => {
        dispatch(getVideogameDetail(idVideogame));
        return function cleanup() {
            dispatch(clearVideogameDetail())
        }
        // eslint-disable-next-line 
    }, [idVideogame]);

    let key = 1;
    let key2 = 1;

    return (
        <div>
            {
                videogameDetail ?
                <div>
                    <h2>{document.title = videogameDetail.name}</h2>
                    <img className="videogame-detail-image" src={videogameDetail.image} alt={videogameDetail.name + " Cover"}/>
                    <h4>Genre/s:</h4>
                    {
                        videogameDetail.genres.map((genre) => 
                            <span key={key++}>{genre.name + " | "}</span>
                        )
                    }
                    <p>{videogameDetail.description.replace(/<[^>]+>/g,"")}</p>
                    <p>Released: {videogameDetail.released}</p>
                    <p>Rating: {videogameDetail.rating}</p>
                    <h4>Platform/s:</h4>
                    {
                        videogameDetail.platforms.map((platform) => 
                            <span key2={key2++}>{platform.platform ? platform.platform.name + " | " : platform + " | "}</span>
                        )
                    }
                </div>
                
                : <h1>{document.title = "Loading..."}</h1>
            }
        </div>
    )
};

export default VideogameDetail;
