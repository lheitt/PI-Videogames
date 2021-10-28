import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getVideogameDetail } from '../../actions';
import "./VideogameDetail.css";

function VideogameDetail() {
    let videogameDetail = useSelector((state) => state.videogameDetail);
    let { idVideogame } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogameDetail(idVideogame))
        // eslint-disable-next-line 
    }, []);

    return (
        <div>
            {
                videogameDetail ?
                <h3>{videogameDetail.name}</h3>
                : <h1>Cargando...</h1>
            }
        </div>
    )
};

export default VideogameDetail;
