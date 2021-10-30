import React from 'react';
import { useDispatch } from 'react-redux';
import { sort } from '../../actions';
import "./Sort.css";

function Sort() {
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(sort(e.target.value))
    };

    return (
        <select name="select" onChange={handleChange}>
            <option value="default" hidden>Ordenar por...</option>
            <option value="a-z">Nombre Ascendente</option>
            <option value="z-a">Nombre Descendente</option>
            <option value="1-9">Rating Ascendente</option>
            <option value="9-1">Rating Descendente</option>
        </select>
    )
};

export default Sort;
