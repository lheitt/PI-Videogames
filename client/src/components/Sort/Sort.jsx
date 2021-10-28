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
            <option value="default" hidden>Ordenar por nombre o rating...</option>
            <option value="Nascendente">Nombre Ascendente</option>
            <option value="Ndescendente">Nombre Descendente</option>
            <option value="Rascendente">Rating Ascendente</option>
            <option value="Rdescendente">Rating Descendente</option>
        </select>
    )
};

export default Sort;
