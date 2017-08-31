import { combineReducers } from 'redux';

import fetchPokemonError from './fetchPokemonError';
import isFetchingPokemon from './isFetchingPokemon';
import pokemon from './pokemon';

export default combineReducers({
    fetchPokemonError,
    isFetchingPokemon,
    pokemon
})
