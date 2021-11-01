import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, filter } from '../../actions';
import "./Filter.css";

function Filter() {
    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();
    useEffect(() => {
        if(genres.length === 0) {
            dispatch(getGenres())
        }
        // eslint-disable-next-line 
    }, []);

    function handleChange(e) {
        dispatch(filter(e.target.value))
    };

    let key = 1;

    return (
        <select name="filter" onChange={handleChange}>
            <option value="default" hidden>Filter by...</option>
            <option value="genres" disabled>Genre</option>
            <option value="all">All Genres</option>
            {
                genres.map((genre) => 
                    <option key={key++} value={genre.name}>{genre.name}</option>
                )
            }
            <option value="sources" disabled>Source</option>
            <option value="both">Database and API</option>
            <option value="db">Database</option>
            <option value="api">API</option>
        </select>
    )
};

export default Filter;
