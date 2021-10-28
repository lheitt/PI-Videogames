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
            <option value="default" hidden>Predeterminado</option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
        </select>
    )
};

export default Sort;
