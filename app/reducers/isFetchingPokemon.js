import { GET_POKEMON_SUCCESS, GET_POKEMON_REQUEST, GET_POKEMON_ERROR } from '../constant/actionTypes';

export default function isFetchingPokemon(state = false, action) {
    switch (action.type) {
        case GET_POKEMON_REQUEST:
            return true
        case GET_POKEMON_ERROR:
        case GET_POKEMON_SUCCESS:
            return false;
        default:
            return state;
    };
}