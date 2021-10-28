import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const CLEAR_VIDEOGAME_DETAIL = "CLEAR_VIDEOGAME_DETAIL";
export const SORT = "SORT";

export function getVideogames() {
    return function(dispatch) {
        axios.get("http://localhost:3001/videogames")
        .then((videogames) => {
            dispatch({
                type: GET_VIDEOGAMES,
                payload : videogames.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
};

export function searchVideogame(name) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/videogames?name=${name}`)
        .then((videogames) => {
            dispatch({
                type: SEARCH_VIDEOGAMES,
                payload: videogames.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
};

export function getVideogameDetail(id) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/videogames/${id}`)
        .then((videogame) => {
            dispatch({
                type: GET_VIDEOGAME_DETAIL,
                payload: videogame.data
            })
        })
    }
};

export function clearVideogameDetail() {
    return {
        type: CLEAR_VIDEOGAME_DETAIL,
        payload: undefined
    }
};

export function sort(order) {
    return {
        type: SORT,
        payload: order
    }
};