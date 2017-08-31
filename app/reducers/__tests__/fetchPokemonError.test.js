import fetchPokemonError from '../fetchPokemonError';
import { GET_POKEMON_ERROR } from '../../constant/actionTypes';

describe('fetchPokemonError', () => {
    it('returns the given state if action type is not GET_POKEMON_ERROR', () => {
        expect(fetchPokemonError('state', { type: 'bob' })).toEqual('state');
    })

    it('returns error state if action type is GET_POKEMON_ERROR', () => {
        expect(fetchPokemonError('state', { type: 'GET_POKEMON_ERROR', error: 'error' })).toEqual('error');
    })

    it('returns default state if no state is passed and action type is not GET_POKEMON_ERROR', () => {
        expect(fetchPokemonError(undefined, { type: 'GET_POKEMON', error: 'error' })).toEqual('');
    })
})
