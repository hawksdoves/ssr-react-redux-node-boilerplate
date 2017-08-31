import { GET_POKEMON_ERROR } from '../constant/actionTypes';

export default function fetchPokemonError(state = '', action) {
    switch (action.type) {
        case GET_POKEMON_ERROR:
            return action.error;
        default:
            return state;
    };
}
