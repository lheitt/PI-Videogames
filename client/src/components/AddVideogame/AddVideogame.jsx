import React, { useState } from 'react';
import "./AddVideogame.css";

function AddVideogame() {
    document.title = "Agregar nuevo juego";
    const [newVideogame, setNewVideogame] = useState({});

    function handleChange(e) {
        setNewVideogame({
            ...newVideogame,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(newVideogame);
    }

    return (
        <form className="add-videogame" onSubmit={handleSubmit}>
            <label htmlFor="">Nombre: </label>
            <input name="name" type="text" placeholder="Nombre del juego" value={newVideogame.name} onChange={handleChange}/>
            <label htmlFor="">Imagen URL: </label>
            <input name="image" type="text" placeholder="http://imagen.jpg" value={newVideogame.image} onChange={handleChange}/>
            <label htmlFor="">Descripción: </label>
            <input name="description" type="text" placeholder="Descripción del juego" value={newVideogame.description} onChange={handleChange}/>
            <label htmlFor="">Fecha de lanzamiento: </label>
            <input name="released" type="date" value={newVideogame.released} onChange={handleChange}/>
            <label htmlFor="">Rating: </label>
            <input name="rating" type="number" placeholder="Puntuación del juego" value={newVideogame.rating} onChange={handleChange}/>
            <select name="genres" onChange={handleChange}>
                <option value="action">Acción</option>
                <option value="adventure">Aventura</option>
            </select>
            <select name="platforms" onChange={handleChange}>
                <option value="pc">PC</option>
                <option value="playstation 4">PlayStation 4</option>
            </select>
            <input type="submit" />
        </form>
    )
};

export default AddVideogame;
