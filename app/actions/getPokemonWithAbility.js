import getPokemon from '../services/getPokemon';
import { GET_POKEMON_SUCCESS, GET_POKEMON_REQUEST, GET_POKEMON_ERROR } from '../constant/actionTypes';

export function getPokemonRequest() {
    return {
        type: GET_POKEMON_REQUEST,
    };
}

export function getPokemonSuccess(pokemon) {
    return {
        type: GET_POKEMON_SUCCESS,
        pokemon
    };
}

export function getPokemonError(error) {
    return {
        type: GET_POKEMON_ERROR,
        error
    };
}

export default function getPokemonWithAbility(ability) {

    return (dispatch) => {
        dispatch(getPokemonRequest());

        return getPokemon.withAbility(ability)
            .then(resp => dispatch(getPokemonSuccess(resp.data.pokemon)))
            .catch(error => dispatch(getPokemonError(error)));
    }
    
}
