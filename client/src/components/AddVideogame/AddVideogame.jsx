import { React, useEffect, useState } from 'react';
// import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms, postVideogame } from '../../actions';
import "./AddVideogame.css";

function AddVideogame() {
    document.title = "Add new game";
    const [newVideogame, setNewVideogame] = useState({
        name: "",
        image: "",
        description: "",
        released: undefined,
        rating: undefined,
        platforms: [],
        genres: []
    });
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const dispatch = useDispatch();
    // const history = useHistory();
    useEffect(() => {
        if(genres.length === 0 || platforms.length === 0){
            dispatch(getGenres());
            dispatch(getPlatforms());
        }
        // eslint-disable-next-line 
    }, []);

    let key = 1;
    let key2 = 1;

    function handleChange(e) {
        setNewVideogame({
            ...newVideogame,
            [e.target.name]: e.target.value
        })
    };
    function handleSubmit(e) {
        e.preventDefault();
        if(newVideogame.genres.length === 0) return alert("Select at least one genre");
        if(newVideogame.platforms.length === 0) return alert("Select at least one platform");
        dispatch(postVideogame(newVideogame));
        alert("Your videogame was added to database correctly");
        // history.push("/videogames");
    };
    function handleSelection(e) {
        if(e.target.name === "platforms") {
            if(newVideogame.platforms.includes(e.target.value)) {
                let oldPlatforms = newVideogame.platforms;
                let newPlatforms = oldPlatforms.filter((platform) => platform !== e.target.value);
                setNewVideogame({
                    ...newVideogame,
                    platforms: newPlatforms
                });
            } else {
                let platforms = newVideogame.platforms;
                platforms.push(e.target.value);
                setNewVideogame({
                    ...newVideogame,
                    platforms: platforms
                });
            } 
        } else {
            if(newVideogame.genres.includes(e.target.value)){
                let oldGenres = newVideogame.genres;
                let newGenres = oldGenres.filter((genre) => genre !== e.target.value);
                setNewVideogame({
                    ...newVideogame,
                    genres: newGenres
                });
            } else {
                let newGenres = newVideogame.genres;
                newGenres.push(e.target.value);
                setNewVideogame({
                    ...newVideogame,
                    genres: newGenres
                });
            }
        } 
    }

    return (
        <div>
            <form className="add-videogame" onSubmit={handleSubmit}>
                <label htmlFor="name">* Name: </label>
                <input name="name" type="text" placeholder="Name of game" required value={newVideogame.name} onChange={handleChange}/>
                <label htmlFor="image">* Image URL: </label>
                <input name="image" type="url" placeholder="http://imagen.jpg" required value={newVideogame.image} onChange={handleChange}/>
                <label htmlFor="description">* Description: </label>
                <input name="description" type="text" placeholder="Description of game" required value={newVideogame.description} onChange={handleChange}/>
                <label htmlFor="released">* Released: </label>
                <input name="released" type="date" required value={newVideogame.released} onChange={handleChange}/>
                <label htmlFor="rating">* Rating: </label>
                <input name="rating" type="number" placeholder="0-5" step="0.01" min="0" max="5" required value={newVideogame.rating} onChange={handleChange}/>
                <label>* Genre/s: </label>
                <div>
                    {
                        genres.map((genre) =>
                        <div key={key2++}>
                            <label>{genre.name}</label>
                            <input type="checkbox" value={genre.name} onClick={handleSelection} name="genres"/>
                        </div>
                        )
                    }
                </div>
                <label>* Platform/s: </label>
                <div>
                    {  
                        platforms.map((platform) =>
                            <div key={key++}>
                                <label>{platform}</label>
                                <input type="checkbox" value={platform} onClick={handleSelection} name="platforms"/>
                            </div>
                        )
                    }
                </div>
                <input type="submit" />
            </form>
            <h6>* required fields</h6>
        </div>
    )
};

export default AddVideogame;
