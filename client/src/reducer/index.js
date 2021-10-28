import { GET_VIDEOGAMES, SEARCH_VIDEOGAMES, GET_VIDEOGAME_DETAIL, SORT } from "../actions"

const initialState = {
    videogames: [],
    filteredVideogames: [],
    genres: [],
    videogameDetail: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                filteredVideogames: action.payload
            }
        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                filteredVideogames: action.payload
            }
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                videogameDetail: action.payload
            }
        case SORT:
            let orderedVideogames = [...state.filteredVideogames];

            orderedVideogames = orderedVideogames.sort((a, b) => {
                if (a.name < b.name) {
                    return action.payload === "ascendente" ? -1 : 1;
                }
                if (a.name > b.name) {
                    return action.payload === "ascendente" ? 1 : -1;
                }
                return 0;
            })

            return {
                ...state,
                filteredVideogames: orderedVideogames
            }
        default:
            return state
    }
};

export default reducer;