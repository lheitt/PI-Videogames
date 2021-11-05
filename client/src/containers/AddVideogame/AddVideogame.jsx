import { React, useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPlatforms, postVideogame } from '../../store/actions';
import "./AddVideogame.css";

function AddVideogame() {
    document.title = "Add new game";
    const dispatch = useDispatch();
    const history = useHistory();
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
        history.push("/videogames");
        window.location.reload();
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
        <div className="add-videogame">
            <form className="add-videogame-form" onSubmit={handleSubmit}>
                <div className="inputs-groups-details">
                    <div className="inputs-groups">
                    <label htmlFor="name">* Name: </label>
                    <input name="name" type="text" placeholder="Name of game" required value={newVideogame.name} onChange={handleChange}/>
                    </div>
                    <div className="inputs-groups">
                    <label htmlFor="image">* Image URL: </label>
                    <input name="image" type="url" placeholder="http://imagen.jpg" required value={newVideogame.image} onChange={handleChange}/>
                    </div>
                    <div className="inputs-groups">
                    <label htmlFor="description">* Description: </label>
                    <input name="description" type="text" placeholder="Description of game" required value={newVideogame.description} onChange={handleChange}/>
                    </div>
                    <div className="inputs-groups">
                    <label htmlFor="released">* Released: </label>
                    <input name="released" type="date" required value={newVideogame.released} onChange={handleChange}/>
                    </div>
                    <div className="inputs-groups">
                    <label htmlFor="rating">* Rating: </label>
                    <input name="rating" type="number" placeholder="0.0 - 5.0" step="0.01" min="0" max="5" required value={newVideogame.rating} onChange={handleChange}/>
                    </div>
                </div>

                <div className="inputs-groups-genres">
                    <label>* Genre/s: </label>
                    <div className="genres">
                        {
                            genres.map((genre) =>
                            <div style={{marginLeft: ".3rem", marginRight: ".3rem"}} key={key2++}>
                                <label>{genre.name}</label>
                                <input type="checkbox" value={genre.name} onClick={handleSelection} name="genres"/>
                            </div>
                            )
                        }
                    </div>
                </div>
                
                <div className="inputs-groups-platforms">
                    <label>* Platform/s: </label>
                    <div className="platforms">
                        {  
                            platforms.map((platform) =>
                                <div style={{marginLeft: ".3rem", marginRight: ".3rem"}} key={key++}>
                                    <label>{platform}</label>
                                    <input type="checkbox" value={platform} onClick={handleSelection} name="platforms"/>
                                </div>
                            )
                        }
                    </div>
                </div>
                
                <h6>* Required fields</h6>
                <input className="add-videogame-button" type="submit" value="Add game"/>
            </form>
        </div>
    )
};

export default AddVideogame;
