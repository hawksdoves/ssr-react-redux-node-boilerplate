import { GET_POKEMON_SUCCESS } from '../constant/actionTypes';

export default function pokemon(state = [], action) {
    switch (action.type) {
        case GET_POKEMON_SUCCESS:
            return action.pokemon;
        default:
            return state;
    }
}
