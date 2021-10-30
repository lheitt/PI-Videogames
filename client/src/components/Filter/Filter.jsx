import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, filter } from '../../actions';
import "./Filter.css";

function Filter() {
    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres())
        // eslint-disable-next-line 
    }, []);

    function handleChange(e) {
        dispatch(filter(e.target.value))
    };

    let key = 1;

    return (
        <select name="select" onChange={handleChange}>
            <option value="default" hidden>Filtrar por...</option>
            {
                genres.map((genre) => 
                    <option key={key++} value={genre.name}>{genre.name}</option>
                )
            }
        </select>
    )
};

export default Filter;
