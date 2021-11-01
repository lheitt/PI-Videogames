import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const CLEAR_VIDEOGAME_DETAIL = "CLEAR_VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const SORT = "SORT";
export const FILTER = "FILTER";
export const POST_VIDEOGAME = "POST_VIDEOGAME";


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

export function getGenres() {
    return function(dispatch) {
        axios.get("http://localhost:3001/genres")
        .then((genres) => {
            dispatch({
                type: GET_GENRES,
                payload : genres.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
};

export function getPlatforms() {
    return function(dispatch) {
        axios.get("http://localhost:3001/platforms")
        .then((platforms) => {
            dispatch({
                type: GET_PLATFORMS,
                payload : platforms.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
};

export function sort(order) {
    return {
        type: SORT,
        payload: order
    }
};

export function filter(filter) {
    return {
        type: FILTER,
        payload: filter
    }
};

export function postVideogame(newVideogame) {
    return function(dispatch) {
        axios.post("http://localhost:3001/videogame", newVideogame)
        .then(() => {
            dispatch({
                type: POST_VIDEOGAME
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
};