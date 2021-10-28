import React from 'react';
import "./Filter.css";

function Filter() {
    return (
        <select name="select">
            <option value="default" hidden>Filtrar por género...</option>
            <option value="action">Accion</option>
            <option value="adventure">Aventura</option>
        </select>
    )
};

export default Filter;
