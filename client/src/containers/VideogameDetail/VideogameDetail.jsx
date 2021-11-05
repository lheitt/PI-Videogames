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
        <div className="videogame-detail">
            {
                videogameDetail ?
                <div>
                    <h2 className="videogame-detail-title">{document.title = videogameDetail.name}</h2>
                    <img className="videogame-detail-image" src={videogameDetail.image} alt={videogameDetail.name + " Cover"}/>
                    <p className="videogame-detail-description">{videogameDetail.description.replace(/<[^>]+>/g,"")}</p>
                    <p>Released: {videogameDetail.released} &#128198;</p>
                    <p>Rating: {videogameDetail.rating} &#11088;</p>
                    <h4>Genre/s:</h4>
                    {
                        videogameDetail.genres.map((genre) => 
                            <span key={key++}>{genre.name + " | "}</span>
                        )
                    }
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
