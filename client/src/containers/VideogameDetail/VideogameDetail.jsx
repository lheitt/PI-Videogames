import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { clearVideogameDetail, deleteVideogame, getVideogameDetail } from '../../store/actions';
import "./VideogameDetail.css";

function VideogameDetail() {
    const dispatch = useDispatch();
    const videogameDetail = useSelector((state) => state.videogameDetail);
    const history = useHistory();
    const { idVideogame } = useParams();
    useEffect(() => {
        dispatch(getVideogameDetail(idVideogame));
        return function cleanup() {
            dispatch(clearVideogameDetail())
        }
        // eslint-disable-next-line 
    }, [idVideogame]);

    const deleteButton = (id) => {
        let confirmation = window.confirm("Are you sure to delete this game from database forever?")
        if (confirmation) {
            dispatch(deleteVideogame(id));
            alert(`${videogameDetail.name} was successfully deleted`);
            history.push("/videogames");
            window.location.reload();
        }
    }

    let key = 1;
    let key2 = 1;

    return (
        <div className="videogame-detail">
            {
                videogameDetail ?
                <div>
                    { videogameDetail.id.length > 8 && <button title="Delete videogame from database" className="videogame-delete-button" onClick={() => deleteButton(videogameDetail.id)}>X</button> }
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
                            <span key={key2++}>{platform.platform ? platform.platform.name + " | " : platform + " | "}</span>
                        )
                    }
                </div> : 
                
                <div className="videogame-detail-loading">
                    <h1>{document.title = "Loading..."}</h1>
                    <div className="spinner"></div>
                </div>
            }
        </div>
    )
};

export default VideogameDetail;
