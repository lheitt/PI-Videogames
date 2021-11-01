import { 
    GET_VIDEOGAMES, 
    SEARCH_VIDEOGAMES, 
    GET_VIDEOGAME_DETAIL, 
    CLEAR_VIDEOGAME_DETAIL, 
    GET_GENRES, 
    GET_PLATFORMS,
    SORT, 
    FILTER,
    POST_VIDEOGAME
} from "../actions"

const initialState = {
    videogames: [],
    renderedVideogames: [],
    videogameDetail: undefined,
    genres: [],
    platforms: [],
    filter: undefined,
    thereIsANewGame: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                renderedVideogames: action.payload
            }
        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                renderedVideogames: action.payload,
                videogames: action.payload
            }
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                videogameDetail: action.payload
            }
        case CLEAR_VIDEOGAME_DETAIL:
            return {
                ...state,
                videogameDetail: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            }
        case SORT:
            let orderedVideogames = [...state.renderedVideogames];
            if(action.payload === "a-z" || action.payload === "z-a") {
                orderedVideogames = orderedVideogames.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0;
                })
                if(action.payload === "z-a") orderedVideogames = orderedVideogames.reverse();
            } else {
                orderedVideogames = orderedVideogames.sort((a, b) => {
                    return a.rating - b.rating
                })
                if(action.payload === "9-1") orderedVideogames = orderedVideogames.reverse();
            }

            return {
                ...state,
                renderedVideogames: orderedVideogames
            }
        case FILTER:
            if(action.payload === "all" || action.payload === "both") {
                return {
                    ...state,
                    renderedVideogames: state.videogames,
                    filter: action.payload
                }
            } else if(action.payload === "api" || action.payload === "db") {
                let filteredVideogames = [];
                if(action.payload === "api") {
                    filteredVideogames = state.videogames.filter((videogame) => typeof videogame.id === "number")
                } else {
                    filteredVideogames = state.videogames.filter((videogame) => videogame.id.length > 8)
                }

                return {
                    ...state,
                    renderedVideogames: filteredVideogames,
                    filter: action.payload
                }
            } else {
                let filteredVideogames = [];
                for(let i = 0; i < state.videogames.length; i++) {
                    for(let j = 0; j < state.videogames[i].genres.length; j++) {
                        if(state.videogames[i].genres[j].name === action.payload) {
                            filteredVideogames.push(state.videogames[i])
                        }
                    }    
                }
                
                return {
                    ...state,
                    renderedVideogames: filteredVideogames,
                    filter: action.payload
                }
            }
        case POST_VIDEOGAME:
            return state
        default:
            return state
    }
};

export default reducer;